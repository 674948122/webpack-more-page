import './css/qby_wkb1_bj.css';
import './css/swiper/swiper.min.css';  
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
    })
    //  人名轮播初始化
    $('#people_one').vTicker({
        showItems: 4,
        pause: 500,
        speed: 1000,
    });
    setInterval(function(){
        var num = randomNum(100000,200000)
        $('#num').html(num)
    }, 1000)

}
//生成从minNum到maxNum的随机数
function randomNum(minNum,maxNum){ 
    switch(arguments.length){ 
        case 1: 
            return parseInt(Math.random()*minNum+1,10); 
        break; 
        case 2: 
            return parseInt(Math.random()*(maxNum-minNum+1)+minNum,10); 
        break; 
            default: 
                return 0; 
            break; 
    } 
} 