/**
 * Created by Administrator on 2017/7/23.
 */
var url=window.location.href;
var arr=url.split("=");
// arr[1] 2级标题
var Arr=arr[0].split("&");

$.ajax({
  type:"get",
  url: "http://127.0.0.1:9090/api/getcategorybyid",
  dataType:"json",
  data:{
    categoryid:arr[1]
  },
  success:function (info) {
    var htm=template("leshi",info);
    $(".top-banner").html(htm);
    console.log(info);
  }
});


varname=null;
$.ajax({
  type:"get",
  url:"http://127.0.0.1:9090/api/getproduct",
  data:{
    productid:Arr[1]
  },
  dataType:"json",
  success:function (ufo) {
    var html=template("top-banner",ufo);
    $(".bole").html(html);
    name=$(".bole .produce").data("name");
    var Arr=name.split(" ");
    $(".top-banner .ban>a:nth-child(3)").html(Arr[0]);
  }

});

$.ajax({
  type:"get",
  url:"http://127.0.0.1:9090/api/getproductcom",
  data:{
    productid:Arr[1]
  },
  dataType:"json",
  success:function (data) {
    var html=template("pingjia",data);
    $(".content>ul").html(html);
    
  }
  
});

