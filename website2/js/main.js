window.onload = function(){
    //当页面的html/css部分加载完毕的时候，再执行这段js代码
    var clientWidth = document.documentElement.clientWidth || document.body.clientWidth;
    var clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
    var banner = document.querySelector('.banner');
    banner.style.height = clientHeight + 'px';
}