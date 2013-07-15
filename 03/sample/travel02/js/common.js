$(function () {
	//ナビゲーション開閉
	if($("#navControl a").attr("class") == "close"){
			$("#globalNav").css("display","none");
		}

	/*slide menu*/
	$("#navControl a").click(function(){
		if($(this).attr("class") == "close"){
			$("#globalNav").slideDown("fast");
			$(this).removeClass();
			$(this).addClass("active");
		}
		else{
			 $("#globalNav").slideUp("fast");
			 $(this).removeClass();
			 $(this).addClass("close");
		}
		return false;
	});

	//photo Garelly読み込み
	if(navigator.userAgent.indexOf("iPhone") == -1 &&
	navigator.userAgent.indexOf("iPad") == -1 &&
	navigator.userAgent.indexOf("Android") == -1){
		$("#photoGarelly").load("photogarelly.txt");
	}
});