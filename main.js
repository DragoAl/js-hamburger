// Hamburger menu: mostrare / nascondere il menu principale

const button = document.querySelector(".fa-bars")
const openMenu = document.querySelector(".hamburger-menu")
const closeCross = document.querySelector(".close")
let element = document.querySelector(".header-right > a")
// apertura dell'hamburger menu al click sul button

button.addEventListener("click",
    function(){
        openMenu.style.display= "block";
    }

);
closeCross.addEventListener("click",
    function(){
        openMenu.style.display= "none";
    }

);
if ( openMenu.style.display == none){
    openMenu.style.display= "block";
} else {
    openMenu.style.display= "none";
}

