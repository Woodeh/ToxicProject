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