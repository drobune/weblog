---
slug: "/blog/388a1dfaa2df8de52971"
title: iOS7:NSURLSessionのhttp（cookie)でハマった
date: 2014-06-03T00:57:46+09:00
tags: ["iOS", "HTTP", "NSURLSession"]
---
<p>やってみた。英語は気合い。初心者上等。<br>
間違ってたらご指摘ください。</p>

<p>iOSアプリを作りはじめて自前のwebサーバとの連携の検証のため、<br>
とりあえず認証をためしてみたかった。</p>

<h4>
<span id="参考リンク" class="fragment"></span><a href="#%E5%8F%82%E8%80%83%E3%83%AA%E3%83%B3%E3%82%AF"><i class="fa fa-link"></i></a>参考リンク</h4>

<p><a href="http://dev.classmethod.jp/references/ios-nsurlsession-1/" class="autolink" rel="nofollow noopener" target="_blank">http://dev.classmethod.jp/references/ios-nsurlsession-1/</a><br>
<a href="http://blog.techfirm.co.jp/2013/11/25/ios-7-nsurlsession%E3%81%A7%E3%83%90%E3%83%83%E3%82%AF%E3%82%B0%E3%83%A9%E3%82%A6%E3%83%B3%E3%83%89%E9%80%9A%E4%BF%A1%E3%82%92%E3%81%99%E3%82%8B/" class="autolink" rel="nofollow noopener" target="_blank">http://blog.techfirm.co.jp/2013/11/25/ios-7-nsurlsession%E3%81%A7%E3%83%90%E3%83%83%E3%82%AF%E3%82%B0%E3%83%A9%E3%82%A6%E3%83%B3%E3%83%89%E9%80%9A%E4%BF%A1%E3%82%92%E3%81%99%E3%82%8B/</a></p>

<h2>
<span id="めも" class="fragment"></span><a href="#%E3%82%81%E3%82%82"><i class="fa fa-link"></i></a>めも</h2>

<p>AFNetworkingではなくNSURLSessionを使ってみた。</p>

<div class="code-frame" data-lang="objc"><div class="highlight"><pre>
 <span class="c1">// セッション種類</span>
<span class="n">NSURLSessionConfiguration</span> <span class="o">*</span><span class="n">defaultConfigObject</span> <span class="o">=</span> <span class="p">[</span><span class="n">NSURLSessionConfiguration</span> <span class="nf">defaultSessionConfiguration</span><span class="p">];</span>

<span class="c1">// セッション作成</span>
<span class="n">NSURLSession</span> <span class="o">*</span><span class="n">urlSession</span> <span class="o">=</span> <span class="p">[</span><span class="n">NSURLSession</span> <span class="nf">sessionWithConfiguration</span><span class="p">:</span>  <span class="n">defaultConfigObject</span> <span class="nf">delegate</span><span class="p">:</span> <span class="nb">nil</span> <span class="n">delegateQueue</span><span class="o">:</span> <span class="p">[</span><span class="n">NSOperationQueue</span> <span class="nf">mainQueue</span><span class="p">]];</span>

<span class="c1">//cookieのプロパティ設定</span>
<span class="n">NSMutableDictionary</span> <span class="o">*</span><span class="n">properties</span> <span class="o">=</span> 
    <span class="p">[</span><span class="n">NSMutableDictionary</span>    <span class="nf">dictionaryWithObjectsAndKeys</span><span class="p">:</span>
        <span class="s">@"http://www.hoge.com"</span><span class="p">,</span> <span class="n">NSHTTPCookieOriginURL</span><span class="p">,</span>
        <span class="s">@"key"</span><span class="p">,</span> <span class="n">NSHTTPCookieName</span><span class="p">,</span>
        <span class="s">@"value"</span><span class="p">,</span> <span class="n">NSHTTPCookieValue</span><span class="p">,</span>
        <span class="nb">nil</span>
    <span class="p">];</span>

<span class="c1">//cookie作成</span>
<span class="n">NSHTTPCookie</span> <span class="o">*</span><span class="n">cookie</span> <span class="o">=</span> <span class="p">[</span><span class="n">NSHTTPCookie</span> <span class="nf">cookieWithProperties</span><span class="p">:</span><span class="n">properties</span><span class="p">];</span>
<span class="n">NSArray</span> <span class="o">*</span><span class="n">cookies</span> <span class="o">=</span> <span class="p">[</span><span class="n">NSArray</span> <span class="nf">arrayWithObject</span><span class="p">:</span><span class="n">cookie</span><span class="p">];</span>
<span class="n">NSDictionary</span> <span class="o">*</span> <span class="n">headers</span> <span class="o">=</span> <span class="p">[</span><span class="n">NSHTTPCookie</span> <span class="nf">requestHeaderFieldsWithCookies</span><span class="p">:</span><span class="n">cookies</span><span class="p">];</span>

