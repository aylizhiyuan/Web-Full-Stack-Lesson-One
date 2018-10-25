
/**
 * autoview.js 这段脚本 引入到 HTML 页面中，可以使改页面 中的内容按照 不同手机自适应 ( 多用于手机 )
 * 本端脚本内部不做其他业务逻辑
 */

   var jsVer = 29;
        /**
         * 一段动态的viewport meta设置，以640像素为基础宽度，动态全局缩放适配不同宽度的浏览器屏幕
         * @isAndroid:boolean  android环境下，不需要user-scalable参数，设置了反而引发了scale的失效
         */
        var useScaledViewportMeta = function ( ) {
            var phoneWidth = parseInt(window.screen.width);
            var phoneScale = phoneWidth/640;
            document.write('<meta name="viewport" content="width=640, user-scalable=no, target-densitydpi=device-dpi,minimum-scale='+phoneScale+',maximum-scale='+phoneScale+'">');
        };
        var ua = navigator.userAgent;
        if (/Android (\d+\.\d+)/.test(ua)){
            var version = parseFloat(RegExp.$1);
            // andriod 2.3
            if(version>2.3){
                useScaledViewportMeta();
                // andriod 2.3以上
            }else{
                document.write('<meta name="viewport" content="width=640, target-densitydpi=device-dpi">');
            }
            // 其他系统
        } else {
            useScaledViewportMeta();
        }