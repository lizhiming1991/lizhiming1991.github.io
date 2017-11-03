/**
 * Created by Administrator on 2017/7/26.
 */

$.ajax({
  type:"get",
  url:"http://127.0.0.1:9090/api/getsitenav ",
  dataType:"json",
  success:function (info) {
    var html=template("tmp",info);
    $(".pit").html(html);
  }
})