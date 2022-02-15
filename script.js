const navbarLinks = document.querySelector(".navbar-links-mobile")
let menu_mobile = false;

const button = document.querySelector(".nav-toggle");
button.addEventListener("click", (e) => {
    menu_mobile = !menu_mobile;
    console.log(menu_mobile);
    navbarLinks.classList.toggle("navbar-links_active")
})

const buttonClose = document.querySelector("#button_close");
buttonClose.addEventListener("click", (e) => {
    menu_mobile = !menu_mobile;
    console.log(menu_mobile)
    navbarLinks.classList.toggle("navbar-links_active")
})

const linksMobile = document.querySelector(".links-mobile");
linksMobile.addEventListener("click", (e) => {
    if(e.target && e.target.tagName === 'A'){
        console.log(e)
        navbarLinks.classList.toggle("navbar-links_active")
    }
    
})

