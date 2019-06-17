import './css/hc_bsbj_zfs7.css';
import './css/swiper/swiper.min.css';
import Swiper from 'swiper';
import './js/customer.js';

//监听变量
Object.defineProperty(window, "city", {
    set: function(value) {
        // console.log('执行')
        let city = value
        let str = '<meta name="keywords" id="meta_city" content="'+city+'业之峰 '+city+'汇巢 '+city+'别墅环保装修 '+city+'别墅免费报价 '+city+'别墅装饰">'
        $('head').append(str);
    }
});

var mySwiper1 = new Swiper ('#swiper_one', {
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
var mySwiper2 = new Swiper ('#swiper_two', {
    slidesPerView: 1.7,
    spaceBetween: 10,
    centeredSlides: true,
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
    }
})
//点击滚动
$('.gotop').click(function(){
    $('html,body').animate({
        scrollTop: $('.form_one').offset().top - 200
    }, 800);
})