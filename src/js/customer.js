/* 创建分公司对象 */
function CreateCompany(id, domain, name) {
    this.id = id;
    this.domain = domain;
    this.name = name;
}

/* 分公司列表处理 */
var aboutCompany = {
    array: [//数据来源于数据库 2019/02/14
        new CreateCompany(1, 'bjhd2', '北京'),
        new CreateCompany(2, 'cixi', '慈溪'),
        new CreateCompany(3, 'zz', '郑州'),
        new CreateCompany(4, 'nb', '宁波'),
        new CreateCompany(5, 'xa', '西安'),
        new CreateCompany(6, 'tj', '天津'),
        new CreateCompany(7, 'gy', '贵阳'),
        new CreateCompany(9, 'lz', '兰州'),
        new CreateCompany(10, 'heb', '哈尔滨'),
        new CreateCompany(11, 'jn', '济南'),
        new CreateCompany(13, 'cqhd', '重庆'),
        new CreateCompany(14, 'sjz', '石家庄'),
        new CreateCompany(15, 'chengde', '承德'),
        new CreateCompany(16, 'baotou', '包头'),
        new CreateCompany(17, 'nantong', '南通'),
        new CreateCompany(18, 'dezhou', '德州'),
        new CreateCompany(19, 'jining', '济宁'),
        new CreateCompany(20, 'qd', '青岛'),
        new CreateCompany(21, 'zhenjiang', '镇江'),
        new CreateCompany(22, 'cd', '成都'),
        new CreateCompany(23, 'nanyang', '南阳'),
        new CreateCompany(24, 'nj', '南京'),
        new CreateCompany(26, 'nc', '南昌'),
        new CreateCompany(27, 'qhd', '秦皇岛'),
        new CreateCompany(28, 'hf', '合肥'),
        new CreateCompany(29, 'dl', '大连'),
        new CreateCompany(30, 'wh', '武汉'),
        new CreateCompany(31, 'tangshan', '唐山'),
        new CreateCompany(33, 'sy', '沈阳'),
        new CreateCompany(34, 'wlmq', '乌鲁木齐'),
        new CreateCompany(35, 'ty', '太原'),
        new CreateCompany(36, 'tongliao', '通辽'),
        new CreateCompany(37, 'wf', '潍坊'),
        new CreateCompany(39, 'qq', '齐齐哈尔'),
        new CreateCompany(40, 'shangqiu', '商丘'),
        new CreateCompany(42, 'lyg', '连云港'),
        new CreateCompany(44, 'kaifeng', '开封'),
        new CreateCompany(46, 'maanshan', '马鞍山'),
        new CreateCompany(50, 'weinan', '渭南'),
        new CreateCompany(52, 'xining', '西宁'),
        new CreateCompany(53, 'baoding', '保定'),
        new CreateCompany(54, 'suzhou', '苏州'),
        new CreateCompany(55, 'zibo', '淄博'),
        new CreateCompany(56, 'leshan', '乐山'),
        new CreateCompany(57, 'xuzhou', '徐州'),
        new CreateCompany(58, 'handan', '邯郸'),
        new CreateCompany(59, 'zhoukou', '周口'),
        new CreateCompany(61, 'jinzhou', '锦州'),
        new CreateCompany(63, 'kaili', '凯里'),
        new CreateCompany(66, 'xianning', '咸宁'),
        new CreateCompany(67, 'jiaozuo', '焦作'),
        new CreateCompany(69, 'pds', '平顶山'),
        new CreateCompany(70, 'huaian', '淮安'),
        new CreateCompany(71, 'linyi', '临沂'),
        new CreateCompany(72, 'yantai', '烟台'),
        new CreateCompany(73, 'renqiu', '任丘'),
        new CreateCompany(74, 'xsbn', '西双版纳'),
        new CreateCompany(77, 'cs', '长沙'),
        new CreateCompany(82, 'yibin', '宜宾'),
        new CreateCompany(83, 'hhht', '呼和浩特'),
        new CreateCompany(85, 'linxia', '临夏'),
        new CreateCompany(87, 'nanchong', '南充'),
        new CreateCompany(90, 'jingdezhen', '景德镇'),
        new CreateCompany(93, 'zigong', '自贡'),
        new CreateCompany(96, 'huangshi', '黄石'),
        new CreateCompany(97, 'fuzhou', '福州'),
        new CreateCompany(98, 'haikou', '海口'),
        new CreateCompany(100, 'suining', '遂宁'),
        new CreateCompany(102, 'huzhou', '湖州'),
        new CreateCompany(104, 'wuxi', '无锡'),
        new CreateCompany(106, 'hanzhong', '汉中'),
        new CreateCompany(107, 'jincheng', '晋城'),
        new CreateCompany(110, 'wlcb', '乌兰察布'),
        new CreateCompany(112, 'dongying', '东营'),
        new CreateCompany(114, 'xiantao', '仙桃'),
        new CreateCompany(115, 'cangzhou', '沧州'),
        new CreateCompany(120, 'sanya', '三亚'),
        new CreateCompany(121, 'xiangfan', '襄阳'),
        new CreateCompany(122, 'yining', '伊宁'),
        new CreateCompany(124, 'changde', '常德'),
        new CreateCompany(125, 'jt', '全国'),
        new CreateCompany(126, 'duyun', '都匀'),
        new CreateCompany(127, 'yancheng', '盐城'),
        new CreateCompany(128, 'suqian', '宿迁'),
        new CreateCompany(130, 'zhangjiakou', '张家口'),
        new CreateCompany(131, 'foshan', '佛山'),
        new CreateCompany(132, 'luoyang', '洛阳'),
        new CreateCompany(134, 'anshun', '安顺'),
        new CreateCompany(135, 'liuan', '六安'),
        new CreateCompany(136, 'weihai', '威海'),
        new CreateCompany(137, 'changchun', '长春'),
        new CreateCompany(138, 'guangan', '广安'),
        new CreateCompany(140, 'klmy', '克拉玛依'),
        new CreateCompany(144, 'zhangye', '张掖'),
        new CreateCompany(146, 'changzhou', '常州'),
        new CreateCompany(147, 'nanning', '南宁'),
        new CreateCompany(148, 'anyang', '安阳'),
        new CreateCompany(149, 'pinde', '品德装饰'),
        new CreateCompany(151, 'macheng', '麻城'),
        new CreateCompany(154, 'ziyang', '资阳'),
        new CreateCompany(155, 'shiyan', '十堰'),
        new CreateCompany(156, 'dingxi', '定西'),
        new CreateCompany(157, 'hengshui', '衡水'),
        new CreateCompany(158, 'zhaotong', '昭通'),
        new CreateCompany(159, 'nttongzhou', '通州'),
        new CreateCompany(160, 'xingtai', '邢台'),
        new CreateCompany(161, 'bdqby', '保定全包圆'),
        new CreateCompany(162, 'bjqby', '北京全包圆'),
        new CreateCompany(163, 'chuxiong', '楚雄'),
        new CreateCompany(165, 'chaoyang', '朝阳'),
        new CreateCompany(166, 'jilin', '吉林'),
        new CreateCompany(167, 'jingzhou', '荆州'),
        new CreateCompany(168, 'guyuan', '固原'),
        new CreateCompany(169, 'yulin', '榆林'),
        new CreateCompany(170, 'shuyang', '沭阳'),
        new CreateCompany(171, 'xichang', '西昌'),
        new CreateCompany(172, 'lishui', '丽水'),
        new CreateCompany(280, 'bjmz', '北京迷住')
    ],
    getByName: function (name) {
        return aboutCompany.array.filter(function (item) {
            return item['name'] === name.replace('市', '');
        })[0];
    },
    getById: function (id) {
        return aboutCompany.array.filter(function (item) {
            return item['id'] === id;
        })[0];
    },
    getByDomain: function (domain) {
        return aboutCompany.array.filter(function (item) {
            return item['domain'] === domain;
        })[0];
    }
};

