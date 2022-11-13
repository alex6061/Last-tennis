$(function() {

    $('.slider__field').slick ({
        arrows:true,
        
        nextArrow: '.arrow__prev',
        prevArrow:'.arrow__next' ,

    })

})


$(function() {

    $('.trainer__wrapper').slick ({
        slidesToShow: 6,
        Infinity: true,


        prevArrow: '.trainee-button-next',
        nextArrow: '.trainee-button-prev',

        responsive: [
            {
            breakpoint: 1280,
            settings: {
                slidesToScroll: 2,
                slidesToShow: 5,
            }
        },
        {
            breakpoint: 1000,
            settings: {
                slidesToScroll: 2,
                slidesToShow: 4,
            }
        },
        {
            breakpoint: 779,
            settings: {
                slidesToScroll: 3,
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 624,
            settings: {
                slidesToScroll: 2,
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 328,
            settings: {
                slidesToScroll: 1,
                slidesToShow: 1,
            }
        },
    
]

})})


$(function() {

    $('.services').slick ({
        slidesToShow: 1,
        Infinity: true,

        prevArrow: '.prices-button__next',
        nextArrow: '.prices-button__prev',
    })

}) 







