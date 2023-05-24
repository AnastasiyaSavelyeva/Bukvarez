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


//questions

    $(document).ready(function ($) {

        $('.cd-image-container').each(function () {
            const actual = $(this);
            drags(actual.find('.cd-handle'), actual.find('.cd-resize-img'), actual);
        });
    });

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


            }).on("mouseup vmouseup", function () {
                dragElement.removeClass('draggable');
                resizeElement.removeClass('resizable');
            });
            e.preventDefault();
        }).on("mouseup vmouseup", function () {
            dragElement.removeClass('draggable');
            resizeElement.removeClass('resizable');
        });
    }

})

//scroll-button

$('body').append('<div class="upbtn"></div>');
$(window).scroll(function() {
    if ($(this).scrollTop() > 1500) {
        $('.upbtn').css({
            bottom: '15px'
        });
    } else {
        $('.upbtn').css({
            bottom: '-80px'
        });
    }
});
$('.upbtn').on('click',function() {
    $('html, body').animate({
        scrollTop: 0
    }, 500);
    return false;
});

//form

let phone1 = $('#phone1'),
    phone2 = $('#phone2');

   phone1.inputmask({"mask": "+7 (999) 999-99-99"});
   phone2.inputmask({"mask": "+7 (999) 999-99-99"});






