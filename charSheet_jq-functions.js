$(document).ready(function(){
	$("#panel").hide();
	$("#char_button").click(function(){
		$("#panel").animate({width:'toggle'}, 1000);
		if ($("#char_button").css("right") == "0px"){
			$("#char_button").animate({right: '94.79%'}, 950);
		}
		else{
			$("#char_button").animate({right: '0%'}, 950);
		}		
	});
});