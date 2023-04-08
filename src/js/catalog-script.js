const products = [
  {
    type: "liqueur",
    country: "ireland",
    price: 50,
    volume: 750,
    popularity: 3,
    imgUrl: "/src/assets/pictures/catalog/sheridan.png",
    title: "Sheridan",
    composition:
      "",
  },
  {
    type: "champagne",
    country: "france",
    price: 48,
    volume: 700,
    popularity: 4,
    imgUrl: "/src/assets/pictures/catalog/moet.png",
    title: "Moët & Chandon ",
    composition:
      "",
  },
  {
    type: "tequila",
    country: "mexico",
    price: 37,
    volume: 500,
    popularity: 2,
    imgUrl: "/src/assets/pictures/catalog/Tequila 1.png",
    title: "Olmeca",
    composition:
      "",
  },
  {
    type: "gin",
    country: "united kingdom",
    price: 48,
    volume: 750,
    popularity: 5,
    imgUrl: "/src/assets/pictures/catalog/Gin 1.png",
    title: "Bombay Sapphire",
    composition:
      "",
  },
  {
    type: "beer",
    country: "mexico",
    price: 50,
    volume: 750,
    popularity: 5,
    imgUrl: "/src/assets/pictures/catalog/beer 1.png",
    title: "Corona Extra",
    composition:
      "",
  },
  {
    type: "vodka",
    country: "sweden",
    price: 80,
    volume: 750,
    popularity: 5,
    imgUrl: "/src/assets/pictures/catalog/absolute.png",
    title: "Absolute",
    composition:
      "",
  },
  {
    type: "gin",
    country: "scotland",
    price: 50,
    volume: 750,
    popularity: 5,
    imgUrl: "/src/assets/pictures/catalog/bottle1.png",
    title: "Hendrick's Orbium",
    composition:
      "",
  },
  {
    type: "whiskey",
    country: "scotland",
    price: 80,
    volume: 750,
    popularity: 5,
    imgUrl: "/src/assets/pictures/catalog/chivas.png",
    title: "Chivas Regal",
    composition:
      "",
  },
];

// Функция для отображения карточек товаров на странице
function displayProducts(products) {
  const productsContainer = document.querySelector(".products");
  productsContainer.innerHTML = "";

  products.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.classList.add("product");
    const productImg = document.createElement("img");
    productImg.src = product.imgUrl;

    const productLike = document.createElement("div");
    productLike.classList.add("card-like"); //див для сердец - хз пока что с ним делать и как отрисовать

    const productTitle = document.createElement("h3");
    productTitle.classList.add("product-title");
    productTitle.textContent = product.title;

    const productPrice = document.createElement("p");
    productPrice.classList.add("product-price");
    productPrice.textContent = `$ ${product.price}.00`;

    const productType = document.createElement("p");
    productType.classList.add("product-type");
    productType.textContent = `${product.type.charAt(0).toUpperCase()}${product.type.slice(1)}`;
    const productCountry = document.createElement("p");
    productCountry.classList.add("product-country");
    // productCountry.textContent = `Страна производитель: ${product.country}`; на случай если захотим вывести страну в карточку

    const productVolume = document.createElement("p");
    productVolume.classList.add("product-volume");
    productVolume.textContent = `Объем: ${product.volume} мл.`;

    const productPopularity = document.createElement("p");
    productPopularity.classList.add("product-popularity");
    // productPopularity.textContent = `Популярность: ${product.popularity}/5`;

    const productComposition = document.createElement("p");
    productComposition.classList.add("product-composition");
    productComposition.textContent = `${product.composition}`;

    const productBuyButton = document.createElement("button");
    productBuyButton.classList.add("buy-button");
    productBuyButton.classList.add("add-to-cart")
    productBuyButton.setAttribute("data-name", `${product.title}`);
    productBuyButton.setAttribute("data-price", `${product.price}`);
    productBuyButton.setAttribute("data-image", `${product.imgUrl}`);
    productBuyButton.textContent = `Add to bag`;

    productCard.appendChild(productImg);
    productCard.appendChild(productLike);
    productCard.appendChild(productTitle);
    productCard.appendChild(productType);
    productCard.appendChild(productCountry);
    productCard.appendChild(productPrice);
    // productCard.appendChild(productVolume);
    productCard.appendChild(productPopularity);
    productCard.appendChild(productComposition);
    productCard.appendChild(productBuyButton);
    productsContainer.appendChild(productCard);
  });
}

