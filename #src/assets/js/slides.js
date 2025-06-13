// main page main banner
$('.banner22').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
    dots: true,
    // autoplay: true,
    // autoplaySpeed: 2000,
    nextArrow: '<div class="arrowRight"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.91016 19.9201L15.4302 13.4001C16.2002 12.6301 16.2002 11.3701 15.4302 10.6001L8.91016 4.08014" stroke="black" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg></div>',
    prevArrow: '<div class="arrowLeft"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.9998 19.9201L8.47984 13.4001C7.70984 12.6301 7.70984 11.3701 8.47984 10.6001L14.9998 4.08014" stroke="black" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg></div>',
    responsive: [
        {
            breakpoint: 576,
            settings: {
                arrows: false,
            }
        },
       
    ],
});

//stones slider in labrory page
if($(window).width() < 992) {
    $('.stones__items').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        infinite: false,
        dots: false,
        arrows: false,
        responsive: [           
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 5,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 4.3,
                    slidesToScroll: 1,
                }
            },
        ],
    });
}


//stones slider in labrory page
$('.lab__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
    dots: false,
    arrows: true,
    nextArrow: '<div class="arrowRight"><svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none"><path d="M23.7617 53.1199L41.1484 35.7332C43.2017 33.6799 43.2017 30.3199 41.1484 28.2666L23.7617 10.8799" stroke="black" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg></div>',
    prevArrow: '<div class="arrowLeft"><svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none"><path d="M40.2383 10.8801L22.8516 28.2668C20.7983 30.3201 20.7983 33.6801 22.8516 35.7334L40.2383 53.1201" stroke="black" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg></div>',

});

// about page slider in founder block
$('.founder__slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: false,
    dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: '<div class="arrowRight"><svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none"><path d="M23.7598 53.1199L41.1464 35.7332C43.1998 33.6799 43.1998 30.3199 41.1464 28.2666L23.7598 10.8799" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg></div>',
    prevArrow: '<div class="arrowLeft"><svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none"><path d="M23.7598 53.1199L41.1464 35.7332C43.1998 33.6799 43.1998 30.3199 41.1464 28.2666L23.7598 10.8799" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg></div>',
    responsive: [
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 2,
                arrows: false,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1.2,
                arrows: false,
            }
        },
    ],
});

//event page gallery
$('.gallery__slider').slick({
    slidesToShow: 3.5,
    slidesToScroll: 1,
    infinite: false,
    arrows: true,
    dots: false,
    nextArrow: '<div class="arrowRight"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M6.66602 16H25.3327" stroke="url(#paint0_linear_3095_62510)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M16 6.66666L25.3333 16L16 25.3333" stroke="url(#paint1_linear_3095_62510)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><defs><linearGradient id="paint0_linear_3095_62510" x1="15.0476" y1="15.9278" x2="14.7358" y2="19.2068" gradientUnits="userSpaceOnUse"><stop stop-color="#29817A"/><stop offset="1" stop-color="#0D1457"/></linearGradient><linearGradient id="paint1_linear_3095_62510" x1="20.1908" y1="5.31851" x2="4.07565" y2="9.85675" gradientUnits="userSpaceOnUse"><stop stop-color="#29817A"/><stop offset="1" stop-color="#0D1457"/></linearGradient></defs></svg></div>',
    prevArrow: '<div class="arrowLeft"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M6.66602 16H25.3327" stroke="url(#paint0_linear_3095_62510)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M16 6.66666L25.3333 16L16 25.3333" stroke="url(#paint1_linear_3095_62510)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><defs><linearGradient id="paint0_linear_3095_62510" x1="15.0476" y1="15.9278" x2="14.7358" y2="19.2068" gradientUnits="userSpaceOnUse"><stop stop-color="#29817A"/><stop offset="1" stop-color="#0D1457"/></linearGradient><linearGradient id="paint1_linear_3095_62510" x1="20.1908" y1="5.31851" x2="4.07565" y2="9.85675" gradientUnits="userSpaceOnUse"><stop stop-color="#29817A"/><stop offset="1" stop-color="#0D1457"/></linearGradient></defs></svg></div>',
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2.5,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1.5,
            }
        },
       
    ],
});

