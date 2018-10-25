/**
 * Created by Administrator on 2014/11/22.
 */

$(document).ready(function(){
    /*当页面加载完毕后执行该jquery */
    function shoucang(){
        $(".shoucang a").mouseenter(function(){
            $(".shoucang b")
        }).mouseleave(function(){
            $(".shoucang b").show();
        })
    }
    shoucang();
})
