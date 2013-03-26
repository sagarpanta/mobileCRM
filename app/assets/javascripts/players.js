$(document).on('pageinit' ,'#home_page', function(){
		window_width = $(window).width();
		//img_position = 0.5*window_width - 0.5*200;
		//14 is an some unknown constant added to the position to make it central
		//it is the difference between the programmatically calculate position and the actual postion
		$('#img').css('text-align', 'center');
		$('#store_img_pos').html('0px');
		//$('#img').css('left', (parseInt(img_position)-14) + 'px');
		$('#clublevelname').css('left' , '10px');
		$('#clublevelid').css('left' , '150px');

		
		$('ul').css('left', '0').css('width', window_width)
		$('li').css('width', parseFloat(window_width/5));
		$('img.footer_img').height('40px');
		
		console.log('unread bulbs ', $('#unread_bulbs').html());

		/*
		var i;
		for(i=1;i<=1000;i++){
			jsonObj = {code:'3333', playerid:'101', startdate:'2013-01-01', enddate:'2013-01-01', description:'from js', read:0};
			$.ajax({
				url: '/offers',
				type: 'post',
				cache: false,
				data: {offer:jsonObj},
				success: function(data, textStatus, jqXHR ) { 
					console.log('successfull: '+i);	
				},
				error: function(jqXHR, textStatus, errorThrown){ 
					console.log('unsuccessful');
				}
			});	
		}
		*/
		
		

	$(document).on('click',".fhome", function(){
		var page = $('.page_home').html();
		$('tr').scrollTop(300);
		console.log('bulb count from home page: '+$('#bulb_count').html());

		$.ajax({
			url: page,
			type: "get",
			cache: false,
			success: function(data) {
				content = $(data).find('#home_content').html();
				$('#home_content').html(content);
				$('html, body').animate({scrollTop:0}, 'fast');
				window_width = $(window).width();
		
				//img_position = 0.5*window_width - 0.5*200;
				//14 is an some unknown constant added to the position to make it central
				//it is the difference between the programmatically calculate position and the actual postion
				$('#img').css('text-align', 'center');
				$('#store_img_pos').html('0px');
				//$('#img').css('left', (parseInt(img_position)-14) + 'px');
				$('#clublevelname').css('left' , '10px');
				$('#clublevelid').css('left' , '150px');
				
				alignleft_data = $(data).find('.alignleft').html();
				
				$('.alignleft').html(alignleft_data);
				
				var unread_bulbs = parseInt($('#unread_bulbs').html());
				$('#bulb_count').html(unread_bulbs);
				console.log('bulb count from offer page: '+$('#bulb_count').html());
				console.log('unread_bulbs ' + unread_bulbs);
				if (parseInt(unread_bulbs) > 0){
					$('#home_notification img').attr('src' , '/assets/greenlight.png');
				}
			}
		});
		
	});
	
	$(document).on('click',".foffer", function(){
		var page = $('.page_offers').html();
		$.ajax({
			url: page,
			type: "get",
			cache: false,
			success: function(data) {
				content = $(data).find('#offers_content').html();
				$('#home_content').html(content);
				$('html, body').animate({scrollTop:0}, 'fast');
				var unread_bulbs = parseInt($('#unread_bulbs').html());
				$('#bulb_count').html(unread_bulbs);
				console.log('bulb count from offer page: '+$('#bulb_count').html());
				console.log('unread_bulbs ' + unread_bulbs);
				if (parseInt(unread_bulbs) > 0){
					$('#home_notification img').attr('src' , '/assets/greenlight.png');
				}

			}
		});
		
		$('.alignleft').html('Offers');
	});
	
	
	
	$(document).on('click', ".fevent", function(){
		var page = $('.page_events').html();
		$.ajax({
			url: page,
			type: "get",
			cache: false,
			success: function(data) {
				content = $(data).find('#events_content').html();
				$('#home_content').html(content);
				$('html, body').animate({scrollTop:0}, 'fast');
				var unread_bulbs = parseInt($('#unread_bulbs').html());
				$('#bulb_count').html(unread_bulbs);
				console.log('bulb count from offer page: '+$('#bulb_count').html());
				console.log('unread_bulbs ' + unread_bulbs);
				if (parseInt(unread_bulbs) > 0){
					$('#home_notification img').attr('src' , '/assets/greenlight.png');
				}
			}
		});
		
		$('.alignleft').html('Events');
	});
	
	
	$(document).on('click', ".fpromo", function(){
		var page = $('.page_promotions').html();
		$.ajax({
			url: page,
			type: "get",
			cache: false,
			success: function(data) {
				content = $(data).find('#promotions_content').html();
				$('#home_content').html(content);
				$('html, body').animate({scrollTop:0}, 'fast');
				var unread_bulbs = parseInt($('#unread_bulbs').html());
				console.log('bulb count from offer page: '+$('#bulb_count').html());
				console.log('unread_bulbs ' + unread_bulbs);
				if (parseInt(unread_bulbs) > 0){
					$('#home_notification img').attr('src' , '/assets/greenlight.png');
				}
			}
		});
		
		$('.alignleft').html('Promotions');
	
	});
	
	
	$(document).on('click',".fnews", function(){
		var page = $('.page_news').html();
		$.ajax({
			url: page,
			type: "get",
			cache: false,
			success: function(data) {
				content = $(data).find('#news_content').html();
				$('#home_content').html(content);
				$('html, body').animate({scrollTop:0}, 'fast');
				var unread_bulbs = parseInt($('#unread_bulbs').html());
				console.log('bulb count from offer page: '+$('#bulb_count').html());
				console.log('unread_bulbs ' + unread_bulbs);
				if (parseInt(unread_bulbs) > 0){
					$('#home_notification img').attr('src' , '/assets/greenlight.png');
				}
			}
		});
		
		$('.alignleft').html('News');
	
	});
	
	
	
	$(document).on('click','img[src="/assets/redlight.png"]', function(){
		var page = $('.page_notifications').html();
		console.log('bulb count from notification page: '+$('#bulb_count').html());
		$.ajax({
			url: page,
			type: "get",
			cache: false,
			success: function(data) {
				content = $(data).find('#notifications_content').html();
				$('#home_content').html(content);
				$('html, body').animate({scrollTop:0}, 'fast');
			}
		});
		
		$('.alignleft').html('Notifications');
	
	});
	
	

	$(document).on('click','img[src="/assets/greenlight.png"]', function(){
		var page = $('.page_notifications').html();

		$.ajax({
			url: page,
			type: "get",
			cache: false,
			success: function(data) {
				content = $(data).find('#notifications_content').html();
				$('#home_content').html(content);
				$('html, body').animate({scrollTop:0}, 'fast');
				$('#home_notification img').attr('src' , '/assets/redlight.png');
			}
		});
		
		$('.alignleft').html('Notifications');
	
	});
	

  $('[data-role="content"]').mousemove(function(e){
		pos = $('#img').css('left');
		$('#cursor').html("X Axis : " + e.pageX + " Y Axis : " + e.pageY + ' img pos:' + pos);

  });
  
  
  	$('#home1').on('click' , function(){
		$('#home_page').on('pageshow' , function(){
			left = $('#store_img_pos').html();
			$('#img').css('left', (parseInt(left))+ 'px');
			$('#clublevelname').css('left' , '60px');
			
		});
		
		
	});
  

  
  
	$('img[src="/assets/home.jpg"]').on('click', function() {
		$('img[src="/assets/home.jpg"]').attr('src', '/assets/homeover.jpg');
		$('img[src="/assets/offersover.jpg"]').attr('src', '/assets/offers.jpg');
		$('img[src="/assets/eventsover.jpg"]').attr('src', '/assets/events.jpg');
		$('img[src="/assets/promoover.jpg"]').attr('src', '/assets/promo.jpg');
		$('img[src="/assets/newsover.jpg"]').attr('src', '/assets/news.jpg');
		

	});
	
	$('img[src="/assets/offers.jpg"]').on('click', function() {
		$('img[src="/assets/homeover.jpg"]').attr('src', '/assets/home.jpg');
		$('img[src="/assets/offers.jpg"]').attr('src', '/assets/offersover.jpg');
		$('img[src="/assets/eventsover.jpg"]').attr('src', '/assets/events.jpg');
		$('img[src="/assets/promoover.jpg"]').attr('src', '/assets/promo.jpg');
		$('img[src="/assets/newsover.jpg"]').attr('src', '/assets/news.jpg');
		

	});
	
	$('img[src="/assets/events.jpg"]').on('click', function() {
		$('img[src="/assets/homeover.jpg"]').attr('src', '/assets/home.jpg');
		$('img[src="/assets/offersover.jpg"]').attr('src', '/assets/offers.jpg');
		$('img[src="/assets/events.jpg"]').attr('src', '/assets/eventsover.jpg');
		$('img[src="/assets/promoover.jpg"]').attr('src', '/assets/promo.jpg');
		$('img[src="/assets/newsover.jpg"]').attr('src', '/assets/news.jpg');
		
	});
	
	$('img[src="/assets/promo.jpg"]').on('click', function() {
		$('img[src="/assets/homeover.jpg"]').attr('src', '/assets/home.jpg');
		$('img[src="/assets/offersover.jpg"]').attr('src', '/assets/offers.jpg');
		$('img[src="/assets/eventsover.jpg"]').attr('src', '/assets/events.jpg');
		$('img[src="/assets/promo.jpg"]').attr('src', '/assets/promoover.jpg');
		$('img[src="/assets/newsover.jpg"]').attr('src', '/assets/news.jpg');
		
	});
	
	$('img[src="/assets/news.jpg"]').on('click', function() {
		$('img[src="/assets/homeover.jpg"]').attr('src', '/assets/home.jpg');
		$('img[src="/assets/offersover.jpg"]').attr('src', '/assets/offers.jpg');
		$('img[src="/assets/eventsover.jpg"]').attr('src', '/assets/events.jpg');
		$('img[src="/assets/promoover.jpg"]').attr('src', '/assets/promo.jpg');
		$('img[src="/assets/news.jpg"]').attr('src', '/assets/newsover.jpg');
		
		
	});
	
	$(document).on('click', 'img[src="/assets/redlight.png"]', function() {
		$('img[src="/assets/homeover.jpg"]').attr('src', '/assets/home.jpg');
		$('img[src="/assets/offersover.jpg"]').attr('src', '/assets/offers.jpg');
		$('img[src="/assets/eventsover.jpg"]').attr('src', '/assets/events.jpg');
		$('img[src="/assets/promoover.jpg"]').attr('src', '/assets/promo.jpg');
		$('img[src="/assets/newsover.jpg"]').attr('src', '/assets/news.jpg');
		
		
	});

	
	$(document).on('click', 'img[src="/assets/greenlight.png"]', function() {
		$('img[src="/assets/homeover.jpg"]').attr('src', '/assets/home.jpg');
		$('img[src="/assets/offersover.jpg"]').attr('src', '/assets/offers.jpg');
		$('img[src="/assets/eventsover.jpg"]').attr('src', '/assets/events.jpg');
		$('img[src="/assets/promoover.jpg"]').attr('src', '/assets/promo.jpg');
		$('img[src="/assets/newsover.jpg"]').attr('src', '/assets/news.jpg');
		
		$(this).attr('src', '/assets/redlight.png');
	});



});

