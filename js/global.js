//@codekit-prepend "jquery-1.9.1.min.js"

$(function(){

	//put pieces in place
	//$("#point1").html("<div class='piece player1' style='top:-300px;'></div>");
	//$("#point3").html("<div class='piece player2' style='top:-300px;'></div>");
	
	var piece = {
		html : '<div class="piece"></div>',
		create : function(player){
			return '<div class="piece player' + player + ' style="top:-300px;"></div>';
		}
	}

});