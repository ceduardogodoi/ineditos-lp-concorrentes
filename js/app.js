$(document).foundation();

$(document).ready(() => {
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
});
