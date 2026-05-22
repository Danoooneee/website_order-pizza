const menuItems = [
  {
    id: 1,
    name: "Маргарита",
    category: "Піца",
    price: 8.90,
    size: "32 см",
    description: "Томатний соус, моцарела, базилік, оливкова олія.",
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 2,
    name: "Пепероні",
    category: "Піца",
    price: 10.90,
    size: "32 см",
    description: "Пепероні, моцарела, томатний соус, орегано.",
    image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 3,
    name: "Чотири сири",
    category: "Піца",
    price: 11.90,
    size: "32 см",
    description: "Моцарела, дорблю, пармезан, чедер, вершкова основа.",
    image: "https://images.unsplash.com/photo-1604917877934-07d8d248d396?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 4,
    name: "Прошуто Фунгі",
    category: "Піца",
    price: 12.50,
    size: "32 см",
    description: "Прошуто, печериці, моцарела, томатний соус.",
    image: "https://images.unsplash.com/photo-1594007654729-407eedc4be65?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 5,
    name: "BBQ Chicken",
    category: "Піца",
    price: 12.90,
    size: "32 см",
    description: "Курка, BBQ соус, червона цибуля, моцарела, кукурудза.",
    image: "https://images.unsplash.com/photo-1595854341625-f33ee10dbf94?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 6,
    name: "Діавола",
    category: "Піца",
    price: 11.70,
    size: "32 см",
    description: "Гостра салямі, халапеньйо, моцарела, томатна основа.",
    image: "https://images.unsplash.com/photo-1600628421055-4d30de868b8f?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 7,
    name: "Гавайська",
    category: "Піца",
    price: 10.80,
    size: "32 см",
    description: "Шинка, ананас, моцарела, томатний соус.",
    image: "https://images.unsplash.com/photo-1573821663912-569905455b1c?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 8,
    name: "Вегетаріанська",
    category: "Піца",
    price: 10.40,
    size: "32 см",
    description: "Перець, гриби, томати, оливки, цибуля, моцарела.",
    image: "https://images.unsplash.com/photo-1511689660979-10d2b1aada49?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 9,
    name: "Фірмова Nova",
    category: "Піца",
    price: 13.90,
    size: "32 см",
    description: "Салямі, бекон, гриби, моцарела, сирний бортик.",
    image: "https://images.unsplash.com/photo-1528137871618-79d2761e3fd5?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 10,
    name: "Часникові палички",
    category: "Закуски",
    price: 4.50,
    size: "8 шт",
    description: "Хрусткі палички з часниковим маслом і пармезаном.",
    image: "https://images.unsplash.com/photo-1619535860434-cf9b70e02179?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 11,
    name: "Курячі крильця",
    category: "Закуски",
    price: 6.90,
    size: "6 шт",
    description: "Запечені крильця у BBQ або гострому соусі.",
    image: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 12,
    name: "Картопля фрі",
    category: "Закуски",
    price: 3.90,
    size: "180 г",
    description: "Золотиста картопля фрі з соусом на вибір.",
    image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 13,
    name: "Цезар салат",
    category: "Салати",
    price: 7.50,
    size: "1 порція",
    description: "Курка, романо, пармезан, крутони, соус Цезар.",
    image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 14,
    name: "Грецький салат",
    category: "Салати",
    price: 6.90,
    size: "1 порція",
    description: "Огірок, томати, фета, оливки, цибуля, оливкова олія.",
    image: "https://images.unsplash.com/photo-1608032077018-c9aad9565d29?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 15,
    name: "Кока-Кола",
    category: "Напої",
    price: 2.20,
    size: "0.5 л",
    description: "Охолоджений газований напій.",
    image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 16,
    name: "Лимонад",
    category: "Напої",
    price: 2.90,
    size: "0.4 л",
    description: "Домашній лимонад з лимоном, м’ятою та льодом.",
    image: "https://images.unsplash.com/photo-1621263764928-df1444c5e859?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 17,
    name: "Тірамісу",
    category: "Десерти",
    price: 4.90,
    size: "1 порція",
    description: "Класичний італійський десерт з маскарпоне.",
    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 18,
    name: "Чізкейк",
    category: "Десерти",
    price: 4.70,
    size: "1 порція",
    description: "Ніжний чізкейк з ягідним соусом.",
    image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=900&q=80"
  }
];

