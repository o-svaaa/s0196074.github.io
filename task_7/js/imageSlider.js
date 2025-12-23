$(document).ready(function(){
    $('.cover').slick({
        slidesToShow: 3,
        slidesToScroll: 2,
        infinite: true,
        dots: true,
        responsive: [{
                breakpoint: 719,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            }
        ]
    });
});