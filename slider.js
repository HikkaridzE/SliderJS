
const sliderLine = document.querySelector('.slider-line');
const prevButton = document.querySelector('.slider-prev');
const nextButton = document.querySelector('.slider-next');
dots = document.querySelectorAll('.dot')
cityy = document.querySelectorAll('.cityDot')
let dotIndex = 0
let cityIndex = 0
let offset = 0; //смещение от левого края

document.querySelector('.slider-next').addEventListener('click', function(){
    offset = offset + 679;
    dotIndex++
    cityIndex++
    if(offset > 1446){
        offset = 0;
        dotIndex = 0;
        cityIndex = 0;
    }
    sliderLine.style.left = -offset + 'px';
    thisSlide(dotIndex, cityIndex)
});

document.querySelector('.slider-prev').addEventListener('click', function(){
    offset = offset - 679;
    dotIndex--; 
    cityIndex--;
    if(offset < 0 ){
        offset = 1446;
        dotIndex = 1446;
        cityIndex = 1446;
    }
    sliderLine.style.left = -offset + 'px';
    thisSlide(dotIndex, cityIndex)
});

const thisSlide = (index) => {
    for (let dot of dots){
        dot.classList.remove('active')
    }
    dots[index].classList.add('active')
    for(let cityDot of cityy){
        cityDot.classList.remove('activee')
    }
    cityy[index].classList.add('activee')
}



dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        offset = 679 * index
        sliderLine.style.left = -offset + 'px';
        dotIndex = index
        thisSlide(dotIndex)
    })
})

cityy.forEach((cityDot, index) => {
    cityDot.addEventListener('click', () => {
        offset = 679 * index
        sliderLine.style.left = -offset + 'px';
        cityIndex = index
        thisSlide(cityIndex)
    })
})