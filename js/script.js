// Mobile Menu

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



// close when clicking outside

document.addEventListener("click", function(e){

    const menu = document.getElementById("mobileMenu");

    const button = document.querySelector(".menu-btn");


    if(menu && 
       !menu.contains(e.target) && 
       !button.contains(e.target)){

        menu.classList.remove("active");

    }


});
