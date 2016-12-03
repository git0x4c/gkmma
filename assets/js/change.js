$(document).ready(function(){
	var obj = $("#subMgm");
	obj.hide();
	$("#join").hover(function(){
		obj.show();
	});

	$('#custom-collapse ul li').hover(function(){
		$(this).children('ul').stop(true,true).show('slow');
	},function(){
		$(this).children('ul').stop(true,true).hide('slow');
	});

})