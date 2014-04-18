jQuery(document).ready(function($) {
	
	
	
	//Navigation
	$('<span>//</span>').appendTo('.level-1 li a');
	$(".level-1 li ul li:first-child").addClass("first");
	$(".level-1 li:last-child").addClass("last");
	$(".level-1 li ul li ul li:last-child").addClass("last2");

	//Twitter
	JQTWEET.loadTweets();
	
	//Tipsy
	$('div.social a').tipsy({fade: true, gravity: 'n'});
	
	//Single Portfolio Slider
	$("#slider").responsiveSlides({
        auto: false,
        nav: true,
        speed: 500,
        namespace: "callbacks",
       
      });
	  
	  //Contact Map
	$('#map').gMap({
			 zoom: 14,
	markers: [{ latitude: 42.3605722, longitude: -71.0651046 }]  
	});	
	
	//To Top Arrow		
	$().UItoTop({ easingType: 'easeOutQuart' });
	
	//Fancybox
	$('.fancybox').fancybox({
					openEffect	: 'elastic'
				});
	
	$(".various").fancybox({
					maxWidth	: 800,
					maxHeight	: 600,
					fitToView	: false,
					width		: '70%',
					height		: '70%',
					autoSize	: false,
					closeClick	: false,
					openEffect	: 'elastic',
					closeEffect	: 'none'
				});
	
	//FitVids
	$(".container").fitVids();
	
	

});





	
	//Mobile Nav
  	 $('body').addClass('js');
		 var $menu = $('#menu'),
		  	 $menulink = $('.menu-link'),
		  	 $menuTrigger = $('.has-subnav > a');
		
	$menulink.click(function(e) {
		e.preventDefault();
		$menulink.toggleClass('active');
		$menu.toggleClass('active');
	});
		
	$menuTrigger.click(function(e) {
		e.preventDefault();
		var $this = $(this);
			$this.toggleClass('active').next('ul').toggleClass('active');
		});
		
		
	//Portfolio
	$(window).load(function(){
			
			//Portfolio
	var $container = $('#portfolio-content');
	var toFilter = '*';
	
	$container.isotope({
		filter: toFilter,
		animationOptions: {
			duration: 750,
			easing: 'linear',
			queue: false,
			
			
		}
	});
	
	$container.attr('data-current',toFilter);
	
	checkActive();

	$('#navsort a').click(function(){
		var title = $(this).attr('title');
		var text = $(this).text();
		if(text == "All"){
			var selector = title;
		}
		else {
			var selector = "." + title;
		}
		
		$container.attr('data-current',selector);
		
		$container.isotope({ 
			filter: selector,
			animationOptions: {
				duration: 750,
				easing: 'linear',
				queue: false,
				
			}
		});
		
		checkActive();
		
		return false;
	});
	
	function checkActive(){
	
	$('#navsort a').each(function(){
		
		$(this).parent().removeClass(
			'selected'
		);
	
		var title = $(this).attr('title');
				
		title = '.'+title;
		
		if(title=='.*'){
			title = '*';
		}
		
		
		var currentCat = $container.attr('data-current');
		
		if(title==currentCat){
			$(this).parent().addClass(
			'selected'
		);
		}
		
	});
	
	
	}
		
});

