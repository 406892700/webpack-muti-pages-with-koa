<$ if(status == '404') {$>
    <div id="content">
        <div class="error-code">
            <$=status$>
        </div>
        <div class="error-desc">
            Page Not Found
        </div>
    </div>
<$}$>
<img src="./<$=path$>" alt="">