/* 通用处理url*/
var aboutUrl = {
    getCurrentRequestValue: function (parameter) {
        var reg = new RegExp("(^|&)" + parameter + "=([^&]*)(&|$)", "i");
        var r = window.location.search.substr(1).match(reg);
        if (r !== null) {
            return unescape(r[2]);
        }
        return '';
    },
    getCurrentRequestObject: function () {
        var url = location.search;
        var theRequest = new Object();
        if (url.indexOf("?") !== -1) {
            var str = url.substr(1);
            strs = str.split("&");
            for (var i = 0; i < strs.length; i++) {
                theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
            }
        }
        return theRequest;
    }
};

/* 通用处理cookie*/
var aboutCookie = {
    setCookie: function (name, value, hours) {
        var d = new Date();
        d.setTime(d.getTime() + hours * 3600 * 1000);
        document.cookie = name + '=' + value + '; expires=' + d.toGMTString();
    },
    getCookie: function (name) {
        var arr = document.cookie.split('; ');
        for (var i = 0; i < arr.length; i++) {
            var temp = arr[i].split('=');
            if (temp[0] === name) {
                return temp[1];
            }
        }
        return '';
    },
    removeCookie: function (name) {
        var d = new Date();
        d.setTime(d.getTime() - 10000);
        document.cookie = name + '=1; expires=' + d.toGMTString();
    }
};

