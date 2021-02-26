var menuToggle = document.querySelector('.menu_toggle');
var menuNav = document.querySelector('.menu_nav');

menuToggle.addEventListener('click',function(){
    menuNav.classList.toggle('active');
})