;(function () {
	
	'use strict';

	var isMobile = {
		Android: function() {
			return navigator.userAgent.match(/Android/i);
		},
			BlackBerry: function() {
			return navigator.userAgent.match(/BlackBerry/i);
		},
			iOS: function() {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
			Opera: function() {
			return navigator.userAgent.match(/Opera Mini/i);
		},
			Windows: function() {
			return navigator.userAgent.match(/IEMobile/i);
		},
			any: function() {
			return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
		}
	};

	var mobileMenuOutsideClick = function() {

		$(document).click(function (e) {
	    var container = $("#colorlib-offcanvas, .js-colorlib-nav-toggle");
	    if (!container.is(e.target) && container.has(e.target).length === 0) {

	    	if ( $('body').hasClass('offcanvas') ) {

    			$('body').removeClass('offcanvas');
    			$('.js-colorlib-nav-toggle').removeClass('active');
				
	    	}
	    
	    	
	    }
		});

	};


	var offcanvasMenu = function() {

		$('#page').prepend('<div id="colorlib-offcanvas" />');
		$('#page').prepend('<a href="#" class="js-colorlib-nav-toggle colorlib-nav-toggle colorlib-nav-white"><i></i></a>');
		var clone1 = $('.menu-1 > ul').clone();
		$('#colorlib-offcanvas').append(clone1);
		var clone2 = $('.menu-2 > ul').clone();
		$('#colorlib-offcanvas').append(clone2);

		$('#colorlib-offcanvas .has-dropdown').addClass('offcanvas-has-dropdown');
		$('#colorlib-offcanvas')
			.find('li')
			.removeClass('has-dropdown');

		// Hover dropdown menu on mobile
		$('.offcanvas-has-dropdown').mouseenter(function(){
			var $this = $(this);

			$this
				.addClass('active')
				.find('ul')
				.slideDown(500, 'easeOutExpo');				
		}).mouseleave(function(){

			var $this = $(this);
			$this
				.removeClass('active')
				.find('ul')
				.slideUp(500, 'easeOutExpo');				
		});


		$(window).resize(function(){

			if ( $('body').hasClass('offcanvas') ) {

    			$('body').removeClass('offcanvas');
    			$('.js-colorlib-nav-toggle').removeClass('active');
				
	    	}
		});
	};

	var burgerMenu = function() {

		$('body').on('click', '.js-colorlib-nav-toggle', function(event){
			var $this = $(this);


			if ( $('body').hasClass('overflow offcanvas') ) {
				$('body').removeClass('overflow offcanvas');
			} else {
				$('body').addClass('overflow offcanvas');
			}
			$this.toggleClass('active');
			event.preventDefault();

		});
	};
	

	var contentWayPoint = function() {
		var i = 0;
		$('.animate-box').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('animated-fast') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .animate-box.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn animated-fast');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft animated-fast');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight animated-fast');
							} else {
								el.addClass('fadeInUp animated-fast');
							}

							el.removeClass('item-animate');
						},  k * 20, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}

		} , { offset: '85%' } );
	};


	var dropdown = function() {

		$('.has-dropdown').mouseenter(function(){

			var $this = $(this);
			$this
				.find('.dropdown')
				.css('display', 'block')
				.addClass('animated-fast fadeInUpMenu');

		}).mouseleave(function(){
			var $this = $(this);

			$this
				.find('.dropdown')
				.css('display', 'none')
				.removeClass('animated-fast fadeInUpMenu');
		});

	};


	var goToTop = function() {

		$('.js-gotop').on('click', function(event){
			
			event.preventDefault();

			$('html, body').animate({
				scrollTop: $('html').offset().top
			}, 500, 'easeInOutExpo');
			
			return false;
		});

		$(window).scroll(function(){

			var $win = $(window);
			if ($win.scrollTop() > 200) {
				$('.js-top').addClass('active');
			} else {
				$('.js-top').removeClass('active');
			}

		});
	
	};


	// Loading page
	var loaderPage = function() {
		$(".colorlib-loader").fadeOut("slow");
	};

	var counter = function() {
		$('.js-counter').countTo({
			 formatter: function (value, options) {
	      return value.toFixed(options.decimals);
	    },
		});
	};


	var counterWayPoint = function() {
		if ($('#colorlib-counter').length > 0 ) {
			$('#colorlib-counter').waypoint( function( direction ) {
										
				if( direction === 'down' && !$(this.element).hasClass('animated') ) {
					setTimeout( counter , 400);					
					$(this.element).addClass('animated');
				}
			} , { offset: '90%' } );
		}
	};

	var sliderMain = function() {
		
	  	$('#colorlib-hero .flexslider').flexslider({
			animation: "fade",
			slideshowSpeed: 5000,
			directionNav: true,
			start: function(){
				setTimeout(function(){
					$('.slider-text').removeClass('animated fadeInUp');
					$('.flex-active-slide').find('.slider-text').addClass('animated fadeInUp');
				}, 500);
			},
			before: function(){
				setTimeout(function(){
					$('.slider-text').removeClass('animated fadeInUp');
					$('.flex-active-slide').find('.slider-text').addClass('animated fadeInUp');
				}, 500);
			}

	  	});

	};

	var parallax = function() {

		if ( !isMobile.any() ) {
			$(window).stellar({
				horizontalScrolling: false,
				hideDistantElements: false, 
				responsive: true

			});
		}
	};

	// Owl Carousel
	var owlCrouselFeatureSlide = function() {
		var owl = $('.owl-carousel1');
		owl.owlCarousel({
			// animateOut: 'fadeOut',
		  //  animateIn: 'fadeIn',
			autoplay: false, //Disabled auto animate to next slide
			items: 1,
		   loop: true,
		   margin: 0,
		   responsiveClass: true,
		   nav: true,
		   dots: false,
		   autoplayHoverPause: true,
		   smartSpeed: 500,
		   navText: [
		      "<i class='icon-arrow-left3 owl-direction'></i>",
		      "<i class='icon-arrow-right3 owl-direction'></i>"
	     	]
		});

		// $('.owl-carousel2').owlCarousel({
		// 	animateOut: 'slideOutDown',
		//    animateIn: 'flipInX',
		// 	autoplay: true,
		//    loop:true,
		//    margin:30,
		//    nav:true,
		//    dots: true,
		//    autoplayHoverPause: true,
		//    responsive:{
		//       0:{
		//          items:1
		//       },
		//    },
		//    navText: [
		//       "<i class='icon-arrow-left3 owl-direction'></i>",
		//       "<i class='icon-arrow-right3 owl-direction'></i>"
	 //     	]
		// })
	};

	var ModalClickEvent = function(){
		// Get the modal
		var modal = document.getElementById('formModal');
		if(modal == null){ return; }

		// Get the button that opens the modal
		var btn = document.getElementById("modalButton");

		// Get the <span> element that closes the modal
		var span = document.getElementsByClassName("close")[0];

		// When the user clicks on the button, open the modal 
		btn.onclick = function() {
  			modal.style.display = "block";
		}

		// When the user clicks on <span> (x), close the modal
		span.onclick = function() {
  			modal.style.display = "none";
		}

		// When the user clicks anywhere outside of the modal, close it
		window.onclick = function(event) {
  			if (event.target == modal) {
    			modal.style.display = "none";
  			}
		}	
	}

		var FormController = function(){
			var currentTab = 0; // Current tab is set to be the first tab (0)
			var prevBtn = document.getElementById("prevBtn");
			var nextBtn = document.getElementById("nextBtn");
			if(prevBtn == null || nextBtn == null){ return;}
			showTab(currentTab); // Display the current tab
			

			function showTab(n) {
				// This function will display the specified tab of the form ...
  				var x = document.getElementsByClassName("tab");
  				x[n].style.display = "block";
  				// ... and fix the Previous/Next buttons:
  				if (n == 0) {
    				document.getElementById("prevBtn").style.display = "none";
  				} else {
    				document.getElementById("prevBtn").style.display = "inline";
  				}
  				if (n == (x.length - 1)) {
    				document.getElementById("nextBtn").innerHTML = "Submit";
  				} else {
    				document.getElementById("nextBtn").innerHTML = "Next";
  				}
  				// ... and run a function that displays the correct step indicator:
  				fixStepIndicator(n)
			}

		prevBtn.onclick = function(){
			nextPrev(-1);
		}

		nextBtn.onclick = function(){
			nextPrev(1);
		}

		function nextPrev(n) {
  			// This function will figure out which tab to display
  			var x = document.getElementsByClassName("tab");
  			// Exit the function if any field in the current tab is invalid:
  			if (n == 1 && !validateForm()) return false;
  				// Hide the current tab:
  				x[currentTab].style.display = "none";
 				// Increase or decrease the current tab by 1:
  				currentTab = currentTab + n;
  				// if you have reached the end of the form... :
  			if (currentTab >= x.length) {
    			//...the form gets submitted:
    			document.getElementById("regForm").submit();
    			return false;
  			}
 		// Otherwise, display the correct tab:
  		showTab(currentTab);
		}

function validateForm() {
  // This function deals with validation of the form fields
  var x, y, i, valid = true;
  x = document.getElementsByClassName("tab");
  y = x[currentTab].getElementsByTagName("input");
  // A loop that checks every input field in the current tab:
  for (i = 0; i < y.length; i++) {
    // If a field is empty...
    if (y[i].value == "") {
      // add an "invalid" class to the field:
      y[i].className += " invalid";
      // and set the current valid status to false:
      valid = false;
    }
  }
  // If the valid status is true, mark the step as finished and valid:
  if (valid) {
    document.getElementsByClassName("step")[currentTab].className += " finish";
  }
  return valid; // return the valid status
}

function fixStepIndicator(n) {
  // This function removes the "active" class of all steps...
  var i, x = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  //... and adds the "active" class to the current step:
  x[n].className += " active";
}
	}
	


	
	$(function(){
		mobileMenuOutsideClick();
		offcanvasMenu();
		burgerMenu();
		contentWayPoint();
		sliderMain();
		dropdown();
		goToTop();
		loaderPage();
		counter();
		counterWayPoint();
		parallax();
		owlCrouselFeatureSlide();
		ModalClickEvent();
		FormController();
	});


}());
