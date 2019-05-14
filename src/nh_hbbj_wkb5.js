import './css/nh_hbbj_wkb5.css';
import './css/swiper/swiper.min.css';
import Swiper from 'swiper';
import './js/customer.js';

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
    })
}

