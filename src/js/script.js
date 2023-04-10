import { addToCart } from "./modules/cards-module/cards.js";

const slider = document.querySelector(".slider");
const sliderWrapper = slider.querySelector(".slider-wrapper");
let sliderItems = slider.querySelectorAll(".slider-item");
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
    if (index === sliderItems.length && i === 0) {
      item.classList.add("active");
    } else if (i === index % paginationItems.length) {
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

  updatePagination(currentIndex);

  // бесконечная прокрутка вправо
  if (currentIndex === sliderItems.length - 1) {
    const clone1 = sliderItems[0].cloneNode(true);
    const clone2 = sliderItems[1].cloneNode(true);
    const clone3 = sliderItems[2].cloneNode(true);
    sliderWrapper.appendChild(clone1);
    sliderWrapper.appendChild(clone2);
    sliderWrapper.appendChild(clone3);
    sliderItems = sliderWrapper.querySelectorAll(".slider-item");
  }

  const clonedItem = sliderWrapper.querySelector(".slider-item.clone");
  if (clonedItem && currentIndex >= sliderItems.length - 1) {
    clonedItem.remove();
    sliderItems = sliderWrapper.querySelectorAll(".slider-item");
    currentIndex = 0;
    sliderWrapper.style.transform = `translateX(${
      index * -slider.offsetWidth
    }px)`;
  }
}

sliderControlPrev.addEventListener("click", () => {
  stopInterval();
  const prevIndex = currentIndex - 1;
  if (currentIndex === 0) {
    return;
  }
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
  }, 8000);
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
