'use strict'


/*$(document).ready(function(){
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
});*/

new WOW({
    animateClass: 'animate__animated'
}).init();

function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}


//progress-bar
/*
window.onscroll = function() {myFunction()};

function myFunction() {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
}*/

//drop-menu
$(window).ready(function () {
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

    /*//input-mask
    const phone = document.getElementById('phone')
    phone.inputmask({"mask": "+7 (999) 999-99-99"});*/

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


    $('#about').on('click', function (e) {
        e.preventDefault();
        $('.about')[0].scrollIntoView({behavior: "smooth"});
    })

    $('#contacts').on('click', function (e) {
        e.preventDefault();
        $('.contacts')[0].scrollIntoView({behavior: "smooth"});
    })

//collapse

    const coll = document.getElementsByClassName("collapsible");

    for (let i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function () {
            this.classList.toggle("active");
            const content = this.nextElementSibling;
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
                content.style.padding = '0px 18px';
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
                content.style.padding = '15px';
            }
        });
    }


//main

    $(document).ready(function ($) {
        // проверка является ли .cd-image-container в области видимости
        // ...

        // делаем элемент .cd-handle движимым и сменяем позицию .cd-resize-img
        $('.cd-image-container').each(function () {
            var actual = $(this);
            drags(actual.find('.cd-handle'), actual.find('.cd-resize-img'), actual);
        });
    });

// реализация перетаскивание http://css-tricks.com/snippets/jquery/draggable-without-jquery-ui/
    function drags(dragElement, resizeElement, container) {
        dragElement.on("mousedown vmousedown", function (e) {
            dragElement.addClass('draggable');
            resizeElement.addClass('resizable');

            let dragWidth = dragElement.outerWidth(),
                xPosition = dragElement.offset().left + dragWidth - e.pageX,
                containerOffset = container.offset().left,
                containerWidth = container.outerWidth(),
                minLeft = containerOffset + 10,
                maxLeft = containerOffset + containerWidth - dragWidth - 10;

            dragElement.parents().on("mousemove vmousemove", function (e) {
                let leftValue = e.pageX + xPosition - dragWidth;

                if (leftValue < minLeft) {
                    leftValue = minLeft;
                } else if (leftValue > maxLeft) {
                    leftValue = maxLeft;
                }

                let widthValue = (leftValue + dragWidth / 2 - containerOffset) * 100 / containerWidth + '%';

                $('.draggable').css('left', widthValue).on("mouseup vmouseup", function () {
                    $(this).removeClass('draggable');
                    resizeElement.removeClass('resizable');
                });

                $('.resizable').css('width', widthValue);

                // ...

            }).on("mouseup vmouseup", function (e) {
                dragElement.removeClass('draggable');
                resizeElement.removeClass('resizable');
            });
            e.preventDefault();
        }).on("mouseup vmouseup", function (e) {
            dragElement.removeClass('draggable');
            resizeElement.removeClass('resizable');
        });
    }

})

//scroll-button
// Получить кнопку:
const myButton = document.getElementById("myBtn");

// Когда пользователь прокручивает вниз 20px от верхней части документа, покажите кнопку
window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        myButton.style.display = "block";
    } else {
        myButton.style.display = "none";
    }
}

// Когда пользователь нажимает на кнопку, прокрутите до верхней части документа
function topFunction() {

    document.body.scrollTop = 0; // Для Safari
    document.documentElement.scrollTop = 0; // Для Chrome, Firefox, IE и Opera
}







