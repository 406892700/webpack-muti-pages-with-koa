import './index.less';
/* eslint-disable */
window.CropTips = (function () {
    var CropModalTpl = {
        // 中奖模板
        winModal: (data) => {
            var tpl = [];
            tpl.push('<div class="crop-content modal-award bounceIn">');
                tpl.push('<span class="crop-close"></span>');
                tpl.push('<div class="info-content">');
                    tpl.push('<div class="title">');
                        tpl.push('<p>恭喜你!</p>');
                        tpl.push('<p>收获种植红包</p>');
                    tpl.push('</div>');
                    tpl.push('<div class="reward">');
                        tpl.push('<b class="value">'+data.value+'</b>元');
                    tpl.push('</div>');
                tpl.push('</div>');
                tpl.push('<div class="btn-area">');
                    tpl.push('<p class="info-tips">可累计提现</p>');
                    tpl.push('<a href="javascript:void(0)" class="_CropBtn crop-btn" data-log=\''+JSON.stringify(
                        {
                            dpm: data.appId+'.212.2.1',
                            dcm: data.dcm,
                            domain: data.domain
                        }
                    )+'\'>收入囊中</a>');
                tpl.push('</div>');
            tpl.push('</div>');
            return tpl.join('\n');
        },
        // 未中奖模板
        loseModal: function(data) {
            var tpl = [];
            tpl.push('<div class="crop-content modal-award bounceIn">');
                tpl.push('<span class="crop-close"></span>');
                tpl.push('<div class="info-content">');
                    tpl.push('<div class="title pity">');
                        tpl.push('<p>很遗憾</p>');
                        tpl.push('<p>红包里面什么都没有</p>');
                        tpl.push('</div>');
                    tpl.push('</div>');
                tpl.push('<div class="btn-area">');
                    tpl.push('<a href="javascript:void(0)" class="_CropBtn crop-btn" data-log=\''+JSON.stringify({
                        dpm: data.appId+'.212.6.1',
                        dcm: data.dcm,
                        domain: data.domain
                    })+'\'>再种一个</a>');
                tpl.push('</div>');
            tpl.push('</div>');
            return tpl.join('\n');
        },
        // 显示游戏规则
        showRuleModal: function (data) {
            var tpl = [];
            tpl.push('<div class="crop-content modal-rule bounceIn" data-log=\''+JSON.stringify({
                dpm: data.appId+'.212.9.1',
                dcm: data.dcm,
                domain: data.domain
            })+'\'>');
                tpl.push('<span class="crop-close"></span>');
                tpl.push('<h4 class="main-title">游戏规则</h4>');
                tpl.push('<ol>');
                    tpl.push('<li>种子成熟后可收获红包，有概率获得现金；</li>');
                    tpl.push('<li>每次种植消耗'+data.point+'积分；</li>');
                    tpl.push('<li>每个种子成熟时间不同，收获的红包金额也不同；</li>');
                    tpl.push('<li>完成规定任务即可解锁空地；</li>');
                tpl.push('</ol>');
            tpl.push('</div>');
            return tpl.join('\n');
        },
        // 次数不够弹窗
        noChangeModal: function (data) {
            var tpl = [];
            tpl.push('<div class="crop-content modal-type2 bounceIn">');
                tpl.push('<span class="crop-close"></span>');
                tpl.push('<div class="title-area">');
                    tpl.push('<h4 class="title">今日种植次数已达上限</h4>');
                    tpl.push('<div class="icon-money"></div>');
                tpl.push('</div>');
                tpl.push('<div class="info-content">');
                    tpl.push('<p class="info-tips more-red-bag">更多红包等你瓜分</p>');
                tpl.push('</div>');
                tpl.push('<div class="btn-area">');
                    tpl.push('<a href="javascript:void(0)" class="_CropBtn crop-btn-type2" data-log=\''+JSON.stringify({
                        dpm: data.appId+'.212.8.1',
                        dcm: data.dcm,
                        domain: data.domain
                    })+'\'>知道了</a>');
                tpl.push('</div>');
            tpl.push('</div>');
            return tpl.join('\n');
        },
        // 种植说明弹窗
        cropRuleModal: function (data) {
            var tpl = [];
            tpl.push('<div class="crop-content modal-rule crop-exp bounceIn">');
                tpl.push('<span class="crop-close"></span>');
                tpl.push('<h4 class="main-title">种植说明</h4>');
                tpl.push('');
                tpl.push('<ol>');
                    tpl.push('<li>每种一个种子扣5积分；</li>');
                    tpl.push('<li>每个种子成熟时间不同，收获的红包金额也不同；</li>');
                tpl.push('</ol>');
                tpl.push('<div class="btn-area">');
                    tpl.push('<a href="javascript:void(0)" class="_CropBtn crop-btn-type2" data-log=\''+JSON.stringify({
                        dpm: data.appId+'.212.3.1',
                        dcm: data.dcm,
                        domain: data.domain
                    })+'\'>本次免费</a>');
                tpl.push('</div>');
            tpl.push('</div>');
            return tpl.join('\n');
        },
        // 积分不足弹窗
        noPointModal: function (data) {
            var tpl = [];
            tpl.push('<div class="crop-content modal-type2 bounceIn">');
                tpl.push('<span class="crop-close"></span>');
                tpl.push('<div class="title-area">');
                    tpl.push('<h4 class="title">啊哦，积分不足</h4>');
                    tpl.push('<div class="icon-money-type2"></div>');
                tpl.push('</div>');
                tpl.push('<div class="info-content">');
                    tpl.push('<p class="info-tips join-activity">积分可以参与活动赚取现金红包</p>');
                    tpl.push('<p class="info-tips sub-title">(红包可提现)</p>');
                tpl.push('</div>');
                tpl.push('<div class="btn-area">');
                    tpl.push('<a href="javascript:void(0)" class="_CropBtn crop-btn-type2" data-log=\''+JSON.stringify({
                        dpm: data.appId+'.212.7.1',
                        dcm: data.dcm,
                        domain: data.domain
                    })+'\'>去做任务 <span class="arrow-right"></span></a>');
                tpl.push('</div>');
            tpl.push('</div>');
            return tpl.join('\n');
        },
        // 未登录弹窗
        notLoginModal: function (data) {
            var tpl = [];
            tpl.push('<div class="crop-content modal-type2 bounceIn">');
                tpl.push('<span class="crop-close"></span>');
                tpl.push('<div class="title-area">');
                    tpl.push('<h4 class="title">啊哦，你还未登录</h4>');
                    tpl.push('<div class="icon-money"></div>');
                tpl.push('</div>');
                tpl.push('<div class="info-content">');
                    tpl.push('<p class="info-tips login-get-redbag">登录种红包</p>');
                    tpl.push('<p class="info-tips get-cash"><span class="color-red">现金</span>免费领</p>');
                tpl.push('</div>');
                tpl.push('<div class="btn-area">');
                    tpl.push('<a href="javascript:void(0)" class="_CropBtn crop-btn-type2" data-log=\''+JSON.stringify({
                        dpm: data.appId+'.212.5.1',
                        dcm: data.dcm,
                        domain: data.domain
                    })+'\'>去做任务 <span class="arrow-right"></span></a>');
                tpl.push('</div>');
            tpl.push('</div>');
            return tpl.join('\n');
        },
        // 解锁土地弹窗
        unlockModal: function (data) {
            var tpl = [];
            tpl.push('<div class="crop-content unlock-success bounceIn">');
                tpl.push('<span class="crop-close"></span>');
                tpl.push('<div class="info-tips">');
                    tpl.push('<p>经过你的努力，解锁了一块土地</p>');
                    tpl.push('<p>一亿红包等你收获！</p>');
                tpl.push('</div>');
                tpl.push('<div class="btn-area">');
                    tpl.push('<a href="javascript:void(0)" class="_CropBtn unlock-btn" data-log=\''+JSON.stringify({
                        dpm: data.appId+'.212.4.1',
                        dcm: data.dcm,
                        domain: data.domain
                    })+'\'>种红包</a>');
                tpl.push('</div>');
            tpl.push('</div>');
            return tpl.join('\n');
        },
    };

    /**
     *  包装函数
     */
    var generate = function (tpl) {
        return function (config) {
            config = $.extend(true, {}, {
                data: {
                    appId: window.CfG.globle.appId,
                    dcm: '228.0.0.0',
                    domain: '//embedlog.duiba.com.cn',
                },
                done: function () {},
                cancel: function () {},
            }, config);

            var tempArr = [];
            tempArr.push('<div class="crop-wrapper" id="cropModalWrapper"><div class="crop-mask"></div>');
            tempArr.push(tpl(config.data));
            tempArr.push('</div></div>');
            var total = tempArr.join('');
            var $total = $(total);
            // 关闭函数
            var closeModal = function () {
                $('#cropModalWrapper').remove();
            };

            // 埋点函数
            var sendToStatisticsServer = function(data) {
                $.ajax({
                    type: "get",
                    url: "/log/click",
                    dataType: "json",
                    cache: false,
                    data: data,
                    success: function() {
                        console.log('统计已发送');
                    },
                    error: function() {}
                });
            };

            // 确定事件绑定
            $total.find('._CropBtn').click(function () {
                var data = $(this).data('log'); // 发埋点
                sendToStatisticsServer(data);
                if (config.done(closeModal, $(this), $total)) {
                    return;
                }

                closeModal();
            });

            // 关闭事件绑定
            $total.find('.crop-close').click(function () {
                if (config.cancel(closeModal, $(this), $total)) {
                    return;
                }

                closeModal();
            });

            $('body').append($total);
        };
    };

    const modalObj = {};

    Object.keys(CropModalTpl).forEach(function (item) {
        modalObj[item] = generate(CropModalTpl[item]);
    });

    return modalObj;
})();

$(function () {
    // window.CropTips.winModal({
    //     data: {
    //         value: 2
    //     },
    //     done: function(closeModal, $btn, $total) {
    //         window.getMoneyToWallet({
    //             height: $btn.offset().top,
    //             money: 100000
    //         });

    //         setTimeout(function() {
    //             closeModal();
    //         }, 1000);

    //         return true;
    //     }
    // });
});

if (module.hot) {
    module.hot.accept();
}
