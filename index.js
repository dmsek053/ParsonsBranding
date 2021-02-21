var menuToggle = document.querySelector('.menu_toggle');
var menuNav = document.querySelector('.menu_nav');

menuToggle.addEventListener('click',function(){
    menuNav.classList.toggle('active');
})

var imgHover = document.querySelectorAll('.main_visual_contents img');

imgHover[0].addEventListener('mouseover',function(){
    document.body.style="background:rgb(212, 208, 188)";
})
imgHover[1].addEventListener('mouseover',function(){
    document.body.style="background:rgb(117, 170, 147)";
})
imgHover[2].addEventListener('mouseover',function(){
    document.body.style="background:rgb(137, 141, 85)";
})
imgHover[3].addEventListener('mouseover',function(){
    document.body.style="background:rgb(199, 192, 184)";
})
imgHover[4].addEventListener('mouseover',function(){
    document.body.style="background:rgb(161, 169, 128)";
})
imgHover[5].addEventListener('mouseover',function(){
    document.body.style="background:rgb(255, 190, 159)";
})
