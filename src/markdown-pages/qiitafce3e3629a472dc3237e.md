---
slug: "/blog/fce3e3629a472dc3237e"
title: ELB内のngixでDDoS対策
date: 2014-09-30T20:25:56+09:00
tags: ["nginx", "AWS", "elb"]
---
<p>よくハマりそうなのでメモ。</p>

<h3>
<span id="準備" class="fragment"></span><a href="#%E6%BA%96%E5%82%99"><i class="fa fa-link"></i></a>準備</h3>

<p>ELB内のnginxでリクエスト元のIPを$remote_addrにする</p>

<div class="code-frame" data-lang="text"><div class="highlight"><pre>http {

    set_real_ip_from   10.0.0.0/8;
    real_ip_header     X-Forwarded-For;

}
</pre></div></div>

<h3>
<span id="本番" class="fragment"></span><a href="#%E6%9C%AC%E7%95%AA"><i class="fa fa-link"></i></a>本番</h3>

<div class="code-frame" data-lang="text"><div class="highlight"><pre>http {
    limit_req_zone $remote_addr zone=ddos:1m  rate=10r/s;

    server {

        location / {
            limit_req zone=ddos burst=50 nodelay;

        }
    }
}
</pre></div></div>

<h3>
<span id="間違い" class="fragment"></span><a href="#%E9%96%93%E9%81%95%E3%81%84"><i class="fa fa-link"></i></a>間違い</h3>

<div class="code-frame" data-lang="text"><div class="highlight"><pre>http {
   limit_req_zone $http_x_fowarded_for zone=ddos:1m  rate=10r/s;
}
</pre></div></div>

<p><a href="http://serverfault.com/questions/487463/nginx-rate-limiting-with-x-forwarded-for-header" class="autolink" rel="nofollow noopener" target="_blank">http://serverfault.com/questions/487463/nginx-rate-limiting-with-x-forwarded-for-header</a></p>

<p>$http_x_fowarded_forはlimit_reqに使ってはいけないとあった...</p>
