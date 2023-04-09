
//каунтер на big-card-product
const number = document.querySelector('.number');
const minus = document.querySelector('.product-description-counter-minus');
const plus = document.querySelector('.product-description-counter-plus');
minus.addEventListener('click', () => {
  number.innerHTML--;
});
plus.addEventListener('click', () => {
  number.innerHTML++;
});

