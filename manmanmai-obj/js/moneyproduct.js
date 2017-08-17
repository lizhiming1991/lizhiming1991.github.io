/**
 * Created by Administrator on 2017/7/24.
 */
var url=window.location.href;
var arr=url.split("&");
$.ajax({
  type:"get",
  url:"http://127.0.0.1:9090/api/getmoneyctrlproduct",
  data:{
    productid:arr[1] || 30
  },
  dataType:"json",
  success:function (info) {
    var html=template("shop",info);
    $(".shop").html(html);
    
  }
})