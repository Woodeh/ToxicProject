const addButtons = document.querySelectorAll('.add-btn');
const favorite = document.querySelectorAll('.fa-heart');

favorite.forEach(like => {
    like.addEventListener('click', () => {
        if (like.classList.contains('pink')) {
          like.classList.remove('pink');
          console.log('Вы убрали товар из понравившихся');
        } else {
          like.classList.add('pink');
          console.log('Товар добавлен в понравившиеся');
        }
      });
});

addButtons.forEach(button => {
  button.addEventListener('click', addToCart);
});

export function addToCart() {
  console.log('Товар добавлен в корзину');
}

const sliderCard = document.querySelector('.sliderCard');
const sliderContainer = document.querySelector('.slider-container');
const slides = document.querySelectorAll('.slide');
const slideWidth = slides[0].offsetWidth + parseInt(getComputedStyle(slides[0]).marginRight);

let currentPosition = 0;
let slideCount = 0;
let touchStartX = null;
let touchEndX = null;
const slideLimit = slideWidth * (slides.length - 4);

while (slideCount < 4) {
  sliderContainer.appendChild(slides[slideCount].cloneNode(true));
  slideCount++;
};

const updatedSlides = document.querySelectorAll('.slide');

sliderContainer.style.width = `${slideWidth * updatedSlides.length}px`;

sliderCard.addEventListener('touchstart', (event) => {
  touchStartX = event.touches[0].clientX;
  event.preventDefault();
});

sliderCard.addEventListener('touchmove', (event) => {
  event.preventDefault();
});

sliderCard.addEventListener('touchend', (event) => {
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
    sliderContainer.style.transition = 'transform 0.3s ease-in-out';
    sliderContainer.style.transform = `translateX(${currentPosition}px)`;
  }
  if (touchStartX - touchEndX < -50) {
    if (currentPosition === 0) {
      currentPosition = -slideLimit;
    } else {
      currentPosition += slideWidth;
    }
    sliderContainer.style.transition = 'transform 0.3s ease-in-out';
    sliderContainer.style.transform = `translateX(${currentPosition}px)`;
  }
  touchStartX = null;
  touchEndX = null;
};

sliderCard.addEventListener('mousedown', (event) => {
  touchStartX = event.clientX;
  sliderCard.style.cursor = 'grabbing';
});

sliderCard.addEventListener('mousemove', (event) => {
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
    sliderContainer.style.transition = 'none';
    sliderContainer.style.transform = `translateX(${currentPosition}px)`;
    touchStartX = touchCurrentX;
  }
});

sliderCard.addEventListener('mouseup', (event) => {
  touchEndX = event.clientX;
  sliderCard.style.cursor = 'grab';
  handleGesture();
});


const sliderCard2 = document.querySelector('.sliderCard2');
const sliderContainer2 = document.querySelector('.slider-container2');
const slides2 = document.querySelectorAll('.slide2');
const slideWidth2 = slides2[0].offsetWidth + parseInt(getComputedStyle(slides2[0]).marginRight);

let currentPosition2 = 0;
let slideCount2 = 0;
let touchStartX2 = null;
let touchEndX2 = null;
const slideLimit2 = slideWidth2 * (slides2.length - 4);

while (slideCount2 < 4) {
sliderContainer2.appendChild(slides2[slideCount2].cloneNode(true));
slideCount2++;
};

const updatedSlides2 = document.querySelectorAll('.slide2');

sliderContainer2.style.width = `${slideWidth2 * updatedSlides2.length}px`;

sliderCard2.addEventListener('touchstart', (event) => {
touchStartX2 = event.touches[0].clientX;
event.preventDefault();
});

sliderCard2.addEventListener('touchmove', (event) => {
event.preventDefault();
});

sliderCard2.addEventListener('touchend', (event) => {
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
sliderContainer2.style.transition = 'transform 0.3s ease-in-out';
sliderContainer2.style.transform = `translateX(${currentPosition2}px)`;
}
if (touchStartX2 - touchEndX2 < -50) {
if (currentPosition2 === 0) {
currentPosition2 = -slideLimit2;
} else {
currentPosition2 += slideWidth2;
}
sliderContainer2.style.transition = 'transform 0.3s ease-in-out';
sliderContainer2.style.transform = `translateX(${currentPosition2}px)`;
}
touchStartX2 = null;
touchEndX2 = null;
};

sliderCard2.addEventListener('mousedown', (event) => {
touchStartX2 = event.clientX;
sliderCard2.style.cursor = 'grabbing';
});

sliderCard2.addEventListener('mousemove', (event) => {
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
sliderContainer2.style.transition = 'none';
sliderContainer2.style.transform = `translateX(${currentPosition2}px)`;
touchStartX2 = touchCurrentX2;
}
});

sliderCard2.addEventListener('mouseup', (event) => {
touchEndX2 = event.clientX;
sliderCard2.style.cursor = 'grab';
handleGesture2();
});

// чтобы карточки не перетягивались вместе со слайдером
const images = document.querySelectorAll('.sliderCard');
for (let i = 0; i < images.length; i++) {
  images[i].addEventListener('dragstart', (event) => {
    event.preventDefault();
  });
};

const images2 = document.querySelectorAll('.sliderCard2');
for (let i = 0; i < images2.length; i++) {
  images2[i].addEventListener('dragstart', (event) => {
    event.preventDefault();
  });
}