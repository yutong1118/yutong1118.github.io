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

    const images = $("img");

    function handleScroll() {
    $.each(images, function (index, image) {
        const imageMiddleOffset = image.offsetTop + image.height / 2;
        const scrollAt = window.scrollY + window.innerHeight;
        if (scrollAt > imageMiddleOffset) {
        $(this).attr({ class: "active" });
        }
    });
    }
    //改善效能
    function debounce (func, delay=250) {
    let timer = null
    return () => {
        let context = this
        let args = arguments
        clearTimeout(timer)
        timer = setTimeout(() => {
        func.apply(context, args)
        }, delay)
    }
    }

    $(window).scroll(debounce(handleScroll));

});