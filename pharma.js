// function appendProduct(name, desc){
    
//     const productContainer = document.querySelector('.product-cards');

//     const container = document.createElement('div');
//     container.classList.add('card');

//     const productName = document.createElement("h3");
//     productName.textContent = name;
//     productName.classList.add('product-name');
//     container.appendChild(productName);

//     const p = document.createElement("p");
//     p.classList.add('content');
//     p.textContent = desc;
//     container.appendChild(p);

//     productContainer.appendChild(container);
// }



const nav = document.querySelectorAll(".alphabet");
nav.forEach(item =>{
    var getProduct = $.getJSON("productsdb.json", function(data){
        var items = [];
        data.forEach(item =>{
            var name = item.product;
            return name;
        });
        console.log("success")
    }).done(function(){
        console.log("complete");
    }).fail(function(){
        console.log("Something went wrong");
    });
    
    $(document).ready(function(){
        $(".alphabet").click(function(event){
            alert($(this).attr("key"));
        });
    })
})
// $(document).ready(function(){
//     $(".alphabet").click(function(){
//         var a = $(this).attr("key");

//         $.getJSON("productsdb.json", function(data){

//             data.forEach(item => {
//                 if (item.product.slice(0,1).toLowerCase() == a)
//                 {
//                     // console.log(item.product);
    
//                     appendProduct(item.product, item.description);
//                 }
//                 else{
//                     console.log("not match found");
//                 }
            
//             });
//         }).fail(function(){
//             console.log("An error has occured.");
//         });
//     });

  
// });