/* 通用处理js原型扩展 */
String.prototype.isMobilePhoneNumber = function () {
    var isPhone = /^0\d{2,3}-?\d{7,8}$/;
    var isMob = /^1\d{10}$/;
    return isMob.test(this) || isPhone.test(this);
};
//房屋面积 1-999
String.prototype.isHouseArea = function () {
    var reg = new RegExp('^[1-9]{1}[0-9]{0,2}$');
    return reg.test(this);
};

/* 报名信息提交对象 */
var customer = {
    ms: '',
    bid: '',            //分公司Id
    fptid: '',
    name: '',           //客户名称
    phoneNumber: '',    //电话号码
    email: '',          //邮箱
    residentialName: '',//小区名
    squareMeters: '',   //建筑面积
    channel: '',        //了解渠道
    ck: '',             //渠道关键字
    url: '',            //url地址
    userId: '',         //关联推广员id
    remark: ''          //备注
};

/* 报名信息提交对象及页面元素初始化，仅用于customer对象 */
var customerInit = {
    init: function () {
        customerInit.initDate();
        customerInit.initByCookie();
        customerInit.initByUrl();
        customerInit.initByLocation();
        customerInit.initElement();
    },
    //初始化日期#datestr,.datestr(12月1日-12月31日)
    initDate: function () {
        let $elements = $('#datestr,.datestr');
        if ($elements.length > 0) {
            let month = new Date().getMonth() + 1;
            let lastDay;
            switch (month) {
                case 1:
                case 3:
                case 5:
                case 7:
                case 8:
                case 10:
                case 12:
                    lastDay = 31;
                    break;
                case 4:
                case 6:
                case 9:
                case 11:
                    lastDay = 30;
                    break;
                default:
                    lastDay = 28;
                    break;
            }
            $elements.html(month + '月1日-' + month + '月' + lastDay + '日');
        }
    },

    //根据cookie初始化（ck、userId）
    initByCookie: function () {
        customer.ck = aboutCookie.getCookie('ck');
        customer.userId = aboutCookie.getCookie('userId');
    },

    //根据url初始化
    initByUrl: function () {
        for (prop in customer) {
            let paramValue = aboutUrl.getCurrentRequestValue(prop);
            customer[prop] = paramValue ? paramValue : '';
        }
        //如果biddomain，转化为id
        if (customer.bid && isNaN(customer.bid)) {
            let company = aboutCompany.getByDomain(customer.bid);
            if (company !== undefined) {
                customer.bid = company['id'];
            }
        }
        //根据域名处理bid
        customer.url = window.location.href;
        if (customer.url.indexOf('dsp') === -1) {
            if (!customer.bid) {
                var index = customer.url.indexOf('yzf.com');
                if (index !== -1) {
                    let domain = customer.url.substring(0, index - 1).replace('https://', '').replace('http://', '');
                    let company = aboutCompany.getByDomain(domain);
                    if (company !== undefined) {
                        customer.bid = company['id'];
                    }

                }
            }
        }
        if ($('#show-city,.show-city').length > 0 && customer.bid) {
            let company = aboutCompany.getById(customer.bid);
            if (company !== undefined) {
                $('#show-city,.show-city').text(company['name']);
            }
        }

        //console.log('----------URL参数初始化----------');
        //console.log(customer);
    },

    //当bid为null时，根据百度定位初始化
    initByLocation() {
        if (!customer.bid) {
            let myCity = new BMap.Geolocation();
            myCity.getCurrentPosition(function (result) {
                if (this.getStatus() === BMAP_STATUS_SUCCESS) {
                    let citystr = result.address.city.replace('市', '');
                    let company = aboutCompany.getByName(citystr);
                    if (company !== undefined) {
                        customer.bid = company['id'];
                        $('#show-city,.show-city').text(company['name']);
                        //console.log('----------百度定位初始化----------');
                        //console.log(customer);
                    }
                }
            });
        }
    },

    //初始化元素
    initElement: function () {
        if (customer.ms === 'bdocpc' || customer.ck === 'bdpz-tpzq') {
            //百度ocpc模式代码
            //console.log('warning:load bdocpc');
            createScript_BaiduOCPC();
        }
        if (customer.ms === 'gdtocpc') {
            //广点通ocpc模式代码
        }
        //百度统计代码
        createScript_BaiduTongji();
        if ($("[name='branchId'],[name='BranchId']").val() === "29") {
            $("form").append("<p style='text-align: center;color: #fff;padding-top: 10px;'>最终解释权归业之峰所有</p>");
        }
    }
};

