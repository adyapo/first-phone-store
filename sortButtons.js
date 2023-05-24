root.innerHTML += `
        <div class="bottom-right">
        <button id="sort-by-price">Sorteaza dupa pret</button>
        <button id="sort-by-release-year">Sortează după anul apariției</button>
        <button id="sort-by-date-added">Sortează după data adăugării</button>
        <button id="filter-button">Filtrează produsele cu prețul mai mare de 4200</button>
        </div>
`;

function sortPhones(sortType) {
    switch(sortType) {
        case "SORT_BY_PRICE":
            const localStorageProducts = getProducts();
            const sortedArray = localStorageProducts.sort((elem1, elem2) => {
                if (elem1.price < elem2.price) {
                    return -1;
                } else if (elem1.price > elem2.price) {
                    return 1;
                } else {
                    return 0;
                }
            });
            setProducts(sortedArray);
            renderProductList(sortedArray);
            break;
            
        case "SORT_BY_RELEASE_YEAR":
            const localStorageProductsRelease = getProducts();
            const sortedArrayRelease = localStorageProductsRelease.sort((elem1, elem2) => {
                if (elem1.releaseYear < elem2.releaseYear) {
                    return -1;
                } else if (elem1.releaseYear > elem2.releaseYear) {
                    return 1;
                } else {
                    return 0;
                }
            });
            setProducts(sortedArrayRelease);
            renderProductList(sortedArrayRelease);
            break;
    
        case "SORT_BY_DATE_ADDED":
            const localStorageProductsDate = getProducts();
            const sortedArrayDate = localStorageProductsDate.sort((elem1, elem2) => {
                if (elem1.dateWhenAdded < elem2.dateWhenAdded) {
                    return -1;
                } else if (elem1.dateWhenAdded > elem2.dateWhenAdded) {
                    return 1;
                } else {
                    return 0;
                }
            });
            setProducts(sortedArrayDate);
            renderProductList(sortedArrayDate);
            break;
    
        default:
            console.error("Unknown sort type: " + sortType);
            break;
    }
}
    
function addSortingFunctionality() {
    const sortByPrice = document.querySelector('#sort-by-price');
    const sortByReleaseYear = document.querySelector('#sort-by-release-year');
    const sortByDateAdded = document.querySelector('#sort-by-date-added');
    
    sortByPrice.addEventListener('click', function () {
        sortPhones('SORT_BY_PRICE');
    });
    sortByReleaseYear.addEventListener('click', function () {
        sortPhones('SORT_BY_RELEASE_YEAR');
    });
    sortByDateAdded.addEventListener('click', function () {
        sortPhones('SORT_BY_DATE_ADDED');
    });
}
    
window.addEventListener('load', addSortingFunctionality);

function filterProductsByPrice() {
    const localStorageProducts = getProducts();
    const filteredProducts = localStorageProducts.filter((product) => {
      return product.price > 4200;
    });
    renderProductList(filteredProducts);
  }
  
  function addFilterFunctionality() {
    const filterButton = document.querySelector('#filter-button');
    filterButton.addEventListener('click', function() {
      filterProductsByPrice();
    });
  }
  
  window.addEventListener('load', addFilterFunctionality);
  
