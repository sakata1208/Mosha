$(function () {
  $('.ac_parent').hover(function () {
  $(this).children(".ac_child").stop().slideToggle();
  //openクラスを付ける
  $(this).toggleClass("open")
  $(".ac_parent").not(this).removeClass("open")
});
});

$(function(){
  $(".hamburger_btn").on("click",function(){
    $(".hamburger_btn,.header_nav").toggleClass("active")
  });
});