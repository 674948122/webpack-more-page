import './css/fgh_bssj_zfs3.css';
import './css/swiper/swiper.min.css';
import Swiper from 'swiper';
import './js/customer.js';

//监听变量
Object.defineProperty(window, "city", {
    set: function(value) {
        // console.log('执行')
        let city = value
        let str = '<meta name="keywords" id="meta_city" content="'+city+'别墅装修 '+city+'别墅设计 '+city+'免费别墅装修报价 '+city+'免费别墅平面设计">'
        $('head').append(str);
    }
});

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
}
