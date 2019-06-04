import './css/hc_dssj_wkb6.css';
import './js/customer.js';
import './css/swiper/swiper.min.css';
import Swiper from 'swiper';
import './js/jquery.vticker';


//监听变量
// Object.defineProperty(window, "city", {
//     set: function(value) {
//         // console.log('执行')
//         let city = value
//         let str = '<meta name="keywords" id="meta_city" content="'+city+'老人房装修 '+city+'老人房设计 '+city+'母亲节礼物 '+city+'免费装修设计 '+city+'业之峰">'
//         $('head').append(str);
//     }
// });


window.onload = function() {

    var mySwiper1 = new Swiper ('#swiper_one', {
        slidesPerView : 3,
        spaceBetween : 15,
        centeredSlides : true,
        // autoplay:{             //自动播放
        //     delay: 2500,
        //     disableOnInteraction: false,
        // },
        direction: 'horizontal', // 水平切换选项
        loop: true, // 循环模式选项
        
        // 如果需要分页器
        pagination: {
            el: '.swiper-pagination',
            clickable :true,
        }, 
        // 如果需要前进后退按钮
        // navigation: {
        //     nextEl: '.swiper-button-next',
        //     prevEl: '.swiper-button-prev',
        // },
    })
    var mySwiper2 = new Swiper ('#swiper_two', {
        slidesPerView : 3,
        spaceBetween : 15,
        centeredSlides : true,
        // autoplay:{             //自动播放
        //     delay: 2500,
        //     disableOnInteraction: false,
        // },
        direction: 'horizontal', // 水平切换选项
        loop: true, // 循环模式选项
        
        // 如果需要分页器
        pagination: {
            el: '.swiper-pagination',
            clickable :true,
        }, 
        // 如果需要前进后退按钮
        // navigation: {
        //     nextEl: '.swiper-button-next',
        //     prevEl: '.swiper-button-prev',
        // },
    })
}
