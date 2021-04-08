$(function(){

    // 스크롤시 글자 위로
    var scrPos,imgPos;
    $(window).on('scroll',function(){
        scrPos = $(this).scrollTop();

        imgPos = $('.about_us,.about_section').offset().top;
        imgPos2 = $('.about_section').offset().top;
        imgPos3 = $('.jobs_section').offset().top;

        if(imgPos-500 < scrPos){
            $('.p_title p, .p_overtitle p').addClass('active');
        }
        if(imgPos2-100 < scrPos){
            $('.about_section p, .about_section h2').addClass('active');
        }
        if(imgPos3-500 < scrPos){
            $('.jobs_section p, .jobs_section h2').addClass('active');
        }
    });

    // prev, next 슬라이드
    var num = 0, sliderWin,sliderGrab,total;
    $('.slider_nav button').on('click',function(){
        var idx = $(this).index();  
        sliderWin = $(window).width();
        sliderGrab = $(".slider_grab").width();
        total = sliderWin-sliderGrab
       
        if(idx == 1){
            num--;
            $(".slider_grab").css({transform:'translateX('+total+'px)'})
            $(this).find('path').css({opacity:'.2'})
            $('.prev path').css({opacity:'1'})        
        }else{
            num++;
            $(".slider_grab").css({transform:'translateX(0%)'})
            if(idx == 0 ) { $('.prev path').css({opacity:'.2'}) }
            $('.next path').css({opacity:'1'})
        }
    });

    




    
    








    
});