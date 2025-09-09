const navbarLinks = document.querySelectorAll('.navbar-links a')
navbarLinks[0].addEventListener('click',function(){
    document.querySelector('.section_work').scrollIntoView({behavior:'smooth'})
})
navbarLinks[1].addEventListener('click',function(){
    document.querySelector('.section_partner').scrollIntoView({behavior:'smooth'})
})