/* 表单提交，仅用于customer对象 */
$(".submit").click(function () {
    let $form = $(this).parent("form");
    let $elements = $form.find('input[type!="button"],textarea,select');
    $elements.each(function (index, element) {
        let name = $(element).attr('name');
        let val = $(element).val();
        if (customer.hasOwnProperty(name)) {
            customer[name] = val;
        }
    });
    //姓名非空验证
    let $inputName = $elements.filter('input[name="name"]');
    if ($inputName.length > 0 && !$inputName.val()) {
        alert('请输入姓名');
        return false;
    }
    //电话号码格式验证
    let $inputPhone = $elements.filter('input[name="phoneNumber"]');
    if ($inputPhone.length > 0 && !$inputPhone.val().isMobilePhoneNumber()) {
        alert('手机号码格式不正确');
        return false;
    }
    //备注处理（几室几厅几卫）
    let $targetSel = $form.find('select[class*="remark"]');
    if ($targetSel.length > 0) {
        customer.remark = '';
        $targetSel.each(function (index, element) {
            customer.remark += $(element).val();
        });
    }
    //console.log('----------ajax请求参数----------');
    //console.log(customer);
    let urlHead = document.location.protocol === 'http:' ? 'http:' : 'https:';
    $.ajax({
        type: 'post',
        url: urlHead + '//admin.yzf.com.cn/api/RegistrationAPI/Insert',
        data: {
            'name': customer.name,
            'phoneNumber': customer.phoneNumber,
            'email': customer.email,
            'residentialName': customer.residentialName,
            'squareMeters': customer.squareMeters,
            'channel': customer.channel,
            'ck': customer.ck,
            'url': customer.url,
            'userId': customer.userId,
            'branchId': customer.bid,
            'adUserId': customer.fptid,
            'remark': customer.remark
        },
        success: function (json) {
            //console.log('----------ajax返回结果----------');
            //console.log(json);
            if (json.Sucess) {
                if (customer.ck === 'bdpz-tpzq') {
                    //if (typeof _agl !== 'undefined') {
                    //    console.log('push');
                    //    window._agl && window._agl.push(['track', ['success', { t: 3 }]]);
                    //}
                    _hmt.push(['_trackEvent', 'Click', 'Order', 'success', 1]);
                }
                alert("恭喜您，报名成功");
                return false;
            }
            else {
                alert("同一号码只能报名一次");
                return false;
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert(textStatus);
        }
    });
});

/* 追加百度统计代码到head */
function createScript_BaiduTongji() {
    if (typeof _hmt === "undefined") {
        let str = "    <script data-mk=\"pc信息流流量统计\">\n";
        str += "        var _hmt = _hmt || [];\n";
        str += "        (function () {\n";
        str += "            var hm = document.createElement(\"script\");\n";
        str += "            hm.src = \"https://hm.baidu.com/hm.js?cf4e7539fd6a59c1258ac97ea762b62f\";\n";
        str += "            var s = document.getElementsByTagName(\"script\")[0];\n";
        str += "            s.parentNode.insertBefore(hm, s);\n";
        str += "        })();\n";
        str += "    </script>\n";
        $('head').append(str);
    }

}

/* 追加百度ocpc代码到head */
function createScript_BaiduOCPC() {
    let str = "    <script>\n";
    str += "        window._agl = window._agl || [];\n";
    str += "        (function () {\n";
    str += "            _agl.push(\n";
    str += "                ['production', '_f7L2XwGXjyszb4d1e2oxPybgD']\n";
    str += "            );\n";
    str += "            (function () {\n";
    str += "                var agl = document.createElement('script');\n";
    str += "                agl.type = 'text/javascript';\n";
    str += "                agl.async = true;\n";
    str += "                agl.src = 'https://fxgate.baidu.com/angelia/fcagl.js?production=_f7L2XwGXjyszb4d1e2oxPybgD';\n";
    str += "                var s = document.getElementsByTagName('script')[0];\n";
    str += "                s.parentNode.insertBefore(agl, s);\n";
    str += "            })();\n";
    str += "        })();\n";
    str += "    </script>\n";
    $('head').append(str);

    let str2 = "    <script>\n";
    str2 += " $(function () {";
    str2 += "    $('form').submit(function () {";
    str2 += "        window._agl && window._agl.push(['track', ['success', { t: 3 }]]);";
    str2 += "    });";
    str2 += "  });";
    str2 += "    </script>\n";
    $('body').append(str2);
}

/*页面初始化*/
customerInit.init();

