import './css/fgh_lrf_zfs2.css';
import './js/customer.js';
import './js/jquery.vticker';


//监听变量
Object.defineProperty(window, "city", {
    set: function(value) {
        // console.log('执行')
        let city = value
        let str = '<meta name="keywords" id="meta_city" content="'+city+'老人房装修 '+city+'老人房设计 '+city+'母亲节礼物 '+city+'免费装修设计 '+city+'业之峰">'
        $('head').append(str);
    }
});
function demo(){
    console.log('asdasd')
}

window.onload = function() {

}
