$(function(){

  $('.star').rateYo({
    starWidth: "16px",
    normalFill: "#ccccce",
    ratedFill: "#DC780B",
    readOnly: true,
    starSvg: '<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M16 6.18179L10.1863 5.79957L7.99681 0.299072L5.80734 5.79957L0 6.18179L4.45419 9.96385L2.99256 15.701L7.99681 12.5379L13.0011 15.701L11.5395 9.96385L16 6.18179Z"/></svg>'
  });
  

  $('.testimonial__slider').slick({
    slidesToShow: 1,
    fade: true,
    prevArrow: '<button type="button" class="slick-arrow slick-arrow--prev"><img src="images/icons/arrowPrev.svg" alt=""></button>',
    nextArrow: '<button type="button" class="slick-arrow slick-arrow--next"><img src="images/icons/arrowNext.svg" alt=""></button>',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          dots: true,
        }
      }
    ]
  });


  $(".header__menu-list a, .footer__logo").on("click", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 1500);
  });



  $(document).ready(function () {
    $('.burger-btn, .header__menu-list a').click(function () {
      $('.header__menu').toggleClass('header__menu--open');
      $('.burger-btn').toggleClass('burger-btn--open');
    });
  });


  $('.footer__content-title').on('click', function () {
    $(this).next().slideToggle();
    $(this).toggleClass('footer__content-title--active');
  });


})

  
    


