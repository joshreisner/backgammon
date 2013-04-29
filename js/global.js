//@codekit-prepend "jquery-1.9.1.min.js"
//@codekit-prepend "jquery-ui-1.10.2.custom.min.js"

$(function(){

	setDraggable();
	
	function setDraggable(){
		$("div.piece.ui-draggable").each(function(){ 
			$(this).draggable('disable'); 
		});
		$("div.point.player1").each(function(){
			$(this).find("div.piece").last().draggable();
		});
	}
	
	$("div.point").droppable({ 
		hoverClass: "hover-piece",
		drop: function(event, ui) {
			var piece = $(ui.draggable).attr("style", "").remove();
			$(this).addClass("player1").prepend(piece);
			setDraggable();
		}
	});

});