import css from './css/mz_bs.css';
import swiper from './css/swiper/swiper.min.css';  
import $ from 'jquery';
import './js/customer.js';
import Swiper from 'swiper';
import './js/jquery.vticker';

window.onload = function() {
    var mySwiper = new Swiper ('.swiper-container', {
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