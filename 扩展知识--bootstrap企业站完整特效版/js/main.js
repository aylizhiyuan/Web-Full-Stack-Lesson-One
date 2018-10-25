/**
 * Created by hama on 2018/5/29.
 */
$(function(){
    $.supersized({
        slide_interval:5000,
        transition:1,
        transition_speed:1000,
        slide_links:'blank',
        slides:[
            {image : './img/1.jpg'},
            {image : './img/2.jpg'},
            {image : './img/3.jpg'}
        ]
    });
    $('.about-into').flexslider({
        animation: "fade",
        controlNav: false,
        DirectionNav: false,
        slideshowSpeed: 4000,
        animationSpeed: 600
    });
    if($(window).width() < 768){
        $('nav').removeClass('change-none');
        $('nav').addClass('change-black');
    }
    $(window).resize(function(){
        if($(window).width() < 768){
            $('nav').removeClass('change-none');
            $('nav').removeClass('change-white');
            if($(document).scrollTop() > 100){
                $('nav').addClass('change-white');
            }else{
                $('nav').addClass('change-black');
            }
        }else{
            $('nav').removeClass('change-black');
            $('nav').removeClass('change-white');
            if($(document).scrollTop() > 100){
                $('nav').addClass('change-white');
            }else{
                $('nav').addClass('change-none');
            }
        }
    })
    //数字变化
    $('.facts').appear(function() {
        $('#lines').animateNumber({ number: 75 }, 2000 );
        $('#lines1').animateNumber({ number: 25 }, 2000 );
        $('#lines2').animateNumber({ number: 100 }, 2000 );
        $('#lines3').animateNumber({ number: 150 }, 2000 );
    },{accX: 0, accY: -50});
    //点击链接，跳转到对应的布局
    $('a.nav-link').click(function(event){
        event.preventDefault();
        var $achor = $(this);
        //首先先将所有的active去除.
        $('a.nav-link').removeClass('active');
        //添加active属性
        $achor.addClass('active');
        $('html,body').stop().animate({
            scrollTop:$($achor.attr('href')).offset().top
        },1500,'easeInOutExpo');
        console.log($($achor.attr('href')).offset().top);
    })
    //检测滚动条滚动的位置，如果到达某个位置的时候，将active加上
    $(window).scroll(function(){
        var scrollPosition = $(document).scrollTop();
        var aboutPosition = $('#about').offset().top;
        var teamPosition = $('#team').offset().top;
        var servicePosition = $('#service').offset().top;
        var productPosition = $('#product').offset().top;
        var clientPosition = $('#client').offset().top;
        var contactPosition = $('#contact').offset().top;
        if(parseInt(scrollPosition) < parseInt(teamPosition)){
            /*about的区域*/
            $('a.nav-link').removeClass('active');
            $('a.nav-link').eq(0).addClass('active');
            $('.welcome .col-md-12').addClass('bounceIn');
            $('.facts .col-md-3').addClass('fadeInRight');
        }
        if(parseInt(scrollPosition) >= parseInt(teamPosition)){
            /*team的区域*/
            $('a.nav-link').removeClass('active');
            $('a.nav-link').eq(1).addClass('active');
            $('.team .col-md-3').addClass('rollIn');
        }
        if(parseInt(scrollPosition) >= parseInt(servicePosition)){
            /*service的区域*/
            $('a.nav-link').removeClass('active');
            $('a.nav-link').eq(2).addClass('active');
            $('.service-content').addClass('bounceIn');
        }
        if(parseInt(scrollPosition) >= parseInt(productPosition)){
            /*产品的区域*/
            $('a.nav-link').removeClass('active');
            $('a.nav-link').eq(3).addClass('active');
            $('.product .col-md-3').addClass('flipInY');
        }
        if(parseInt(scrollPosition) >= parseInt(clientPosition)){
            /*客户的区域*/
            $('a.nav-link').removeClass('active');
            $('a.nav-link').eq(4).addClass('active');
            $('.client .more').addClass('fadeIn');
        }
        if(parseInt(scrollPosition) >= parseInt(contactPosition)){
            /*联系我们的区域*/
            $('a.nav-link').removeClass('active');
            $('a.nav-link').eq(6).addClass('active');
            $('.contact .col-md-4').addClass('flipInX');
        }
    })
    /*当滚动条滚动到一定位置的时候，让导航的padding值/background背景色以及导航里面的color颜色值发生变化，当滚动条恢复原状的时候，将设置的样式还原.*/
    $(window).scroll(function(){
        //当滚动条滚动的时候
        if($(document).scrollTop() > 100){
            $('nav').removeAttr('style');
            if($('nav').hasClass('change-black')){
                $('nav').removeClass('change-black');
            }else{
                $('nav').removeClass('change-none');
            }
            $('nav').addClass('change-white');
            $('.navbar a').removeClass('change-text-white');
            $('.nav-link.active').removeClass('change-border-white');
        }else{
            /*是将padding值+14,背景颜色设置为透明的*/
            $('nav').css('padding-top',14 + 'px');
            $('nav').css('padding-bottom',14 + 'px');
            if($(window).width() < 768){
                $('nav').removeClass('change-white');
                $('nav').addClass('change-black');
            }else{
                $('nav').removeClass('change-white');
                $('nav').addClass('change-none');
            }
            /*字体要变白*/
            $('.navbar a').addClass('change-text-white');
            $('.nav-link.active').addClass('change-border-white');
        }
    })
})