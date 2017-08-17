/**
 * Created by Administrator on 2017/7/23.
 */
// $(function () {
var url=window.location.href;
var arr=[];
arr=url.split("&");
var name=null;


$.ajax({
  type:"get",
  url: "http://127.0.0.1:9090/api/getcategorybyid",
  dataType:"json",
  data:{
    categoryid:arr[1]
  },
  success:function (info) {
    var html=template("play",info);
    $(".top-banner").html(html);
    name=$(".top-banner .ban a:nth-child(3)").data("name");
    console.log(name);
  }
});



  var sel=document.querySelector("#mult");
  var nowpage=1;//当前页
  var $upbtn=$(".pageup>input");
  var $downbtn=$(".pagedown>input");
  var yem=1;//页码数
  function render() {
    $.ajax({
      type:"get",
      url:"http://127.0.0.1:9090/api/getproductlist",
      data:{
        categoryid: arr[1] || 0,
        pageid:nowpage
      },
      dataType:"json",
      success:function (sos) {
      
        var $ul=$(".play>ul");
        var html=template("plays",sos);
        $ul.html(html);
  
        var ppt=$(".play>ul>li").find("a").attr("href");
        var ppr=ppt+"="+name;
        $(".play>ul>li>div>a").attr("href",ppr);
        
        
        
        //分页pagesize": "每页大小",
        yem=Math.ceil(sos.totalCount/sos.pagesize);
        
        lock=true;
        //分页控制
        if(sel.value==""){
          for(var i=1; i<=yem; i++) {
            var option = document.createElement("option");
            sel.appendChild(option);
            option.innerHTML=i+"/"+yem;
          };
        };
        sel.onchange=function () {
          var tip=sel.value;
          var arr=tip.split("/");
          nowpage=arr[0];
          render();
        }
      }
    })
  };
  
  render();

  var lock=true;
  if(lock){
    $downbtn.click(function () {
      lock=false;
      nowpage++;
      if(nowpage>=yem){
        nowpage=yem;
      }
      sel.value=nowpage+"/"+yem;
      render();
    });
    $upbtn.click(function () {
      lock=false;
      nowpage--;
      if(nowpage<=1){
        nowpage=1;
      }
      sel.value=nowpage+"/"+yem;
      render();
      
    })
  };
  

  