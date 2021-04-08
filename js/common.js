$(function(){

        
    //토글메뉴 클릭 이벤트
    $('.menu_toggle').on('click',function(){
        $('.menu_nav').toggleClass('active');
    })


    //스크롤 부드럽게
    $('html').smoothWheel();


})