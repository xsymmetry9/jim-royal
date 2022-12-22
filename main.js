// Navigation

const primaryHeader = document.querySelector(".primary-header");
const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryNav = document.querySelector(".primary-navigation");

navToggle.addEventListener('click',() =>{
  primaryNav.hasAttribute('data-visible') ? navToggle.setAttribute('aria-expanded', false) :
  navToggle.setAttribute('aria-expanded', true);
  primaryNav.toggleAttribute("data-visible");
  primaryHeader.toggleAttribute("data-overlay");
});

// Translation

var arrLang ={
    "en-us": {
        "TITLE": "Jim Royal Trading",
        "ABOUT": "About",
        "BRAND": "Brand",
        "CONTACT": "Contact Us",
        "NEWS": "News and Event",
        "HERO-INFO": "We are service-driven import and export pharmaceutical company"
    },
    "zh-tw":{
        "TITLE": "仁友興業有限公司",
        "ABOUT": "關於我們",
        "PRODUCT": "產品",
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

    $(".lang").each(function(index, element) {
      $(this).text(arrLang[lang][$(this).attr("key")]);
    });
  });
