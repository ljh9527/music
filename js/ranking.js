//table tr背景
//偶数
$(".list_t2 tr:even").css("background", "#f7f7f7");
//奇数	
$(".list_t2 tr:odd").css("background", "white");


//左边背景side_container <ul class="r_ff"> <li class="r_select">
$(".r_select").mouseenter(function(){
	$(this).css("background","#f3f3f3");
})
$(".r_select").mouseleave(function(){
	$(this).css("background","#f7f7f7");
	$(".r_select1").css("background","#f7f7f7");
})

//table按钮隐藏效果
//$(".bbb").hover(function(){
//	$(".t_hide").fadeIn(1000,"linear");
//})


//小组名：1.项目名 2.小组名.ppt