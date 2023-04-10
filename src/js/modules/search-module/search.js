// const params = new URLSearchParams(window.location.search);
// const searchQuery = params.get("search"); - конфликт из-за этих строчек. нужно исправить

// const filteredProducts = searchQuery ? products.filter((product) => {
//   return ['title', 'composition', 'type', 'country'].some((field) => {
//     return product[field].toLowerCase().includes(searchQuery.toLowerCase());
//   });
// }) : products;


// displayProducts(filteredProducts);

// const searchForm = document.querySelector('.form-search');
// const searchInput = document.querySelector('#search');
// const btnSearch = document.querySelector('.btn-search');

// btnSearch.addEventListener('input', () => {
//   const searchValue = searchInput.value.toLowerCase();
  
//   if (searchValue === '') {
//     displayProducts(products);
//     return;
//   }

//   const filteredProductsByName = products.filter((product) => {
//     const title = product.title.toLowerCase();
//     const composition = product.composition.toLowerCase();
//     return title.includes(searchValue) || composition.includes(searchValue);
//   });

//   const filteredProductsByType = products.filter((product) => {
//     return product.type.toLowerCase().includes(searchValue);
//   });

//   let searchResults = filteredProductsByName.concat(filteredProductsByType);

//   console.log(searchResults);
//   displayProducts(searchResults);
// });

  
  
