import { ImageSlider } from './src/js/imageSlider.js';

// Initialize the slider when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const sliderContainer = document.querySelector('.slider-container');
    if (sliderContainer) {
        new ImageSlider(sliderContainer);
    }
});