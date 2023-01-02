$(function(){

    
//메인배너영역
const bSlides=$(".banner_img"); //이미지전체
const bSlide=$(".banner_img li"); //이미지한개
const bBtn=$(".info_control li"); //버튼
const bTotalnum=bSlide.length //총이미지갯수 
const bSlideWidth=$(".banner_img li").width(); //이미지하나 너비
//const copy=bSlide.find("li").clone().css("opacity",0.5)
const bCtrl=$(".ctrlB") //컨트롤버튼
let bBtnIdx=0; //초기버튼인덱스
let current=0; //
let id; // setInterval그릇
let speed=3000; //애니메이션 스피드

//슬라이드카피본
//bSlide.append(copy)


//버튼클릭-버튼해당이미지로 넘어가기    
bBtn.click(function(){
    bBtnIdx=$(this).index();
    bBtn.removeClass("on");
    $(this).addClass("on");
   Bmove(bBtnIdx);
})

//이동함수
function Bmove(){
    if(current==bBtnIdx) return;
    bSlides.css("margin-left",-bSlideWidth*current).stop().animate({"margin-left":-bSlideWidth*bBtnIdx});
    current=bBtnIdx;
    }



//시간마다실행되는함수(값)
Btimer();
function Btimer(){
   id = setInterval(function(){
        let next=current+1;
        if(next==bTotalnum){
            next=0, 
            bSlide.css("margin-left",0)
        }
        bBtn.eq(next).trigger("click");
        console.log(next,bTotalnum)
        },speed
        )}
    
clearInterval
clearBtimer();
function clearBtimer(){
    $(".swipper").mouseenter(function(){
        clearInterval(id);
    })
    $(".swipper").mouseleave(function(){
        Btimer();
    })
}


//play,pause 컨트롤
Bcontrol();
function Bcontrol(){
    $(".ctrlB").click(function(){
        if($(".ctrlB").text()=="play"){
        $(".ctrlB").text("pause")    
        $(".ctrlB").addClass("playB"),
        clearInterval(id)}
        else{$(".ctrlB").text("play")
            $(".ctrlB").removeClass("playB"),
        Btimer()}
    })
}

//좌우 컨트롤
$(".swipper .next").click(function(){
    bBtnIdx++
    if(bBtnIdx==bTotalnum){
        bBtnIdx=0;}
    bBtn.removeClass("on");
    bBtn.eq(bBtnIdx).addClass("on");
    bSlides.css("margin-left",-bSlideWidth*current).stop().animate({"margin-left":-bSlideWidth*bBtnIdx},200);
    current=bBtnIdx;
    return false;
})
$(".swipper .prev").click(function(){
    if(bBtnIdx==0){
        bBtnIdx=bTotalnum;}
        bBtnIdx=bBtnIdx-1;
    bBtn.removeClass("on");
    bBtn.eq(bBtnIdx).addClass("on");
    bSlides.css("margin-left",-bSlideWidth*current).stop().animate({"margin-left":-bSlideWidth*bBtnIdx},200);
    
    console.log(bBtnIdx,current)
    current=bBtnIdx;
    return false;
})//메인배너영역




})//jQuery
