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

    const slideImages = document.querySelectorAll(".slide-in");

    function checkSlide(e) {
        console.log(e);
        console.count(e);
    }
    window.addEventListener('scroll', debounce(checkSlide));

     // 滑动页面的底部距离扣除图片一半的高
    const slideInAt = (window.scrollY + window.innerHeight) - img.height / 2;
    // 图片底部距离顶端的距离
    const imgBottom = img.offsetTop + img.height;

    // 已滑过了图片的一半
    const isHalfShow = slideInAt > img.offsetTop;
    // 未完全滑过图片
    const isNotScrollPast = window.scrollY < imgBottom;
    if (isHalfShow && isNotScrollPast) {
        img.classList.add('active');
    } else {
        img.classList.remove('active');
    }

});