const DELIVERY_PRICE = 2.50;
const FREE_DELIVERY_FROM = 25;

const state = {
  cart: JSON.parse(localStorage.getItem("pizzaCart")) || [],
  activeCategory: "Усі"
};

const menuGrid = document.getElementById("menuGrid");
const filters = document.getElementById("filters");
const cartDrawer = document.getElementById("cartDrawer");
const openCartBtn = document.getElementById("openCartBtn");
const heroCartBtn = document.getElementById("heroCartBtn");
const closeCartBtn = document.getElementById("closeCartBtn");
const cartItems = document.getElementById("cartItems");
const cartCount = document.getElementById("cartCount");
const subtotalValue = document.getElementById("subtotalValue");
const deliveryValue = document.getElementById("deliveryValue");
const totalValue = document.getElementById("totalValue");
const checkoutForm = document.getElementById("checkoutForm");
const formMessage = document.getElementById("formMessage");
const toast = document.getElementById("toast");

function formatCurrency(value) {
  return new Intl.NumberFormat("sk-SK", {
    style: "currency",
    currency: "EUR"
  }).format(value);
}

function saveCart() {
  localStorage.setItem("pizzaCart", JSON.stringify(state.cart));
}

function getCategories() {
  return ["Усі", ...new Set(menuItems.map(item => item.category))];
}

function renderFilters() {
  filters.innerHTML = getCategories().map(category => `
    <button class="filter-btn ${state.activeCategory === category ? "active" : ""}" data-category="${category}" type="button">
      ${category}
    </button>
  `).join("");

  document.querySelectorAll(".filter-btn").forEach(button => {
    button.addEventListener("click", () => {
      state.activeCategory = button.dataset.category;
      renderFilters();
      renderMenu();
    });
  });
}

function renderMenu() {
  const visibleItems = state.activeCategory === "Усі"
    ? menuItems
    : menuItems.filter(item => item.category === state.activeCategory);

  menuGrid.innerHTML = visibleItems.map(item => `
    <article class="product-card">
      <div class="product-image">
        <img src="${item.image}" alt="${item.name}" loading="lazy">
        <span class="category-pill">${item.category}</span>
      </div>
      <div class="product-body">
        <div class="product-title-row">
          <h3>${item.name}</h3>
          <span class="price">${formatCurrency(item.price)}</span>
        </div>
        <p class="description">${item.description}</p>
        <div class="product-footer">
          <span class="size">${item.size}</span>
          <button class="add-btn" data-id="${item.id}" type="button">Додати</button>
        </div>
      </div>
    </article>
  `).join("");

  document.querySelectorAll(".add-btn").forEach(button => {
    button.addEventListener("click", () => addToCart(Number(button.dataset.id)));
  });
}

function addToCart(itemId) {
  const existing = state.cart.find(item => item.id === itemId);

  if (existing) {
    existing.quantity += 1;
  } else {
    const menuItem = menuItems.find(item => item.id === itemId);
    state.cart.push({ ...menuItem, quantity: 1 });
  }

  saveCart();
  renderCart();
  showToast("Додано в корзину");
}

function updateQuantity(itemId, change) {
  const item = state.cart.find(product => product.id === itemId);
  if (!item) return;

  item.quantity += change;

  if (item.quantity <= 0) {
    state.cart = state.cart.filter(product => product.id !== itemId);
  }

  saveCart();
  renderCart();
}

function removeFromCart(itemId) {
  state.cart = state.cart.filter(item => item.id !== itemId);
  saveCart();
  renderCart();
}

function calculateTotals() {
  const subtotal = state.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const delivery = subtotal === 0 || subtotal >= FREE_DELIVERY_FROM ? 0 : DELIVERY_PRICE;
  return {
    subtotal,
    delivery,
    total: subtotal + delivery
  };
}

