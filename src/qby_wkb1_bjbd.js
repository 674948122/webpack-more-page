import './css/qby_wkb1_bjbd.css';
import './js/customer.js';

window.onload = function() {


    function text(){
        var num = 0;
        num = randomNum(50000,190000);
        $('#num').html(num);
        $('.money_one').html(randomNum(2999,99999));
        $('.money_two').html(randomNum(2999,99999)); 
        $('.money_three').html(randomNum(2999,99999)); 
        $('.money_four').html(randomNum(2999,99999)); 
        $('.money_five').html(randomNum(2999,99999)); 
        $('.money_six').html(randomNum(2999,99999)); 
        setTimeout(text,250);
    }
    text()

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

