$(document).ready(function () {
    $("#book-buzz").owlCarousel({
        items: 4,
        itemsDesktop: [1000, 4],
        itemsDesktopSmall: [979, 3],
        itemsTablet: [768, 2],
        pagination: false,
        navigation: true,
        navigationText: ["", ""],
        autoPlay: false,
    });

    // For Growing it back Image slider 
    $("#growing-image-slider").owlCarousel({
        items: 4,
        itemsDesktop: [1000, 4],
        itemsDesktopSmall: [979, 3],
        itemsTablet: [768, 2],
        pagination: false,
        navigation: false,
        navigationText: ["", ""],
        autoPlay: true,
    });
    $("#growing-image-slider2").owlCarousel({
        items: 4,
        itemsDesktop: [1000, 4],
        itemsDesktopSmall: [979, 3],
        itemsTablet: [768, 2],
        pagination: false,
        navigation: false,
        navigationText: ["", ""],
        autoPlay: true,
    });


});