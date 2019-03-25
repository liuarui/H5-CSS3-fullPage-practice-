$(function () {
    var n_height = $(window).height();    //当前屏幕高度
    var flag = false; // 动画执行完毕标志
    $('#fullpage').fullpage({
        // 项目导航显示
        navigation: true,
        scrollingSpeed: 1200,

        //滚动到某一屏后的回调函数
        afterLoad: function (anchorLink, index) {
            if (index == 2 && flag == false) {
                $(".search").show().animate({"right": 370}, 1500, function () {
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
        },
        ///滚动前的回调函数
        onLeave: function (index, nextIndex, direction) {
            if (index == 2 && nextIndex == 3 && flag == true) {
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
                        $(".car").animate({"left": 1800}, 2000,
                            function () {
                                $(".words-04-a").animate({"opacity": 1}, 200)
                            })
                    });
            }
        }
    });
});