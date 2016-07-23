$(document).ready(function () {
   
	var animationName1 = "animated fadeInDown";
	var animationName2 = "animated fadeInUp";
	var animationName3 = "animated slideInUp";
	var animationEnd = "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationEnd animationEnd";

	$(".intro h1").addClass(animationName1).one(animationEnd, function(){

		(this).removeClass(animationName1);
	});

	$(".intro h2").addClass(animationName2).one(animationEnd, function(){

		(this).removeClass(animationName2);
	});


	$(".intro a").addClass(animationName2).one(animationEnd, function(){

		(this).removeClass(animationName2);
	});

/*
	$( ".portfolio-prev" ).hover(
  function() {
    $( ".text-prev").toggle().addClass( animationName3 );
    
  }, function() {
    $(".text-prev" ).toggle().removeClass( animationName3 );
    
  }
);*/



/* Navigation scroll */
$(function() {
      $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    });


    /* Animations on scroll */
    $('.js--wp-1').waypoint(function(direction) {
        $('.js--wp-1').addClass('animated fadeInUp');
    }, {
        offset: '70%'
    });

    $('.js--wp-2').waypoint(function(direction) {
        $('.js--wp-2').addClass('animated fadeInLeft');
    }, {
        offset: '80%'
    });

    $('.js--wp-3').waypoint(function(direction) {
        $('.js--wp-3').addClass('animated fadeInRight');
    }, {
        offset: '80%'
    });

    $('.js--wp-4').waypoint(function(direction) {
        $('.js--wp-4').addClass('animated fadeInUp');
    }, {
        offset: '80%'
    });


	/*$( ".text-prev" ).hover(
  function() {
    $( ".portfolio-prev img").css(
      "opacity" , "0.2");
  }, function() {
    $( ".portfolio-prev img").css(
      "opacity" , "0.5");
  }
);*/


	

});



