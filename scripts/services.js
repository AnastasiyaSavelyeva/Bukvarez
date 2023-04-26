//show examples

const showButtonOne = document.getElementById('show-examples-one');
showButtonOne.addEventListener('click', () => {
    const content = document.getElementById('example-one');
    const state = content.style.display;
    if (state === 'grid') content.style.display='none';
    else content.style.display = 'grid';
})

const showButtonTwo = document.getElementById('show-examples-two');
showButtonTwo.addEventListener('click', () => {
    const content = document.getElementById('example-two');
    const state = content.style.display;
    if (state === 'grid') content.style.display='none';
    else content.style.display = 'grid';
})

const showButtonThree = document.getElementById('show-examples-three');
showButtonThree.addEventListener('click', () => {
    const content = document.getElementById('example-three');
    const state = content.style.display;
    if (state === 'grid') content.style.display='none';
    else content.style.display = 'grid';
})

const showButtonFour = document.getElementById('show-examples-four');
showButtonFour.addEventListener('click', () => {
    const content = document.getElementById('example-four');
    const state = content.style.display;
    if (state === 'grid') content.style.display='none';
    else content.style.display = 'grid';
})


//popup-open-image
$('.popup-open-image').magnificPopup({
    type: 'image',
    gallery:{enabled:true},
    closeBtnInside: true
});

