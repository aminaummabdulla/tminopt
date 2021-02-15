$(function(){
  $(".rate-star").rateYo({
    starWidth: "20px",
    spacing: "5px",
    maxValue: 5,
    onInit: function (rating, rateYoInstance) {
      // Установить рейтинг после загрузки страницы
      var 
        rateElem = $(rateYoInstance.node),
        rateElemRatio = rateElem.data('rateyo-rating');

      rateElem.rateYo('rating', rateElemRatio);
    },
    rating: 5,
    onSet: function (rating, rateYoInstance) {
      alert('Спасибо, рейтинг товара составляет ' + rating + ' баллов');
    }
  });
    $('.slider__inner').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        fade: true,
        prevArrow:'<button class="slick-arrow slick-prev"></button>',
        nextArrow:'<button class="slick-arrow slick-next"></button>',
      });

      $('.new__slider-inner').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        speed: 3000, 
        prevArrow:'<button class="slick__new-arrow slick__new-prev"></button>',
        nextArrow:'<button class="slick__new-arrow slick__new-next"></button>',
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
          {
            breakpoint: 1060,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3, 
            }
          },
          {
            breakpoint: 870,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2, 
            }
          },
          {
            breakpoint: 760,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1, 
            }
          },
        ]

      });
      
     
      $('.header__bottom-btn').on('click', function(){
        $('.nav__list').slideToggle();
        });
        
        $('.catalog-mobile').on('click', function(){
          $('.catalog-mobile-bottom').slideToggle();
          });
          
      var mixer = mixitup('.popular__items');

       

      
});
