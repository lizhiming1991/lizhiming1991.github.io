/**
 * Created by Administrator on 2017/7/26.
 */
var url=window.location.href;
var arr=url.split("&");
//十大品牌排名
$.ajax({
  type:"get",
  url:"http://127.0.0.1:9090/api/getbrand",
  data:{
    brandtitleid:arr[1] ||0
  },
  dataType:"json",
  success:function (info) {
    var html=template("tmp",info);
    $(".table>ul").html(html);
    //特殊渲染变色
    $(".table>ul>li").eq(0).find(".tip").addClass("col-rea");
    $(".table>ul>li").eq(1).find(".tip").addClass("col-orn");
    $(".table>ul>li").eq(2).find(".tip").addClass("col-gre");
    
  }
});


//商品展示
$.ajax({
  type:"get",
  url:"http://127.0.0.1:9090/api/getbrandproductlist",
  data:{
    brandtitleid:arr[1],
    pagesize:4
  },
  dataType:"json",
  success:function (data) {
    var html=template("plays",data);
    $(".play>ul").html(html);
    
  
    var tip=$(".play>ul>li").eq(0).data("id");
      //评论区
    var img=$(".play>ul>li").eq(0).data("img");
  
    $.ajax({
        type:"get",
        url:"http://127.0.0.1:9090/api/getproductcom",
        data:{
          productid:tip
        },
        dataType:"json",
        success:function (sos) {
          var html=template("tap",sos);
          $(".plmb>ul").html(html);
          
          $(".plmb>ul>li").each(function (i,e) {
            $(".plmb>ul>li").eq(i).find(".pic").html(img);
          })
         
        }
      });
  
    
  }
});


