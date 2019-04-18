import './css/mz_pp.css';
import './css/swiper/swiper.min.css';  
import './js/customer.js';
import Swiper from 'swiper';
import './js/jquery.vticker';





$(window).on("load",function(){
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
    })
})