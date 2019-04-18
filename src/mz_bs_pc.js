import './css/mz_bs_pc.css';
import './css/swiper/swiper.min.css';  
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
        // 如果需要前进后退按钮
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    })
}
$('#to_top').click(function(){
    $('html,body').animate({
        scrollTop: '0px'
    }, 800);
})
$('#get_price').click(function(){
    $('#shadow,#box').show()
    $('#shadow,#box').animate({
        opacity: 1,
    },500)
})
$('#close').click(function(){
    $('#shadow,#box').animate({
        opacity: 0,
    },500,function(){
        $('#shadow,#box').hide()
    })
})