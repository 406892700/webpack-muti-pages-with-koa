<div id="walletRoot">
    <div id="moneyNum" class="money-animate"></div>
</div>
<!-- <button></button> -->
<!-- <div class="crop-wrapper" id="cropModalWrapper">
    <div class="crop-mask"></div> -->
    <!-- <div class="crop-content modal-award bounceIn">
        <span class="crop-close"></span>
        <div class="info-content">
            <div class="title">
                <p>恭喜你!</p>
                <p>收获种植红包</p>
            </div>
            <div class="reward">
                <b class="value">0.53</b>元
            </div>
        </div>
        <div class="btn-area">
            <p class="info-tips">可累计提现</p>
            <a href="javascript:void(0)" class="_CropBtn crop-btn">收入囊中</a>
        </div>
    </div> -->
    <!-- 中奖 -->

    <!-- <div class="crop-content modal-award bounceIn">
        <span class="crop-close"></span>
        <div class="info-content">
            <div class="title pity">
                <p>很遗憾</p>
                <p>红包里面什么都没有</p>
            </div>
        </div>
        <div class="btn-area">
            <a href="javascript:void(0)" class="_CropBtn crop-btn">再种一个</a>
        </div>
    </div> -->
    <!-- 没中奖 -->

    <!-- <div class="crop-content modal-rule bounceIn">
        <span class="crop-close"></span>
        <h4 class="main-title">游戏规则</h4>
        <ol>
            <li>种子成熟后可收获红包，有概率获得现金；</li>
            <li>每次种植消耗x积分；</li>
            <li>每个种子成熟时间不同，收获的红包金额也不同；</li>
            <li>完成规定任务即可解锁空地；</li>
        </ol>
    </div> -->
    <!-- 游戏规则 -->

    <!-- <div class="crop-content modal-type2 bounceIn">
        <span class="crop-close"></span>
        <div class="title-area">
            <h4 class="title">今日种植次数已达上限</h4>
            <div class="icon-money"></div>
        </div>
        <div class="info-content">
            <p class="info-tips more-red-bag">更多红包等你瓜分</p>
        </div>
        <div class="btn-area">
            <a href="javascript:void(0)" class="_CropBtn crop-btn-type2">知道了</a>
        </div>
    </div> -->
    <!-- 无次数弹窗 -->

    <!-- <div class="crop-content modal-rule crop-exp bounceIn">
        <span class="crop-close"></span>
        <h4 class="main-title">种植说明</h4>
        
        <ol>
            <li>每种一个种子扣5积分；</li>
            <li>每个种子成熟时间不同，收获的红包金额也不同；</li>
        </ol>
        <div class="btn-area">
                <a href="javascript:void(0)" class="_CropBtn crop-btn-type2">本次免费</a>
        </div>
    </div> -->
    <!-- 种植说明 -->

    <!-- <div class="crop-content modal-type2 bounceIn">
        <span class="crop-close"></span>
        <div class="title-area">
            <h4 class="title">啊哦，积分不足</h4>
            <div class="icon-money-type2"></div>
        </div>
        <div class="info-content">
            <p class="info-tips join-activity">积分可以参与活动赚取现金红包</p>
            <p class="info-tips sub-title">(红包可提现)</p>
        </div>
        <div class="btn-area">
            <a href="javascript:void(0)" class="_CropBtn crop-btn-type2">去做任务 <span class="arrow-right"></span></a>
        </div>
    </div> -->
    <!-- 积分不足弹窗 -->

    <!-- <div class="crop-content modal-type2 bounceIn">
        <span class="crop-close"></span>
        <div class="title-area">
            <h4 class="title">啊哦，你还未登录</h4>
            <div class="icon-money"></div>
        </div>
        <div class="info-content">
            <p class="info-tips login-get-redbag">登录种红包</p>
            <p class="info-tips get-cash"><span class="color-red">现金</span>免费领</p>
        </div>
        <div class="btn-area">
            <a href="javascript:void(0)" class="_CropBtn crop-btn-type2">去做任务 <span class="arrow-right"></span></a>
        </div>
    </div> -->
    <!-- 未登录弹窗 -->

    <!-- <div class="crop-content unlock-success bounceIn">
        <span class="crop-close"></span>
        <div class="info-tips">
            <p>经过你的努力，解锁了一块土地</p>
            <p>一亿红包等你收获！</p>
        </div>
        <div class="btn-area">
            <a href="javascript:void(0)" class="_CropBtn unlock-btn">种红包</a>
        </div>
    </div> -->
    <!-- 解锁土地 -->
<!-- </div> -->
<script src="http://blog.x2hy.com/cdn/zepto.min.js"></script>
<input type="hidden" id="plugin_domain" value="//activity.m.duiba.com.cn">
<script>
    ;(function() {
        $.ajax({
            type: "get",
            url: $('#plugin_domain').val()+"/activityLog/ajaxBanners",
            dataType: "json",
            cache: false,
            data: {
                consumerId: window.PLUGIN.consumerId,
                appId: window.PLUGIN.data.appId
            },
            success: function(res) {
                console.log('发送成功..');
            },
            error: function(e) {}
        });
    })();
</script>