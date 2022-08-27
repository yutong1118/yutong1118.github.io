$(function () {

    //Menu套件
    $('.trigger').on('click', function () {
        $(this).toggleClass('on');
        $('.menu').fadeToggle(200);
    });

});