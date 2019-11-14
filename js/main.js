$ (function() {

    // index.html


    // Slider
    $('#intro__slider').slick({
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
              breakpoint: 1000,
              settings: {
                  slidesToShow: 3
              }
              },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                arrows: true,
                slidesToShow: 1,
                centerMode: true,
                variableWidth: true
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
            if (win.width() <= 1000) {
              
            } 
            else if (win.width() >= 320 && win.width() <= 768)  {

              // $('.tablDel').remove();

              $('.stat__item').removeClass('stat__item__margin');


            } 
            else if (win.width() <= 320) {

            }
      
          });

        // list.html

        // Show Filter

        $("#filter__show").on("click", function(event) {
          event.preventDefault();
  
          $(this).addClass("deactive");
          $("#filter").addClass("active");
          $("#filter__hide").addClass("active");
        });

        // Hide Filter

        $("#filter__hide").on("click", function(event) {
          event.preventDefault();
  
          $(this).removeClass("active");
          $("#filter").removeClass("active");
          $("#filter__show").removeClass("deactive");
        });

        // Filter

        let filter = $("[data-filter]");

        filter.on("click", function(event) {
            event.preventDefault();
            
            let cat = $(this).data('filter');
            $(this).toggleClass('active');

            if (cat == 'all') {
                $('[data-cat]').removeClass('hide');
            } else {
                $('[data-cat]').each(function() {

                    let workCat = $(this).data('cat');
        
                    console.log(workCat);
        
                    if (workCat != cat) {
                        $(this).addClass('hide');
                    } else {
                        $(this).removeClass('hide');
                    }
        
                });
            }
        });

        // bigmap.html

        // Close item

        $(".bigmap__close").on("click", function(event) {
          event.preventDefault();

          $(".bigmap__item").addClass("hide");

        });


        // More link 

        $(".more").on("click", function(event) {
          event.preventDefault();

          $(".more__img").toggleClass("active");

        });
});

