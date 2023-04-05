const searchForm = document.querySelector('.form-search');
const searchInput = document.querySelector('#search');

searchInput.addEventListener('input', () => {
  const searchValue = searchInput.value.toLowerCase();
  
  if (searchValue === '') {
    displayProducts(products);
    return;
  }

  const filteredProductsByName = products.filter((product) => {
    const title = product.title.toLowerCase();
    const composition = product.composition.toLowerCase();
    return title.includes(searchValue) || composition.includes(searchValue);
  });

  const filteredProductsByType = products.filter((product) => {
    return product.type.toLowerCase().includes(searchValue);
  });

  let searchResults = filteredProductsByName.concat(filteredProductsByType);

  console.log(searchResults);
  displayProducts(searchResults);
});

// поиск по btn первая версия
// const searchForm = document.querySelector('.form-search');
// const searchInput = document.querySelector('#search');

// // Поиск по описанию товара (карточки товара).
// searchForm.addEventListener('submit', (event) => {
//   event.preventDefault();
//   const searchValue = searchInput.value.toLowerCase();
//   const filteredProducts = products.filter((product) => {
//     const title = product.title.toLowerCase();
//     const composition = product.composition.toLowerCase();
//     return title.includes(searchValue) || composition.includes(searchValue);
//   });

//   // sortProducts сортирует по условию 
//   let sortProducts;
//   if (searchValue === "вино") {
//     sortProducts = products.filter((product) => product.type === "вино");
//   } else if (searchValue === "виски") {
//     sortProducts = products.filter((product) => product.type === "виски");
//   } else if (searchValue === "ром") {
//     sortProducts = products.filter((product) => product.type === "ром");
//   } else if (searchValue === "пиво") {
//     sortProducts = products.filter((product) => product.type === "пиво");
//   } else {
//     sortProducts = filteredProducts;
//   }
  
//   console.log(sortProducts);
//   displayProducts(sortProducts);
// });


  
  
