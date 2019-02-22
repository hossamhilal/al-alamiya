/*global $ */
$(document).ready(function ($) {
    'use strict';

    /*=====  WOW  ========*/
    new WOW().init();


    $("body").niceScroll({
        cursorcolor: "rgb(54, 164, 193)",
        cursorwidth: "5",
        cursorminheight: 40,
        background: "transparent",
        cursorborder: "1px solid rgb(54, 164, 193)",
        cursorborderradius: 5
    });


    // Open navbarSide when button is clicked
    $('.header-nav .btn').on('click', function () {
        $('.header-nav ul').addClass('show-sidenav');
        $('.header-nav  .over-lay').show();
    });

    // Close navbarSide when the outside of menu is clicked
    $('.header-nav  .over-lay').on('click', function () {
        $('.header-nav ul').removeClass('show-sidenav');
        $('.header-nav  .over-lay').hide();
    });



    //SCROLL STICKY NAV  FIXED
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.header-nav').addClass("navbar-fixed-top");
        }
        else {
            $('.header-nav').removeClass("navbar-fixed-top");
        }
    });


    // ===== Scroll to Top ==== 
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 500) {    // If page is scrolled more than 50px
            $('.scrol-top').fadeIn(200);    // Fade in the arrow
        } else {
            $('.scrol-top').fadeOut(200);   // Else fade out the arrow
        }
    });
    $('.scrol-top').click(function () {      // When arrow is clicked
        $('body,html').animate({
            scrollTop: 0                       // Scroll to top of body
        }, 1000);
    });





});



$(document).ready(function ($) {
    'use strict';

    // PHOTO GALLERY BIG SHOW PHOTO
    $('.home-slider').owlCarousel({
        items: 20,
        rtl: true,
        margin: 0,
        autoplay: true,
        dots:true,
        navText: ["<i class='icofont icofont-simple-right'></i>", "<i class='icofont icofont-simple-left'></i>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });


    // projest-owl
    $('.projest-owl').owlCarousel({
        rtl: true,
        margin: 0,
        autoplay: true,
        loop:true,
        nav: true,
        navText: ["<i class='icofont icofont-simple-right'></i>", "<i class='icofont icofont-simple-left'></i>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });


    // partners-owl
    $('.partners-owl').owlCarousel({
        rtl: true,
        margin: 10,
        autoplay: true,
        loop:true,
        nav: true,
        navText: ["<i class='icofont icofont-simple-right'></i>", "<i class='icofont icofont-simple-left'></i>"],
        responsive: {
            0: {
                items: 1
            },
            481: {
                items: 2
            },
            600: {
                items: 4
            },
            1000: {
                items: 4
            }
        }
    });


    // clients-owl
    $('.clients-owl').owlCarousel({
        rtl: true,
        margin: 10,
        autoplay: true,
        loop:true,
        nav: true,
        navText: ["<i class='icofont icofont-simple-right'></i>", "<i class='icofont icofont-simple-left'></i>"],
        responsive: {
            0: {
                items: 1
            },
            481: {
                items: 2
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    });



    // PHOTO GALLERY BIG SHOW PHOTO
    $('.project-page-slider').owlCarousel({
        rtl: true,
        margin: 0,
        autoplay: true,
        // nav:true,
        navText: ["<i class='icofont icofont-simple-right'></i>", "<i class='icofont icofont-simple-left'></i>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });


    
    

});

var beaches = [
    ['Matrouh', 31.356888, 27.267245, 1]
];

function initMap() {
    var myLatLng = { lat: 31.3568883, lng: 27.2672453 };

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 16,
        center: myLatLng
    });
    setMarkers(map);
}

function setMarkers(map) {
    var image = {
        url: 'images/map.png',
        size: new google.maps.Size(50, 82),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(0, 32)
    };
    var shape = {
        coords: [1, 1, 1, 20, 18, 20, 18, 1],
        type: 'poly'
    };
    for (var i = 0; i < beaches.length; i++) {
        var beach = beaches[i];
        var marker = new google.maps.Marker({
            position: { lat: beach[1], lng: beach[2] },
            map: map,
            icon: image,
            shape: shape,
            title: beach[0],
            zIndex: beach[3]
        });
    }
}