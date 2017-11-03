/**
 * Created by Administrator on 2017/7/24.
 */
$.ajax({
  type:"get",
  url:"http://127.0.0.1:9090/api/getinlanddiscount",
  dataType:"json",
  success:function (info) {
    var html=template("zheko",info);
    $(".pro-sh").html(html);
    
    //滚动加载
    $(".product>ul>li.lazy").lazyload();
    window.onscroll=function () {
      var scrolltop=window.pageYOffset;
    }
                                                                                    
    
  }
})

