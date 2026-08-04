// ============================
// Mobile Menu
// ============================


function openMenu(){

    const menu = document.getElementById("mobileMenu");

    if(menu){

        menu.classList.toggle("active");

    }

}



function closeMenu(){

    const menu = document.getElementById("mobileMenu");

    if(menu){

        menu.classList.remove("active");

    }

}



document.addEventListener("click", function(e){

    const menu = document.getElementById("mobileMenu");

    const button = document.querySelector(".menu-btn");


    if(menu && button){

        if(
            !menu.contains(e.target) &&
            !button.contains(e.target)
        ){

            menu.classList.remove("active");

        }

    }

});








// ============================
// Product Details System
// ============================


const products = {



ak:{

name:"AK",

image:"images/products/ak.png",

description:
"Classic Collection",

info:
"Type: Sativa<br><br>\
THC: 18–22%<br><br>\
Effects:<br>\
⚡ Energetic<br>\
🎯 Focused<br>\
☀️ Daytime"


},





mango:{

name:"Mango",

image:"images/products/mango.png",

description:
"Fruit Collection",

info:
"Type: Hybrid<br><br>\
THC: 18–24%<br><br>\
Effects:<br>\
🥭 Happy<br>\
😌 Relaxed<br>\
✨ Euphoric"


},





"9lb-hammer":{

name:"9LB Hammer",

image:"images/products/9lb-hammer.png",

description:
"Elite Reserve Collection",

info:
"Type: Indica<br><br>\
THC: 23–28%<br><br>\
Effects:<br>\
🔨 Heavy body relaxation<br>\
🌙 Nighttime use<br>\
😴 Sedating"


},





superboof:{

name:"Super Boof",

image:"images/products/superboof.png",

description:
"Elite Reserve Collection",

info:
"Type: Hybrid<br><br>\
THC: 24–30%<br><br>\
Effects:<br>\
🍊 Euphoric<br>\
🎨 Creative<br>\
✨ Smooth smoke"


},





lemon:{

name:"Lemon Kush",

image:"images/products/lemon.png",

description:
"Signature Collection",

info:
"Type: Sativa<br><br>\
THC: 19–23%<br><br>\
Effects:<br>\
🍋 Uplifting<br>\
⚡ Light energy<br>\
🌿 Smooth"


},





"white-rhino":{

name:"White Rhino",

image:"images/products/white-rhino.png",

description:
"Premium Collection",

info:
"Type: Indica<br><br>\
THC: 18–22%<br><br>\
Effects:<br>\
🦏 Heavy body relaxation<br>\
😌 Calm<br>\
🌙 Long-lasting"


},





gummies:{

name:"Gummies",

image:"images/products/gummies.png",

description:
"Candy Collection",

info:
"Edible Collection<br><br>\
600mg | 6 pcs<br><br>\
Sweet Candy Style<br>\
Relaxing Experience"


},





cookies:{

name:"Cookies",

image:"images/products/cookies.png",

description:
"Sweet Collection",

info:
"Premium Cookie Collection<br><br>\
Infused Style<br><br>\
Sweet Taste Experience"


},





"thc-carts":{

name:"THC Carts",

image:"images/products/thc-carts.png",

description:
"Vape Collection",

info:
"High Potency Vape<br><br>\
1ml Cartridge<br><br>\
Premium Collection"


}


};








// ============================
// Load Product
// ============================


const params = new URLSearchParams(window.location.search);


const productID = params.get("id");



if(productID && products[productID]){


const image = document.getElementById("productImage");

const name = document.getElementById("productName");

const description = document.getElementById("productDescription");

const info = document.getElementById("productInfo");



if(image){

image.src = products[productID].image;

}



if(name){

name.innerHTML = products[productID].name;

}



if(description){

description.innerHTML = products[productID].description;

}



if(info){

info.innerHTML = products[productID].info;

}


}
