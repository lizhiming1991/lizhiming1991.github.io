/**
 * Created by Administrator on 2017/7/24.
 */
var nowpage=0; //当前页码id  0-14
var page; //总页数
var $upbtn=$(".pageup");
var $downbtn=$(".pagedown");
var sel=document.querySelector("#mult");

function render() {
  $.ajax({
    type:"get",
    url:"http://127.0.0.1:9090/api/getmoneyctrl",
    data:{
      pageid:nowpage,
    },
    dataType:"json",
    success:function (info) {
      var html=template("pcit",info);
      $(".pci").html(html);
      page=Math.ceil(info.totalCount/info.pagesize);
      lock=true;
      //动态生成页码
      if(sel.value==""){
        for(var i=1; i<=page; i++){
          var option=document.createElement("option");
          sel.appendChild(option);
          option.innerHTML=i+"/"+page;
        };
      };
      sel.onchange=function () {
        var tip=sel.value;
        var arr=tip.split("/");
        nowpage=arr[0]-1;
        render();
      }
      
    }
  })
}
render();
var lock=true;
if(lock){
  $downbtn.click(function () {
    lock=false;
    nowpage++;
    if(nowpage>=page-1){
      nowpage=page-1;
    }
    sel.value=nowpage+1+"/"+page;
    render();
  });
  $upbtn.click(function () {
    lock=false;
    nowpage--;
    if(nowpage<=0){
      nowpage=0;
    }
    sel.value=nowpage+1+"/"+page;
    render();
    
  })
};
