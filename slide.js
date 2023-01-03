$(function () {
  //변수
  let
    list = $("#banner"),
    num = 0;
  const
    show_num = 3,
    total = list.find("li").length,
    li_width = list.find("li").eq(0).width(),
    copyObj = list.find("li").clone(),
    ctrl = $(".ctrl");

  list.append(copyObj)




  const timer = setInterval(autoplay, 2000)

  
  ctrl.click(function () {
    if (ctrl.text() === "stop") {
      ctrl.text("play"); 
      clearInterval(timer)
    } else
      {
        ctrl.text("stop"); 
        setInterval(autoplay, 2000)
      }
  })


  function autoplay() {
    if (num == total) {
      num = 0;
      list.css("margin-left", 0)
    }
    num++;
    list.stop().animate({ "margin-left": -li_width * num }, 1000);
  }


  $('.next').click(function () {
    if (num == total) {
      num = 0;  //0
      list.css("margin-left", 0)
    }
    num++;  //요기의 num 0
    list.stop().animate({ "margin-left": -li_width * num }, 1000);//요기의num
    return false;
  });
  $(".prev").click(function () {
    if (num == 0) {
      num = total;//3
      list.css("margin-left", -li_width * num)
    }
    num--;
    list.stop().animate({ "margin-left": -li_width * num }, 500);
    return false;
  })
})
</script>
</head>

<body>
<h1>Rolling</h1>
<div id="frame">
<ul id="banner">
  <li>1</li>
  <li>2</li>
  <li>3</li>
</ul>
</div>
<a href="#" class="prev">prev</a>
<a href="#" class="next">next</a>
<a href="#" class="ctrl">stop</a>
</body>

</html>