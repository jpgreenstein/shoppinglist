$(document).ready(function() {
	$('.check').mousedown(function() {	
	  console.log('mousedown');
	  $('.item-description').toggleClass('item-strike');
  	})
	$('.close').click(function(){
	  console.log('delete pressed');
	  $('.item-container').remove();
	})

});