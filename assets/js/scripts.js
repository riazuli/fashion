(function ($) {
	"use strict";

    jQuery(document).ready(function($){

        $(".hero-slider").owlCarousel({
            items:1,
            autoplay:true,
            loop:true,
            dots:false,
            nav:true,
            navText:['<i class="fa fa-long-arrow-left"></i>','<i class="fa fa-long-arrow-right"></i>'],
        });


        $(".testimonial-slider").owlCarousel({
            items:1,
            autoplay:true,
            loop:true,
            dots:true,
            nav:false
        });

        $(".sponsor-list").owlCarousel({
        	autoplay:true,
        	loop:true,
            margin:20,
            dots:false,
        	nav:false,
            responsive:{
                    0:{
                        items:3,
                    },
                    600:{
                        items:5,
                    },
                    1000:{
                        items:6,
                    }
            }
        });


        $(".hero-slider").on("translate.owl.carousel", function() {
            $(".single-slider h1 strong").removeClass("animated fadeInUp").css("opacity", "0");
        });

        $(".hero-slider").on("translated.owl.carousel", function() {
            $(".single-slider h1 strong").addClass("animated fadeInUp").css("opacity", "1");
        });

        $(".product-list").masonry();

        $(".menu-triger").on("click", function() {
            $(".offcanvas-menu , .offcanvas-overlay").addClass("active");
        });

        $(".search-trigger").on("click", function() {
            $(".search-box , .offcanvas-overlay").addClass("active");
        });

        $(".menu-close , .offcanvas-overlay").on("click", function() {
            $(".offcanvas-menu ,.offcanvas-overlay").removeClass("active");
        });

        $(".menu-close , .offcanvas-overlay").on("click", function() {
            $(".offcanvas-menu ,.offcanvas-overlay").removeClass("active");
        });

        $(".search-close").on("click", function() {
            $(".search-box , .offcanvas-overlay").removeClass("active");
        });

    });


}(jQuery));	
