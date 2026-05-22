const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;
const dbPath = path.join(__dirname, "database.sqlite");

const db = new sqlite3.Database(dbPath);

db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS orders (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      customer_name TEXT NOT NULL,
      phone TEXT NOT NULL,
      address TEXT NOT NULL,
      comment TEXT,
      subtotal REAL NOT NULL,
      delivery REAL NOT NULL,
      total REAL NOT NULL,
      created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
    )
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS order_items (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      order_id INTEGER NOT NULL,
      product_id INTEGER NOT NULL,
      product_name TEXT NOT NULL,
      category TEXT NOT NULL,
      price REAL NOT NULL,
      quantity INTEGER NOT NULL,
      FOREIGN KEY(order_id) REFERENCES orders(id)
    )
  `);
});

app.use(express.json());
app.use(express.static(__dirname));

function validateOrder(order) {
  if (!order || typeof order !== "object") {
    return "Некоректні дані замовлення.";
  }

  const customer = order.customer || {};
  if (!customer.customerName || !customer.phone || !customer.address) {
    return "Заповніть ім’я, телефон та адресу.";
  }

  if (!Array.isArray(order.items) || order.items.length === 0) {
    return "Корзина порожня.";
  }

  for (const item of order.items) {
    if (!item.id || !item.name || !item.category || !item.price || !item.quantity) {
      return "У замовленні є позиція з неповними даними.";
    }
  }

  if (typeof order.total !== "number" || order.total <= 0) {
    return "Некоректна сума замовлення.";
  }

  return null;
}

app.post("/api/orders", (req, res) => {
  const order = req.body;
  const validationError = validateOrder(order);

  if (validationError) {
    return res.status(400).json({ message: validationError });
  }

  const customer = order.customer;

  db.serialize(() => {
    db.run("BEGIN TRANSACTION");

    db.run(
      `
      INSERT INTO orders
      (customer_name, phone, address, comment, subtotal, delivery, total)
      VALUES (?, ?, ?, ?, ?, ?, ?)
      `,
      [
        customer.customerName,
        customer.phone,
        customer.address,
        customer.comment || "",
        order.subtotal,
        order.delivery,
        order.total
      ],
      function insertOrderCallback(error) {
        if (error) {
          db.run("ROLLBACK");
          return res.status(500).json({ message: "Помилка запису замовлення в базу." });
        }

        const orderId = this.lastID;
        const stmt = db.prepare(`
          INSERT INTO order_items
          (order_id, product_id, product_name, category, price, quantity)
          VALUES (?, ?, ?, ?, ?, ?)
        `);

        for (const item of order.items) {
          stmt.run([
            orderId,
            item.id,
            item.name,
            item.category,
            item.price,
            item.quantity
          ]);
        }

        stmt.finalize(finalizeError => {
          if (finalizeError) {
            db.run("ROLLBACK");
            return res.status(500).json({ message: "Помилка запису позицій замовлення." });
          }

          db.run("COMMIT", commitError => {
            if (commitError) {
              return res.status(500).json({ message: "Не вдалося завершити збереження замовлення." });
            }

            res.status(201).json({
              message: "Замовлення успішно збережено.",
              orderId
            });
          });
        });
      }
    );
  });
});

app.get("/api/orders", (req, res) => {
  db.all(
    `
    SELECT
      orders.id,
      orders.customer_name,
      orders.phone,
      orders.address,
      orders.comment,
      orders.subtotal,
      orders.delivery,
      orders.total,
      orders.created_at,
      json_group_array(
        json_object(
          'name', order_items.product_name,
          'category', order_items.category,
          'price', order_items.price,
          'quantity', order_items.quantity
        )
      ) AS items
    FROM orders
    LEFT JOIN order_items ON orders.id = order_items.order_id
    GROUP BY orders.id
    ORDER BY orders.id DESC
    `,
    [],
    (error, rows) => {
      if (error) {
        return res.status(500).json({ message: "Не вдалося отримати замовлення." });
      }

      const orders = rows.map(row => ({
        ...row,
        items: JSON.parse(row.items || "[]")
      }));

      res.json(orders);
    }
  );
});

app.listen(PORT, () => {
  console.log(`Pizza Nova server is running: http://localhost:${PORT}`);
  console.log(`Admin orders page: http://localhost:${PORT}/admin.html`);
});
