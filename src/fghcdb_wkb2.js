import './css/fghcdb_wkb2.css';
import './js/customer.js';
import './js/jquery.vticker';

window.onload = function() {
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
//2999--99999
var start = '2019-05-18';
var staT = new Date(start);
var now = new Date();
//两个时间相差小时 兼容firefox chrome
function datedifference(sDate1, sDate2) {    //sDate1和sDate2是2006-12-18格式  
    var dateSpan,
        tempDate,
        iDays;
    sDate1 = Date.parse(sDate1);
    sDate2 = Date.parse(sDate2);
    dateSpan = sDate2 - sDate1;
    dateSpan = Math.abs(dateSpan);
    iDays = Math.floor(dateSpan / (3600 * 1000));
    return iDays
};

var c = datedifference(staT, now);//相差小时
c = Math.round( c / 4.8)
//console.log(c)
$('.people_num').html(30 + c)