//sovetpage chrono
$('.chrono__slider').slick({
    slidesToShow: 6.2,
    slidesToScroll: 1,
    infinite: false,
    arrows: true,
    dots: false,
    nextArrow: '<div class="arrowRight"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M6.66602 16H25.3327" stroke="url(#paint0_linear_3095_62510)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M16 6.66666L25.3333 16L16 25.3333" stroke="url(#paint1_linear_3095_62510)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><defs><linearGradient id="paint0_linear_3095_62510" x1="15.0476" y1="15.9278" x2="14.7358" y2="19.2068" gradientUnits="userSpaceOnUse"><stop stop-color="#29817A"/><stop offset="1" stop-color="#0D1457"/></linearGradient><linearGradient id="paint1_linear_3095_62510" x1="20.1908" y1="5.31851" x2="4.07565" y2="9.85675" gradientUnits="userSpaceOnUse"><stop stop-color="#29817A"/><stop offset="1" stop-color="#0D1457"/></linearGradient></defs></svg></div>',
    prevArrow: '<div class="arrowLeft"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M6.66602 16H25.3327" stroke="url(#paint0_linear_3095_62510)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M16 6.66666L25.3333 16L16 25.3333" stroke="url(#paint1_linear_3095_62510)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><defs><linearGradient id="paint0_linear_3095_62510" x1="15.0476" y1="15.9278" x2="14.7358" y2="19.2068" gradientUnits="userSpaceOnUse"><stop stop-color="#29817A"/><stop offset="1" stop-color="#0D1457"/></linearGradient><linearGradient id="paint1_linear_3095_62510" x1="20.1908" y1="5.31851" x2="4.07565" y2="9.85675" gradientUnits="userSpaceOnUse"><stop stop-color="#29817A"/><stop offset="1" stop-color="#0D1457"/></linearGradient></defs></svg></div>',
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 5.2,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 4.2,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 3.2,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1.3,
            }
        },
    ],
});

//sovetpage members
if($(window).width() > 768) {
    $('.members__items').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: false,
        arrows: true,
        dots: false,
        nextArrow: '<div class="arrowRight"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M6.66602 16H25.3327" stroke="url(#paint0_linear_3095_62510)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M16 6.66666L25.3333 16L16 25.3333" stroke="url(#paint1_linear_3095_62510)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><defs><linearGradient id="paint0_linear_3095_62510" x1="15.0476" y1="15.9278" x2="14.7358" y2="19.2068" gradientUnits="userSpaceOnUse"><stop stop-color="#29817A"/><stop offset="1" stop-color="#0D1457"/></linearGradient><linearGradient id="paint1_linear_3095_62510" x1="20.1908" y1="5.31851" x2="4.07565" y2="9.85675" gradientUnits="userSpaceOnUse"><stop stop-color="#29817A"/><stop offset="1" stop-color="#0D1457"/></linearGradient></defs></svg></div>',
        prevArrow: '<div class="arrowLeft"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M6.66602 16H25.3327" stroke="url(#paint0_linear_3095_62510)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M16 6.66666L25.3333 16L16 25.3333" stroke="url(#paint1_linear_3095_62510)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><defs><linearGradient id="paint0_linear_3095_62510" x1="15.0476" y1="15.9278" x2="14.7358" y2="19.2068" gradientUnits="userSpaceOnUse"><stop stop-color="#29817A"/><stop offset="1" stop-color="#0D1457"/></linearGradient><linearGradient id="paint1_linear_3095_62510" x1="20.1908" y1="5.31851" x2="4.07565" y2="9.85675" gradientUnits="userSpaceOnUse"><stop stop-color="#29817A"/><stop offset="1" stop-color="#0D1457"/></linearGradient></defs></svg></div>',
       
    });
}

//product page also block slider
if($(window).width() < 992) {
    $('.category__items3').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: false,
        arrows: false,
        dots: false,      
        responsive: [
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2.2,
                }
            },
        ]   
    });
}
