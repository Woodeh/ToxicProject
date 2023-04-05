const products = [
  {
    type: "liqueur",
    country: "ireland",
    price: 50,
    volume: 750,
    popularity: 3,
    imgUrl: "/src/assets/pictures/catalog/sheridan.png",
    title: "Sheridan Liqueur",
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
    title: "Hendrick's",
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
    productPrice.textContent = `$${product.price}`;

    const productType = document.createElement("p");
    productType.classList.add("product-type");
    // productType.textContent = `Тип алкоголя: ${product.type}`; на случай если захотим вывести в карточку тип алкоголя

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

// Создаем объект URLSearchParams, чтобы получить параметры из текущего URL-адреса страницы
const params = new URLSearchParams(window.location.search);

// Получаем значение параметра 'type' из текущего URL-адреса страницы
const category = params.get("type");

// Если значение параметра 'type' есть в URL-адресе, то:
if (category) {
  console.log(category);

  // Устанавливаем значение параметра 'type' в качестве значения для элемента формы с идентификатором 'type-filter'
  document.querySelector("#type-filter").value = category;

  // Вызываем функцию filterProducts() для фильтрации товаров в соответствии с выбранным значением параметра 'type'
  filterProducts();
}
// Иначе (если значение параметра 'type' отсутствует в URL-адресе), то:
else {
  // Запускаем функцию displayProducts() для отображения карточек товаров на странице при загрузке
  displayProducts(products);
}

// Назначаем обработчик событий на изменение фильтров
const filters = document.querySelectorAll(".filter");
filters.forEach((filter) => filter.addEventListener("change", onFilterChange));

function filterProducts() {
  const typeFilter = document.querySelector("#type-filter").value;
  const countryFilter = document.querySelector("#country-filter").value;
  // const priceFilter = document.querySelector('#price-filter').value;
  // const volumeFilter = document.querySelector('#volume-filter').value;
  const popularityFilter = document.querySelector("#popularity-filter").value;

  let filteredProducts = products;
  filteredProducts = filterByType(filteredProducts, typeFilter);
  filteredProducts = filterByCountry(filteredProducts, countryFilter);
  // filteredProducts = filterByPrice(filteredProducts, priceFilter);
  // filteredProducts = filterByVolume(filteredProducts, volumeFilter);
  filteredProducts = filterByPopularity(filteredProducts, popularityFilter);
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
document
  .querySelector("#popularity-filter")
  .addEventListener("change", filterProducts);

// const typeFilter = document.getElementById("type-filter");
// typeFilter.addEventListener("mousedown", function() {
//     // Удаляем первый элемент (Type) из списка options
//     typeFilter.removeChild(typeFilter.options[0]);
//   }, false);
