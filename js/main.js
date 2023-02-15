$(function () {
  $('.ac_parent').hover(function () {
  $(this).children(".ac_child").stop().slideToggle();
});
});

$(function(){
  $(".hamburger_btn").on("click",function(){
    $(".hamburger_btn,.header_nav").toggleClass("active")
  });
});