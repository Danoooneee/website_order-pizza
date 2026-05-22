const ordersStatus = document.getElementById("ordersStatus");
const ordersTable = document.getElementById("ordersTable");
const ordersBody = document.getElementById("ordersBody");

function formatCurrency(value) {
  return new Intl.NumberFormat("sk-SK", {
    style: "currency",
    currency: "EUR"
  }).format(value);
}

function formatDate(value) {
  return new Intl.DateTimeFormat("uk-UA", {
    dateStyle: "medium",
    timeStyle: "short"
  }).format(new Date(value));
}

async function loadOrders() {
  try {
    const response = await fetch("/api/orders");
    const orders = await response.json();

    if (!response.ok) {
      throw new Error(orders.message || "Не вдалося завантажити замовлення.");
    }

    if (!orders.length) {
      ordersStatus.textContent = "Поки немає жодного замовлення.";
      return;
    }

    ordersStatus.hidden = true;
    ordersTable.hidden = false;

    ordersBody.innerHTML = orders.map(order => `
      <tr>
        <td><strong>#${order.id}</strong></td>
        <td>
          <strong>${order.customer_name}</strong><br>
          ${order.phone}<br>
          ${order.comment ? `Коментар: ${order.comment}` : ""}
        </td>
        <td>${order.address}</td>
        <td>
          ${order.items.map(item => `${item.quantity} × ${item.name}`).join("<br>")}
        </td>
        <td><strong>${formatCurrency(order.total)}</strong></td>
        <td>${formatDate(order.created_at)}</td>
      </tr>
    `).join("");
  } catch (error) {
    ordersStatus.textContent = error.message + " Перевірте, чи запущений backend.";
  }
}

loadOrders();
