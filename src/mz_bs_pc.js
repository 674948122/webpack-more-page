import './css/mz_bs_pc.css';
import './css/swiper/swiper.min.css';  
import $ from 'jquery';

import './js/customer.js';
import Swiper from 'swiper';
import './js/jquery.vticker';
// import './js/Global.js'
function goPAGE() {
    if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
        var f = window.location.pathname;
        var arr = f.split("_pc");
        var parames = location.search;
        window.location.href = window.location.origin + arr[0] + '.html' + parames
    }
    else {

    }
}
goPAGE();

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