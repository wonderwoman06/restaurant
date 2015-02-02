$(window).scroll(function() {
  $('.animationLeft').each(function(){
  var imagePos = $(this).offset().top;
  var topOfWindow = $(window).scrollTop();
    if (imagePos < topOfWindow+300) {
      $(this).addClass("slideLeft");
    }
  });

  $('.animationRight').each(function(){
  var imagePos = $(this).offset().top;
  var topOfWindow = $(window).scrollTop();
    if (imagePos < topOfWindow+300) {
      $(this).addClass("slideRight");
    }
  });

  $('.animationFadeIn').each(function(){
  var imagePos = $(this).offset().top;
  var topOfWindow = $(window).scrollTop();
    if (imagePos < topOfWindow+500) {
      $(this).addClass("fadeIn");
    }
  });

  $('.animationHatch').each(function(){
  var imagePos = $(this).offset().top;
  var topOfWindow = $(window).scrollTop();
    if (imagePos < topOfWindow+400) {
      $(this).addClass("hatch");
    }
  });
});