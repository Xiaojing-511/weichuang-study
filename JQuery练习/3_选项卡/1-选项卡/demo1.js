$(function(){
	var $div_li = $(".tab_menu>ul>li");
	$div_li.mouseover(function(){
		$(this).addClass("selected")
			.siblings().removeClass("selected");
		var index = $div_li.index(this);
		$(".tab_box>div").eq(index).show().siblings().hide();
	}).hover(function(){
		$(this).addClass("hover");//鼠标滑过标签高亮
	},function(){
		$(this).removeClass("hover");//鼠标滑出标签，取消高亮
	})
});