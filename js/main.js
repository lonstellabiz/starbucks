
$(document).ready(function(){

	//Code to center the subscription pup-up box
	$box = $('#box');
	$box.css({
		'left' : '50%',
		'top' : '50%',
		'margin-left' : -$box.width()/2 + 'px',
		'margin-top' : -$box.height()/2 + 'px'
	});


	//Subscription pup-up
	$('.start_btn').click(function(){
		$('#lightbox').width($(window).width()).height($(window).height()).fadeIn(200);
		$('#box').fadeIn(200);

		return false;
	});

	$('#lightbox, .close').click(function(){
		$('#lightbox').width(0).height(0).fadeOut(200);
		$('#box').fadeOut(200);

		return false;
	});

	  var player=$('video')[0];

	  var player2=document.getElementById('video');

	  $('#btn-play-pause').click(function(){
	    if(player.paused){
	      player.play();
	      $(this).find('i').text('pause');
	    }else{
	      player.pause();
	      $(this).find('i').text('play_arrow');
	    }
	  })

	  $('#btn-replay').click(function(){
	    player.currentTime=0;
	    player.play();
	  })

	  $('#btn-volume').click(function(){
	    if(player.muted){
	      player.muted=false;
	      $(this).find('i').text('volume_up');
	    }else{
	      player.muted=true;
	      $(this).find('i').text('volume_off');
	    }
	  })

	  $('#btn-fullscreen').click(function(){
	    if($(this).find('i').text()=='fullscreen'){
				$('#video').css('width','100%');
	      $('body').addClass('fullscreen');
	      $(this).find('i').text('fullscreen_exit');
	    }else{
				$('#video').css('width','686px');
	      $('body').removeClass('fullscreen');
	      $(this).find('i').text('fullscreen');
	    }
	  })

	});
