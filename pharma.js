$(document).ready(function(){
    $.getJSON("productsdb.json", function(data){

        data.forEach(item => {

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
        
        });
    }).fail(function(){
        console.log("An error has occured.");
    });
});


