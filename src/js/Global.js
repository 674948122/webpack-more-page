
$(function () {
    initFun();

    $("#TimeClose").click(function () {
        $("#TimeOutLogo").fadeOut();
    })


    if (($.cookie('FloatTimeOut')) != 1)
    {
        var stimeOut = setTimeout(function () {
            var curDate = new Date();
            var curTamp = curDate.getTime();
            var curWeeHours = new Date(curDate.toLocaleDateString()).getTime() - 1;
            var passedTamp = curTamp - curWeeHours;
            var leftTamp = 24 * 60 * 60 * 1000 - passedTamp;
            var leftTime = new Date();
            leftTime.setTime(leftTamp + curTamp);
            document.cookie = "FloatTimeOut=1;expires=" + leftTime.toGMTString();

            $("#TimeOutLogo").animate({
                left: "50%",
                "opacity": "1"
            }, 500, function () {
                setTimeout(function () {
                    $("#TimeOutLogo").animate({
                        left: "130%",
                        "opacity": "0"
                    }, 500);
                }, 10000)
            });
        }, 60000);
    }

    $("#rolateul li").hover(function () {
        var index = $(this).index();
        var Obj = $(this);
        RWait[index] = false;
        if (!RMask[index]) {
            RMask[index] = true;
            setLirotate($(this), index);
        }

    }, function () {
        var index = $(this).index();
        var Obj = $(this);
        if (!RMask2[index]) {
            RMask2[index] = true;
            backLirotate($(this), index);
        }
        else {
            RWait[index] = true;
        }

    });
    
    var ProIndex = 0;

    var proTime = setInterval(function () {
        if (ProIndex < ($("#productul li").size() - 3)) {
            ProIndex++;
        }
        else {
            ProIndex = 0;
        }
        $("#productul").animate({
            marginLeft: -ProIndex * 407 + "px"
        }, 300);
    }, 7000)

    $("#ProLeft").click(function () {
        if ($("#productul li").size() > 3) {
            if (ProIndex > 0) {
                ProIndex--;
            }
            else {
                ProIndex = $("#productul li").size() - 3;
            }
            $("#productul").animate({
                marginLeft: -ProIndex * 407 + "px"
            }, 300);
        }
    });

    $("#ProRight").click(function () {
        if ($("#productul li").size() > 3) {
            if (ProIndex < ($("#productul li").size() - 3)) {
                ProIndex++;
            }
            else {
                ProIndex = 0;
            }
            $("#productul").animate({
                marginLeft: -ProIndex * 407 + "px"
            }, 300);
        }
    })


    $("#productul li").hover(function () {
        $(this).find(".pMask").fadeOut("fast");
    }, function () {
        $(this).find(".pMask").fadeIn("fast");
    })

    $("#slider11 a").hover(function () {
        var index = $(this).index();
            $(this).css({
                backgroundColor: "#B69454",
                border: "1px solid #B69454 !important"
            })
            $(this).find("span").css({
                color: "white"

            });
            
            if (document.getElementById("copyurl")) {
                $(this).find("i").html("<img src=\"/Images2/Global/Slider" + index + ".png\">");
            }else {
                $(this).find("i").html("<img src=\"/Images2/Global/Slider" + (index + 1) + ".png\">");  
            }
            

    }, function () {
        var index = $(this).index();
        $(this).css({
            backgroundColor: "white",
            border: "1px solid #ddd",
            "border-bottom": "1px solid #f8f8f8!important"
        })
        $(this).find("span").css({
            color: "#333"
        });
        
        if (document.getElementById("copyurl")) {
            if (index == 0)
            {
                $(this).find("i").html("<img src=\"/Images2/Global/SliderA0.png\">");
            }
            else if (index == 1) {
                $(this).find("i").html("<img src=\"/Images2/Global/Slider1.gif\">");
            }
            else if (index == 2) {
                $(this).find("i").html("<img src=\"/Images2/Global/Slider2.jpg\">");
            }
            else if (index == 3) {
                $(this).find("i").html("<img src=\"/Images2/Global/Slider3.jpg\">");
            }
        }
        else {
            if (index == 0) {
                $(this).find("i").html("<img src=\"/Images2/Global/Slider1.gif\">");
            }else {
                $(this).find("i").html("<img src=\"/Images2/Global/Slider" + (index + 1) + ".jpg\">");  
            }
        }
        
    })

    //$("#slider11 a").hover(function () {
        
    //    var Index = 0;
    //    if (document.getElementById("copyurl")) {
    //        Index = $(this).index();
    //    }
    //    else {
    //        Index = $(this).index()+1;
    //    }
    //    $(this).find("img").attr("src", "/Images2/Global/SH" + Index + ".jpg");
    //}, function () {
    //    var Index = 0;

    //    if (document.getElementById("copyurl")) {
    //        Index = $(this).index();
    //    }
    //    else {
    //        Index = $(this).index() + 1;
    //    }
    //    $(this).find("img").attr("src", "/Images2/Global/SS" + Index + ".jpg");
    //})


    $("#showForm").click(function () {
        showRegistion("预约装修");
    })

    $("#CodeShow").stop(true,false).hover(function () {
        $(".jtcode").animate({
            width:"187px"
        }, 300);
    }, function () {
        $(".jtcode").animate({
            width: "0px"
        }, 300);
    })

    $(".nav >ul>li").hover(function () {
        var className = $(this).find(".anav").attr("class");
        if (className.indexOf("dropH") < 0) {
            if (className.indexOf("drop") > 0) {
                $(this).find(".anav").attr("class", className + " hover up");
            }
            else {
                $(this).find(".anav").attr("class", className + " hover");
            }
        }
        $(this).find(".dropList").show();
        $(this).css({
            backgroundColor: "#B69454",
            color: "#fff"
        });
    }, function () {
        $(this).find(".anav").removeClass("hover");
        $(this).find(".anav").removeClass("up");
        $(this).find(".dropList").hide();
        $(this).css({
            backgroundColor: "#18171E",
            color: "white"
        });
    });

    $(".dropList >ul>li").hover(function () {
        $(this).find("div").css({
            backgroundColor: "#CBB489",
            opacity:.95
        });
    }, function () {
        $(this).find("div").css({
            backgroundColor: "#B69454",
            opacity: .9
        });
    })

    $(".sec_tab li").click(function () {
        $(".sec_tab li").removeClass("a_O");
        $(this).attr("class", "a_O");
        $("#signWord").html(Lang.p[$(this).index()]);
        $("#arrow").css({
            left: 43 + $(this).index() * 100 + "px"
        })
    });


    var SubmitMask = false;
    $(".btnSubmit").click(function () {

        if (!SubmitMask) {
            var Obj = $(this).parent("form");
            var Phone = Obj.find("input[name='PhoneNumber']").val();
            if (RegPhone(Phone)) {
                $.ajax({
                    type: "post",
                    url: "/api/RegistrationAPI/Insert",
                    data: Obj.serialize(),
                    success: function (json) {
                        if (json.Sucess) {
                            alert("恭喜您，报名成功");
                        }
                        else {
                            alert("同一手机号码只能领取一次！");
                        }
                        SubmitMask = false;
                    }
                });
                pyRegisterCvt(Phone);
            }
            else {
                alert("请输入正确的电话号码");
                SubmitMask = false;
            }

        }
    });

    //$(".divSignBtn").click(function () {
    //    showRegistion("设计我的家");
    //})

    $("#btnSub,#btnSub2").click(function () {

        if (!SubmitMask) {
            var Obj = $(this).parent().parent("form");
            var Phone = Obj.find("input[name='PhoneNumber']").val();
            if (RegPhone(Phone)) {
                $.ajax({
                    type: "post",
                    url: "/api/RegistrationAPI/Insert",
                    data: Obj.serialize(),
                    success: function (json) {
                        if (json.Sucess) {
                            alert("恭喜您，报名成功");
                        }
                        else {
                            alert("同一手机号码只能领取一次！");
                        }
                        SubmitMask = false;
                    }
                });
                pyRegisterCvt(Phone);
            }
            else {
                alert("请输入正确的电话号码");
                SubmitMask = false;
            }
        }
    })


    //$("#slider11 a").hover(function () {
    //    $(this).find("span").show();
    //}, function () {
    //    $(this).find("span").hide();
    //})


    var ANIndex = 1;
    var ANMax = $(".hot_room ul li").size();
    $("#LeftXQ").click(function () {
        ANIndex++;
        if (ANIndex >= ANMax - 2) {
            ANIndex = ANMax - 2
        }
        $(".hot_room ul").animate({
            marginLeft: -(ANIndex - 1) * 400 + "px"
        }, 500)

    });
    $("#RightXQ").click(function () {
        ANIndex--;
        if (ANIndex <= 1) {
            ANIndex = 1;
        }
        $(".hot_room ul").animate({
            marginLeft: -(ANIndex - 1) * 400 + "px"
        }, 500)
    });



    var ALIndex = 1;
    var ALMax = $(".div_caseSlide .div_float").size();
    $("#leftAL").click(function () {
        ALIndex++;
        if (ALIndex >= ALMax) {
            ALIndex = ALMax;
        }
        $(".div_caseSlide").animate({
            marginLeft: -(ALIndex - 1) * 1200 + "px"
        }, 800)
    })
    $("#rightAL").click(function () {
        ALIndex--;
        if (ALIndex <= 1) {
            ALIndex = 1;
        }
        $(".div_caseSlide").animate({
            marginLeft: -(ALIndex - 1) * 1200 + "px"
        }, 800)
    })


    var scroll_Honor = 1;
    var t = setInterval(function () {
        if (scroll_Honor < $("#SlideHonor p").size()) {
            scroll_Honor++;
        }
        else {
            scroll_Honor = 1;
        }
        $("#SlideHonor").animate({
            marginTop: -(scroll_Honor - 1) * 40 + "px"
        }, 500);
    }, 8000);

    $("body,html").scroll(function () {


    })
});



