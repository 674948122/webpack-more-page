import './css/mzxq_wkb3.css';
import './css/swiper/swiper.min.css';  
import './js/customer.js';
import Swiper from 'swiper';

window.onload = function() {
    var mySwiper = new Swiper ('#swiper_one', {
        // effect : 'coverflow',
        slidesPerView: 3,
        centeredSlides: true,
        autoplay:{             //自动播放
            delay: 2500,
            disableOnInteraction: false,
        },
        direction: 'horizontal', // 水平切换选项
        loop: true, // 循环模式选项
    })
    var mySwiper2 = new Swiper ('#swiper_two', {
        // effect : 'coverflow',
        slidesPerView: 3,
        centeredSlides: true,
        autoplay:{             //自动播放
            delay: 2500,
            disableOnInteraction: false,
        },
        direction: 'horizontal', // 水平切换选项
        loop: true, // 循环模式选项
    })
    var mySwiper3 = new Swiper ('#swiper_three', {
        // effect : 'coverflow',
        slidesPerView: 3,
        centeredSlides: true,
        autoplay:{             //自动播放
            delay: 2500,
            disableOnInteraction: false,
        },
        direction: 'horizontal', // 水平切换选项
        loop: true, // 循环模式选项
    })
}
$('.suspension').click(function(){
    let h = $('.form_one').offset().top-50
    $('html,body').animate({ 'scrollTop': h }, 300);
})
$('.details').click(function(){
    var h = $(document).height()-$(window).height();
    $('html,body').animate({ 'scrollTop': h }, 300);
})