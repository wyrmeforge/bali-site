$(document).ready(function(){
    $('.fade').slick({
        dots: true,
        arrows: true,
        infinite: true,
        speed: 500,
        cssEase: 'linear',
        nextArrow: document.querySelectorAll('.btn-next'),
        prevArrow: document.querySelectorAll('.btn-prev'),
        fade: true,
    });


});