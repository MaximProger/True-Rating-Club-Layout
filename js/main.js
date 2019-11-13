$ (function() {

    // Slider
    $('#intro__slider').slick({
        arrows: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
            breakpoint: 1200,
            settings: {
                slidesToShow: 4
            }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2
              }
            },
            {
              breakpoint: 320,
              settings: {
                slidesToShow: 1
              }
            }
          ]
        });

        // Бургер меню

        $("#nav__toggle").on("click", function(event) {
            event.preventDefault();
    
            $(this).toggleClass("show");
            $("#nav-item--mob").toggleClass("show");
        });

        // Обработчик событий

        $(window).on('load resize', function(){
            let win = $(this);
            if (win.width() >= 768) {
        
            } 
            else if (win.width() >= 320 && win.width() <= 768)  {

                $('.tablDel').remove();

                $('.stat__item').removeClass('stat__item__margin');


            } 
            else if (win.width() <= 320) {

            }
      
          });

        

});

