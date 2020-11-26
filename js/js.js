$(document).ready(function(){
    $("#img1").mouseover(function(){
    $("#img1").css("width" ,"100%");
    });
    $("#img1").mouseleave(function(){
    $("#img1").css("width", "50%");
    });
    $("#img2").mouseover(function(){
    $("#img2").css("width" ,"100%");
    });
    $("#img2").mouseleave(function(){
    $("#img2").css("width", "50%");
    });
    $("#img3").mouseover(function(){
    $("#img3").css("width" ,"100%");
    });
    $("#img3").mouseleave(function(){
    $("#img3").css("width", "50%");
    });
    $("#img4").mouseover(function(){
    $("#img4").css("width" ,"100%");
    });
    $("#img4").mouseleave(function(){
    $("#img4").css("width", "50%");
    });
    $("#bt1").mouseover(function(){
    $("#bt1").css("color", "#ED502E");
    });
    $("#bt1").mouseleave(function(){
    $("#bt1").css("color", "black");
    });
    $("#bt2").mouseover(function(){
    $("#bt2").css("color", "#ED502E");
    });
    $("#bt2").mouseleave(function(){
    $("#bt2").css("color", "black");
    });
    $(".fa-cogs").mouseover(function(){
    $(".fa-cogs").css({"color":"#ED502E","background-color":"#FFF"});
    });
    $(".fa-cogs").mouseleave(function(){
    $(".fa-cogs").css({"color":"#FFF","background-color":"#ED502E"});
    });
    $(".fa-leaf").mouseover(function(){
    $(".fa-leaf").css({"color":"#ED502E","background-color":"#FFF"});
    });
    $(".fa-leaf").mouseleave(function(){
    $(".fa-leaf").css({"color":"#FFF","background-color":"#ED502E"});
    });
    $(".fa-heart").mouseover(function(){
    $(".fa-heart").css({"color":"#ED502E","background-color":"#FFF"});
    });
    $(".fa-heart").mouseleave(function(){
    $(".fa-heart").css({"color":"#FFF","background-color":"#ED502E"});
    });
    $(".fa-laptop").mouseover(function(){
    $(".fa-laptop").css({"color":"#ED502E","background-color":"#FFF"});
    });
    $(".fa-laptop").mouseleave(function(){
    $(".fa-laptop").css({"color":"#FFF","background-color":"#ED502E"});
    });
    $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
          $('#href').fadeIn('slow');
      } else {
          $('#href').fadeOut('slow');
      }
  });
  
  $('#href').click(function () {
      $('html, body').animate({
          scrollTop: 0
      }, 2000);
      return false;
  });
  });

  