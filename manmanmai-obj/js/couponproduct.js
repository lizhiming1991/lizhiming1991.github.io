/**
 * Created by Administrator on 2017/7/25.
 */

var url=window.location.href;
var arr=[];
 arr=url.split("&");
var index;
$.ajax({
  type:"get",
  url:"http://127.0.0.1:9090/api/getcouponproduct",
  data:{
    couponid:arr[1]
  },
  dataType:"json",
  success:function (info) {
    var html=template("tmp",info);
    $(".ppc").html(html);
  
    var html=template("loop",info);
    $(".loop").html(html);
    
    $(".ppc>li").click(function () {
      $(".box").removeClass("hide");
      index=$(this).data("id");
      $(".loop>li").eq(index).show().siblings().fadeOut();
    })
    $(".close").click(function () {
      $(".box").addClass("hide");
    })
    
    var $left=$(".left");
    var $right=$(".right");
    // var lock=true;
    // if(lock){
      $right.click(function () {
        index++;
        if(index>= $(".ppc>li").length){
          index= $(".ppc>li").length;
        }
        console.log($(".ppc>li").length);
        $(".loop>li").eq(index).fadeIn().siblings().fadeOut();
      });
      $left.click(function () {
        index--;
        if(index<=0){
          index==0;
        }
        $(".loop>li").eq(index).fadeIn().siblings().fadeOut();
      })
    // }
    
    
  }
})