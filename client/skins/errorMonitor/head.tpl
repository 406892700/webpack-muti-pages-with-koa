<script>
  window.onerror = function(message, source, lineno, colno, error) {
    console.log('前端报错了', arguments);
    var xhr = new XMLHttpRequest();
    var errInfo = {
      message: message,
      source: source,
      lineno: lineno,
      colno: colno,
      error: error
    };
    var search = '';

    for (var i in errInfo) {
      if (errInfo.hasOwnProperty(i)) {
        search += '&' + i + '=' + errInfo[i]; 
      }
    }

    xhr.open('GET', 'http://172.31.48.163:9002/record/info?'+search.slice(1));

    xhr.setRequestHeader('Accept', 'text/json');

    xhr.onreadystatechange = function () {
      if (xhr.state == 4 && xhr.status == 200) {
        console.log(xhr.responseText);
      }
    };

    xhr.send(null);
  }
</script>
<!-- <script src="http://www.x2hy.com/3333.png"></script> -->