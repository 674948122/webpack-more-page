import './css/fgh_zxfgbj_zfs6_pc.css';
import './css/swiper/swiper.min.css';  
import './js/customer.js';
import Swiper from 'swiper';
import './js/jquery.vticker';
import './js/main';

//监听变量
Object.defineProperty(window, "city", {
    set: function(value) {
        // console.log('执行')
        let city = value
        let str = '<meta name="keywords" id="meta_city" content="'+city+'装修设计 装修风格'+city+'业之峰 '+city+'免费装修报价 装修风格设计">'
        $('head').append(str);
    }
});


var mySwiper = new Swiper ('.swiper-container', {
    slidesPerView : 3,
    spaceBetween : 15,
    centeredSlides : true,
    autoplay:{             //自动播放
        delay: 2500,
        disableOnInteraction: false,
    },
    direction: 'horizontal', // 水平切换选项
    loop: true, // 循环模式选项
    
    // 如果需要分页器
    pagination: {
        el: '.swiper-pagination',
        clickable :true,
    }, 
    // 如果需要前进后退按钮
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
})

$(function () {
    var zong = $('#zong');
    var cai = $('#cai');
    var ren = $('#ren');
    var she = $('#she');
    var zhi = $('#zhi');
    var myArray = [[121459, 58365, 50497, 8218, 4379],
    [155424, 69322, 77284, 5373, 3445],
    [108289, 87732, 17309, 1583, 1665],
    [236859, 126580, 92027, 11769, 6483],
    [142826, 75720, 52404, 9717, 4985]];

    var i = 0;
    var timer = setInterval(function () {
        if (i > 4) {
            i = 0;
        }
        var arraySon = myArray[i];
        zong.text(arraySon[0]);
        cai.text(arraySon[1]);
        ren.text(arraySon[2]);
        she.text(arraySon[3]);
        zhi.text(arraySon[4]);
        i++
    }, 200);
})
var flag = true //设置标识。防止出现跑马灯
var floorNavIndex = 0;


function floorActive(i) {
    $('.nav_floor .right .nav_floor_text').removeClass('active')
    $('.nav_floor .right .nav_floor_text').eq(i).addClass('active')
    $('.nav_floor .left .circle_warp').removeClass('active')
    $('.nav_floor .left .circle_warp').eq(i).addClass('active')
}
$('.nav_floor .right .nav_floor_text').click(function () {
    flag = false
    var i = $(this).index()
    floorNavIndex = i
    $('html,body').stop(true).animate({ 'scrollTop': $(".swipper").eq(i).offset().top-100 }, 300, function () { flag = true });
    floorActive(floorNavIndex)
})
$('.nav_floor .left .circle_warp').click(function () {
    flag = false
    var i = $(this).index()
    floorNavIndex = i
    $('html,body').stop(true).animate({ 'scrollTop': $(".swipper").eq(i).offset().top-100 }, 300, function () { flag = true });
    floorActive(floorNavIndex)
})
$(window).scroll(function () {
    if (flag) {
        var iTop = $(window).scrollTop();
        // console.log(iTop)
        if (iTop > $(".swipper").eq(0).offset().top-300) {
            $('.nav_floor').css({'opacity':1})
        }else{
            $('.nav_floor').css({'opacity':0})
        }

        if (iTop < $(".swipper").eq(0).offset().top-100) {
            
            floorActive(0)
        }
        if ($(".swipper").eq(0).offset().top < iTop && iTop < $(".swipper").eq(1).offset().top) {
            floorActive(1)
        }
        if ($(".swipper").eq(1).offset().top < iTop && iTop < $(".swipper").eq(2).offset().top) {
            floorActive(2)
        }
        if ($(".swipper").eq(2).offset().top < iTop && iTop < $(".swipper").eq(3).offset().top) {
            floorActive(3)
        }
        if ($(".swipper").eq(3).offset().top < iTop && iTop < $(".swipper").eq(4).offset().top) {
            floorActive(4)
        }
        if ($(".swipper").eq(4).offset().top < iTop && iTop < $(".swipper").eq(5).offset().top) {
            floorActive(5)
        }
        if ($(".swipper").eq(5).offset().top < iTop && iTop < $(".swipper").eq(6).offset().top) {
            floorActive(6)
        }
        if ($(".swipper").eq(7).offset().top-100 < iTop) {
            floorActive(7)
        }
    }
})