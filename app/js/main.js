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
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        speed: 3000, 
        prevArrow:'<button class="slick__new-arrow slick__new-prev"></button>',
        nextArrow:'<button class="slick__new-arrow slick__new-next"></button>',
        autoplay: true,
        autoplaySpeed: 2000

      });
   
     
      var mixer = mixitup('.popular__items');

       

      
});
