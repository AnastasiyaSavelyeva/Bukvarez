$(document).ready(function(){
    $('.slider-inner').slick({
        arrows: true,
        prevArrow: '.arrow-prev',
        nextArrow: '.arrow-next',
        dots: false,
        dotsClass: 'slick-dots',
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
});
});

/*const dropMenu = document.getElementById('drop-menu');


dropMenu.addEventListener('click', () => {
    const list = document.getElementById('drop-list');

    list.style.display === 'block' ? list.style.display = 'none' : list.style.display = 'block';

})*/


