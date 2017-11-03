/**
 * Created by Administrator on 2017/7/23.
 */
$(function () {
   var  $titles=$(".titles");
    
    $.ajax({
      type:"get",
      url:"http://127.0.0.1:9090/api/getcategorytitle",
      dataType:"json",
      success:function (info) {
        var titlename=template("tits",info);
        $titles.html(titlename);
        var  $tits=$(".titles .tit");
        var box;
        // $tits.each(function (i,e) {
          $tits.click(function () {
            $(this).next().toggleClass("show");
            $(this).siblings().next().hide();
            box=$(this);
            $.ajax({
              type:"get",
              url:"http://127.0.0.1:9090/api/getcategory",
              data:{
                titleid: box.data("id"),
              },
              dataType:"json",
              success:function (data) {
                var html=template("lists",data);
                $(".b-list").html(html);
                //点击链接商品
                
              }
            })
          })
        // });
        
      }
    })
  
});