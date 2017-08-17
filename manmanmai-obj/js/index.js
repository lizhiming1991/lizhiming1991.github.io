/**
 * Created by Administrator on 2017/7/23.
 */

$(function () {
  var $ul=$(".produce>ul");
  
  $.ajax({
    type:"get",
    url:"http://127.0.0.1:9090/api/getindexmenu",
    dataType:"json",
    success:function (info) {
      var html=template("tmp",info);
      $ul.html(html);
      var $lis = $(".produce>ul>li");
      $lis.each(function (i,e) {
        $lis.eq(7).nextAll().addClass("hide");
      })
      var lock=true;
      $lis.eq(7).click(function () {
        if(lock){
          $lis.eq(7).nextAll().removeClass("hide");
          lock=false;
        }else{
          $lis.eq(7).nextAll().addClass("hide");
          lock=true;
        }
      })
    }
  });
  
  
  var $introduce=$(".introduce");
  $.ajax({
    type:"get",
    url:"http://127.0.0.1:9090/api/getmoneyctrl",
    dataType:"json",
    success:function (info) {
      var html=template("tap",info);
      $introduce.html(html);
      console.log(info);
    }
  })
  
  
  
  
  
});