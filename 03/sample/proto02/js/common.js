$(function () {
  if($("#navControl a").attr("class") == "close"){
    $("#globalNav").css("display","none");
  }
  /*slide menu*/
  $("#navControl a").click(function(){
    if($(this).attr("class") == "close"){
      $("#globalNav").slideDown("fast");
      $(this).removeClass();
      $(this).addClass("active");
    }else{
       $("#globalNav").slideUp("fast");
       $(this).removeClass();
       $(this).addClass("close");
    }
  return false;
  });
});