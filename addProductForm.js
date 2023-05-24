root.innerHTML += `
    <form id="add-product">
        <label for="name">Nume:</label>
        <input type="text" name="name" id="name"/>
        <label for="price">Pret:</label>
        <input type="number" name="price" id="price"/>
        <label for="image">Imagine:</label>
        <input type="text" name="image" id="image"/>
        <label for="release-year">Anul aparitiei:</label>
        <input type="number" name="release-year" id="release-year"/>
        <label for="date-when-added">Data adaugarii:</label>
        <input type="date" name="date-when-added" id="date-when-added"/>
        <input type="submit" value="Adaugă produs"/>
    </form>
`;


function addFormFunctionality() {
    const form = document.querySelector('#add-product');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const phoneName = document.querySelector("#name").value;
        const phonePrice = document.querySelector("#price").value;
        const phoneImage = document.querySelector("#image").value;
        const phoneReleaseYear = document.querySelector("#release-year").value;
        const phoneDateWhenAdded = document.querySelector("#date-when-added").value;
        const newPhone = {
            name: phoneName,
            price: phonePrice,
            image: phoneImage,
            releaseYear: phoneReleaseYear,
            dateWhenAdded: phoneDateWhenAdded
        };

        const localStorageProducts = getProducts();
        localStorageProducts.unshift(newPhone);
        setProducts(localStorageProducts);
        renderProductList(localStorageProducts);
        form.reset();
    })
}

window.addEventListener('load', addFormFunctionality);