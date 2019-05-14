import './css/qby_wkb1_bj_pc.css';
import qrcode from 'jquery.qrcode';


var f = window.location.pathname;
var arr = f.split("_pc");
var parames = location.search;
var url = window.location.origin + arr[0] + '.html' + parames
$('#iframe').attr('src',url)
//生成二维码
$('#code').qrcode({width: 120,height: 120,text: url}); //任意字符串 
$('#url_text').html(url)

// //监听变量
// Object.defineProperty(window, "city", {
//     set: function(value) {
//         console.log(value)
//         // let city = value
//         // let str = '<meta name="keywords" content="'+city+'老人房装修 '+city+'老人房设计 '+city+'母亲节礼物 '+city+'免费装修设计 '+city+'业之峰">'
//         // $('head').append(str);
//     }
// });

window.onload = function() {
    // console.log($('#iframe #meta_city'))
    let str = window.parent.document.getElementById('iframe')
    // window.frames["iframe"].document.getElementById("meta_city")
    console.log(str)
}