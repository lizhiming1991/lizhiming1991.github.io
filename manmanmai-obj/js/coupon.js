/**
 * Created by Administrator on 2017/7/25.
 */
$.ajax({
  type:"get",
  url:"http://127.0.0.1:9090/api/getcoupon",
  dataType:"json",
  success:function (info) {
    var html=template("tmp",info);
    $(".popt").html(html);
    console.log(info);
  }
})