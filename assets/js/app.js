window.onload = function() {
  
  if(screen.width >= 992) {
    // inicio
    $('.home-section').show();
    $('.section-about').hide();
    $('.section-work').hide();

    //al clickear el logo volver a home
    $('.logo-princ').click(function(){
      $('.home-section').show();
      $('.section-about').hide();
      $('.section-work').hide();
    });

    // al hacer click en boton about, ir a la segunda sección
    $('#button-next').click(function(){
      $('.home-section').hide();
      $('.section-about').show();
      $('.section-work').hide();
    });

    // al hacer click en link de ver trabajo, ir a la sección tres
    $('.go-work').click(function(){
      $('.home-section').hide();
      $('.section-about').hide();
      $('.section-work').show();
    });

    $('.but-go-back').click(function(){
      $('.home-section').show();
      $('.section-about').hide();
      $('.section-work').hide();
    })

    $('.but-go-back').click(function(){
      $('.home-section').show();
      $('.section-about').hide();
      $('.section-work').hide();
    })

    $('.but-go-back-work').click(function(){
      $('.home-section').hide();
      $('.section-about').show();
      $('.section-work').hide();
    })
    

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


    $(".hover").mouseleave(
      function () {
        $(this).removeClass("hover");
      }
    );

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
        $('.title-work').addClass('animated bounceIn');
        $('.logo-movil-nav').css('opacity','0.3');
      });

      $(window).scroll(function() {
        if($(this).scrollTop() > 1400) {
          $('.logo-movil-nav').css('opacity','0.3');
        } else{
          $('.logo-movil-nav').css('opacity','1.0');
        }  

      });



    }

  

}
  
 



    

    
  
  

  