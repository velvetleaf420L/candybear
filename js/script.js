// Candy Bear Website Script


// MOBILE MENU

const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");


if(menuBtn){

menuBtn.addEventListener("click",()=>{

nav.classList.toggle("active");

});

}




// SIMPLE PAGE LOAD ANIMATION


document.addEventListener("DOMContentLoaded",()=>{


const elements = document.querySelectorAll(
".hero-text, .hero-image, .feature-card, .product-card"
);



elements.forEach((item,index)=>{


item.style.opacity="0";
item.style.transform="translateY(30px)";


setTimeout(()=>{


item.style.transition="all .6s ease";

item.style.opacity="1";

item.style.transform="translateY(0)";


},index*150);



});


});




// PRODUCT IMAGE ERROR CHECK


const images = document.querySelectorAll("img");


images.forEach(img=>{


img.addEventListener("error",()=>{

img.style.display="none";

});


});
