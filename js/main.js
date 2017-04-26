//top按钮返回头部实现代码
window.onscroll=function(){
	if($("body").scrollTop()>0){
		$(".top").css('display',"block");
	}
	else{
		$(".top").css('display',"none");
	}
	$(".top").click(function(){
		//兼容性问题 body支持chorme浏览器 html支持firefox浏览器
		$("body,html").scrollTop(0);
	})
}
//主导航图标上移效果实现
$(document).ready(function(){
	$(".category_type2 a").mouseover(function(){
		$(this).append("<div class='hover_pic'></div>");
		$('.hover_pic').animate({top:'-13px'});
	}).mouseout(function(){
		$('.hover_pic').remove();
	})
})
//轮播实现
$(document).ready(function(){
	var tops=$('.pic_top');
	var bottoms=$('.pic_bottom');
	var bgcolor=$('.banner_con');
	var colors=['#E8E8E8','#F00235','#FC0325','#FE0A45','#C8C8C8','#E8E8E8'];
	var oindex=0;
	var lis=$('.slidefooter li');
	var imgs=$('.main_banner center img');
	lis.mouseover(function(){
		oindex=$(this).index();
		lis.eq(oindex).addClass('selected').siblings().removeClass('selected');
		tops.each(function(){$(this).css('display','none')}).eq(oindex).css('display','block');
		bottoms.each(function(){$(this).css('display','none')}).eq(oindex).css('display','block');
		imgs.each(function(){$(this).css('display','none')}).eq(oindex).css('display','block');
		bgcolor.css("background-color",colors[oindex]);
	})
	var t=setInterval(function(){
		oindex++;
		if(oindex>5)
			oindex=0;
		lis.eq(oindex).addClass('selected').siblings().removeClass('selected');
		tops.each(function(){$(this).css('display','none')}).eq(oindex).css('display','block');
		bottoms.each(function(){$(this).css('display','none')}).eq(oindex).css('display','block');
		imgs.each(function(){$(this).css('display','none')}).eq(oindex).css('display','block');
	},2000)
	//移上停止播放，移走继续播放
	$('.main_banner').mouseover(function(){
		clearInterval(t);
	}).mouseout(function(){
		t=setInterval(function(){
		oindex++;
		if(oindex>5)
			oindex=0;
		lis.eq(oindex).addClass('selected').siblings().removeClass('selected');
		tops.each(function(){$(this).css('display','none')}).eq(oindex).css('display','block');
		bottoms.each(function(){$(this).css('display','none')}).eq(oindex).css('display','block');
		imgs.each(function(){$(this).css('display','none')}).eq(oindex).css('display','block');
		bgcolor.css("background-color",colors[oindex]);
	},2000)
	})
})
//文字上移效果实现
$(document).ready(function(){
	setInterval(function(){
		$('.slide_item').first().insertAfter($('.slide_item').last());
	},2000)
	
})

//楼层导航跳转实现
$(document).scroll(function(){
	var show=$('.rank').offset().top-2;
	var life=$('.life').offset().top;
	var flahship=$('.flahship').offset().top;
	var guess=$('.guess').offset().top;
	var guess_height=$('.guess').height();
	var floors=$('.floors');
	var floor_colors=['#64C333','#F7A945','#19C8A9','#F15453'];
	var floor_tops=[$('.rank').offset().top,$('.life').offset().top,
	$('.flahship').offset().top,$('.guess').offset().top];
	floors.click(function(){
		oindex=$(this).index()-1;
		current=oindex;
		$('.floors').each(function(){
			$(this).css("background-color",'#666');
		})
		$(this).css("background-color",floor_colors[oindex]);
		$('body,html').scrollTop(floor_tops[current]);
		return false;
		// alert("java");
	})
	floors.mouseover(function(){
		oindex=$(this).index()-1;
		$(this).css("background-color",floor_colors[oindex]);
	}).mouseout(function(){
		if(current!=oindex)
		$(this).css("background-color",'#666');
	})
	if($('body').scrollTop()>show){
		$(".floor").fadeIn(500);
	}
	else{
		$(".floor").fadeOut(500);
	}
	//滚动的时候更换当前导航栏颜色
	if($('body').scrollTop()>=show && $('body').scrollTop()<life){
		current=0;
		$('.floor a').css('background-color','#666');
		$('.floor_a').css('background-color','#DD2727');
		$('.floors').eq(0).css('background-color',floor_colors[0]);
	}
	if($('body').scrollTop()>=life && $('body').scrollTop()<flahship){
		current=1;
		// alert(current);
		$('.floor a').css('background-color','#666');
		$('.floor_a').css('background-color','#DD2727');
		$('.floors').eq(1).css('background-color',floor_colors[1]);
	}
	if($('body').scrollTop()>=flahship && $('body').scrollTop()<guess){
		current=2;
		$('.floor a').css('background-color','#666');
		$('.floor_a').css('background-color','#DD2727');
		$('.floors').eq(2).css('background-color',floor_colors[2]);
	}
	if($('body').scrollTop()>=guess && $('body').scrollTop()<=guess+guess_height){
		current=3;
		$('.floor a').css('background-color','#666');
		$('.floor_a').css('background-color','#DD2727');
		$('.floors').eq(3).css('background-color',floor_colors[3]);
	}
})