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

	$('[name="email"]').on('focus', function() {
		$('.flip-container').addClass('blocked');
		$(this).keydown(function(e) {
	        if (e.which == 27){
	        	$('.flip-container').removeClass('blocked');
	        }
	    });
	}).on('blur', function() {
		$('.flip-container').removeClass('blocked');
	});

	$('.email_enter').on('click', function() {
		$("form").submit();
	});

	$('form').submit(function(){
        var form = $(this);
        var error = false;
        if (!error) {
            var data = form.serialize();
            $.ajax({
               type: 'POST',
               url: 'include/send.php',
               data: data,
               beforeSend: function(data) {
               		console.log('url');
                    form.find('.email_enter').attr('disabled', 'disabled');
                  },
               success: function(data){
                    if (data['error']) {
                        alert(data['error']);
                    } else {
                        emailSended();
                    }
                 },
               error: function (xhr, ajaxOptions, thrownError) {
                    alert(xhr.status);
                    alert(thrownError);
                 },
               complete: function(data) {
                    form.find('.email_enter').prop('disabled', false);
                 }
                          
                 });
        }
        return false;
    });

    function emailSended() {
    	$('.back-title').html('Спасибо! Мы запомнили вашу почту').animate({
    		'fontSize': '2.7em'
    	}, 200);

    	$('.input_button_email').stop().animate({
    		'bottom': -150
    	}, 200);

    	$('.homer').stop().animate({
    		'bottom': 0
    	}, 200, function() {
    		setTimeout(function() {
    			$('.homer').animate({
		    		'bottom': -400
		    	}, 400, function() {
		    		$('.input_button_email').hide();
		    	})
    		}, 1300);
    	});
    }

});