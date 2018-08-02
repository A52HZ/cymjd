
$(function(){
	//点叉关掉图片
	$('button').eq(1).click(function(){
		$('div').eq(2).fadeOut();
	})
	//上边搜索框隐藏显示
	$(window).scroll(function(){
		var top=$(window).scrollTop();
		if(top>=300){
			$('div').eq(1).slideDown();
		}else if(top<=300){
			$('div').eq(1).stop(true).hide();
		}
	})

	//轮播图
	var now=0;
	//获取li标签的长度
	var len=$('.lunbo>.lunbo-img>li').length;
	console.log(len)
	
	function go(){
		//自动轮播
		s=setInterval(function(){
			//当前隐藏 图片数字
			$('.lunbo>.lunbo-img>li').fadeOut();
			$('.lunbo>.num>li').css('background','#6699ff');
			
			//下一张显示 
			//判断now
			if(now>=len-1){
				now=0;
			}else{
				now++;
			}
			
			//显示数字和图片
			$('.lunbo>.lunbo-img>li:eq('+now+')').fadeIn();
			$('.lunbo>.num>li:eq('+now+')').css('background','#ff6699');
		},2000)
	}
	
	go();
	
	//鼠标移入移出事件
	$('.lunbo').mouseover(function(){
		//清除定时 显示箭头
		clearInterval(s);
		$('.goleft,.goright').fadeIn();
	}).mouseout(function(){
		go();
		$('.goleft,.goright').fadeOut();
	})
	
	
	//数字对应图片
	$('.lunbo>.num>li').mouseover(function(){
		//清除定时 
		clearInterval(s);
		//当前隐藏 图片数字
		$('.lunbo>.lunbo-img>li').fadeOut();
		$('.lunbo>.num>li').css('background','#6699ff');
		
		//获取当前li的下标
		now=$(this).index();
		//alert(now);
		$('.lunbo>.lunbo-img>li:eq('+now+')').fadeIn();
		$('.lunbo>.num>li:eq('+now+')').css('background','#ff6699');	
	})
	
	//left right的点击
	$('.goleft').click(function(){
		//当前隐藏 图片数字
		$('.lunbo>.lunbo-img>li').fadeOut();
		$('.lunbo>.num>li').css('background','#6699ff');
		
		now--;
		
		//往左点 --
		if(now<0){
			now=len-1;
		}	
		//显示图片数字
		$('.lunbo>.lunbo-img>li:eq('+now+')').fadeIn();
		$('.lunbo>.num>li:eq('+now+')').css('background','#ff6699');	
	})
	
	//right的点击
	$('.goright').click(function(){
		//当前隐藏 图片数字
		$('.lunbo>.lunbo-img>li').fadeOut();
		$('.lunbo>.num>li').css('background','#6699ff');
		now++;
		//往左点 --
		if(now>len-1){
			now=0;
		}
		//显示图片数字
		$('.lunbo>.lunbo-img>li:eq('+now+')').fadeIn();
		$('.lunbo>.num>li:eq('+now+')').css('background','#ff6699');
	})
	$('.tab_t li').mouseenter(function(){
		//显示当前li 其余隐藏
		$(this).addClass('selected').siblings().removeClass('selected');
		//获取当前下标
		var index=$(this).index();
		$('.obj ul').eq(index).show().siblings().hide();
	})




// 两图轮播
	var cc=0;
	//获取li标签的长度
	var leng=$('.lunbo-two>.img>li').length;
	console.log(leng)
	
	function run(){
		//自动轮播
		d=setInterval(function(){
			//当前隐藏 图片数字
			$('.lunbo-two>.img>li').fadeOut();
			$('.lunbo-two>.num>li').css('background','#6699ff');
			
			//下一张显示 
			//判断cc
			if(cc>=leng-1){
				cc=0;
			}else{
				cc++;
			}
			
			//显示数字和图片
			$('.lunbo-two>.img>li:eq('+cc+')').fadeIn();
			$('.lunbo-two>.num>li:eq('+cc+')').css('background','#ff6699');
		},4000)
	}
	$('.lunbo-two').mouseover(function(){
			clearInterval(d);
		}).mouseout(function(){
			run();
		})
	run();
	$('.live-2-ul>li').mouseenter(function(){
		 
		 console.log(ind)
		//显示当前li 其余隐藏
		$(this).addClass('selected').siblings().removeClass('selected');
		//获取当前下标
		var ind=$(this).index();
		 $('.live-2-img>li').eq(ind).show().siblings().hide();
	})

})
setInterval(function(){
	var boxx=document.getElementById('boxx');
	// console.log(boxx);
	var d1=new Date();
	var d2=new Date('2018/5/22');
	var cha=d2.valueOf()-d1.valueOf();
	// console.log(cha);
	var day=Math.floor(cha/(1000*60*60*24));
	cha%=1000*60*60*24;
	var hour=Math.floor(cha/(1000*60*60));
	cha%=1000*60*60;
	var minute=Math.floor(cha/(1000*60));
	cha%=1000*60;
	var second=Math.floor(cha/(1000));
	// console.log(minute);
	// console.log(hour);
	// console.log(second);
	boxx.innerHTML='<div>'+dong(hour)+'</div>'+'<div>'+dong(minute)+'</div>'+'<div>'+dong(second)+'</div>';
	},1000);
	function dong(num){
		if(num<10 ){
			num='0'+num;
		}
		return num;
	}