function filterByType(products, type) {
  if (!type) {
    return products;
  }

  return products.filter((product) => product.type === type);
}

function filterByCountry(products, country) {
  if (!country) {
    return products;
  }

  return products.filter((product) => product.country === country);
}

function filterByPrice(products, price) {
  if (!price) {
    return products;
  }

  return products.filter((product) => product.price >= price);
}

// Функция для фильтрации товаров по объему
// function filterByVolume(products, volume) {
// if (!volume) {
// return products;
// }

// return products.filter((product) => product.volume >= volume);
// }

function filterByPopularity(products, popularity) {
  if (!popularity) {
    return products;
  }

  return products.filter((product) => product.popularity >= popularity);
}

// Обработчик событий для фильтрации товаров
function onFilterChange() {
  const typeFilter = document.querySelector("#type-filter").value;
  const countryFilter = document.querySelector("#country-filter").value;
  const priceFilter = document.querySelector("#price-filter").value;
  // const volumeFilter = document.querySelector('#volume-filter').value;
  const popularityFilter = document.querySelector("#popularity-filter").value;
  const ddFilter = document.querySelector("#dropdown-filter").value;

  let filteredProducts = products;

  filteredProducts = filterByType(filteredProducts, typeFilter);
  filteredProducts = filterByCountry(filteredProducts, countryFilter);
  filteredProducts = filterByPrice(filteredProducts, priceFilter);
  // filteredProducts = filterByVolume(filteredProducts, volumeFilter);
  filteredProducts = filterByPopularity(filteredProducts, popularityFilter);

  displayProducts(filteredProducts);
}

// Запускаем отображение карточек товаров на странице при загрузке
displayProducts(products);

const params = new URLSearchParams(window.location.search);
const type = params.get("type");
const search = params.get("search");

let filteredProducts = products;

if (type) {
  filteredProducts = filteredProducts.filter((product) => {
    return product.type.toLowerCase() === type.toLowerCase();
  });
}

if (search) {
  filteredProducts = filteredProducts.filter((product) => {
    return ['title', 'composition', 'type', 'country'].some((field) => {
      return product[field].toLowerCase().includes(search.toLowerCase());
    });
  });
}

// Назначаем обработчик событий на изменение фильтров
const filters = document.querySelectorAll(".filter");
filters.forEach((filter) => filter.addEventListener("change", onFilterChange));

function filterProducts() {
  const typeFilter = document.querySelector("#type-filter").value;
  const countryFilter = document.querySelector("#country-filter").value;
  // const priceFilter = document.querySelector('#price-filter').value;
  // const volumeFilter = document.querySelector('#volume-filter').value;
  // const popularityFilter = document.querySelector("#popularity-filter").value;

  let filteredProducts = products;
  filteredProducts = filterByType(filteredProducts, typeFilter);
  filteredProducts = filterByCountry(filteredProducts, countryFilter);
  // filteredProducts = filterByPrice(filteredProducts, priceFilter);
  // filteredProducts = filterByVolume(filteredProducts, volumeFilter);
  // filteredProducts = filterByPopularity(filteredProducts, popularityFilter);
  displayProducts(filteredProducts);
}

document
  .querySelector("#type-filter")
  .addEventListener("change", filterProducts);
document
  .querySelector("#country-filter")
  .addEventListener("change", filterProducts);
// document.querySelector('#price-filter').addEventListener('change', filterProducts);
// document.querySelector('#volume-filter').addEventListener('change', filterProducts);
// document
//   .querySelector("#popularity-filter")
//   .addEventListener("change", filterProducts);

// const typeFilter = document.getElementById("type-filter");
// typeFilter.addEventListener("mousedown", function() {
//     // Удаляем первый элемент (Type) из списка options
//     typeFilter.removeChild(typeFilter.options[0]);
//   }, false);



//коризна для каталога
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
          <div class="cart-item-quantity"><input type="number" min="1" value="${item.quantity}" data-name="${item.name}" data-price="${item.price}"></div>
          <div class="cart-item-price">${itemPrice.toFixed(2)} $</div> 
          </div>
          <div class="cart-item-remove" data-name="${item.name}">&times;</div>`;
      cartItems.appendChild(cartItem);
      // cartItem.appendChild(cartItemImage);
      totalPrice += itemPrice;
    }
  cartTotal.textContent =" $" +  totalPrice.toFixed(2);

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
  });
});

cartOverlay.addEventListener("click", (event) => {
  if (event.target === cartOverlay) {
    cartModal.style.display = "none";
    enableScroll();
  }
});