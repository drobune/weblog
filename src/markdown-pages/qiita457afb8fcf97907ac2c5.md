---
slug: "/blog/457afb8fcf97907ac2c5"
title: Rails3系サブドメイン'www'に301リダイレクトさせるroutesの書き方
date: 2014-05-07T22:57:55+09:00
tags: ["Rails"]
---

<h3>
<span id="背景" class="fragment"></span><a href="#%E8%83%8C%E6%99%AF"><i class="fa fa-link"></i></a>背景</h3>

<hr>

<p>herokuで運用している<a href="https://www.box2you.com" rel="nofollow noopener" target="_blank">BoxToYou</a>にて<br><br>
任意のサブドメインおよびネイキッドドメインに対してSSLを使おうとしました。    </p>

<p>調べてみるとネイキッドに対してはDNSにANAME/ALIASレコードという<br><br>
特殊なレコードを登録する必要があることがわかりました。  </p>

<p>トラフィック見てみるとネイキッドに直接アクセスしてくる人は<br><br>
全体の１パーセントもいないので、ネイキッドへのリクエストに対しては<br><br>
すべてwww.box2you.comに301リダイレクトさせることにしました。</p>

<h3>
<span id="メモ" class="fragment"></span><a href="#%E3%83%A1%E3%83%A2"><i class="fa fa-link"></i></a>メモ</h3>

<hr>

<p>瞬殺。</p>

<div class="code-frame" data-lang="text"><div class="highlight"><pre> constraints(:host =&amp;gt; 'box2you.com') do
     root :to =&amp;gt; redirect("https://www.box2you.com"), status:301
     match '/*path', :to =&amp;gt; redirect {|params| "https://www.box2you.com/#{params[:path]}"}, status:301
end
</pre></div></div>
