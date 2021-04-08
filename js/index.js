$(function(){

//이미지 hover시 background 변경

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



// 가로 스크롤
var figure = $('.main_visual_contents figure').length; //figure 갯수
var figure1 = $('.main_visual_contents figure:first').outerWidth(true); //figure 1개 크기
var total = figure * figure1; // figure의 총 width 사이즈

var lastclone = $('.main_visual_contents figure').clone();
$('.main_visual_contents').append(lastclone);


var delta,num=0,loop;
$('html').on('mousewheel DOMMouseScroll',function(e){
    delta = e.originalEvent.wheelDelta;

        clearTimeout(loop);
        loop = setTimeout(function(){
           
            if(delta<0){
                num-=figure1;
            }else{
                num+=figure1;
            }
            
            $('.main_visual_contents').animate({
                marginLeft:num
            },500,'easeInOutSine',function(){
                if(num < -total){
                    num =-Math.abs(num+total);  
                    $('.main_visual_contents').animate({
                        marginLeft:num
                    },0);  
                }
            });
        },100);
});


//prev, next
$('.prev').on('click',function(){
    num+=figure1;
    $('.main_visual_contents').animate({
        marginLeft:num
    },500,'easeInOutSine',function(){
        if(num < -total){
            num =-Math.abs(num+total);  
            $('.main_visual_contents').animate({
                marginLeft:num
            },0);  
        }
    });

})
$('.next').on('click',function(){
    num-=figure1;
    $('.main_visual_contents').animate({
        marginLeft:num
    },500,'easeInOutSine',function(){
        if(num < -total){
            num =-Math.abs(num+total);  
            $('.main_visual_contents').animate({
                marginLeft:num
            },0);  
        }
    });
})












});