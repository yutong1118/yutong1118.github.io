    // 判斷元素是否進入當前視窗函式
    function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
    }


    // 為視窗可見的列表添加in-view類
    //測試在頁面加載時/向下滾動時是否可見
    var items = document.querySelectorAll(".timeline li");

    // code for the isElementInViewport function

    function callbackFunc() {
    for (var i = 0; i < items.length; i++) {
        if (isElementInViewport(items[i])) {
        items[i].classList.add("in-view");
        }
    }
    }
    window.addEventListener("load", callbackFunc);
    window.addEventListener("scroll", callbackFunc);
