// Hamburger menu: mostrare / nascondere il menu principale

const openButton = document.querySelector(".fa-bars")
const menu = document.querySelector(".hamburger-menu")
const closeButton = document.querySelector(".close")

openButton.addEventListener("click",
    function(){
        menu.classList.add('active');
    }
);
closeButton.addEventListener("click",
    function(){
        menu.classList.remove('active');
    }
);

