import './css/fgh_zxbj_zfs5.css';

import './js/customer.js';

//监听变量
Object.defineProperty(window, "city", {
    set: function(value) {
        // console.log('执行')
        let city = value
        let str = '<meta name="keywords" id="meta_city" content="'+city+'装修报价 '+city+'免费家装报价 '+city+'装修 '+city+'免费装修量房 '+city+'装修设计 '+city+'业之峰">'
        $('head').append(str);
    }
});
window.onload = function() {
    // $('#submit').click(function(){
    //     var str = '';
    //     str = "风格："+$('#style').val()+'；户型：'+$('#shi').val()+'、'+$('#ting').val()+'、'+$('#wei').val()
    //     $('#remark').val(str)
    // })
    $('.tab_item').click(function(){
        $(this).addClass('active').siblings().removeClass('active')
    })
}



