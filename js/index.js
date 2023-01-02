$(function(){

const slide=$(".banner_img");
let btnIndex=0;
let current=0;
const totalnum=slide.find("li").length
const slideWidth=slide.width();
const copy=slide.find("li").clone().css("opacity",0.5)
const ctrl=$(".ctrl a")
const button=$(".autoplay")
let pre
let speed=3000;
//복사본 붙이기
slide.append(copy)
//버튼으로 prev, next 움직이기
    let prevBtn = $(".swipper .prev")
    let nextBtn = $(".swipper .next")
    $(".next").click(function(){
        if(btnIndex==totalnum)
        {btnIndex=0; slide.css("margin-left",0)}
        btnIndex++
        slide.stop().animate({"margin-left":-slideWidth*btnIndex},500)
    })
    $(".prev").click(function(){
        if(btnIndex==0)
        {btnIndex=totalnum; slide.css("margin-left",-slideWidth*btnIndex)}
        btnIndex--
        slide.stop().animate({"margin-left":-slideWidth*btnIndex},500)
    })
//오토플레이
    auto();
    const play =setInterval(auto,speed)
    function auto(){
            btnIndex++
            if(btnIndex==totalnum)
            {btnIndex=0; slide.css("margin-left",0)}
            slide.stop().animate({"margin-left":-slideWidth*btnIndex},200)
        }
    //clearInterval(play)

//play , stop 버튼    <<---여기부터 손보기----->> 
    ctrl.click(function(){
        if(ctrl.text()==="stop"){
          ctrl.text("play"); clearInterval(play)
        }else{ctrl.text("stop"); setInterval(auto, 3000)
        }
      })

//버튼 누르면 해당 이미지 슬라이드로 넘어감    
button.click(function(){
    btnIdx=$(this).index();
    button.removeClass("on");
   $(this).addClass("on");
   move();
   console.log(btnIdx)
})

function move(){
    if(current==btnIdx)return;
    let ne=slide.find("li").eq(btnIdx)
    ne.css("margin-left","slideWidth").stop().animate({"margin-left":0});
    console.log(btnIdx)
    
}//메인배너









})
