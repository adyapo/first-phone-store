const root = document.querySelector('#root');
const products = [
    {
        name: 'Iphone XS',
        price: 4500,
        image: 'https://cdn.flip.ro/device-images/apple_iphone-xs_space-grey_sell_mip@_1000.jpg',
        releaseYear: 2018,
        dateWhenAdded: '2023-02-15'
    },
    {
        name: 'Huawei P30',
        price: 4000,
        image: 'https://cdn.flip.ro/device-images/huawei_p30-dual-sim_breathing-crystal_sell_mip@_1000.jpg',
        releaseYear: 2019,
        dateWhenAdded: '2023-02-15'
    },
    {
        name: 'Samsung S10',
        price: 4250,
        image: 'https://cdn.flip.ro/device-images/samsung_galaxy-s10-dual-sim_prism-white_sell_mip@_1000.jpg',
        releaseYear: 2019,
        dateWhenAdded: '2023-02-15'
    }
];


function getProducts() {
    const localStorageProducts = localStorage.getItem("products");
    console.log(localStorageProducts);
    const parsedProducts = JSON.parse(localStorageProducts);
    return parsedProducts;
}

function setProducts(products) {
    const stringifiedProducts = JSON.stringify(products);
    localStorage.setItem("products", stringifiedProducts);
}

if (getProducts() === null){
    setProducts(products);
}

function startRendering() {
    const localStorageProducts = getProducts();
    renderProductList(localStorageProducts);
}
window.addEventListener('load', startRendering);