$(function () {
    window._currentWidth = document.body.clientWidth;
    window.onresize = function () {
        window._currentWidth = document.body.clientWidth;
        c = 0;
        g();
    };

    var f = $("#JS_side_stage"),
    a = $("#JS_side_stage a"),
    i = $("#JS_side_nav a"),
    b = $("#JS_side_stage a"),
    d = i.length,
    e = 0,
    c = 0;
    i.on("mouseover",
    function () {
        c = $(this).index();
        if (h) {
            clearInterval(h);
        }
        g();
    }).on("mouseout",
    function () {
        h = setInterval(function () {
            g();
        },
        6000);
    });
    var g = function () {
        $(i.get(e)).removeClass("current");
        $(i.get(c)).addClass("current");
        f.stop(true, false).animate({
            "margin-left": (0 - c) * 100 + "%"
        },
        200);
        e = c;
        var l = $(b.get(e));
        var j = l.attr("data-bg");
        if (j) {
            l.css({
                background: "url(" + j + ") center center no-repeat"
            }).removeAttr("data-bg");
        }
        c = (c >= d - 1) ? 0 : c + 1;
    };
    var h = setInterval(function () {
        g();
    },
    6000);
});


function initFun() {
    //if ($("body").width() < 1400) {
    //    $("#slider3").show();
    //}
    //else {
    //    $("#slider11").show();
    //}


    
    //$("#ncls").click();
    $("#Mask").height($("body").height());

    $(".hot_room ul").css({
        width: $(".hot_room ul li").size() * 400 + "px"
    })
    $(".div_caseSlide").css({
        width: $(".div_caseSlide .div_float").size() * 1200 + "px"
    });


    $("#JS_side_stage").css({
        width: $("#JS_side_stage").find("td").size() * 100 + "%"
    })

    if (!isPlaceholderSupport()) {
        $("input").each(function () {
            if (typeof ($(this).attr("placeholder")) == "string") {
                $(this).val($(this).attr("placeholder"));
            }
        })


    }

    var Content = "";
    for (var i = 1; i <= $("#JS_side_stage").find("td").size() ; i++) {
        if (i == 1) {
            Content += "<a class=\"first current\" href=\"javascript:;\"></a>";
        }
        else {
            Content += "<a href=\"javascript:;\" class=\"\"></a>";
        }
    }
    $("#JS_side_nav").html(Content);

}

