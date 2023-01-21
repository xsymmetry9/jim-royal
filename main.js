// Navigation

const primaryHeader = document.querySelector(".primary-header");
const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryNav = document.querySelector(".primary-navigation");
const primaryDropdown = document.querySelector(".primary-dropdown-menu");
const btn = document.querySelector('.dropdown-btn');
const menu = document.querySelector('.primary-dropdown-menu');

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



btn.addEventListener('click', function(){
  // if(menu.hasAttribute('data-visible'))
  // {
  //   btn.setAttribute('aria-expanded', false);
  // };
  
  menu.hasAttribute('data-visible') ? btn.setAttribute('aria-expanded', false):
  btn.setAttribute('aria-expanded', true);
  primaryDropdown.toggleAttribute("data-visible");
  

});



// Translation

var arrLang ={
    "en-us": {
        "TITLE": "Jim Royal Trading",
        "ABOUT": "About",
        "BRAND": "Brand",
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
