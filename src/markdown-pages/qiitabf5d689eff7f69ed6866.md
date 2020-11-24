---
slug: "/blog/bf5d689eff7f69ed6866"
title: 相手のssh公開鍵を使って便利に暗号化する方法
date: 2015-04-20T22:09:20+09:00
tags: ["GitHub", "SSH"]
---
<p>普段、社外とやり取りしないので、どれがメインストリームなのかわからないけど、<br>
相手の人もエンジニアっぽかったから、とりあえず公開鍵もらって、暗号化することにした。</p>

<p>送られてきたのはGPG公開鍵ではなくssh公開鍵だったので、調べながらやってみた。</p>

<p>OpenSSHで作った公開鍵をOpenSSLで扱えるようにするのにハマったけど、<br>
手順は簡単だったのでメモっとく。</p>

<h3>
<span id="1-opensslでも扱えるpkcs8形式にssh公開鍵を変換する" class="fragment"></span><a href="#1-openssl%E3%81%A7%E3%82%82%E6%89%B1%E3%81%88%E3%82%8Bpkcs8%E5%BD%A2%E5%BC%8F%E3%81%ABssh%E5%85%AC%E9%96%8B%E9%8D%B5%E3%82%92%E5%A4%89%E6%8F%9B%E3%81%99%E3%82%8B"><i class="fa fa-link"></i></a>1. Opensslでも扱える<a href="http://ja.wikipedia.org/wiki/PKCS" rel="nofollow noopener" target="_blank">PKCS#8</a>形式にssh公開鍵を変換する</h3>

<p><code>ssh-keygen -f &lt;ssh公開鍵&gt; -e -m PKCS8 &gt; hoge</code></p>

<p>ssh公開鍵のフォーマットはこんな感じ</p>

<div class="code-frame" data-lang="text"><div class="highlight"><pre>ssh-rsa AAAAB3NzaC1yc2EAaAADAQABAAABAQDvi3d/Y7oXGqS72okWF/EVYotL/SGkVk7tngCBkEDh3BznfU7XURi5p/uf7Hvzy1IWqJyne5umEyvMR6svPs0+kIQpcClpPvyz5KFWgSCJIA3dsYI4sQNTfJfSEaDBUyVNCjcWmpuvwbnRdTv7QVBZKp8Rgc7bk+8x40aD2GtUZ1YsuqpnI4nsxyCuoPc+jH1trMIDettUPCK8evMsJPvBJkIVULEJWik/qgjjFsGtAzJJyFFy3meXN9u4uPYYKKVgH2hM705QS/ucNULhp2Ey1tOcqYgfnTVJj320up0s9acsljJv6cQK60dzVC9XhN5ECabGQhgfKKCozaGm/hWB
</pre></div></div>

<p>変換後のやつ<br>
BEGIN PUBLIC KEYという文言に注意する（PEM形式とは違う）</p>

<div class="code-frame" data-lang="text"><div class="highlight"><pre>-----BEGIN PUBLIC KEY-----
HOGEfugaHOGEfufaHOGEfugaHOGEfufaHOGEfugaHOGE
HOGEfugaHOGEfufaHOGEfugaHOGEfufaHOGEfugaHOGE
HOGEfugaHOGEfufaHOGEfugaHOGEfufaHOGEfugaHOGE
HOGEfugaHOGEfufaHOGEfugaHOGEfufaHOGEfugaHOGE
HOGEfugaHOGEfufaHOGEfugaHOGEfufa==
-----END PUBLIC KEY-----

</pre></div></div>

<h3>
<span id="2-暗号化" class="fragment"></span><a href="#2-%E6%9A%97%E5%8F%B7%E5%8C%96"><i class="fa fa-link"></i></a>2. 暗号化</h3>

<p>さっき作った鍵をつかってopensslコマンドで暗号化<br>
-pubinというオプションをしていて公開鍵で暗号化することを明示してあげる</p>

<p><code>openssl rsautl -encrypt -pubin -inkey hoge -in fuga.csv -out fuga.csv.encrypted</code></p>

<p>以上</p>

<p>復号化は下のコマンドでできる</p>

<p><code>openssl rsautl -decrypt -inkey private_key -in fuga.csv.encrypted -out fuga.csv.decrypted</code></p>

<p>小技：<code>https://github.com/&lt;username&gt;.keys</code>から相手の公開鍵拾えるし便利</p>