function isPlaceholderSupport() {
    return 'placeholder' in document.createElement('input');
}

var NowDeg = [0, 0, 0, 0, 0], Speed = 40, RMask = [false, false, false, false, false], RMask2 = [true, true, true, true, true], RWait = [false, false, false, false, false];
function setLirotate(Obj, index) {
    if (NowDeg[index] > -90) {
        NowDeg[index] -= Speed;
        if (NowDeg[index] > -90) {

            Obj.css({
                "transform": "rotateY(" + NowDeg[index] + "deg)",
                "-webkit-transform": "rotateY(" + NowDeg[index] + "deg)"
            });
            setTimeout(function () {
                setLirotate(Obj, index);
            }, 30);
        }
        else {
            NowDeg[index] = -90;
            Obj.css({
                "transform": "rotateY(" + NowDeg[index] + "deg)",
                "-webkit-transform": "rotateY(" + NowDeg[index] + "deg)"
            });
            setLirotate2(Obj, index)
        }

    }

}

function setLirotate2(Obj, index) {
    if (NowDeg[index] == -90) {
        if (index != 1) {
            Obj.find("center").html("<img src=\"/Images2/Global/FH" + (index + 1) + ".png\" />");
        }
        Obj.find("center").html("<img src=\"/Images2/Global/FF" + (index + 1) + ".png\" />");
        Obj.find("i").css({ color: "#F25618" });
        Obj.find(".pb").css({ color: "white" });
        Obj.find(".ps").hide();
        Obj.find(".ph").show();
        Obj.find(".bg").css({ "backgroundColor": "#B69454" });
        NowDeg[index] = -270;
    }
    NowDeg[index] -= Speed;
    if (NowDeg[index] > -360) {
        Obj.css({
            "transform": "rotateY(" + NowDeg[index] + "deg)",
            "-webkit-transform": "rotateY(" + NowDeg[index] + "deg)"
        });
        setTimeout(function () {
            setLirotate2(Obj, index);
        }, 30);
    }
    else {
        NowDeg[index] = -360;
        Obj.css({
            "transform": "rotateY(" + NowDeg[index] + "deg)",
            "-webkit-transform": "rotateY(" + NowDeg[index] + "deg)"
        });
        RMask2[index] = false;
        if (RWait[index]) {
            RWait[index] = false;
            RMask2[index] = true;
            backLirotate(Obj, index);
        }
    }

}

