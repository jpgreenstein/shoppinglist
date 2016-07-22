$(document).ready(function() {
	$('.check').mousedown(function() {	
	  console.log('mousedown');
	  $('.item-description').toggleClass('item-strike');
  })
});