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

// const alphabetbtn = document.querySelectorAll('.alphabet');
// alphabetbtn.forEach(button => {
//     button.addEventListener("click", function(event)
//     {
//     if (element['product'].slice(0,1) == 'a'){
//         appendProduct(element['product'], element['description']);            }
//     else{
//     console.log("false");
//     }
// });

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

