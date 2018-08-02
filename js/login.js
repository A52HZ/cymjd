$(function(){
	$('.select div').click(function(){
		$(this).addClass('selected').siblings('.select div').removeClass('selected');
		var index=$(this).index();
		$('.xxk>ul').eq(index).show().siblings().hide();
	})
	$('.imgs').mouseenter(function(){
		$('.jdm').stop().animate({left:'40px'})
		$('.sas').stop().animate({display:'block'},100).fadeIn()
	})
	$('.imgs').mouseleave(function(){
		$('.sas').hide();
		$('.jdm').stop().animate({left:'84px'});
	})
})