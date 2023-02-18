$(document).ready(function () {
  $(".film1").hide();
  $(".film3").hide();
});
let count = 2;
let win = $(window);
let leftBtn = $(".left-btn");
let rightBtn = $(".right-btn");
$(window).on("scroll", function () {
  let window1 = win.scrollTop();
  console.log(window1);
  let needWin = 800;
  if (window1 > needWin) {
    $(".scroll-img").show(400);
  } else {
    $(".scroll-img").hide(400);
  }
});
rightBtn.click(function () {
  if (count == 2) {
    $(".film2").hide(400);
    $(".film3").show(400);
    count = 3;
  } else if (count == 1) {
    $(".film1").hide(400);
    $(".film2").show(400);
    count = 2;
  } else if (count == 3) {
    $(".film3").hide(400);
    $(".film1").show(400);
    count = 1;
  }
});
leftBtn.click(function () {
  if (count == 2) {
    $(".film2").hide(400);
    $(".film1").show(400);
    count = 1;
  } else if (count == 3) {
    $(".film3").hide(400);
    $(".film2").show(400);
    count = 2;
  } else if (count == 1) {
    $(".film1").hide(400);
    $(".film3").show(400);
    count = 3;
  }
});
