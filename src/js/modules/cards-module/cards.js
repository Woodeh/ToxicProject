const addButtons = document.querySelectorAll(".add-btn");

addButtons.forEach((button) => {
  button.addEventListener("click", addToCart);
});

export function addToCart() {
  console.log("Товар добавлен в корзину");
}

//slider for new product------------------------------------------------------------------------------------
const sliderCard = document.querySelector(".sliderCard");
const sliderContainer = document.querySelector(".slider-container");
const slides = document.querySelectorAll(".slide");
const slideWidth =
  slides[0].offsetWidth + parseInt(getComputedStyle(slides[0]).marginRight);

let currentPosition = 0;
let slideCount = 0;
let touchStartX = null;
let touchEndX = null;
const slideLimit = slideWidth * (slides.length - 4);

while (slideCount < 4) {
  sliderContainer.appendChild(slides[slideCount].cloneNode(true));
  slideCount++;
}

const updatedSlides = document.querySelectorAll(".slide");

sliderContainer.style.width = `${slideWidth * updatedSlides.length}px`;

function centerSlider() {
  // const sliderContainerWidth = sliderContainer.offsetWidth;
  const slideLimit = slideWidth * (updatedSlides.length - 4);
  const centerPosition = -(slideLimit / 2.6);

  sliderContainer.style.transition = "none";
  if (currentPosition !== centerPosition) {
    currentPosition = centerPosition;
    sliderContainer.style.transform = `translateX(${currentPosition}px)`;
  }
}

centerSlider();

window.addEventListener("resize", centerSlider);

sliderCard.addEventListener("touchstart", (event) => {
  touchStartX = event.touches[0].clientX;
  event.preventDefault();
});

sliderCard.addEventListener("touchmove", (event) => {
  event.preventDefault();
});

sliderCard.addEventListener("touchend", (event) => {
  touchEndX = event.changedTouches[0].clientX;
  handleGesture();
});

function handleGesture() {
  if (touchStartX - touchEndX > 50) {
    if (currentPosition === -slideLimit) {
      currentPosition = 0;
    } else {
      currentPosition -= slideWidth;
    }
    sliderContainer.style.transition = "transform 0.3s ease-in-out";
    sliderContainer.style.transform = `translateX(${currentPosition}px)`;
  }
  if (touchStartX - touchEndX < -50) {
    if (currentPosition === 0) {
      currentPosition = -slideLimit;
    } else {
      currentPosition += slideWidth;
    }
    sliderContainer.style.transition = "transform 0.3s ease-in-out";
    sliderContainer.style.transform = `translateX(${currentPosition}px)`;
  }
  touchStartX = null;
  touchEndX = null;
}

sliderCard.addEventListener("mousedown", (event) => {
  touchStartX = event.clientX;
  sliderCard.style.cursor = "grabbing";
});

sliderCard.addEventListener("mousemove", (event) => {
  if (touchStartX !== null) {
    const touchCurrentX = event.clientX;
    const touchDeltaX = touchCurrentX - touchStartX;
    const newCurrentPosition = currentPosition + touchDeltaX;
    if (newCurrentPosition > 0) {
      currentPosition = 0;
    } else if (newCurrentPosition < -slideLimit) {
      currentPosition = -slideLimit;
    } else {
      currentPosition = newCurrentPosition;
    }
    sliderContainer.style.transition = "none";
    sliderContainer.style.transform = `translateX(${currentPosition}px)`;
    touchStartX = touchCurrentX;
  }
});

sliderCard.addEventListener("mouseup", (event) => {
  touchEndX = event.clientX;
  sliderCard.style.cursor = "grab";
  handleGesture();
});

// slider for bestsellers------------------------------------------------------------------------------
const sliderCard2 = document.querySelector(".sliderCard2");
const sliderContainer2 = document.querySelector(".slider-container2");
const slides2 = document.querySelectorAll(".slide2");
const slideWidth2 =
  slides2[0].offsetWidth + parseInt(getComputedStyle(slides2[0]).marginRight);

let currentPosition2 = 0;
let slideCount2 = 0;
let touchStartX2 = null;
let touchEndX2 = null;
const slideLimit2 = slideWidth2 * (slides2.length - 4);

while (slideCount2 < 4) {
  sliderContainer2.appendChild(slides2[slideCount2].cloneNode(true));
  slideCount2++;
}

const updatedSlides2 = document.querySelectorAll(".slide2");

sliderContainer2.style.width = `${slideWidth2 * updatedSlides2.length}px`;

function centerSlider2() {
  // const sliderContainerWidth = sliderContainer.offsetWidth;
  const slideLimit2 = slideWidth2 * (updatedSlides2.length - 4);
  const centerPosition2 = -(slideLimit2 / 2.6);

  sliderContainer2.style.transition = "none";
  if (currentPosition2 !== centerPosition2) {
    currentPosition2 = centerPosition2;
    sliderContainer2.style.transform = `translateX(${currentPosition2}px)`;
  }
}

centerSlider2();

window.addEventListener("resize", centerSlider2);

sliderCard2.addEventListener("touchstart", (event) => {
  touchStartX2 = event.touches[0].clientX;
  event.preventDefault();
});

sliderCard2.addEventListener("touchmove", (event) => {
  event.preventDefault();
});

