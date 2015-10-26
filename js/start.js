$(function () {

//   SLIDER

    if($('.gallery-slider').length) {
        $('.owl-carousel_gallery').owlCarousel({
            items: 4,
            loop: true,
            nav: true,
            margin: 14,
            responsiveClass:true,
            responsive:{
                0:{
                    items:1
                },
                568:{
                    items:2
                },
                980:{
                    items:3
                },
                1024:{
                    items:4
                }
            }
        });
    }

    //   GALLERY

    $(".fancybox-pic").fancybox({
        prevEffect	: 'none',
        nextEffect	: 'none',
        helpers	: {
            title	: {
                type: 'outside'
            },
            thumbs	: {
                width	: 50,
                height	: 50
            }
        }
    });
});

