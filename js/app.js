$(document).ready(function() {
	$('.check').mousedown(function() {	
	  console.log('mousedown');
	  $('.item-description').toggleClass('item-strike');
  	})
	$('.close').click(function(){
	  console.log('delete pressed');
	  $('.item-container').remove();
	})

	$("#addItem").click(function () {
		console.log('button clicked');
		var listItem = document.getElementById("add").value;
		document.getElementById("description").innerHTML = listItem;
		$('ul').show();
		$('.list').appendChild(listItem);
	})

});