sliderCard2.addEventListener("touchend", (event) => {
  touchEndX2 = event.changedTouches[0].clientX;
  handleGesture2();
});

function handleGesture2() {
  if (touchStartX2 - touchEndX2 > 50) {
    if (currentPosition2 === -slideLimit2) {
      currentPosition2 = 0;
    } else {
      currentPosition2 -= slideWidth2;
    }
    sliderContainer2.style.transition = "transform 0.3s ease-in-out";
    sliderContainer2.style.transform = `translateX(${currentPosition2}px)`;
  }
  if (touchStartX2 - touchEndX2 < -50) {
    if (currentPosition2 === 0) {
      currentPosition2 = -slideLimit2;
    } else {
      currentPosition2 += slideWidth2;
    }
    sliderContainer2.style.transition = "transform 0.3s ease-in-out";
    sliderContainer2.style.transform = `translateX(${currentPosition2}px)`;
  }
  touchStartX2 = null;
  touchEndX2 = null;
}

sliderCard2.addEventListener("mousedown", (event) => {
  touchStartX2 = event.clientX;
  sliderCard2.style.cursor = "grabbing";
});

sliderCard2.addEventListener("mousemove", (event) => {
  if (touchStartX2 !== null) {
    const touchCurrentX2 = event.clientX;
    const touchDeltaX2 = touchCurrentX2 - touchStartX2;
    const newCurrentPosition2 = currentPosition2 + touchDeltaX2;
    if (newCurrentPosition2 > 0) {
      currentPosition2 = 0;
    } else if (newCurrentPosition2 < -slideLimit2) {
      currentPosition2 = -slideLimit2;
    } else {
      currentPosition2 = newCurrentPosition2;
    }
    sliderContainer2.style.transition = "none";
    sliderContainer2.style.transform = `translateX(${currentPosition2}px)`;
    touchStartX2 = touchCurrentX2;
  }
});

sliderCard2.addEventListener("mouseup", (event) => {
  touchEndX2 = event.clientX;
  sliderCard2.style.cursor = "grab";
  handleGesture2();
});

// чтобы карточки не перетягивались вместе со слайдером
const images = document.querySelectorAll(".sliderCard");
for (let i = 0; i < images.length; i++) {
  images[i].addEventListener("dragstart", (event) => {
    event.preventDefault();
  });
}

const images2 = document.querySelectorAll(".sliderCard2");
for (let i = 0; i < images2.length; i++) {
  images2[i].addEventListener("dragstart", (event) => {
    event.preventDefault();
  });
}

// Корзина сраная
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
  const notification = document.createElement('div');
  notification.textContent = 'Your item is added to cart!';
  notification.style.position = 'fixed';
  notification.style.top = '50%';
  notification.style.fontSize = '16px';
  notification.style.fontFamily = 'Josefin Sans';
  notification.style.boxShadow = '0px 2px 2px black';
  notification.style.left = '50%';
  notification.style.transform = 'translateX(-50%)';
  notification.style.padding = '10px';
  notification.style.backgroundColor = '#F2F2F2';
  notification.style.border = '1px solid #002D5B';
  notification.style.borderRadius = '2px';
  notification.style.zIndex = '999';
  
  document.body.appendChild(notification);

  // через сколько окно скроется
  setTimeout(function() {
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
  let totalQuantity = 0;
  for (let i = 0; i < cart.length; i++) {
    totalQuantity += cart[i].quantity;
  }
  document.getElementById("cartBadge").innerText = totalQuantity;
  if (totalQuantity === 0) {
    // cartBadge.style.display = "none";
    // cartBtn.style.display = "none" // если значение равно нулю
  } else {
    // cartBadge.style.display = "block"; // если значение не равно нулю
  }

  cartItems.innerHTML = "";
  let totalPrice = 0;

  for (let i = 0; i < cart.length; i++) {
    let item = cart[i];
    let cartItemImage = document.createElement("img");
    cartItemImage.src = item.image;
    let itemPrice = item.price * item.quantity;
    let cartItem = document.createElement("div");
    cartItem.classList.add("cart-item");
    cartItem.innerHTML = `<img src="${item.image}" alt="" class="basket-image">
      <div class="items-in-busket"> 
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-quantity"><input type="number" min="1" value="${
          item.quantity
        }" data-name="${item.name}" data-price="${item.price}"></div>
        <div class="cart-item-price">${itemPrice.toFixed(2)} $</div> 
      </div>
      <div class="cart-item-remove" data-name="${item.name}">&times;</div>`;
    cartItems.appendChild(cartItem);
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
  location.reload();
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
    showCart();
  });
});

cartOverlay.addEventListener("click", (event) => {
  if (event.target === cartOverlay) {
    cartModal.style.display = "none";
    enableScroll();
  }
});

//вот этот код добавил
document.addEventListener("DOMContentLoaded", () => {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let totalQuantity = 0;
  for (let i = 0; i < cart.length; i++) {
    totalQuantity += cart[i].quantity;
  }
  document.getElementById("cartBadge").innerText = totalQuantity;
  if (totalQuantity === 0) {
    cartBadge.style.display = "none"; // если значение равно нулю
  } else {
    cartBadge.style.display = "block"; // если значение не равно нулю
  }
});