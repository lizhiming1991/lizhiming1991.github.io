/**
 * Created by Administrator on 2017/7/25.
 */

//shop的ajax
$.ajax({
  type:"get",
  url:"http://127.0.0.1:9090/api/getgsshop",
  dataType:"json",
  success:function (info) {
    var html=template("shop",info);
    $("#s1").html(html);
  }
});

// area的ajax
$.ajax({
  type:"get",
  url:"http://127.0.0.1:9090/api/getgsshoparea",
  dataType:"json",
  success:function (data) {
    var html=template("area",data);
    $("#s2").html(html);
  }
});

//id联动发送ajax 渲染页面
var sid;
var aid;
var s1=document.querySelector("#s1");
var s2=document.querySelector("#s2");
function find() {
  $.ajax({
    type:"get",
    url:"http://127.0.0.1:9090/api/getgsproduct",
    dataType:"json",
    data:{
      shopid: sid || 0,
      areaid: aid || 0
    },
    success:function (sos) {
      var html=template("tmp",sos);
      $(".prot").html(html);
      // console.log(sos);
      // $("#s1").change(function () {
      //   var $sa=$("#s1>option");
      //   console.log($sa);
      //   $sa.each(function (i,e) {
      //     if($sa.eq(i).text()==$("#s1").val()){
      //       sid=$sa.eq(i).data("id");
      //       console.log(sid);
      //     }
      //   })
      //
      // });
      //获取 2个id传送idid
      
      s1.onchange=function () {
        sid=s1.value;
        s2.onchange=function () {
          aid=s2.value;
          find();
        }
        
      }
      
    }
  });
};
find();






