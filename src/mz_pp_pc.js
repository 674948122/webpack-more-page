import './css/mz_pp_pc.css';
import './css/swiper/swiper.min.css';  
import $ from 'jquery';

import './js/customer.js';
import Swiper from 'swiper';
import './js/jquery.vticker';



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