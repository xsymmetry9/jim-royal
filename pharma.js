function appendProduct(name, desc){
    
    const productContainer = document.querySelector('.product-cards');

    const container = document.createElement('div');
    container.classList.add('card');

    const productName = document.createElement("h3");
    productName.textContent = name;
    productName.classList.add('product-name');
    container.appendChild(productName);

    const p = document.createElement("p");
    p.classList.add('content');
    p.textContent = desc;
    container.appendChild(p);

    productContainer.appendChild(container);
}
$(document).ready(function(){
    $.getJSON("productsdb.json", function(data){

        data.forEach(item => {
            if (item.product.slice(0,1).toLowerCase() == 'a')
            {
                // console.log(item.product);

                appendProduct(item.product, item.description);
            }
            else{
                console.log("not match found");
            }
            

            // appendProduct(item.product, item.description);

            // const productContainer = document.querySelector('.product-cards');

            // const container = document.createElement('div');
            // container.classList.add('card');
    
            // const productName = document.createElement("h3");
            // productName.textContent = item.product;
            // productName.classList.add('product-name');
            // container.appendChild(productName);
        
            // const p = document.createElement("p");
            // p.classList.add('content');
            // p.textContent = item.description;
            // container.appendChild(p);
    
            // productContainer.appendChild(container);
        
        });
    }).fail(function(){
        console.log("An error has occured.");
    });
});


