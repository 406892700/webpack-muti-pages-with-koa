<style>
        .yyb-headbar {
            height: 45px;
            position: fixed;
            width: 100%;
            background-color: #4A95F2;
            color: #Fff;
            line-height: 45px;
            overflow: hidden;
            font-size: 12px;
            box-sizing: border-box;
            padding: 0 14px;
            top: 0;
            z-index: 99;
        }
    
        .yyb-headbar .point-area {
            float: left;
        }
    
        .point-area a {
            color: #fff;
        }
    
        .yyb-headbar .point-area span.value {
            font-size: 14px;
            font-weight: 400;
        }
    
        .yyb-headbar .link-area {
            float: right;
        }
    
        .yyb-headbar .link-area a {
            color: #fff;
            text-decoration: none;
        }
    
        .yyb-headbar .link-area a .arrow-right {
            display: inline-block;
            width: 14px;
            height: 14px;
            background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAACJUlEQVRYR9XZT6tOURTH8e/Pv4SQMkCKYmBiYnIR6mZCiUyMTHgL8h7kPZCJkZRbigFXQpmYmBgYUJRSJLpF9NOqfSdP99mefZ6zH2evyZmcwefs9l57rXVEY6HGvBSDbW8BzgGbgQVJ72f50UVg2/uBRWBXQi4BFyXdnRW6FPwImB/B/QHOS1qYBboU/AtYuwLsN3BG0oPa6FLwR2DnGFR8zClJj2uiS8FXgOsZ0E/gpKRntdCl4Hj/Vhy0DCgO4ryklzXQReAA2F4F3AYuZEA/gBOSXvWNLgYn9GrgTsrH40zfgGOSXveJ7gRO6DXAPeB0BvQVOCLpTV/ozuCEXgfcj4OWAX1O6Ld9oKcCJ/R64CFwPAP6BByW9G5a9NTghN4AxC04lwF9SOh4do5ewAm9CXgCHMpoolCakxQr3il6Ayd0VHJPgYMZTezlyB6d0L2CE3obEDfdgX+gI3vEgSyK3sEJvR14DkQ5Oi4i1R2V9KVEXAWc0DuAF8CeDCgulUB/nxRdDZzQu9NKx3Nc3JR0aRDghN4LRCEU22SlWJK0cWjg2M+xRYYNtj3Jlrgh6fJ/X2Hb7Rw62+2kNdvtXBxpyNLG1Wy7neLHdjvlpe12Cnjb7bRItttpQm230+Y3NUix3daoyvZV4FqmUBncMDBa9OXp+6h7kOPWWMFIZaMx2IF2c78M9gExYV/u0Yb9Uyb1aFuBs0389pq0jan5XtU2vwb8L3VZ6i2qESB3AAAAAElFTkSuQmCC) no-repeat 0 0;
            background-size: 100% 100%;
            vertical-align: sub;
        }
    </style>
    <div class="yyb-headbar" style="display: none;" id="fixedTopBar">
        <div class="point-area">
            <a href="http://qzs.qq.com/open/yyb/yyb_duiba_2017/record.html">
                我的积分: <span class="value" id="topFixedMyPoint">--</span>
            </a>
        </div>
        <div class="link-area">
            <a href="http://qzs.qq.com/open/yyb/yyb_duiba_2017/index.html?type=1">去积分商城 <span class="arrow-right"></span></a>
        </div>
    </div>
    <script>
        (function() {
            var ifShow = function () {
                return window.location.search.indexOf('iscaller') !== -1;
            };
    
            var getPoint = function () {
                /* jsonp请求获取积分 */
                window.topFixedCallback = function(data) {
                    document.getElementById('topFixedMyPoint').innerHTML = data.credits;
                };
                var $script = document.createElement('script');
                $script.type = 'text/javascript';
                $script.src = '//home.m.duibatest.com.cn/getCreditsAndHasNoRead?callback=topFixedCallback';
                $script.onload = function (e) {
                    document.body.removeChild(e.target);
                };
                document.body.appendChild($script);
            };
    
            var generateTopBar = function() {
                if (ifShow()) {
                    document.getElementById('fixedTopBar').style.display = 'block';
                    document.body.style.paddingTop = '45px';
                    getPoint();
                }
            };
    
            generateTopBar();
            
        })();
        
    </script>