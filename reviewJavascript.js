const slideContainer = document.querySelector('.review-container');
const slide = document.querySelector('.review-slides');
const nextBtn = document.getElementById('nextbtn');
const pervBtn = document.getElementById('pervbtn');
const interval = 3000;

let slides = document.querySelectorAll('.review-slide');
let index = 1; 
let slideId;

const firstClone = slides[0].cloneNode(true); 
const lastClone = slides[slides.length - 1].cloneNode(true);
 
firstClone.id = 'firstClone';
lastClone.id = 'lastClone';

slide.append(firstClone);
slide.prepend(lastClone); 

const slideWidth = slides[index].clientWidth;

slide.style.transform = `translateX(${-slideWidth * index}px)`;

console.log(slides)

const startSlide = ()=> {
    slideId = setInterval(() => {
        index++;
        slide.style.transform = `translateX(${-slideWidth * index}px)`;
        slide.style.transition  = '.7s'
    }, interval);
}

slide.addEventListener('transitionend', () => {
    slides = document.querySelectorAll('.review-slide');
    if(slides[index].id === firstClone.id){
        slide.style.transition = 'none';
        index = 1;
        slide.style.transform = `translateX(${-slideWidth * index}px)`;
     } 
});

slideContainer.addEventListener('mouseenter', () => {
    clearInterval(slideId);
});
slideContainer.addEventListener('mouseleave', startSlide);


startSlide();
