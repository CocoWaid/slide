const slides = document.querySelectorAll('.slide');
let currentIndex = 0;

const showSlide = (index) => {
  slides.forEach((slide) => {
    slide.style.display = 'none';
  });
  slides[index].style.display = 'block';
};

const nextSlide = () => {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
};

const prevSlide = () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
};

showSlide(currentIndex);

const nextButton = document.getElementById('next-button');
const prevButton = document.getElementById('prev-button');

nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);
