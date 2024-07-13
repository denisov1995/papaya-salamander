
const pagination = document.querySelector('.banner__pagination');
const paginationSlides = pagination.querySelectorAll('li');
const slider = document.querySelector('.banner-img__list');
const slides = slider.querySelectorAll('li');
 
// Store the total number of images
const slideCount = slides.length;
const paginCount = paginationSlides.length;
let activeSlide = 0;
let activePagin = 0;
 
// To change the images dynamically every 
// 5 Secs, use SetInterval() method
setInterval(() => {
  slides[activeSlide].classList.remove('active');
  activeSlide++;
  if (activeSlide === slideCount) {
    activeSlide = 0;
  }
  slides[activeSlide].classList.add('active');
  activePagin++;  
  if (activePagin === paginCount) {
    for(let i = 0; i<paginCount; i++){
      paginationSlides[i].classList.remove('active');
    }
    activePagin = 0;
  }
  paginationSlides[activePagin].classList.add('active');
}, 10000);