function backLirotate(Obj, index) {
    if (NowDeg[index] < -270) {
        NowDeg[index] += Speed;
        if (NowDeg[index] < -270) {


            Obj.css({
                "transform": "rotateY(" + NowDeg[index] + "deg)",
                "-webkit-transform": "rotateY(" + NowDeg[index] + "deg)"
            });
            setTimeout(function () {
                backLirotate(Obj, index);
            }, 30);
        }
        else {
            NowDeg[index] = -270;
            Obj.css({
                "transform": "rotateY(" + NowDeg[index] + "deg)",
                "-webkit-transform": "rotateY(" + NowDeg[index] + "deg)"
            });
            backLirotate2(Obj, index)
        }
    }
}

function backLirotate2(Obj, index) {
    if (NowDeg[index] == -270) {
        if (index != 1) {
            Obj.find("center").html("<img src=\"/Images2/Global/F" + (index + 1) + ".png\" />");
        }
        Obj.find("center").html("<img src=\"/Images2/Global/F" + (index + 1) + ".png\" />");
        Obj.find("i").css({ color: "#3c3c3c" });
        Obj.find(".pb").css({ color: "#3c3c3c" });
        Obj.find(".ph").hide();
        Obj.find(".ps").show();
        Obj.find(".bg").css({ "backgroundColor": "white" });

        NowDeg[index] = -90;
    }
    NowDeg[index] += Speed;
    if (NowDeg[index] < 0) {
        Obj.css({
            "transform": "rotateY(" + NowDeg[index] + "deg)",
            "-webkit-transform": "rotateY(" + NowDeg[index] + "deg)"
        });
        setTimeout(function () {
            backLirotate2(Obj, index);
        }, 30);
    }
    else {
        NowDeg[index] = 0;
        Obj.css({
            "transform": "rotateY(" + NowDeg[index] + "deg)",
            "-webkit-transform": "rotateY(" + NowDeg[index] + "deg)"
        });
        RMask[index] = false;
    }

}


function TimeOutCookie() {

}


function goTop() {
    $('html,body').animate({ 'scrollTop': 0 }, 300);
}


