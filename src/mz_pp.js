import './css/mz_pp.css';
import './css/swiper/swiper.min.css';  
import $ from 'jquery';
import './js/customer.js';
import Swiper from 'swiper';
import './js/jquery.vticker';



function goPAGE() {
    if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {

    }
    else {
        var f = window.location.pathname;
        var arr = f.split(".");
        var parames = location.search;
        window.location.href = window.location.origin + arr[0] + '_pc.html' + parames
    }
}
goPAGE();

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