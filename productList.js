root.innerHTML += `
    <h2>Telefoane:</h2>
    <ul id="product-list"></ul>
`;

function renderProductList(products) {
    const productList = document.querySelector('#product-list');
    productList.innerHTML = '';
  
    products.forEach((product, index) => {
      const productContainer = document.createElement('div');
      productContainer.className = 'product';
  
      const productImage = document.createElement('img');
      productImage.src = product.image;
      productImage.alt = product.name;
  
      const productInfo = document.createElement('div');
      productInfo.className = 'product-info';
  
      const productName = document.createElement('h3');
      productName.textContent = product.name;
  
      const productPrice = document.createElement('p');
      productPrice.textContent = 'Pret: ' + product.price + ' lei';
  
      const productYear = document.createElement('p');
      productYear.textContent = 'Anul aparitiei: ' + product.releaseYear;

      const productdateWhenAdded = document.createElement('p');
        productdateWhenAdded.textContent = 'Data adaugarii: ' + product.dateWhenAdded;

  
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Sterge';
      deleteButton.addEventListener('click', () => {
        deleteProduct(index);
      });
  
      productInfo.appendChild(productName);
        productInfo.appendChild(productPrice);
        productInfo.appendChild(productYear);
        productInfo.appendChild(productdateWhenAdded);
        productInfo.appendChild(deleteButton);

  
      productContainer.appendChild(productImage);
      productContainer.appendChild(productInfo);
  
      productList.appendChild(productContainer);
    });
  }
  
  function deleteProduct(index) {
    const products = getProducts();
    products.splice(index, 1);
    setProducts(products);
    renderProductList(products);
  }
  