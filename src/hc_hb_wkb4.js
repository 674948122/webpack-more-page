import './css/hc_hb_wkb4.css';
import './css/swiper/swiper.min.css';  
import './js/customer.js';
import Swiper from 'swiper';

window.onload = function() {
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
        }, 
    })
}
$('.item').click(function(){
    $(this).addClass('active').siblings().removeClass('active')
})