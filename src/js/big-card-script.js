const priceEl = document.querySelector('.product-description-price');
const numberEl = document.querySelector('.number');
const minusBtn = document.querySelector('.product-description-counter-minus');
const plusBtn = document.querySelector('.product-description-counter-plus');
const pricePerItem = 48.00;
let itemCount = 1;

minusBtn.addEventListener('click', () => {
  if (itemCount > 1) {
    itemCount--;
    numberEl.textContent = itemCount;
    priceEl.textContent = `$ ${(itemCount * pricePerItem).toFixed(2)}`;
  }
});

plusBtn.addEventListener('click', () => {
  if (itemCount < 9) {
    itemCount++;
    numberEl.textContent = itemCount;
    priceEl.textContent = `$ ${(itemCount * pricePerItem).toFixed(2)}`;
  }
});