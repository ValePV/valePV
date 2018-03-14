window.onload = function() {
  
  if(screen.width >= 992) {
    // inicio
    $('.header').show();
    $('.section-about').hide();
    $('.section-work').hide();

    //al clickear el logo volver a home
    $('.logo-princ').click(function(){
      $('.header').show();
      $('.section-about').hide();
      $('.section-work').hide();
    });

    // al hacer click en boton about, ir a la segunda sección
    $('#button-next').click(function(){
      $('.header').hide();
      $('.section-about').show();
      $('.section-work').hide();
    });

    // al hacer click en link de ver trabajo, ir a la sección tres
    $('.go-work').click(function(){
      $('.header').hide();
      $('.section-about').hide();
      $('.section-work').show();
    });

     //slider de skills
    // intervalos en n segundos
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


    $(function() {
      $('#accordion > li').hover(
        function () {
            var $this = $(this);
            $this.stop().animate({'width':'400px'},500);
            $('.head',$this).stop(true,true).fadeOut();
            $('.about',$this).stop(true,true).slideDown(500);
            $('.more',$this).stop(true,true).fadeIn();
        },
        function () {
            var $this = $(this);
            $this.stop().animate({'width':'100px'},1000);
            $('.head',$this).stop(true,true).fadeIn();
            $('.more',$this).stop(true,true).fadeOut(500);
            $('.about',$this).stop(true,true).slideUp(700);
        }
      );
    });

    } else {
      // toggle class scroll 
      $(window).scroll(function() {
        if($(this).scrollTop() > 50) {
          $('.navbar-trans').addClass('afterscroll');
        } else {
          $('.navbar-trans').removeClass('afterscroll');
        }  

      });
      //slider de skills
      // intervalos en n segundos
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
      
      $('.but-ab').click(function(){
        $('.picture').addClass('animated zoomInDown');
        $('.cont-about').addClass('animated fadeIn');
        $('.logo-movil-nav').css('opacity','0.3');
      });

      $('.but-wor').click(function(){
        $('.cont-work').addClass('animated fadeIn');
        $('.logo-movil-nav').css('opacity','0.3');
      });

      $(window).scroll(function() {
        if($(this).scrollTop() > 1700) {
          $('.logo-movil-nav').css('opacity','0.3');
        } else{
          $('.logo-movil-nav').css('opacity','1.0');
        }  

      });



    }

  

}
  
 



    

    
  
  

  