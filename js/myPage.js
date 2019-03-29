$(function () {
    var n_height = $(window).height();    //当前屏幕高度
    var flag = false; // 动画执行完毕标志
    // 过渡动画
    $('#fullpage').fullpage({
        // 项目导航显示
        navigation: true,
        scrollingSpeed: 1200,
        //滚动到某一屏后的回调函数
        afterLoad: function (anchorLink, index) {
            if (index == 2) {
                if (flag == false) {
                    $(".search").show().animate({"right": 370}, 1500, "easeOutBack", function () {
                        //沙发两个字
                        $(".search_words").animate({"opacity": 1}, 500, function () {
                            $(".search").hide();
                            $(".search-02-1").show().animate({"right": 250, "height": 30, "bottom": 452}, 500,
                                function () {
                                    flag = true;
                                });
                            //搜索显示同时沙发图片显示变大
                            $(".sofa-goods").show().animate({"height": 220}, 500);
                        })
                    });
                }
            }
        },

        ///滚动前的回调函数
        onLeave: function (index, nextIndex, direction) {
            // 第二屏到第三屏
            if (index == 2 && nextIndex == 3) {
                $(".shirt-02").show().animate({"bottom": -(n_height - 250), "width": 207, "left": 260}, 2000,
                    function () {
                        $(".img-01-a").animate({"opacity": 1}, 500,
                            function () {
                                $(".btn-01-a").animate({"opacity": 1}, 300);
                            });
                    });
                $(".cover_box").show();
            }

            //三屏到四屏过渡
            if (index == 3 && nextIndex == 4) {
                $(".shirt-02").hide();
                $(".tlf").show().animate({"bottom": -((n_height - 250) + 50), "left": 255}, 2000,
                    function () {
                        $(this).hide();
                        $(".car-tlf").show();
                        $(".car").animate({"left": "150%"}, 4000, "easeInElastic",
                            function () {
                                $(".note").show();
                                $(".note-img,.words-04-a").animate({"opacity": 1}, 1000)
                            })
                    });
            }

            // 四屏到五屏过渡
            if (index == 4 && nextIndex == 5) {
                //手上来
                $(".hand-05").animate({"bottom": -5}, 1000, function () {
                    //鼠标点击
                    $(".mouse-05-a").animate({"opacity": 1,}, 500);
                    //沙发掉下来
                    $(".t1f-05").show().animate({"bottom": 70}, 1000, function () {
                        $(".order-05").animate({"bottom": 390}, function () {
                            $(".words-05").addClass(" words-05-a");
                        })
                    })
                });
            }

            // 第五屏过渡第六屏
            if (index == 5 && nextIndex == 6) {
                $(".t1f-05").animate({"bottom": -(n_height - 500), "left": "40%", "width": 60}, 1200, function () {
                    $(this).hide();

                });
                $(".box-06").animate({"left": "38%"}, 2000, "easeOutElastic", function () {
                    $(".box-06").animate({"bottom": 35}, 500, function () {
                        $("this").hide();
                        // 地址
                        $(".pop-06").animate({"opacity": 1}, 500);
                        //显示字体
                        $(".works-06").show().animate({"left": "35%"}, 3000);
                        // 背景移动能实现
                        $(".section6").animate({"backgroundPositionX": "100%"}, 5000, "easeInOutQuad", function () {

                            // 当车开到底man出现
                            $(".man-06").animate({"height": 305, "bottom": 116}, 1000, function () {
                                $(this).animate({right: 500}, 1000, function () {
                                    // 打开门效果
                                    $(".door").animate({"opacity": 1}, 500, function () {
                                        $(".women-06").show().animate({
                                            "right": 350,
                                            "height": 305
                                        }, 1000, function () {
                                            $(".check").animate({"opacity": 1}, 500);
                                        });
                                    });

                                });
                            })

                        })
                    })
                });
            }

            // 第五屏过渡第六屏
            if (index == 6 && nextIndex == 7) {
                setTimeout(function () {
                    $(".star").animate({"width": 97}, 1000, function () {
                        $(".good-07").animate({"opacity": 1}, 1000);
                    });
                }, 1500)
            }

        },
    });
    // 过渡动画结束

    // 继续往下按钮功能实现
    $(".next").click(function (event) {
        $.fn.fullpage.moveSectionDown();
    })
    // 继续往下按钮功能实现结束

    // 第八瓶动画
    //     $(".beginShopping").mouseenter(function (event) {
    //         $(".btn-08-a").show();
    // }).mouseleave(function () {
    //     $(".btn-08-a").hide()
    // });
    // 用hover+toggle混搭替换上面的更简洁
    $(".beginShopping").hover(function () {
        $(".btn-08-a").toggle();
    });
    //hand-08跟随鼠标移动
    $(document).mousemove(function (evevt) {
        //要跟随移动先取鼠标在窗口坐标，然后赋予要移动的图片
        var x = evevt.pageX - $(".hand-08").width() / 2;//获取在页面x坐标
        var y = evevt.pageY + 15;//获取在页面y坐标

        // 限制手top值
        var minY = n_height - 449;
        if (y < minY) {
            $(".hand-08").css({"left": x, "top": minY});
        } else {
            $(".hand-08").css({"left": x, "top": y});
        }
    });
    //点击再来一次时，返回第一屏
    $(".again-08").click(function (event) {
        //1.返回第一屏
        $.fn.fullpage.moveTo(1);
        //2.动画复原
        //核心原理是将动画元素清除行内样式
        $("img, .move").attr("style", " ");
        flag = false;
    });
    // 第八屏动画结束

});