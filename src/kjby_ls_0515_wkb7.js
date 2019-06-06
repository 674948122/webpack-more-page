import './css/kjby_ls_0515_wkb7.css';
import './js/customer.js';
import './css/swiper/swiper.min.css';
import Swiper from 'swiper';


//监听变量
// Object.defineProperty(window, "city", {
//     set: function(value) {
//         // console.log('执行')
//         let city = value
//         let str = '<meta name="keywords" id="meta_city" content="'+city+'老人房装修 '+city+'老人房设计 '+city+'母亲节礼物 '+city+'免费装修设计 '+city+'业之峰">'
//         $('head').append(str);
//     }
// });



var mySwiper1 = new Swiper ('#swiper_one', {
    // slidesPerView : 3,
    // spaceBetween : 15,
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
//格式化日期

function setDate(date) {
    y = date.getFullYear();
    m = date.getMonth() + 1;
    d = date.getDate();
    m = m < 10 ? "0" + m : m;
    d = d < 10 ? "0" + d : d;
    return y + "-" + m + "-" + d;
}


/**
 * 获取当前月的第一天
 */
function getCurrentMonthFirst() {
    var date = new Date();
    date.setDate(1);
    return date;
}
/**
 * 获取当前月的最后一天
 */
function getCurrentMonthLast() {
    var date = new Date();
    var currentMonth = date.getMonth();
    var nextMonth = ++currentMonth;
    var nextMonthFirstDay = new Date(date.getFullYear(), nextMonth, 1);
    var oneDay = 1000 * 60 * 60 * 24;
    return new Date(nextMonthFirstDay - oneDay);
}

function getDay(date){
    var day = '';
    day = day + (date.getMonth()+1)+"月"; 
    day = day + date.getDate()+"日";
    return day;
}
// console.log(getCurrentMonthFirst())
// console.log(getCurrentMonthLast())
var frist = getCurrentMonthFirst()
var last = getCurrentMonthLast()

var fristDay = getDay(frist)
var lastDay = getDay(last)

$('.fristDay').html(fristDay)
$('.lastDay').html(lastDay)