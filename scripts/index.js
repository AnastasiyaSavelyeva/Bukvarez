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

//progress-bar

window.onscroll = function() {myFunction()};

function myFunction() {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
}

//drop-menu

const dropMenu = document.getElementById('drop-menu');
const list = document.getElementById('drop-list');

dropMenu.addEventListener('click', () => {
    list.style.display === 'block' ? list.style.display = 'none' : list.style.display = 'block';
})

window.addEventListener('click', e => {
    const target = e.target
    if (!target.closest('#drop-list') && !target.closest('#drop-menu')) {
        list.style.display = 'none'
    }
})

//popup

const popupButton = document.getElementById('popup-button');
const closeButton = document.getElementById('close')
const popup = document.getElementById('popup');

popupButton.addEventListener('click', () => {
    popup.style.display = 'flex';
})

closeButton.addEventListener('click', () => {
    popup.style.display = 'none';
})

//scrolling


$('#about').on('click', function(e) {
    e.preventDefault();
    $('.about')[0].scrollIntoView({behavior: "smooth"});
})

$('#contacts').on('click', function(e) {
    e.preventDefault();
    $('.contacts')[0].scrollIntoView({behavior: "smooth"});
})

//collapse

const coll = document.getElementsByClassName("collapsible");

for (let i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        const content = this.nextElementSibling;
        if (content.style.maxHeight){
            content.style.maxHeight = null;
            content.style.padding = '0px 18px';
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
            content.style.padding = '15px';
        }
    });
}





