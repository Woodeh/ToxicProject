const priceEl = document.querySelector(".product-description-price");
const numberEl = document.querySelector(".number");
const minusBtn = document.querySelector(".product-description-counter-minus");
const plusBtn = document.querySelector(".product-description-counter-plus");
const pricePerItem = 48.0;
let itemCount = 1;

minusBtn.addEventListener("click", () => {
  if (itemCount > 1) {
    itemCount--;
    numberEl.textContent = itemCount;
    priceEl.textContent = `$ ${(itemCount * pricePerItem).toFixed(2)}`;
  }
});

plusBtn.addEventListener("click", () => {
  if (itemCount < 9) {
    itemCount++;
    numberEl.textContent = itemCount;
    priceEl.textContent = `$ ${(itemCount * pricePerItem).toFixed(2)}`;
  }
});

//korzina
const body = document.body;
const cartOverlay = document.createElement("div");
const cartBtn = document.querySelector(".cart-btn");
const cartModal = document.querySelector(".cart-modal");
const closeCartBtn = document.querySelector(".close-cart-btn");
const clearCartBtn = document.querySelector(".clear-cart-btn");
const cartTotal = document.querySelector(".cart-total");
const cartItems = document.querySelector(".cart-items");

function disableScroll() {
  body.classList.add("disable-scroll");
  cartOverlay.classList.add("cart-overlay");
  body.appendChild(cartOverlay);
}

function showNotification() {
  const notification = document.createElement("div");
  notification.textContent = "Your item is added to cart!";
  notification.style.position = "fixed";
  notification.style.top = "50%";
  notification.style.fontSize = "16px";
  notification.style.fontFamily = "Josefin Sans";
  notification.style.boxShadow = "0px 2px 2px black";
  notification.style.left = "50%";
  notification.style.transform = "translateX(-50%)";
  notification.style.padding = "10px";
  notification.style.backgroundColor = "#F2F2F2";
  notification.style.border = "1px solid #002D5B";
  notification.style.borderRadius = "2px";
  notification.style.zIndex = "999";

  document.body.appendChild(notification);

  // через сколько окно скроется
  setTimeout(function () {
    notification.remove();
  }, 2000);
}

function enableScroll() {
  body.classList.remove("disable-scroll");
  cartOverlay.classList.remove("cart-overlay");
}

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCartBasket(name, price, image) {
  localStorage.setItem("cart", JSON.stringify(cart));
  let alreadyInCart = false;
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].name === name) {
      cart[i].quantity++;
      alreadyInCart = true;
      break;
    }
  }
  if (!alreadyInCart) {
    cart.push({
      name: name,
      price: price,
      quantity: 1,
      image: image,
    });
  }
  showCart();
  showNotification();
}

function removeFromCart(name) {
  localStorage.setItem("cart", JSON.stringify(cart));
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].name === name) {
      cart.splice(i, 1);
      break;
    }
  }
  showCart();
}

function clearCart() {
  cart = [];
  showCart();
  localStorage.setItem("cart", JSON.stringify(cart));
}

function showCart() {
  cartItems.innerHTML = "";
  let totalPrice = 0;
  for (let i = 0; i < cart.length; i++) {
    let item = cart[i];
    let cartItemImage = document.createElement("img");
    cartItemImage.src = item.image;
    let itemPrice = item.price * item.quantity;
    let cartItem = document.createElement("div");
    cartItem.classList.add("cart-item");
    cartItem.innerHTML = `<img src="${
      item.image
    }" alt="bottle" class="basket-image">
          <div class="items-in-busket"> 
          <div class="cart-item-name">${item.name}</div>
          <div class="cart-item-quantity"><input type="number" min="1" value="${
            item.quantity
          }" data-name="${item.name}" data-price="${item.price}"></div>
          <div class="cart-item-price">${itemPrice.toFixed(2)} $</div> 
          </div>
          <div class="cart-item-remove" data-name="${item.name}">&times;</div>`;
    cartItems.appendChild(cartItem);
    // cartItem.appendChild(cartItemImage);
    totalPrice += itemPrice;
  }
  cartTotal.textContent = " $" + totalPrice.toFixed(2);

  let quantityInputs = document.querySelectorAll(
    ".cart-item-quantity input[type='number']"
  );
  quantityInputs.forEach((input) => {
    input.addEventListener("change", () => {
      let name = input.dataset.name;
      let price = parseFloat(input.dataset.price);
      let quantity = parseInt(input.value);
      for (let i = 0; i < cart.length; i++) {
        if (cart[i].name === name) {
          cart[i].quantity = quantity;
          break;
        }
      }
      showCart();
    });
  });
  localStorage.setItem("cart", JSON.stringify(cart));
}

cartBtn.addEventListener("click", () => {
  cartModal.style.display = "block";
  showCart();
  disableScroll();
});

closeCartBtn.addEventListener("click", () => {
  cartModal.style.display = "none";
  enableScroll();
});

clearCartBtn.addEventListener("click", () => {
  clearCart();
});

cartItems.addEventListener("click", (event) => {
  if (event.target.classList.contains("cart-item-remove")) {
    let name = event.target.dataset.name;
    removeFromCart(name);
  }
});

let addToCartBtns = document.querySelectorAll(".add-to-cart");
addToCartBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    let name = btn.dataset.name;
    let price = btn.dataset.price;
    let image = btn.dataset.image;
    addToCartBasket(name, price, image);
  });
});

cartOverlay.addEventListener("click", (event) => {
  if (event.target === cartOverlay) {
    cartModal.style.display = "none";
    enableScroll();
  }
});
