/**
 * Created by Administrator on 2017/7/25.
 */
var url=window.location.href;
var arr=url.split("&");
$.ajax({
  type:"get",
  url:"http://127.0.0.1:9090/api/getdiscountproduct",
  data:{
    productid:arr[1] || 0
  },
  dataType:"json",
  success:function (info) {
    var html=template("shop",info);
    $(".shop").html(html);
    console.log(info);
  }
})