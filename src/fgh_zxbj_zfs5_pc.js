import './css/fgh_zxbj_zfs5_pc.css';

import './js/customer.js';
import './js/main'

//监听变量
Object.defineProperty(window, "city", {
    set: function(value) {
        // console.log('执行')
        let city = value
        let str = '<meta name="keywords" id="meta_city" content="'+city+'装修报价 '+city+'免费家装报价 '+city+'装修 '+city+'免费装修量房 '+city+'装修设计 '+city+'业之峰">'
        $('head').append(str);
    }
});
$(function () {
    var zong = $('#zong');
    var cai = $('#cai');
    var ren = $('#ren');
    var she = $('#she');
    var zhi = $('#zhi');
    var myArray = [[121459, 58365, 50497, 8218, 4379],
    [155424, 69322, 77284, 5373, 3445],
    [108289, 87732, 17309, 1583, 1665],
    [236859, 126580, 92027, 11769, 6483],
    [142826, 75720, 52404, 9717, 4985]];

    var i = 0;
    var timer = setInterval(function () {
        if (i > 4) {
            i = 0;
        }
        var arraySon = myArray[i];
        zong.text(arraySon[0]);
        cai.text(arraySon[1]);
        ren.text(arraySon[2]);
        she.text(arraySon[3]);
        zhi.text(arraySon[4]);
        i++
    }, 200);
})

window.onload = function() {
    $('.tab_item').click(function(){
        $(this).addClass('active').siblings().removeClass('active')
    })
}
