//アコーディオンメニュー
$(function () {
  $('.ac_parent').hover(function () {
  //ホバーしたらメニューが開く
    $(this).children(".ac_child").stop().slideToggle();
  
  //+ボタンの操作
  $(this).toggleClass("open")
  $(".ac_parent").not(this).removeClass("open")
});
});

//ハンバーガーメニュー
$(function(){
  $(".hamburger_btn").on("click",function(){
    $(".hamburger_btn,.header_nav").toggleClass("active")
  });
});