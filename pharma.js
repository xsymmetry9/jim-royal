const data = import('./productsdb.json', {
    assert: {
        type: 'json'
    }
});


data.then(d =>
    d.default.forEach(item => {
        const productContainer = document.querySelector('.product-cards');

        const container = document.createElement('div');
        container.classList.add('card');

        const productName = document.createElement("h3");
        productName.textContent = item.product;
        productName.classList.add('product-name');
        container.appendChild(productName);
    
        const p = document.createElement("p");
        p.classList.add('content');
        p.textContent = item.description;
        container.appendChild(p);

        productContainer.appendChild(container);
    }));

