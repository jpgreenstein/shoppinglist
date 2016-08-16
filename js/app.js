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
		var listItem = document.getElementById("add").value;
			console.log(listItem); 
		if (listItem < 0) {
			console.log('hello');
		}
			/* document.getElementById("description").innerHTML = listItem;

			$('ul').show();
			
			var listedItems = document.createElement("new-item")

			$('#list').append('<li class="col-xs-12 item-container" id="new-item"><div class="col-xs-2"><a href="#" class="btn btn-lg check">got it</a></div><div class="col-xs-8 item-description"><p id="description"></p></div><div class="col-xs-2"><a href="#" class="btn btn-lg delete" data-toggle="modal" data-target="#myModal">×</a></div></li>')
			document.getElementById("description").innerHTML = listItem;
			console.log($('#list'));*/
	})

});