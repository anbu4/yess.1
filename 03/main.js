const navbarLinks = document.querySelectorAll('.navbar-links a')
navbarLinks[0].addEventListener('click',function(){
    document.querySelector('.section_work').scrollIntoView({behavior:'smooth'})
})
const burger = document.querySelector('.nav_burger')
const navbar = document.querySelector('.navbar-links')
addEventListener('click',function(){
    navbar.classList.toggle('flex')
})