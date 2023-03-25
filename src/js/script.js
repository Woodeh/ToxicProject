import { addToCart} from "./modules/cards-module/cards.js";

const slider = document.querySelector(".slider");
const sliderWrapper = slider.querySelector(".slider-wrapper");
const sliderItems = slider.querySelectorAll(".slider-item");
const sliderControls = slider.querySelectorAll(".slider-control");
const sliderControlPrev = slider.querySelector(".slider-control-prev");
const sliderControlNext = slider.querySelector(".slider-control-next");

let currentIndex = 0;
let intervalId;

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
}

function startInterval() {
  intervalId = setInterval(() => {
    const nextIndex = currentIndex + 1;
    moveTo(nextIndex);
  }, 15000);
}

function stopInterval() {
  clearInterval(intervalId);
}

sliderControls.forEach((control) => {
  control.addEventListener("click", () => {
    stopInterval();
    const isPrev = control.classList.contains("slider-control-prev");
    const nextIndex = isPrev ? currentIndex - 1 : currentIndex + 1;
    moveTo(nextIndex);
    startInterval();
  });
});

startInterval();



