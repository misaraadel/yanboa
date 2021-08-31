$(document).ready(function () {
    /*start the loading page */
    $(window).on("load", function () {
        $(".loader")
            .fadeOut(2000, function () {
                $("body").css("overflow", "auto");
                $("this").fadeOut(1500, function () {
                    $(this).remove();
                });
            });
    });
     //scroll to top make fade for button
     $(window).scroll(function () {
        if ($(this).scrollTop() > 700) {
            $(".scroll-top-button").fadeIn();
        } else {
            $(".scroll-top-button").fadeOut();
        }
    });
    //scroll to top button
    $(".scroll-top-button").on('click', function () {
        $('html , body').animate({
            scrollTop: 0
        }, 100);
    });
    //change navbar color on scroll
    $(function () {
        $(document).scroll(function () {
            var $nav = $(".navbar-fixed-top");
            $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
        });
    });
    //bottom nav 
    $('.bottom-nav li a').click(function(){
        var position = $(this).position();
        var margin = 37;
        $('.slider').css({"left":+position.left+margin ,  "transform": "translateX(-50%)"});
        $('.bottom-nav li a').removeClass('active-icon');
        $(this).addClass('active-icon');
    });
    //open and close cart page 
    $('.cart').click(function(){
        $('.cart-page').addClass('active-cart');
    });
    $('.cart-overlay').click(function(){
        $('.cart-page').removeClass('active-cart');
    });
    //owl header 
    $('.owl-header').owlCarousel({
        rtl: true,
        loop:true,
        margin: 20,
        nav:false,
        dots: true,
        autoplay: true,
        touchDrag  : false,
		mouseDrag  : false,
		autoWidth: false,
		animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        autoplayTimeout: 6000,
		smartSpeed: 2000,
		dragEndSpeed: 2000,
		slidSpeed: 900,
        paginationSpeed: 900,
        autoplayHoverPause: true,
        items:1
    });
    //owl category
    $('.owl-category').owlCarousel({
        rtl: true,
        loop:false,
        margin: 20,
        nav:false,
        dots: true,
        autoplay: true,
		autoWidth: false,
		animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        autoplayTimeout: 6000,
		smartSpeed: 2000,
		dragEndSpeed: 2000,
		slidSpeed: 900,
        paginationSpeed: 900,
        autoplayHoverPause: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items: 1 
            },
            1000:{
                items: 5 
            }
        }
    });
    //product slider 
    $('.owl-product').owlCarousel({
        rtl: true,
        loop:true,
        margin: 20,
        nav:false,
        dots: true,
        autoplay: true,
        touchDrag  : false,
		mouseDrag  : false,
		autoWidth: false,
		animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        autoplayTimeout: 6000,
		smartSpeed: 2000,
		dragEndSpeed: 2000,
		slidSpeed: 900,
        paginationSpeed: 900,
        autoplayHoverPause: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:4
            }
        }
    });
    //fancybox
    $('[data-fancybox="gallery"]').fancybox({
        arrows: false,
        loop: false,
        keyboard: false,
        infobar: false,
        protect: true,
        image: {
            preload: true
        },
        hideScrollbar: true,
        touch: false
        
    });
    //add to cart 
    $('.add-cart').on('click', function () {
        var cart = $('.cart-circle');
        var imgtodrag = $(this).closest('.box').find("img").first();
        if (imgtodrag) {
            var imgclone = imgtodrag.clone()
                .offset({
                    
                top: imgtodrag.offset().top ,
                left: imgtodrag.offset().left
            })
                .css({
                'opacity': '0.8',
                    'position': 'absolute',
                    'height': '150px',
                    'width': '150px',
                    'border-radius': '50%',
                    'z-index': '9999'
            })
            .appendTo($('body'))
                .animate({
                'top': cart.offset().top + 10,
                    'left': cart.offset().left + 10,
                    'width': 75,
                    'height': 75
            }, 1000, 'easeInOutExpo');
            
            setTimeout(function () {
                cart.effect("shake", {
                    times: 2
                }, 200);
               
            }, 1500);

            imgclone.animate({
                'width': 0,
                    'height': 0
            }, function () {
                $(this).detach()
            });
        }
    });  
    //active nav 
    $('.mobile-nav-button').click(function(){
        $('.mobile-nav').addClass('active-nav');
    }); 
    $('.toggle-account').click(function(){
        $('.account-list').addClass('active-list');
    });
    $('.toggle-currency').click(function(){
        $('.Currency-list').addClass('active-list');
    });
    $('.toggle-lang').click(function(){
        $('.lang-list').addClass('active-list');
    });
    $('.toggle-general').click(function(){
        $('.general-list').addClass('active-list');
    });
    $('.closeList').click(function(){
        $('.account-list').removeClass('active-list');
        $('.Currency-list').removeClass('active-list');
        $('.lang-list').removeClass('active-list');
        $('.general-list').removeClass('active-list');
    });
   
    $('.nav-overlay').click(function(){
        $('.mobile-nav').removeClass('active-nav');
        $('.account-list').removeClass('active-list');
        $('.Currency-list').removeClass('active-list');
        $('.lang-list').removeClass('active-list');
        $('.general-list').removeClass('active-list');
    });
});