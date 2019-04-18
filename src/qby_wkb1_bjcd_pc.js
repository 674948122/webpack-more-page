import './css/qby_wkb1_bjcd_pc.css';
import qrcode from 'jquery.qrcode';


var f = window.location.pathname;
var arr = f.split("_pc");
var parames = location.search;
var url = window.location.origin + arr[0] + '.html' + parames
$('#iframe').attr('src',url)
//生成二维码
$('#code').qrcode({width: 120,height: 120,text: url}); //任意字符串 
$('#url_text').html(url)
window.onload = function() {

}