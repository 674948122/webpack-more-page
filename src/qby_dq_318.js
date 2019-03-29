import './css/qby_dq_318.css';
import './css/swiper/swiper.min.css';  
import $ from 'jquery';
import './js/customer.js';
import Swiper from 'swiper';
import './js/jquery.vticker';


window.onload = function() {
    var mySwiper = new Swiper ('.swiper-container', {
        effect : 'coverflow',
        slidesPerView: 3,
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
        
        // 如果需要前进后退按钮
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        
    })
    //  人名轮播初始化
    $('#people_one').vTicker({
        showItems: 4,
        pause: 500,
        speed: 1000,
    }); 
}