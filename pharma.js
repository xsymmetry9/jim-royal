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
// function noResult(){
//     const container = document.createElement('div');
//     const text = document.createElement('h3');
//     text.textContent = "No result"
//     container.appendChild(text);
// }
// async function getData(){
//     const request = new Request('productsdb.json');

//     const response = await fetch(request);
//     const dataText = await response.text();

//     const data = JSON.parse(dataText);

//     data.forEach(element => {
//         appendProduct(element['product'], element['description']);
//     });
// }
// getData();
const remove = document.getElementById('remove');
function removeAll(){
    const productCard = document.querySelector('.product-cards');
    while(productCard.firstElementChild){
        productCard.firstElementChild.remove();
    }
remove.addEventListener('click', removeAll);

}

// function getProduct(){
//     const arrayOfProduct= [];
//     const getProduct = document.querySelectorAll(".product-cards .card")
//     getProduct.forEach((item) =>{
//         let person = {product: item.children[0].innerHTML,
//                     description: item.children[1].innerHTML};
//         //Only save items that begins with 'a'
//         arrayOfProduct.push(person);
//     });
//     return(arrayOfProduct);
   
// }
// const getAll = document.querySelector('.all');
// getAll.addEventListener('click', getData);

// const alphabetbtn = document.querySelectorAll('.alphabet');
// alphabetbtn.forEach(button => {
//     button.addEventListener("click", function(event)
//     {
//         let valid = 0;
//         let invalid = 0;
//         hideAll();
//         var key = (button.id);
//         getProduct().forEach((item, index) =>{
//             if(item.product.slice(0,1).toLowerCase() == key){
//                 appendProduct(item.product, item.description);
//                 valid++;
//             }
//             else{
//                 invalid++;
//             }
//         });
//         if (valid == 0){
//             console.log("there are 0 valids")
//         }
//         else{
//             console.log(`There are ${invalid} hidden and ${valid} are valid`);
//         }
 
//     });
// });

fetch('productsdb.json')
    .then(response => response.json())
    .then(data => {
        let key;
        const alphabetbtn = document.querySelectorAll('.alphabet');
        removeAll();

        alphabetbtn.forEach(button =>{
            button.addEventListener('click', (e) =>{
                key = button.id;
                console.log(key);
                const filtered = data.filter(item => item.product.toLowerCase().startsWith(key));

                filtered.forEach(item => {
                    appendProduct(item.product, item.description);
                });
            })
        })
    
    })