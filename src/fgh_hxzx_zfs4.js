import './css/fgh_hxzx_zfs4.css';
import './css/swiper/swiper.min.css';
import Swiper from 'swiper';
import './js/customer.js';

//监听变量
Object.defineProperty(window, "city", {
    set: function(value) {
        // console.log('执行')
        let city = value
        let str = '<meta name="keywords" id="meta_city" content="'+city+'业之峰 '+city+'免费设计 '+city+'免费装修规划 '+city+'装修设计 '+city+'免费量房">'
        $('head').append(str);
    }
});

window.onload = function() {
    var mySwiper1 = new Swiper ('#swiper_one', {
        slidesPerView : 3,
        spaceBetween : 15,
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
        // navigation: {
        //     nextEl: '.swiper-button-next',
        //     prevEl: '.swiper-button-prev',
        // },
    })
}
//点击滚动
$('.junp').click(function(){
    $('html,body').animate({
        scrollTop: $('.form_one').offset().top - 200
    }, 800);
})