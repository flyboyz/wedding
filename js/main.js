var clock;

$(document).ready(function() {

	// Grab the current date
	var currentDate = new Date();
	var futureDate = new Date(2016, 7, 6, 11);
	//console.log(currentDate);
	console.log(futureDate);

	// Calculate the difference in seconds between the future and current date
	var diff = futureDate.getTime() / 1000 - currentDate.getTime() / 1000;

	// Instantiate a coutdown FlipClock
	clock = $('.clock').FlipClock(diff, {
		clockFace: 'DailyCounter',
		countdown: true,
		language:'ru-ru'
	});
});