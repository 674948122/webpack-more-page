import './css/qby_dq_318_new.css';
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
    //  人名轮播初始化
    $('#people_two').vTicker({
        showItems: 4,
        pause: 500,
        speed: 1000,
    }); 

    var now = new Date();
    whatTime(now);
    //判断当前时间所在时段
    function whatTime (date) {
        var weekday = date.getDay()||7; //获取星期几,getDay()返回值是 0（周日） 到 6（周六） 之间的一个整数。0||7为7，即weekday的值为1-7
        if ( weekday <=5 && weekday >= 1 ) {
            // console.log('上周6,本周5')
            var sta = new Date(getTime(now,'before6'))
            var end = new Date(getTime(now,'this5'))
            dateText(sta,end)
        }
        if ( weekday >= 6 && weekday <= 7 ) {
            // console.log('本周6，下周5')
            var sta = new Date(getTime(now,'this6'))
            var end = new Date(getTime(now,'after5'))
            dateText(sta,end)
        }
    }
    //获取对应的时间
    function getTime (date,num) {
        var weekday = date.getDay()||7; //获取星期几,getDay()返回值是 0（周日） 到 6（周六） 之间的一个整数。0||7为7，即weekday的值为1-7
        switch (num) {
            case 'before6':
                date.setDate(date.getDate()-(weekday+1));
                break;
            case 'this5':
                date.setDate(date.getDate()-(weekday-5-7));
                break;
            case 'this6':
                date.setDate(date.getDate()-(weekday-6));
                break;
            case 'after5':
                date.setDate(date.getDate()-(weekday-12));
                break;
        }
        return date
    }
    function dateText(sta,end){
        var one = '';
        var two = '';
        one = sta.getFullYear()+"年";
        one = one + (sta.getMonth()+1)+"月"; 
        one = one + sta.getDate()+"日";
        two = two + (end.getMonth()+1)+"月"; 
        two = two + end.getDate()+"日";
        if ( ( now.getMonth() + 1 ) == 3 && now.getDate() == 22 ) {
            return
        }else{
            $('#one').text(one);
            $('#two').text(two);
        }
    }
    // var mock = '2019-03-23'//假数据，调试用
    // var end = new Date(mock); //现在的时间
    
    




    // var mock2 = '2019-03-24'
    // var demo = new Date(mock2);
    // var a = demo.getDay()||7;
    // console.log(a)
}