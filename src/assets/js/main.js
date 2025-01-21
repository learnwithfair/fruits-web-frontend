'use strict';

(function ($) {

    /*------------------
        Preloader
    --------------------*/
    // $(window).on('load', function () {
    //     $(".loader").fadeOut();
    //     $("#preloder").delay(200).fadeOut("slow");

    //     /*------------------
    //         Gallery filter
    //     --------------------*/
    //     $('.filter__controls li').on('click', function () {
    //         $('.filter__controls li').removeClass('active');
    //         $(this).addClass('active');
    //     });
    //     if ($('.product__filter').length > 0) {
    //         var containerEl = document.querySelector('.product__filter');
    //         var mixer = mixitup(containerEl);
    //     }
    // });

    /*------------------
        Background Set
    --------------------*/
    // $('.set-bg').each(function () {
    //     var bg = $(this).data('setbg');
    //     $(this).css('background-image', 'url(' + bg + ')');
    // });

    // //Search Switch
    $('.search-switch').on('click', function () {
        $('.search-model').fadeIn(400);
    });

    $('.search-close-switch').on('click', function () {
        $('.search-model').fadeOut(400, function () {
            $('#search-input').val('');
        });
    });

    /*------------------
        Navigation
    --------------------*/
    $(".mobile-menu").slicknav({
        prependTo: '#mobile-menu-wrap',
        allowParentLinks: true
    });

    /*------------------
        Accordin Active
    --------------------*/
    $('.collapse').on('shown.bs.collapse', function () {
        $(this).prev().addClass('active');
    });

    $('.collapse').on('hidden.bs.collapse', function () {
        $(this).prev().removeClass('active');
    });

    //Canvas Menu
    $(".canvas__open").on('click', function () {
        $(".offcanvas-menu-wrapper").addClass("active");
        $(".offcanvas-menu-overlay").addClass("active");
    });

    $(".offcanvas-menu-overlay").on('click', function () {
        $(".offcanvas-menu-wrapper").removeClass("active");
        $(".offcanvas-menu-overlay").removeClass("active");
    });


    // Shop Tab Area 


    $(".single-shop-tab").click(function () {
        // Remove active class from all tabs and tab contents
        $(".single-shop-tab").removeClass("active");
        $(".tab-content").removeClass("active");

        // Add active class to the clicked tab and corresponding content
        $(this).addClass("active");
        $("#" + $(this).data("tab")).addClass("active");
    });

    // Collapse With Tap 
    $(document).ready(function () {
        const images = [
            "#image-3-days",
            "#image-step-1",
            "#image-step-2",
            "#image-step-3",
        ];

        $(".shop-collapse-title").on("click", function () {
            const content = $(this).next(".shop-collapse-content");
            const icon = $(this).find(".shop-collapse-icon");
            const index = $(this).parent().prevAll("div").length;

            if (content.hasClass("show")) {
                content.removeClass("show");
                icon.text("+");
                // $(images[index]).removeClass("show");
            } else {
                $(".shop-collapse-content").removeClass("show");
                $(".shop-collapse-icon").text("+");
                $(".shop-collapse-image-container").removeClass("show");

                content.addClass("show");
                icon.text("—");
                $(images[index]).addClass("show");
            }
        });
    });

    // Hail to Kale (Product-1)

    $(document).on("click", "#btn-close", function () {
        $("#product1Modal").hide();
    });



    $(document).ready(function () {
        $(".increment").on("click", function () {
            let input = $(this).siblings("input");
            let currentValue = parseInt(input.val());
            input.val(currentValue + 1);
        });

        $(".decrement").on("click", function () {
            let input = $(this).siblings("input");
            let currentValue = parseInt(input.val());
            if (currentValue > 1) {
                input.val(currentValue - 1);
            }
        });
    });


})(jQuery);