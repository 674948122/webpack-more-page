import './css/kjby_jb2.css';
import './js/customer.js';
import './js/jquery.vticker';
import videojs from 'video.js'
import './css/videojs/video-js.min.css'
import './img/kjby_bj1_video.jpg'


videojs.options.flash.swf = "video-js.swf";

var myPlayer = videojs('video'); // video 标签中的ID

myPlayer.ready(function(){
    // myPlayer.play();    // 调用播放函数
});

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

window.onload = function() {
   
}
