<link rel="stylesheet" href="//yun.dui88.com/h5/floor/cropRedbag/cropRedBagPlugin.20180716.css">
<div class="crop-redbag-plugin-wrap">
  <div class="crop-redbag-plugin-mask">
  </div>
  <div class="crop-redbag-plugin-content bounceIn">
    <a href="javascript:void(0)" class="crop-close"></a>
    <div class="red-header">
      积分商城全新改版
    </div>

    <div class="main-info">
      <img src="//yun.duiba.com.cn/h5/floor/cropRedbag/new_version_dialog.png" alt="">
    </div>
    <div class="btn-area">
      <a href="javascript:void(0)" class="done-btn">立即体验</a>
    </div>
  </div>
</div>

<div id="J_plantFloor" style="margin-top: 10000px;"></div>

<script>
  (function() {
    var $wrap = document.querySelector('.crop-redbag-plugin-wrap');
    var $close = document.querySelector('.crop-redbag-plugin-wrap .crop-close');
    var $done = document.querySelector('.crop-redbag-plugin-wrap .done-btn');

    var ajax = function (data) {
      var xhr = new XMLHttpRequest();
      var url = '/log/click?_='+new Date().getTime();
      for (var i in data) {
        if (data.hasOwnProperty(i)) {
          url += '&' + i + '=' + data[i];
        }
      }
      xhr.open('GET', url, true);

      xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
          if (xhr.status == 200) {
            console.log('统计代码已经发送');
          } else {
            console.log('发送失败');
          }
        }
      };

      xhr.send(null);
    };

    var statJson = {
      dpm: window.CfG.globle.appId + '.212.1.1',
      dcm: '228.0.0.0', 
      domain: '//embedlog.duiba.com.cn'
    };

    $done.setAttribute('db-log', JSON.stringify(statJson));

    $close.addEventListener('click', function () {
      $wrap.parentElement.removeChild($wrap);
    });

    $done.addEventListener('click', function() {
      $wrap.parentElement.removeChild($wrap);
      ajax(statJson);
      window.location.href = '#J_plantFloor';
    });


  })();
</script>