<span class="c1">//リクエスト作成</span>
<span class="n">NSMutableURLRequest</span> <span class="o">*</span><span class="n">request</span> <span class="o">=</span> <span class="p">[</span><span class="n">NSMutableURLRequest</span> <span class="nf">requestWithURL</span><span class="p">:[</span><span class="n">NSURL</span> <span class="nf">URLWithString</span><span class="p">:</span><span class="s">@"http://www.hoge.com/"</span><span class="p">]];</span>
<span class="p">[</span><span class="n">request</span> <span class="nf">setHTTPMethod</span><span class="p">:</span><span class="s">@"GET"</span><span class="p">];</span>
<span class="p">[</span><span class="n">request</span> <span class="nf">setAllHTTPHeaderFields</span><span class="p">:</span><span class="n">headers</span><span class="p">];</span>

<span class="c1">// データタスクを実行します</span>
<span class="p">[[</span><span class="n">urlSession</span> <span class="nf">dataTaskWithRequest</span><span class="p">:(</span><span class="n">NSURLRequest</span> <span class="o">*</span><span class="p">)</span> <span class="n">request</span>
    <span class="nl">completionHandler:</span><span class="o">^</span><span class="p">(</span><span class="n">NSData</span> <span class="o">*</span><span class="n">data</span><span class="p">,</span> <span class="n">NSURLResponse</span> <span class="o">*</span><span class="n">response</span><span class="p">,</span><span class="n">NSError</span> <span class="o">*</span><span class="n">error</span><span class="p">)</span>
         <span class="p">{</span>
            <span class="n">NSLog</span><span class="p">(</span><span class="s">@"Got response %@ with error %@.</span><span class="se">\n</span><span class="s">"</span><span class="p">,</span> <span class="n">response</span><span class="p">,</span> <span class="n">error</span><span class="p">);</span>
            <span class="n">NSLog</span><span class="p">(</span><span class="s">@"DATA:</span><span class="se">\n</span><span class="s">%@</span><span class="se">\n</span><span class="s">END DATA</span><span class="se">\n</span><span class="s">"</span><span class="p">,[[</span><span class="n">NSString</span> <span class="nf">alloc</span><span class="p">]</span> <span class="nf">initWithData</span><span class="p">:</span> <span class="n">data</span> <span class="nf">encoding</span><span class="p">:</span> <span class="n">NSUTF8StringEncoding</span><span class="p">]);</span>
        <span class="p">}]</span> <span class="nf">resume</span><span class="p">];</span>
</pre></div></div>

<p>なんどやってもcookieWithPropertiesがnilになってしまう。<br>
ググった結果次の書き方じゃないといけない事が判明。</p>

<div class="code-frame" data-lang="objc"><div class="highlight"><pre>
<span class="n">NSMutableDictionary</span> <span class="o">*</span><span class="n">properties</span> <span class="o">=</span>
    <span class="p">[</span><span class="nf">NSMutableDictionarydictionaryWithObjectsAndKeys</span><span class="p">:</span>
    <span class="s">@"www.hoge.com"</span><span class="p">,</span><span class="n">NSHTTPCookieDomain</span><span class="p">,</span>
    <span class="s">@"</span><span class="se">\\</span><span class="s">"</span><span class="p">,</span> <span class="n">NSHTTPCookiePath</span><span class="p">,</span> <span class="c1">// IMPORTANT!</span>
    <span class="s">@"key"</span><span class="p">,</span> <span class="n">NSHTTPCookieName</span><span class="p">,</span>
    <span class="s">@"value"</span><span class="p">,</span> <span class="n">NSHTTPCookieValue</span><span class="p">,</span>
    <span class="nb">nil</span>
<span class="p">];</span>
</pre></div></div>

<p>あーはまった。</p>

<p>まぁ公式ドキュメントをよく見るとDiscussionのところに書いてあるんですね。<br>
読み飛ばしよくなかった。でもDiscussionってなんだ？？</p>

<p><a href="https://developer.apple.com/library/mac/documentation/Cocoa/Reference/Foundation/Classes/NSHTTPCookie_Class/Reference/Reference.html#//apple_ref/occ/clm/NSHTTPCookie/cookieWithProperties:" class="autolink" rel="nofollow noopener" target="_blank">https://developer.apple.com/library/mac/documentation/Cocoa/Reference/Foundation/Classes/NSHTTPCookie_Class/Reference/Reference.html#//apple_ref/occ/clm/NSHTTPCookie/cookieWithProperties:</a></p>
