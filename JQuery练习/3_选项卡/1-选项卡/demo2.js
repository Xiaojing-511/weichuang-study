$(function(){
	$("ul>li").mouseover(function(){
		$(this).css("background-color","#777").css("border","1px solid #777");
		$(this).siblings().css("background-color","#aaa").css("border","1px solid white");
		var index = $("ul>li").index(this);
		$("div").eq(index).show()
			.siblings().hide();
	})
});