function renderCart() {
  const totalQuantity = state.cart.reduce((sum, item) => sum + item.quantity, 0);
  cartCount.textContent = totalQuantity;

  if (!state.cart.length) {
    cartItems.innerHTML = `
      <div class="empty-cart">
        Корзина поки порожня. Додайте піцу або інші позиції з меню.
      </div>
    `;
  } else {
    cartItems.innerHTML = state.cart.map(item => `
      <div class="cart-item">
        <img src="${item.image}" alt="${item.name}">
        <div class="cart-item-main">
          <div class="cart-item-title">
            <span>${item.name}</span>
            <strong>${formatCurrency(item.price * item.quantity)}</strong>
          </div>
          <div class="cart-controls">
            <div class="qty-controls">
              <button type="button" data-action="minus" data-id="${item.id}">−</button>
              <span>${item.quantity}</span>
              <button type="button" data-action="plus" data-id="${item.id}">+</button>
            </div>
            <button class="remove-btn" type="button" data-action="remove" data-id="${item.id}">Видалити</button>
          </div>
        </div>
      </div>
    `).join("");
  }

  const totals = calculateTotals();
  subtotalValue.textContent = formatCurrency(totals.subtotal);
  deliveryValue.textContent = totals.delivery === 0 ? "Безкоштовно" : formatCurrency(totals.delivery);
  totalValue.textContent = formatCurrency(totals.total);

  document.querySelectorAll("[data-action]").forEach(button => {
    button.addEventListener("click", () => {
      const itemId = Number(button.dataset.id);

      if (button.dataset.action === "plus") updateQuantity(itemId, 1);
      if (button.dataset.action === "minus") updateQuantity(itemId, -1);
      if (button.dataset.action === "remove") removeFromCart(itemId);
    });
  });
}

function openCart() {
  cartDrawer.classList.add("open");
  cartDrawer.setAttribute("aria-hidden", "false");
}

function closeCart() {
  cartDrawer.classList.remove("open");
  cartDrawer.setAttribute("aria-hidden", "true");
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");

  window.clearTimeout(showToast.timeoutId);
  showToast.timeoutId = window.setTimeout(() => {
    toast.classList.remove("show");
  }, 1800);
}

async function submitOrder(event) {
  event.preventDefault();

  if (!state.cart.length) {
    formMessage.textContent = "Спочатку додайте позиції в корзину.";
    formMessage.className = "form-message error";
    return;
  }

  const formData = new FormData(checkoutForm);
  const customer = Object.fromEntries(formData.entries());
  const totals = calculateTotals();

  const order = {
    customer,
    items: state.cart.map(item => ({
      id: item.id,
      name: item.name,
      category: item.category,
      price: item.price,
      quantity: item.quantity
    })),
    subtotal: totals.subtotal,
    delivery: totals.delivery,
    total: totals.total
  };

  const submitButton = checkoutForm.querySelector("button[type='submit']");
  submitButton.disabled = true;
  submitButton.textContent = "Відправляємо...";
  formMessage.textContent = "";

  try {
    const response = await fetch("/api/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(order)
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || "Не вдалося зберегти замовлення.");
    }

    state.cart = [];
    saveCart();
    renderCart();
    checkoutForm.reset();

    formMessage.textContent = `Замовлення №${result.orderId} прийнято і записано в базу даних.`;
    formMessage.className = "form-message success";
    showToast("Замовлення підтверджено");
  } catch (error) {
    formMessage.textContent = error.message + " Перевірте, чи запущений backend через npm start.";
    formMessage.className = "form-message error";
  } finally {
    submitButton.disabled = false;
    submitButton.textContent = "Підтвердити замовлення";
  }
}

openCartBtn.addEventListener("click", openCart);
heroCartBtn.addEventListener("click", openCart);
closeCartBtn.addEventListener("click", closeCart);

cartDrawer.addEventListener("click", event => {
  if (event.target === cartDrawer) closeCart();
});

checkoutForm.addEventListener("submit", submitOrder);

renderFilters();
renderMenu();
renderCart();
