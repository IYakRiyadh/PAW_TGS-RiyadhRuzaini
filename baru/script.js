/** @format */

const items = [
  { name: 'Apple', price: 0.5 },
  { name: 'Banana', price: 0.2 },
  { name: 'Cherry', price: 0.3 },
];

const itemContainer = document.getElementById('item-list');
const cartContainer = document.getElementById('cart-list');
const checkoutButton = document.getElementById('checkout-button');
const totalPrice = document.getElementById('total-price');

let cartItems = [];

function renderItems() {
  items.forEach((item) => {
    const li = document.createElement('li');
    li.innerHTML = `${item.name} - $${item.price}`;
    const button = document.createElement('button');
    button.innerText = 'Add to cart';
    button.addEventListener('click', () => addToCart(item));
    li.appendChild(button);
    itemContainer.appendChild(li);
  });
}

function addToCart(item) {
  const existingItem = cartItems.find((i) => i.name === item.name);
  if (existingItem) {
    existingItem.quantity++;
  } else {
    cartItems.push({ name: item.name, price: item.price, quantity: 1 });
  }
  renderCart();
}

function removeFromCart(itemName) {
  cartItems = cartItems.filter((item) => item.name !== itemName);
  renderCart();
}

function renderCart() {
  cartContainer.innerHTML = '';
  let total = 0;
  cartItems.forEach((item) => {
    const li = document.createElement('li');
    li.innerHTML = `${item.name} - $${item.price} x ${item.quantity}`;
    const button = document.createElement('button');
    button.innerText = 'Remove from cart';
    button.addEventListener('click', () => removeFromCart(item.name));
    li.appendChild(button);
    cartContainer.appendChild(li);
    total += item.price * item.quantity;
  });
  totalPrice.innerText = `Total price: $${total.toFixed}`;
}
