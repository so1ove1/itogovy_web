document.addEventListener('DOMContentLoaded', function () {
    addFavicons();
    const bar = document.querySelector('.bar');
    const navLink = document.querySelector('.nav__link');
    bar.addEventListener('click', () => {
        navLink.classList.toggle('hide');
    });
});

function addFavicons() {
    const faviconLink1 = document.createElement('link');
    faviconLink1.rel = 'icon';
    faviconLink1.type = 'image/png';
    faviconLink1.sizes = '16x16';
    faviconLink1.href = '/media/favicons/favicon-16x16.png';

    const faviconLink2 = document.createElement('link');
    faviconLink2.rel = 'icon';
    faviconLink2.type = 'image/png';
    faviconLink2.sizes = '32x32';
    faviconLink2.href = '/media/favicons/favicon-32x32.png';

    const faviconLink3 = document.createElement('link');
    faviconLink3.rel = 'apple-touch-icon';
    faviconLink3.sizes = '180x180';
    faviconLink3.href = '/media/favicons/apple-touch-icon.png';

    const manifestLink = document.createElement('link');
    manifestLink.rel = 'manifest';
    manifestLink.href = '/media/favicons/site.webmanifest';

    document.head.appendChild(faviconLink1);
    document.head.appendChild(faviconLink2);
    document.head.appendChild(faviconLink3);
    document.head.appendChild(manifestLink);
}

