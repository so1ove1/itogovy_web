document.addEventListener('DOMContentLoaded', function () {
    const bar = document.querySelector('.bar');
    const navLink = document.querySelector('.nav__link');
    bar.addEventListener('click', () => {
        navLink.classList.toggle('hide');
    });
});