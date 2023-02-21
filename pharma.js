const nav = document.querySelectorAll(".alphabet");
var key = "all";
function appendProduct(name, desc){
    
    const productContainer = document.querySelector('.product-cards');

    const container = document.createElement('div');
    container.classList.add('card');
    // productName.classList.add('hidden');


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
function noResult(){
    const container = document.createElement('div');
    container.classList.add('card');
    const text = document.createElement('h3');
    text.textContent = "No result"
    container.appendChild(text);
}
async function getData(){
    const request = new Request('productsdb.json');

    const response = await fetch(request);
    const dataText = await response.text();

    const data = JSON.parse(dataText);

    data.forEach(element => {
        appendProduct(element['product'], element['description']);
    });
}
getData();
function hideAll(){
    const cards = document.querySelectorAll('.card');
    cards.forEach(item => {
        item.classList.add('hidden');
    })
}
function getProduct(){
    const arrayOfProduct= [];
    const getProduct = document.querySelectorAll(".product-cards .card")
    getProduct.forEach((item) =>{
        let person = {product: item.children[0].innerHTML,
                    description: item.children[1].innerHTML};
        //Only save items that begins with 'a'
        arrayOfProduct.push(person);
    });
    return(arrayOfProduct);
   
}

const alphabetbtn = document.querySelectorAll('.alphabet');
alphabetbtn.forEach(button => {
    button.addEventListener("click", function(event)
    {
        hideAll();
        var key = (button.id);
        getProduct().forEach((item, index) =>{
            if(item.product.slice(0,1).toLowerCase() == key){
                appendProduct(item.product, item.description);
            }
            else{
                console.log('false');
                //hide whatever
            }
        });
 
    });
});

//-----------------------------JQuery-----------------------------------------------
// $('.alphabet').click()
// {
//     console.log('clicked');
// }
// var array =[];
// var obj = $.getJSON("productsdb.json", function() {
//     console.log("success");
// })
//     .done(function(data)
//     {
//         $.each(data, function(key, value){
//             appendProduct(value['product'], value['description'])
//         })
//     });
    




// function getKey(input){
//     switch(input)
//     {
//         case "a":
//             return "a";
//             break;
//         case "b":
//             return "b";
//             break;
//         case "c":
//             return "c";
//             break;
//         case "d":
//             return "d";
//             break;
//         case "e":
//             return "e";
//             break;
//         case "f":
//             return "f";
//             break;
//         case "g":
//             return "g";
//             break;
//         case "h":
//             return "h";
//             break;
//         case "i":
//             return"i";
//             break;
//         case "j":
//             return"j";
//             break;
//         case "k":
//             return"k";
//             break;
//         case "l":
//             return"l";
//             break;
//         case "m":
//             return"m";
//             break;
//         case "n":
//             return"n";
//             break;
//         case "o":
//             return "o";
//             break;
//         case "p":
//             return "p";
//             break;
//         case "q":
//             return "q";
//             break;
//         case "r":
//             return "r";
//             break;
//         case "s":
//             return "s";
//             break;
//         case "t":
//             return "t";
//             break;
//         case "u":
//             return "u";
//             break;
//         case "v":
//             return "v";
//             break;
//         case "w":
//             return "w";
//             break;
//         case "y":
//             return "y";
//             break;
//         case "z":
//             return "z";
//             break;
//         default:
//             return "all";
//     }
// }

