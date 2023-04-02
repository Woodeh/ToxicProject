import { addToCart } from "./modules/cards-module/cards.js";

const slider = document.querySelector(".slider");
const sliderWrapper = slider.querySelector(".slider-wrapper");
const sliderItems = slider.querySelectorAll(".slider-item");
const sliderControls = slider.querySelectorAll(".slider-control");
const sliderControlPrev = slider.querySelector(".slider-control-prev");
const sliderControlNext = slider.querySelector(".slider-control-next");

const pagination = slider.querySelector(".pagination");
const paginationItems = pagination.querySelectorAll(".pagination-item");

let currentIndex = 0;
let intervalId;

// функция для обновления состояния пагинации
function updatePagination(index) {
  paginationItems.forEach((item, i) => {
    if (i === index) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
}

function moveTo(index) {
  if (index < 0) {
    index = sliderItems.length - 1;
  } else if (index >= sliderItems.length) {
    index = 0;
  }
  sliderWrapper.style.transform = `translateX(-${
    index * slider.offsetWidth
  }px)`;
  currentIndex = index;

  // обновление пагинации
  updatePagination(currentIndex);

  // бесконечная прокрутка вправо
  if (currentIndex === sliderItems.length) {
    setTimeout(() => {
      moveTo(0);
    }, 5000);
  }
}

sliderControlPrev.addEventListener("click", () => {
  stopInterval();
  const prevIndex = currentIndex - 1;
  moveTo(prevIndex);
  startInterval();
});

sliderControlNext.addEventListener("click", () => {
  stopInterval();
  const nextIndex = currentIndex + 1;
  moveTo(nextIndex);
  startInterval();
});

function startInterval() {
  intervalId = setInterval(() => {
    const nextIndex = currentIndex + 1;
    moveTo(nextIndex);
  }, 15000);
}

function stopInterval() {
  clearInterval(intervalId);
}

startInterval();

// Преключение слайдера по нажатию на пагинацию
paginationItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    stopInterval();
    moveTo(index);
    startInterval();
  });
});



//пока код к корзине поместил в гланый файл скрипта-----------------------------------------------------------

const cartBtn = document.querySelector(".cart-btn");
const cartModal = document.querySelector(".cart-modal");
const closeCartBtn = document.querySelector(".close-cart-btn");
const clearCartBtn = document.querySelector(".clear-cart-btn");
const cartTotal = document.querySelector(".cart-total");
const cartItems = document.querySelector(".cart-items");

let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCartBusket(name, price) {
    localStorage.setItem('cart', JSON.stringify(cart));
    let alreadyInCart = false;
    for (let i = 0; i < cart.length; i++) {
        if (cart[i].name === name) {
            cart[i].quantity++;
            alreadyInCart = true;
            break;
        }
    }
    if (!alreadyInCart) {
        cart.push({ name: name, price: price, quantity: 1 });
    }
    showCart();
}

// cartItems.addEventListener('wheel', function(e) {
//   e.stopPropagation();
// });

cartModal.addEventListener('wheel', function(e) {
  modalContent.scrollTop += e.deltaY;
  e.preventDefault();
});

function removeFromCart(name) {
    localStorage.setItem('cart', JSON.stringify(cart));
    for (let i = 0; i < cart.length; i++) {
        if (cart[i].name === name) {
            cart[i].quantity--;
            if (cart[i].quantity === 0) {
                cart.splice(i, 1);
            }
            break;
        }
    }
    showCart();
}

function clearCart() {
    cart = [];
    localStorage.setItem('cart', JSON.stringify(cart));
    showCart();
}

function showCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
    cartItems.innerHTML = "";
    let totalPrice = 0;
    for (let i = 0; i < cart.length; i++) {
        let item = cart[i];
        let itemPrice = item.price * item.quantity;
        let cartItem = document.createElement("div");
        cartItem.classList.add("cart-item");
        cartItem.innerHTML = `<img src="/src/assets/pictures/catalog/bottle1.jpg" alt="bottle" class="hendrick"> <div class="items-in-busket"> <div class="cart-item-name">${item.name}</div> <div class="cart-item-quantity">x ${item.quantity}</div> <div class="cart-item-price">${itemPrice} $</div> <div class="cart-item-remove" data-name="${item.name}">&times;</div> </div>`;
        cartItems.appendChild(cartItem);
        totalPrice += itemPrice;
    }
    cartTotal.textContent = totalPrice + " $";
}

cartBtn.addEventListener("click", () => {
    cartModal.style.display = "block";
    showCart();
});

closeCartBtn.addEventListener("click", () => {
    cartModal.style.display = "none";
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
        addToCartBusket(name, price);
    });
});

// // модалка, открывающая оригинал картинки
// function showFullImageModal(imageUrl) {
//     const modal = document.createElement('div');
//     modal.classList.add('modal');

//     const modalContent = document.createElement('div');
//     modalContent.classList.add('modal-content');

//     const img = document.createElement('img');
//     img.src = imageUrl;
//     modalContent.appendChild(img);

//     modal.appendChild(modalContent);
//     document.body.appendChild(modal);

//     // закрыть модалку на кнопку Закрыть
//     modal.addEventListener('click', () => {
//         modal.remove();
//     });
// }


//----------------------------------------------------------------------------------------------------------------------