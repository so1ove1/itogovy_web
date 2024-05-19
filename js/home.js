document.addEventListener('DOMContentLoaded', function () {
    const slider = document.querySelector('.slider');
    const prevButton = document.querySelector('.prev-button');
    const nextButton = document.querySelector('.next-button');
    const slides = Array.from(slider.querySelectorAll('img'));
    const slideLen = slides.length;
    let cnt = 0;

    function showPreviousSlide() {
        cnt = (cnt - 1 + slideLen) % slideLen;
        updateSlider();
    }

    function showNextSlide() {
        cnt = (cnt + 1) % slideLen;
        updateSlider();
    }

    function updateSlider() {
        slider.classList.add('animate');
        slides.forEach((slide, index) => {
            if (index === cnt) {
                slide.style.display = 'block';
            } else {
                slide.style.display = 'none';
            }
        });
    }

    updateSlider();

    prevButton.addEventListener('click', showPreviousSlide);
    nextButton.addEventListener('click', showNextSlide);

    const intervalUpdate = setInterval(function () { showNextSlide(); }, 8000)
});