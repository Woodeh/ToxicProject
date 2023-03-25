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
};