import './css/hc_kjby_wkb8.css';
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
var $select = $('#select');
var $designer = $('#designer');
var $remark = $('#remark');
var $select2 = $('#select2');
var $designer2 = $('#designer2');
var $remark2 = $('#remark2');

var mySwiper_peo1 = new Swiper ('#swiper_peo_one', {
    slidesPerView : 3,
    spaceBetween : 15,
    centeredSlides : true,
    // autoplay:{             //自动播放
    //     delay: 2500,
    //     disableOnInteraction: false,
    // },
    direction: 'horizontal', // 水平切换选项
    // loop: true, // 循环模式选项
    
    // 如果需要分页器
    pagination: {
        el: '.swiper-pagination1',
        clickable :true,
    }, 
    // 如果需要前进后退按钮
    // navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev',
    // },
    on: {
        slideChangeTransitionEnd: function(){
            // console.log(this.activeIndex); //切换结束时，告诉我现在是第几个slide
            var val = '';
            switch (this.activeIndex) {
                case 0 : val = '李然';
                    break;
                case 1 : val = '郭相新';
                    break;
                case 2 : val = '郜东亮';
                    break;
                case 3 : val = '韦唯';
                    break;
            }
            // console.log(val)
            setDesignerVal(val);
            $select.val(val);
        },
    }
})
$select.change(function (e) {
    var val = $(this).val();
    var index = $(this).get(0).selectedIndex;
    mySwiper_peo1.slideTo(index);
    setDesignerVal(val);
});

function setDesignerVal(val) {
    $designer.text(val);
    $remark.val('心仪的榜样设计大师'+ val);
}
var mySwiper_peo2 = new Swiper ('#swiper_peo_two', {
    slidesPerView : 3,
    spaceBetween : 15,
    centeredSlides : true,
    // autoplay:{             //自动播放
    //     delay: 2500,
    //     disableOnInteraction: false,
    // },
    direction: 'horizontal', // 水平切换选项
    // loop: true, // 循环模式选项
    
    // 如果需要分页器
    pagination: {
        el: '.swiper-pagination2',
        clickable :true,
    }, 
    // 如果需要前进后退按钮
    // navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev',
    // },
    on: {
        slideChangeTransitionEnd: function(){
            // console.log(this.activeIndex); //切换结束时，告诉我现在是第几个slide
            var val = '';
            switch (this.activeIndex) {
                case 0 : val = '李然';
                    break;
                case 1 : val = '郭相新';
                    break;
                case 2 : val = '郜东亮';
                    break;
                case 3 : val = '韦唯';
                    break;
            }
            // console.log(val)
            setDesignerVal2(val);
            $select2.val(val);
        },
    }
})
$select2.change(function (e) {
    var val = $(this).val();
    var index = $(this).get(0).selectedIndex;
    mySwiper_peo2.slideTo(index);
    setDesignerVal2(val);
});
function setDesignerVal2(val) {
    $designer2.text(val);
    $remark2.val('心仪的榜样设计大师'+ val);
}
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

$('.hc-tab li').click(function () {
    $('.hc-c img').eq($(this).index()).show().siblings('img').hide();
})

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
    day = day + (date.getMonth()+1)+"."; 
    day = day + date.getDate()+"";
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