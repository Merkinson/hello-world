const slider = document.querySelector('.slider-carousel');
const slides = document.querySelectorAll('.slider-item');

const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

let counter = 1;
const size = slides[0].clientWidth;

function updateSlider() {
    slider.style.transform = 'translateX(' + (-size * counter) + 'px)';
}

updateSlider();

prevBtn.addEventListener('click', () => {
    if (counter <= 0) return;
    slider.style.transition = 'transform 0.5s ease-in-out';
    counter--;
    updateSlider();
})

nextBtn.addEventListener('click', () => {
    if (counter >= slides.length - 1) return;
    slider.style.transition = 'transform 0.5s ease-in-out';
    counter++;
    updateSlider();
})

slider.addEventListener('transitionend', () => {
    if (slides[counter].id === 'slide-copy-first') {
        slider.style.transition = 'none';
        counter = slides.length - counter;
        updateSlider();
    }

    if (slides[counter].id === 'slide-copy-last') {
        slider.style.transition = 'none';
        counter = slides.length - 2;
        updateSlider();
    }
})
