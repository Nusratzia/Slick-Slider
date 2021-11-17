$(function(){  
  $('.img_slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: true,
    prevArrow: '<i class="fas fa-chevron-left previmg"></i>',
    nextArrow: '<i class="fas fa-chevron-right nextimg"></i>',
    dots: true,
  });
  $('.text_slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    prevArrow: '<i class="fas fa-angle-double-left prevtext"></i>',
    nextArrow: '<i class="fas fa-angle-double-right nexttext"></i>',
  });
  $(document).ready(function(){
    $('.venobox').venobox(); 
  });
})