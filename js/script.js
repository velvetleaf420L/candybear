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

        description:"Candy Bear Collection item.",

        info:"Product information will appear here."

    },



    mango:{

        name:"Mango",

        image:"images/products/mango.png",

        description:"Candy Bear Collection item.",

        info:"Product information will appear here."

    },



    "9lb-hammer":{

        name:"9LB Hammer",

        image:"images/products/9lb-hammer.png",

        description:"Candy Bear Collection item.",

        info:"Product information will appear here."

    },



    superboof:{

        name:"Super Boof",

        image:"images/products/superboof.png",

        description:"Candy Bear Collection item.",

        info:"Product information will appear here."

    },



    lemon:{

        name:"Lemon Kush",

        image:"images/products/lemon.png",

        description:"Candy Bear Collection item.",

        info:"Product information will appear here."

    },



    "white-rhino":{

        name:"White Rhino",

        image:"images/products/white-rhino.png",

        description:"Candy Bear Collection item.",

        info:"Product information will appear here."

    },



    gummies:{

        name:"Gummies",

        image:"images/products/gummies.png",

        description:"Candy Bear Collection item.",

        info:"Product information will appear here."

    },



    cookies:{

        name:"Cookies",

        image:"images/products/cookies.png",

        description:"Candy Bear Collection item.",

        info:"Product information will appear here."

    },



    "thc-carts":{

        name:"THC Carts",

        image:"images/products/thc-carts.png",

        description:"Candy Bear Collection item.",

        info:"Product information will appear here."

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
