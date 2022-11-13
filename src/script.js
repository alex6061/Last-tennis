$(function() {

    $('.slider__field').slick ({
        arrows:true,
        
        nextArrow: '.arrow__prev',
        prevArrow:'.arrow__next' ,

    })

})


$(function() {

    $('.trainer__wrapper').slick ({
        // arrows:true,

        slidesToShow: 6,
        Infinity: true,


        prevArrow: '.trainee-button-next',
        nextArrow: '.trainee-button-prev',
    })

})


$(function() {

    $('.services').slick ({
        slidesToShow: 1,
        Infinity: true,

        prevArrow: '.prices-button__next',
        nextArrow: '.prices-button__prev',
    })

}) 







