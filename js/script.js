$(document).ready(function() {
  
  if (document.documentURI.search("catalog.html") !== -1) {
    // Запуск range
  setRange("skipstep","skip-value-lower","skip-value-upper");
  
  function setRange(rangeId,lowerRange,upperRange) {
    // Двойной range
    var skipSlider = document.getElementById(rangeId);

    noUiSlider.create(skipSlider, {
      step: 50,
      range: {
        'min': 0,
        'max': 23900
      },
      start: [0, 23900]
    });

      var skipValues = [
      document.getElementById(lowerRange),
      document.getElementById(upperRange)
      ];

      skipSlider.noUiSlider.on('update', function( values, handle ) {
        skipValues[handle].innerHTML = values[handle]/1;
      });
    };
  };
  
  
  // Показать все отзывы
  $("#show-all-reviews").on("click", function(e) {
    e.preventDefault();
    
    var hiddenReviews = $("#js-reviews-blockquotes"),
        currentLink = $(this),
        duration = 400;
    
    if(hiddenReviews.is(":hidden")) {
      currentLink.html("Скрыть отзывы");
      hiddenReviews.show(duration);
    } else {
      currentLink.html("Показать все отзывы");
      hiddenReviews.hide(duration); 
    };
  });
  
  
  // Переключение картинок в карточке товара
  function productCardPromoTabs () {
    
    var bigImg = $("#js-product-promo-img img"),
        smallImgUl = $("#js-small-imgs"),
        smallImg = $("#js-small-imgs img");

    smallImg.on("click", function(e) {
      e.preventDefault();
      var $this = $(this),
          imgSrc = $this.attr("src"),
          imgAlt = $this.attr("alt");

      // Убираем/добавляем класс на картинку
      smallImgUl.find("img").removeClass("active");
      $this.addClass("active");

      // Меняем картинку и анимируем
      bigImg.fadeOut(200, function() {
        $(this).attr({
        "src": imgSrc,
        "alt": imgAlt
        }).fadeIn();
      });

    });
  };
  
  
  // Переключение отзывы/описание/характеристики
  function productInformationTabs () {
    
    var navLink = $("#js-product-information-nav"),
        link = navLink.find("a"),
        informationBlocksArray = ["#reviews", "#description", "#characters"];
    
    link.on("click", function(e) {
      e.preventDefault();
      
      // Убираем/добавляем класс на ссылку
      var informationBlockId = $(this).attr("href"),
          currentLink = $(this);
          
      link.removeClass("active");
      $(this).addClass("active");
      
      // Меняем блок на нужный
      for (var i = 0; i < informationBlocksArray.length; i++) {
        $(informationBlocksArray[i]).css("display", "none");
      };
      $(informationBlockId).fadeIn();
      
    });
  };
  
  
  productCardPromoTabs();
  productInformationTabs();
  
});