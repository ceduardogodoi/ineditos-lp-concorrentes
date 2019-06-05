$(document).foundation();

$(document).ready(() => {
    if (window.matchMedia('(max-width: 767px)').matches) {
        $('.slick-slider').slick({
            dots: false,
            infinite: false,
            speed: 500,
            slidesToScroll: 1,
            arrows: false,
            autoplay: false,
            className: 'center',
            centerMode: true,
            slidesToShow: 1,
            centerPadding: '30px'
        });
    }
    // else {
    //     const slickers = document.querySelectorAll('.slick-slider');
    //     slickers.forEach(slicker => slicker.classList.remove('slick-slider'));
    // }
});
