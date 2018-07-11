<meta name="viewport" content="width=device-width, initial-scale=1.0">
<script type="text/javascript">
    (function (win) {
        var h;
        var dpr = win.navigator.appVersion.match(/iphone/gi) ? win.devicePixelRatio : 1;
        var scale = 1;
        var docEl = document.documentElement;
        var metaEl = document.createElement("meta");

        function IsPC() {
            var userAgentInfo = navigator.userAgent;
            var Agents = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"];
            var flag = true;
            for (var v = 0; v < Agents.length; v++) {
                if (userAgentInfo.indexOf(Agents[v]) > 0) {
                    flag = false;
                    break
                }
            }
            return flag
        }

        function setUnitA() {
            win.rem = Math.min(docEl.getBoundingClientRect().width, 750) / 16;
            docEl.style.fontSize = (IsPC() ? "46.875" : win.rem) + "px";
            docEl.style.fontSize = win.rem + "px";
            docEl.setAttribute('skinwidth', 750);
            docEl.setAttribute('data-dpr', dpr);
        }

        win.addEventListener("resize", function () {
            clearTimeout(h);
            h = setTimeout(setUnitA, 300)
        }, false);
        win.addEventListener("pageshow", function (e) {
            if (e.persisted) {
                clearTimeout(h);
                h = setTimeout(setUnitA, 300)
            }
        }, false);
        metaEl.setAttribute("name", "viewport");
        metaEl.setAttribute("content", "initial-scale=" + scale + ", maximum-scale=" + scale + ", minimum-scale=" + scale + ", user-scalable=no");
        if (docEl.firstElementChild) {
            docEl.firstElementChild.appendChild(metaEl)
        } else {
            var wrap = document.createElement("div");
            wrap.appendChild(metaEl);
            document.write(wrap.innerHTML)
        }
        setUnitA()
    })(window);
</script>
<script src="//yun.duiba.com.cn/webapp/js/spritejs.min.js"></script>
<script src="//yun.duiba.com.cn/h5/mall-3.0/wallet/animate_coin_201807090755.js"></script>
<style>
    .animate-canvas {
        z-index: 99999;
    }
</style>

<script>
    window.CfG = {
        globle: {
            appId: 1
        }
    }
</script>