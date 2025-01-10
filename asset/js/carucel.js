document.addEventListener('DOMContentLoaded', function () {
    new Splide('#image-carousel', {
        type: 'loop',
        perPage: 3,
        autoplay: true,
        breakpoints: {
            1100: {
                perPage: 3,
            },
            640: {
                perPage: 1,
            },
        },
    }).mount();
});

document.addEventListener('DOMContentLoaded', function () {
    new Splide('#text-carousel1',  {
        type   : 'loop',
        perPage: 1,
        autoplay: true,
        interval: 5000,
    }).mount();
});

document.addEventListener('DOMContentLoaded', function () {
    new Splide('#text-carousel2',  {
        type   : 'loop',
        perPage: 1,
        autoplay: true,
        interval: 5000,
    }).mount();
});