function RegPhone(Phone) {
    //var isPhone = /^([0-9]{3,4}-)?[0-9]{7,8}$/;
    //var patrn = /^((\+?86)|(\(\+86\)))?\d{3,4}-\d{7,8}(-\d{3,4})?$/;
    //var validateReg = /^((\+?86)|(\(\+86\)))?1\d{10}$/;
    //if (validateReg.exec(Phone) || patrn.exec(Phone) || isPhone.exec(Phone)) {
    //    return true;
    //}
    //else {
    //    return false;
    //}

    /*验证电话号码 
        验证规则：区号+号码，区号以0开头，3位或4位号码由7位或8位数字组成 
        区号与号码之间可以无连接符，也可以“-”连接 
        如01088888888,010-88888888,0955-7777777 */
    var isPhone = /^0\d{2,3}-?\d{7,8}$/;
    /*验证手机号码
    移动：134(1349除外）135 136 137 138 139 147 150 151 152 157 158 159 182 183 184 187 188
    联通：130 131 132 155 156 185 186 145
    电信：133 153 177 180 181 189*/
    var isMob = /^1\d{10}$/; //var isMob = /^((\+?86)|(\(\+86\)))?(13[012356789][0-9]{8}|15[012356789][0-9]{8}|18[02356789][0-9]{8}|147[0-9]{8}|1349[0-9]{7})$/;
    if (isMob.test(Phone) || isPhone.test(Phone)) {
        return true;
    }
    else {
        return false;
    }
}

function getQueryString(name) {
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
    var r = window.location.search.substr(1).match(reg);
    if (r != null) {
        return unescape(r[2]);
    }
    return null;
}

function replaceParamVal(url, paramName, replaceWith) {
    var oUrl = url;
    var re = eval('/(' + paramName + '=)([^&]*)/gi');
    var nUrl = oUrl.replace(re, paramName + '=' + replaceWith);
    return nUrl;
}

function setPosition(Obj) {
    $(Obj).css({
        position: 'absolute',
        left: ($(window).width() - $(Obj).outerWidth()) / 2,
        top: ($(window).height() - $(Obj).outerHeight()) / 2 + $(document).scrollTop()
    });
}

var Lang = {
    p: ["免费登记，获得专业设计师详细报价", "在线报名，到店享设计师2选1洽谈特权", "10秒登记，送500元设计费抵用券"]
}

function showRegistion(Title, ShowEmail) {
    var popID = "popup";
    var popURL = "#?w=630";

    if (ShowEmail) {
        $("#eMail").show();
    }
    else {
        $("#eMail").hide();
    }

    $("#Title").html(Title);

    var query = popURL.split('?');
    var dim = query[1].split('&');
    var popWidth = dim[0].split('=')[1];

    $('#' + popID).fadeIn().css({ 'width': Number(popWidth) }).prepend('<a href="javascript:void(0)" class="close" style=\"right:20px;top:15px;position:absolute;\"><img src="/Images2/Global/ClsForm.png" class="btn_close" title="Close Window" alt="Close" /></a>');

    var popMargTop = ($('#' + popID).height() + 80) / 2;
    var popMargLeft = ($('#' + popID).width() + 80) / 2;

    $('#' + popID).css({
        'margin-top': -popMargTop,
        'margin-left': -popMargLeft
    });

    $('body').append('<div id="fade"></div>'); //Add the fade layer to bottom of the body tag.
    $('#fade').css({ 'filter': 'alpha(opacity=80)', height: $("body").height() }).fadeIn(); //Fade in the fade layer 


    //$("#Mask").show();
    $('a.close').click(function () {
        $('#fade , .popup_block').fadeOut(function () {
            $('#fade, a.close').remove();
            //$("#Mask").hide();
        })
    });
    return false;
}


function pyRegisterCvt(_orderno) {
    var w = window, d = document, e = encodeURIComponent;
    var b = location.href, c = d.referrer, f, g = d.cookie, h = g.match(/(^|;)\s*ipycookie=([^;]*)/), i = g.match(/(^|;)\s*ipysession=([^;]*)/);
    if (w.parent != w) { f = b; b = c; c = f; }; u = '//stats.ipinyou.com/cvt?a=' + e('0es.aqs.9yr6dCJUFAskVyWg3TtX-0') + '&c=' + e(h ? h[2] : '') + '&s=' + e(i ? i[2].match(/jump\%3D(\d+)/)[1] : '') + '&u=' + e(b) + '&r=' + e(c) + '&rd=' + (new Date()).getTime() + '&OrderNo=' + e(_orderno) + '&e=';
    (new Image()).src = u;
}

window.onload = function() {
    var text = document.getElementsByClassName('iconfont icon-erjikefu')[0];
    text.innerHTML = "<img src=\"/Images2/Global/Slider1.gif\">"
}