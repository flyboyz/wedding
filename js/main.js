var clock;

$(document).ready(function() {
	var currentDate = new Date();
	var futureDate = new Date(2016, 7, 6, 11);
	var diff = futureDate.getTime() / 1000 - currentDate.getTime() / 1000;

	clock = $('.clock').FlipClock(diff, {
		clockFace: 'DailyCounter',
		countdown: true,
		language:'ru-ru'
	});

	$('html')/*.mouseenter(function(e){
		$('.main_body').animate({
			backgroundPosition: ($(document).width() - e.pageX/50) + 'px ' + ($(document).height() - e.pageY/50) + 'px'
		}, 500);
	})*/.mousemove(function(e){
		$('.main_body').css('background-position', 
			($(document).width() - e.pageX/50) + 'px ' + 
				($(document).height() - e.pageY/50) + 'px');
	});
});