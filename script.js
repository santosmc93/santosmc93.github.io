const navbarLinks = document.querySelector(".navbar-links-mobile")

const button = document.querySelector(".nav-toggle");
button.addEventListener("click", (e) => {
    navbarLinks.classList.toggle("navbar-links_active")
})

const buttonClose = document.querySelector("#button_close");
buttonClose.addEventListener("click", (e) => {
    navbarLinks.classList.toggle("navbar-links_active")
})

const linksMobile = document.querySelector(".links-mobile");
linksMobile.addEventListener("click", (e) => {
    if(e.target && e.target.tagName === 'A'){
        navbarLinks.classList.toggle("navbar-links_active")
    }
})

