$(function () {

	// Всплывающее окно
    $('.calling, .call').click(function(){
        $('#modalWindow').arcticmodal();
    });

	// плавное перемещение страницы к нужному блоку
    $("a.go").click(function () {
        elementClick = $(this).attr("href");
        destination = $(elementClick).offset().top;
        $("body,html").animate({scrollTop: destination }, 1500);
    });

    // Параллакс фона
    /* Scroll event handler */
    // $(window).bind('scroll',function(e){
    //     parallaxScroll();
    // });
    /* Scroll the background layers */
    // function parallaxScroll(){
    //     var scrolled = $(window).scrollTop();
    //     $('#chikago').css('top',(0-(scrolled*.75))+'px');
    // }

    // Слайдер
    $('.myclass').slick({
        dots: true,
        prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-angle-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fa fa-angle-right"></i></button>'
    });

});


