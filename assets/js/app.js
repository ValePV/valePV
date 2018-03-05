$(document).ready(function(){
  $('.header').show();
  $('.section-about').hide();
  $('.section-work').hide();


   
  $('.logo-princ').click(function(){
    $('.header').show();
    $('.section-about').hide();
    $('.section-work').hide();
  });

  $('#button-next').click(function(){
    $('.header').hide();
    $('.section-about').show();
    $('.section-work').hide();
  });  
  $('.go-work').click(function(){
    $('.header').hide();
    $('.section-about').hide();
    $('.section-work').show();
  });   
  

  //intervalos en n segundos
  setInterval(function(){
    moveRight();
  }, 2000);
  
  var slideWidth = $('#slider ul li').width();
	
  function moveRight() {
    $('#slider ul').animate({
      left: - slideWidth
    }, 200, function () {
        $('#slider ul li:first-child').appendTo('#slider ul');
        $('#slider ul').css('left', '');
      });
    };
});

$(function() {
    $('#accordion > li').hover(
        function () {
            var $this = $(this);
            $this.stop().animate({'width':'480px'},500);
            $('.head',$this).stop(true,true).fadeOut();
            $('.about',$this).stop(true,true).slideDown(500);
            $('.more',$this).stop(true,true).fadeIn();
        },
        function () {
            var $this = $(this);
            $this.stop().animate({'width':'200px'},1000);
            $('.head',$this).stop(true,true).fadeIn();
            $('.more',$this).stop(true,true).fadeOut(500);
            $('.about',$this).stop(true,true).slideUp(700);
        }
    );
});