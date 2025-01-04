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