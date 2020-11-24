---
slug: "/blog/7eb11decb54ecbff82a3"
title: herokuアプリで任意のサブドメインを使う。-DNSまわりの設定-
date: 2014-05-07T23:05:11+09:00
tags: ["Rails", "Heroku", "dns"]
---

<h3>
<span id="背景" class="fragment"></span><a href="#%E8%83%8C%E6%99%AF"><i class="fa fa-link"></i></a>背景</h3>

<hr>

<p>herokuアプリにてエンドユーザがサブドメインでページを作れるように改善することになりました。<br>
お察しかもしれませんが、ハマりポイントがあったのでメモとして残しておきます。  もちろんすべて無料です。</p>

<hr>

<h3>
<span id="1-dnsサーバの設定" class="fragment"></span><a href="#1-dns%E3%82%B5%E3%83%BC%E3%83%90%E3%81%AE%E8%A8%AD%E5%AE%9A"><i class="fa fa-link"></i></a>1. DNSサーバの設定</h3>

<p>herokuアプリは固定IPをもっていないため、サブドメインについてはCNAMEレコードのみ登録します。<br><br>
ムームードメインでサブドメインの設定をしようとしましたが、<br>
サブドメイン名をワイルドカードで指定することができず、次のdnsホスティングサービスを利用しました。  </p>

<ul>
<li>
<a href="https://dozens.jp" rel="nofollow noopener" target="_blank">Dosens</a><br>
</li>
</ul>

<p><a href="http://sitedo3.s3.amazonaws.com/2013/09/dozens.png" rel="nofollow noopener" target="_blank"><img src="http://sitedo3.s3.amazonaws.com/2013/09/dozens-300x217.png" alt="dozens" width="300" height="217" data-canonical-src="http://sitedo3.s3.amazonaws.com/2013/09/dozens-300x217.png" loading="lazy"></a></p>

<p>ここではルートドメインと任意のサブドメインについてのDNSレコードを登録します。</p>

<p>ルートドメインについては、"<del> add heroku record "にて自動で設定してくれます。</del><br><br>
ではなく、次のIPをAレコードとして登録してください。2013年9月時点の情報デス。<br><br>
ちなみにDozensが設定してくれるIPは使えなかったのでお気をつけください。  </p>

<blockquote>
<p>Address: 75.101.163.44<br><br>
Address: 75.101.145.87<br><br>
Address: 174.129.212.2  </p>
</blockquote>

<p>サブドメインについてはcnameレコードを設定し、" *.取得したドメイン "とherokuアプリのデフォルトドメイン " xxxxx.herokuapp.com "をひもづけます。  </p>

<p>ちなみにherokuのアドオンに' Zerigo DNS 'というものがありますが、ページビューに応じて課金が発生するので、<br><br>
つかってません。</p>

<h3>
<span id="2-herokuappの設定" class="fragment"></span><a href="#2-herokuapp%E3%81%AE%E8%A8%AD%E5%AE%9A"><i class="fa fa-link"></i></a>2. herokuappの設定</h3>

<p>herokuにログインしてsettingから以下のドメインを追加します。  </p>

<blockquote>
<p>" *.取得したドメイン "<br><br>
" 取得したドメイン "  </p>
</blockquote>

<p>反映まで一日ほど待つと。。。できた！  </p>

<p>アプリ側（Rails）でのルーティングの設定については会社の後輩がハマってたので、<br><br>
書いてくれるんじゃないかなw</p>
