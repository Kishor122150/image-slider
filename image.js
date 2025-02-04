// script.js
let currentSlide = 0;
const slides = document.querySelector('.slides');
const totalSlides = document.querySelectorAll('.slide').length;

function showSlide(index) {
    if (index >= totalSlides) {
        currentSlide = 0; // Loop back to the first slide
    } else if (index < 0) {
        currentSlide = totalSlides - 1; // Loop to the last slide
    } else {
        currentSlide = index;
    }
    const offset = -currentSlide * 100; // Calculate the offset for the slide
    slides.style.transform = `translateX(${offset}%)`; // Move the slides
}

function nextSlide() {
    showSlide(currentSlide + 1); // Show the next slide
}

function prevSlide() {
    showSlide(currentSlide - 1); // Show the previous slide
}

// Remove auto-play (if previously added)