$(function () {

  const bSlide=$(".banner_img li") //이미지
  const bBtn=$(".info_control li") //버튼
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
    let ne = bSlide.eq(bBtnIdx)
    cu.css("left",0).stop().animate({left:"-100%"},500);
    ne.css("left","100%").stop().animate({left:0},500);
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

//play,pause 컨트롤
Bcontrol();
  function Bcontrol() {
    $(".ctrlB").click(function () {
      if ($(".ctrlB").text() == "play") {
        $(".ctrlB").text("pause");
        $(".ctrlB").addClass("playB") , clearInterval(id);
      } else {
        $(".ctrlB").text("play");
        $(".ctrlB").removeClass("playB") , bTimer();
      }
    });
}

//좌우 컨트롤
  $(".swipper .next").click(function () {
    bBtnIdx=bBtnIdx+1;
    if (bBtnIdx == bSlide.length) {
      bBtnIdx = 0;
    }
    bBtn.removeClass("on");
    bBtn.eq(bBtnIdx).addClass("on");
    let cu = bSlide.eq(current)
    let ne = bSlide.eq(bBtnIdx)
    cu.css("left",0).stop().animate({left:"-100%"},500);
    ne.css("left","100%").stop().animate({left:0},500);
    current = bBtnIdx;
    console.log(current,bBtnIdx)
    return false;
  });
$(".swipper .prev").click(function(){
        bBtnIdx=bBtnIdx-1;
        if(current==0){
            bBtnIdx=bSlide.length-1;
          }
    bBtn.removeClass("on");
    bBtn.eq(bBtnIdx).addClass("on");
    let cu = bSlide.eq(current)
    let ne = bSlide.eq(bBtnIdx)
    cu.css("left",0).stop().animate({left:"100%"},500);
    ne.css("left","-100%").stop().animate({left:0},500);
    current=bBtnIdx;
    return false;
  });   
//메인배너영역



  const nSlides=$(".board_imgs");//비쥬얼
  const nSlide=$(".board_imgs>li");//이미지한개
  const nTotalnum=nSlide.length;//이미지갯수(2)
  const nWidth=nSlide.eq(0).width();//한개이미지너비
  const nBtn=$(".board_btn li");//버튼
  const ctrlN=$(".ctrlN")//컨트롤버튼
  let nBtnIndex=0;//초기버튼번호
  let now=0;//초기번호
  let nspeed=5000;

  //복사본
  let nCopy=nSlide.clone();
  nSlides.append(nCopy);
  
  //auto
  function nOuto(){
    if(now==nTotalnum){
        now=0;
        nSlides.css("margin-left",0)
    }
    now++
    nSlides.stop().animate({"margin-left":-nWidth*now},1000)
    console.log(now, nTotalnum, nBtnIndex,nWidth)
  }
  const nOutoplay =setInterval(nOuto,nspeed);
  //clearInterval(nOutoplay)

  //버튼클릭
  nBtn.click(function(){
    nBtnIndex=$(this).index();
    nBtn.removeClass("bon");
    $(this).addClass("bon");
    nMove(nBtnIndex);
  })
  //버튼클릭이동
  function nMove(){
    if(now==nBtnIndex) return;
    nSlides.stop().animate({ "margin-left": -nWidth*nBtnIndex}, 1000);
    console.log(nBtnIndex)
    now=nBtnIndex;
  }
 //play,pause 컨트롤
    ncontrol();
    function ncontrol() {
        ctrlN.click(function () {
        if (ctrlN.text() == "play") {
            ctrlN.text("pause");
            ctrlN.addClass("playN") , clearInterval(nOutoplay);
        } else {
            ctrlN.text("play");
            ctrlN.removeClass("playN") , setInterval(nOuto,nspeed);
        }
      });
    }//노티스보드배너영역







  //board_table_tabmenu
  const menus = $(".board_table>ul>li>a");
  const pannels = $(".board_table>ul>li>ul");
  console.log(menus, pannels);

  menus.click(function (board) {
    board.preventDefault();
    let tg = $(this);
    let currentLink = tg.attr("href");

    pannels.hide();
    $(currentLink).show();
    //menus.removeClass(active)//hover이미준상태
  });
  pannels.eq(0).show();
}); //jQuery
