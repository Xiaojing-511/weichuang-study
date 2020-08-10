$(function(){
	$(".main>a").toggle(function(){
		$(this).next("ul").slideDown("slow")
			.end().css("background-image","url('images/up.gif')");
	},function(){
		$(this).next("ul").slideUp("slow")
			.end().css("background-image","url('images/down.gif')");
	});
	$(".hmain").hover(function(){
		$(this).children("ul").slideDown("slow")
			.end().children("a").css("background-image","url('images/up.gif')");
	},function(){
		$(this).children("ul").slideUp("slow")
			.end().children("a").css("background-image","url('images/down.gif')");
	});




});


