$(function(){
    $(".main-nav").mouseenter(function(){
        $(".drop").stop().slideDown();
        $(".drop-back").slideDown();
    })
    $(".main-nav").mouseleave(function(){
        $(".drop").stop().slideUp();
        $(".drop-back").slideUp();
    })
})