const btn = document.getElementById("button")
const navMobile = document.getElementById("nav-mobile-btn")
const navDesktop = document.getElementById("nav-desktop")
const closeMenu = document.getElementById('close-menu-btn')

navMobile.addEventListener('click', ()=> {
    navDesktop.style.display = "flex"
})

closeMenu.addEventListener('click', () => {
    navDesktop.style.display = "none"
})