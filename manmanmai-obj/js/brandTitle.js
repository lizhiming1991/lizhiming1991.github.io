/**
 * Created by Administrator on 2017/7/26.
 */


$.ajax({
  type:"get",
  url:"http://127.0.0.1:9090/api/getbrandtitle ",
  dataType:"json",
  success:function (info) {
    var html=template("tmp",info);
    $(".table>ul").html(html);
  }
})