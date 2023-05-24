class Product {
    constructor(name, price, image, releaseYear, dateWhenAdded) {
        this.name = name;
        this.price = price;
        this.image = image;
        this.releaseYear = releaseYear;
        this.dateWhenAdded = dateWhenAdded;
    }

    renderProduct() {
        const productList = document.querySelector('#product-list');
        productList.innerHTML += `
            <li class="product">
                <img src="${this.image}" alt="${this.name}"/>
                <p>Nume: ${this.name}</p>
                <p>Pret: ${this.price}</p>
                <p>Anul aparitiei: ${this.releaseYear}</p>
                <p>Data adaugarii: ${this.dateWhenAdded}</p>
            </li>
        `;
    }
}
