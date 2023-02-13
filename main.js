// Navigation

const primaryHeader = document.querySelector(".primary-header");
const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryNav = document.querySelector(".primary-navigation");
const primaryDropdown = document.querySelector(".dropdown-menu");
const btn = document.querySelectorAll('.dropdown-btn');

//Main Menu Toggle with a close button
navToggle.addEventListener('click',() =>{
  
  for(const child of navToggle.children){
    if(child.getAttribute("aria-hidden") === "true"){
      child.setAttribute("aria-hidden", "false");
    }
    else if(child.getAttribute("aria-hidden") ==="false"){
      child.setAttribute("aria-hidden", "true");
    } 
  }
  primaryNav.hasAttribute('data-visible') ? navToggle.setAttribute('aria-expanded', false) :
  navToggle.setAttribute('aria-expanded', true);
  primaryNav.toggleAttribute("data-visible");
  primaryHeader.toggleAttribute("data-overlay");
});


//Dropdown Button
// Bug: Can't close the dropdown button if clicked outside
btn.forEach(button => {
  button.addEventListener('click', function(e){
    var getButton = document.getElementById(e.target.id);
    getbtn = getButton.nextElementSibling;
    //When it's clicked, checks if the attribute is true, and if its false,
    //change the attribue to true, else, change it to false.
    if (getButton.getAttribute('aria-expanded') ==="false")
    {
      getButton.setAttribute("aria-expanded", true);
    }
    else{
      getButton.setAttribute("aria-expanded", false);
    }
    //Every time you click the button, it will toggle the attribute 'data-visible'
    getbtn.toggleAttribute('data-visible');
    
    // getbtn.hasAttribute('data-visible') ? getButton.setAttribute('aria-expanded', false):
    // getButton.setAttribute('aria-expanded', true);
  });
});

//This methods creates the user to select an item from the menu
//It hides the menu and then displays the item
//Gets all the buttons from the Product Menu
const productbtns = document.querySelectorAll(".product-btn-control");
productbtns.forEach(productbtn =>{
  productbtn.addEventListener('click', (e) =>
  {
    var getButtonId = document.getElementById(e.target.id);
    //check if aria-expanded is true or not
    if (getButtonId.getAttribute('aria-hidden') ==="false")
    {
      getButtonId.setAttribute("aria-hidden", true);
    }
    else{
      getButtonId.setAttribute("aria-hidden", false);
    }
  
    //hide Menu
    var getClassMenu = document.getElementById("brand_menu");
    getClassMenu.classList.toggle('hidden');
  
    //Get all the product list
    var getAllProducts = document.querySelectorAll(".brand-cards")
    
    //Check which one is selected and toggle it.
    getAllProducts.forEach(card =>
      {
        if (card.id == getButtonId.getAttribute('id'))
        {
          card.classList.toggle('hidden');
        }
      })
  
  });
})





//Building a dictionary
var arrLang ={
    "en-us": {
        "TITLE": "Jim Royal Trading",
        "ABOUT": "About",
        "BRAND": "Products",
        "CONTACT": "Contact",
        "NEWS": "News and Event",
        "HERO-INFO": "We are service-driven import and export pharmaceutical company"
    },
    "zh-tw":{
        "TITLE": "仁友興業有限公司",
        "ABOUT": "關於我們",
        "BRAND": "產品",
        "CONTACT": "聯絡我們",
        "NEWS": "新聞",
        "HERO-INFO": "我們是服務型進出口醫藥公司"
    }
};

$(document).ready(function() {
    // The default language is English
    var lang = "en-us";
    $(".lang").each(function(index, element) {
      $(this).text(arrLang[lang][$(this).attr("key")]);
    });
  });

  // get/set the selected language
  $(".translate").click(function() {
    var lang = $(this).attr("id");
    console.log($(this).attr("id"));
    $(".translate").removeClass("active");
    $(this).addClass("active");

    $(".lang").each(function(index, element) {
      $(this).text(arrLang[lang][$(this).attr("key")]);
    });
  });
