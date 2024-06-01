const btnLeft = document.querySelector(".btn-left");
const btnRight = document.querySelector(".btn-right");
const slider = document.querySelector('#slider')
const sliderSection = document.querySelectorAll('.slider-section');

let operacion = 0;
let counter = 0;
let withImg = 100 / sliderSection.length;

const moveRight = () => {
    if(counter >= sliderSection.length -1){ // reset
        operacion = 0;
        counter = 0;
        slider.style.transform = `translate(-${operacion}%)`;
        return;
    } 

    counter++;
    operacion = operacion + withImg;
    slider.style.transform = `translate(-${operacion}%)`;
    slider.style.transition = 'all ease .5s'
}

const moveLeft = () => {
    counter--;
    if(counter < 0){
        counter = sliderSection.length -1;
        operacion = withImg * (sliderSection.length -1)
        slider.style.transform = `translate(-${operacion}%)`;
        return;
    } 

    operacion = operacion - withImg
    slider.style.transform = `translate(-${operacion}%)`
    slider.style.transition = 'all ease .5s'
}

setInterval(() => {
    moveRight();
}, 4500);

btnLeft.addEventListener('click', () => moveLeft())
btnRight.addEventListener('click', () => moveRight())