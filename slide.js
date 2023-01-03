$(function(){
const bSlide=$(".banner_img li") //이미지
const bBtn=$(".info_control li") //이미지
const speed=3000;
let current =0;//현재
let bBtnIdx=0;//초기버튼인덱스
let id;

//버튼클릭
bBtn.click(function(){
  bBtnIdx=$(this).index();
  bBtn.removeClass("on");
  $(this).addClass("on");
  bMove(bBtnIdx);
})

//이동함수
function bMove(){
  if(current==bBtnIdx) return;
  let cu = bSlide.eq(current)
  cu.css("left",0).stop().animate({left:"-100%"},1000);
  let ne = bSlide.eq(bBtnIdx)
  ne.css("left","100%").stop().animate({left:0},1000);
  current=bBtnIdx;
}

//시간마다실행
bTimer();
function bTimer(){
  id = setInterval(function(){
    let next=current+1;
    if(next==bSlide.length){
      next=0;
    }
    bBtn.eq(next).trigger("click");
  },speed);
}

//clearInterval
bclearTimer();
function bclearTimer(){
  $(".swipper,.info_control li").mouseenter(function () {
    clearInterval(id);
  });
  $(".swipper,.info_control li").mouseleave(function () {
    bTimer();
})
}

//좌우컨트롤
bControls;
function bControls(){
  $(".swipper .next").click(function(){
    bBtnIdx=bBtnIdx+1;
    console.log(bBtnIdx)
    if(bBtnIdx==bSlide.length){
      bBtnIdx=0;
    }
    bBtn.removeClass("on");
    bBtn.eq(bBtnIdx).addClass("on");
    let cu = bSlide.eq(current)
    console.log(cu)
    let ne = bSlide.eq(bBtnIdx)
    cu.css("left",0).stop().animate({left:"-100%"},1000);
    ne.css("left","100%").stop().animate({left:0},1000);
    current=bBtnIdx;
    return false;
  })
  $(".swipper .prev").click(function(){
    bBtnIdx=bBtnIdx-1;
    if(current==0){
      bBtnIdx=bSlide.length;
    }
    bBtn.removeClass("on");
    bBtn.eq(bBtnIdx).addClass("on");
    let cu = bSlide.eq(current)
    let ne = bSlide.eq(bBtnIdx)
    cu.css("left",0).stop().animate({left:"100%"},1000);
    ne.css("left","-100%").stop().animate({left:0},1000);
    current=bBtnIdx;
    return false;
  })

}



})