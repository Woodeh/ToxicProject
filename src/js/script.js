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
  const activeIndex = index % paginationItems.length;
  
  paginationItems.forEach((item, i) => {
    if (i === activeIndex) {
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
  sliderWrapper.style.transform = `translateX(-${index * slider.offsetWidth}px)`;
  currentIndex = index;

  // обновление пагинации
  updatePagination(currentIndex);

  // бесконечная прокрутка вправо
  if (currentIndex === sliderItems.length - 1) {
    const clone = sliderItems[0].cloneNode(true);
    sliderWrapper.appendChild(clone);
    sliderItems = sliderWrapper.querySelectorAll(".slider-item");
  } if (currentIndex === 0) {
    const clone = sliderItems[sliderItems.length - 1].cloneNode(true);
    sliderWrapper.prepend(clone);
    sliderItems = sliderWrapper.querySelectorAll(".slider-item");
    sliderWrapper.style.transition = "transform 0s";
    currentIndex = 0;
    sliderWrapper.style.transform = `translateX(-${currentIndex * slider.offsetWidth}px)`;
    setTimeout(() => {
      sliderWrapper.style.transition = "";
    });
  }
  
  const clonedItem = sliderWrapper.querySelector(".slider-item.clone");
  if (clonedItem && currentIndex <= 0) {
    clonedItem.remove();
    sliderItems = sliderWrapper.querySelectorAll(".slider-item");
    currentIndex = sliderItems.length - 0;
    sliderWrapper.style.transform = `translateX(-${currentIndex * slider.offsetWidth}px)`;
  }
}
sliderControlPrev.addEventListener("click", () => {
  const prevIndex = currentIndex - 1;
  moveTo(prevIndex);
});

sliderControlNext.addEventListener("click", () => {
  const nextIndex = currentIndex + 1;
  moveTo(nextIndex);
});

function startInterval() {
  intervalId = setInterval(() => {
    const nextIndex = currentIndex + 1;
    moveTo(nextIndex);
  }, 5000);
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
  });
});

