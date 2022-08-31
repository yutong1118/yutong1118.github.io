$(function () {

     //手機版
     if ($(window).width() < 769) {
        $(".link,figure").remove();
    }

    //Menu套件
    $('.trigger').on('click', function ()
    {
        $(this).toggleClass('on');
        $('.menu').fadeToggle(200);
    });

});
