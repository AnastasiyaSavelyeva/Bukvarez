'use strict'


new WOW({
    animateClass: 'animate__animated'
}).init();

function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}

$(document).ready(function () {
//show examples

    const showButtonOne = document.getElementById('show-examples-one');
    showButtonOne.addEventListener('click', () => {
        const content = document.getElementById('example-one');
        const state = content.style.display;
        if (state === 'grid') content.style.display = 'none';
        else content.style.display = 'grid';
    })

    const showButtonTwo = document.getElementById('show-examples-two');
    showButtonTwo.addEventListener('click', () => {
        const content = document.getElementById('example-two');
        const state = content.style.display;
        if (state === 'grid') content.style.display = 'none';
        else content.style.display = 'grid';
    })

    const showButtonThree = document.getElementById('show-examples-three');
    showButtonThree.addEventListener('click', () => {
        const content = document.getElementById('example-three');
        const state = content.style.display;
        if (state === 'grid') content.style.display = 'none';
        else content.style.display = 'grid';
    })

    const showButtonFour = document.getElementById('show-examples-four');
    showButtonFour.addEventListener('click', () => {
        const content = document.getElementById('example-four');
        const state = content.style.display;
        if (state === 'grid') content.style.display = 'none';
        else content.style.display = 'grid';
    })

    const showButtonFive = document.getElementById('show-examples-five');
    showButtonFive.addEventListener('click', () => {
        const content = document.getElementById('example-five');
        const state = content.style.display;
        if (state === 'grid') content.style.display = 'none';
        else content.style.display = 'grid';
    })

    const showButtonSix = document.getElementById('show-examples-six');
    showButtonSix.addEventListener('click', () => {
        const content = document.getElementById('example-six');
        const state = content.style.display;
        if (state === 'grid') content.style.display = 'none';
        else content.style.display = 'grid';
    })

    const showButtonSeven = document.getElementById('show-examples-seven');
    showButtonSeven.addEventListener('click', () => {
        const content = document.getElementById('example-seven');
        const state = content.style.display;
        if (state === 'grid') content.style.display = 'none';
        else content.style.display = 'grid';
    })

    const showButtonEight = document.getElementById('show-examples-eight');
    showButtonEight.addEventListener('click', () => {
        const content = document.getElementById('example-eight');
        const state = content.style.display;
        if (state === 'grid') content.style.display = 'none';
        else content.style.display = 'grid';
    })


//popup-open-image
    $('.popup-open-image').magnificPopup({
        type: 'image',
        gallery: {enabled: true},
        closeBtnInside: true
    });


//more
    const modal = document.getElementById("myModal");
    const modalTwo = document.getElementById("myModalTwo");

// Get the button that opens the modal
    const btn = document.getElementById("moreButton");
    const btnTwo = document.getElementById("moreButtonTwo");

// Get the <span> element that closes the modal
    const span = document.getElementsByClassName("closeModal")[0];
    const spanTwo = document.getElementsByClassName("closeModal")[1];

// When the user clicks the button, open the modal
    btn.onclick = function () {
        modal.style.display = "block";
    }
    btnTwo.onclick = function () {
        modalTwo.style.display = "block";
    }

// When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";
    }
    spanTwo.onclick = function () {
        modalTwo.style.display = "none";
    }


    window.onclick = function (event) {
        if (event.target === modal || event.target === modalTwo) {
            modal.style.display = "none";
        }
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





