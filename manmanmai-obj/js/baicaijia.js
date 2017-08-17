/**
 * Created by Administrator on 2017/7/25.
 */
var tip;
$.ajax({
  type:"get",
  url:"http://127.0.0.1:9090/api/getbaicaijiatitle",
  dataType:"json",
  success:function (info) {
    var html=template("tmp",info);
    $(".hot").html(html);
    $(".hot>li:nth-child(1)").addClass("col-red");
    //滚动
    new IScroll(".naver",{
      scrollX:true,
      scrollY:false
    });
    $(".hot>li").click(function () {
      
      $(".hot>li").each(function (i,e) {
        $(".hot>li").eq(i).removeClass("col-red")
      });
      $(this).addClass("col-red");
      tip=$(this).data("id");
      
      render();
    });
   
  }
});
function render() {
  $.ajax({
    type:"get",
    url:"http://127.0.0.1:9090/api/getbaicaijiaproduct",
    data:{
      titleid:tip||1
    },
    dataType:"json",
    success:function (data) {
      var html=template("ppt",data);
      $(".ducte").html(html);
    }
  })
};
render();

$(".upto").click(function () {
  $("body").animate({scrollTop:0});
});
