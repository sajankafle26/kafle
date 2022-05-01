$(document).ready(function(){
    $(".one").owlCarousel({
        items: 3,
        margin: 30,
        responsiveClass:true,
    responsive:{
        0:{
            items:2,
            nav:true
        },
        600:{
            items:2,
            nav:false
        },
        1000:{
            items:3,
            nav:true,
            loop:false
        }
    }
    });
    $(".two").owlCarousel({
    
        margin: 30,
        responsive:{
            0:{
                items:2,
                nav:true
            },
            600:{
                items:2,
                nav:false
            },
            1000:{
                items:4,
                nav:true,
                loop:false
            }
        } 
    });
  });