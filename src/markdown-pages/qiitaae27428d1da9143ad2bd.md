---
slug: "/blog/ae27428d1da9143ad2bd"
title: Mac OSXにWindows8を無料で導入する
date: 2014-05-07T23:00:34+09:00
tags: ["Mac", "Windows8"]
---

<h4>
<span id="背景" class="fragment"></span><a href="#%E8%83%8C%E6%99%AF"><i class="fa fa-link"></i></a>背景</h4>

<hr>

<p>最近windows8のシェアが伸びてきているという記事を見かける。<br><br>
会社でも全員mac使ってるし、そろそろIE検証環境が欲しいなと思っていた。<br><br>
windows8.1のプレビュー版がでてる！金ないし、virtualboxでいいっしょ！  </p>

<p>　　</p>

<h4>
<span id="手順" class="fragment"></span><a href="#%E6%89%8B%E9%A0%86"><i class="fa fa-link"></i></a>手順</h4>

<hr>

<p>次のサイトを参考にする</p>

<p><a href="http://www.4bizpersons.com/windows/virtual-win81/" rel="nofollow noopener" target="_blank">仮想マシン「VirtualBox」にWindows8.1 Previewを新規インストールしてみた</a></p>

<p>virtualboxは元々入れていたので、osイメージを公式サイトからDLする。派手に使わないし、32bit版をダウンロード。</p>

<p><a href="http://windows.microsoft.com/ja-jp/windows-8/preview-iso" rel="nofollow noopener" target="_blank">公式サイト</a></p>

<ol>
<li>vitrualboxを立ち上げて新しいマシンの立ち上げ</li>
</ol>

<p><a href="http://sitedo3.s3.amazonaws.com/2013/09/win801.png" rel="nofollow noopener" target="_blank"><img src="http://sitedo3.s3.amazonaws.com/2013/09/win801-300x212.png" alt="win801" width="300" height="212" data-canonical-src="http://sitedo3.s3.amazonaws.com/2013/09/win801-300x212.png" loading="lazy"></a>  </p>

<p>windows8を選択する。</p>

<p><a href="http://sitedo3.s3.amazonaws.com/2013/09/win802.png" rel="nofollow noopener" target="_blank"><img src="http://sitedo3.s3.amazonaws.com/2013/09/win802-300x171.png" alt="win802" width="300" height="171" data-canonical-src="http://sitedo3.s3.amazonaws.com/2013/09/win802-300x171.png" loading="lazy"></a>  </p>

<p>32bitなら最低1G、64bitなら2Gを選択する。</p>

<p><a href="http://sitedo3.s3.amazonaws.com/2013/09/win803.png" rel="nofollow noopener" target="_blank"><img src="http://sitedo3.s3.amazonaws.com/2013/09/win803-300x247.png" alt="win803" width="300" height="247" data-canonical-src="http://sitedo3.s3.amazonaws.com/2013/09/win803-300x247.png" loading="lazy"></a>  </p>

<p>ここは最低の16Gより多めに取っておいた方がいいらしい。</p>

<ol>
<li>osインストール</li>
</ol>

<p>virtualboxでさっき作成したboxをスタートさせて、<br>
公式サイトからDLしたisoファイルをboot先としてGUIで選択すると、しばらくして下の画面がでる。</p>

<p><a href="http://sitedo3.s3.amazonaws.com/2013/09/Screen-Shot-2013-09-06-at-16.37.39.png" rel="nofollow noopener" target="_blank"><img src="http://sitedo3.s3.amazonaws.com/2013/09/Screen-Shot-2013-09-06-at-16.37.39-300x220.png" alt="Screen Shot 2013-09-06 at 16.37.39" width="300" height="220" data-canonical-src="http://sitedo3.s3.amazonaws.com/2013/09/Screen-Shot-2013-09-06-at-16.37.39-300x220.png" loading="lazy"></a>  </p>

<p>ちなみに公式サイトにある、プロダクトキーは次の通り。  </p>

<blockquote>
<p>NTTX3-RV7VB-T7X7F-WQYYY-9Y92F</p>
</blockquote>

<p><a href="http://sitedo3.s3.amazonaws.com/2013/09/Screen-Shot-2013-09-06-at-16.48.38.png" rel="nofollow noopener" target="_blank"><img src="http://sitedo3.s3.amazonaws.com/2013/09/Screen-Shot-2013-09-06-at-16.48.38-300x219.png" alt="Screen Shot 2013-09-06 at 16.48.38" width="300" height="219" data-canonical-src="http://sitedo3.s3.amazonaws.com/2013/09/Screen-Shot-2013-09-06-at-16.48.38-300x219.png" loading="lazy"></a>  </p>

<p>このロード画面、新鮮。</p>

<p><a href="http://sitedo3.s3.amazonaws.com/2013/09/Screen-Shot-2013-09-06-at-17.29.56.png" rel="nofollow noopener" target="_blank"><img src="http://sitedo3.s3.amazonaws.com/2013/09/Screen-Shot-2013-09-06-at-17.29.56-300x215.png" alt="Screen Shot 2013-09-06 at 17.29.56" width="300" height="215" data-canonical-src="http://sitedo3.s3.amazonaws.com/2013/09/Screen-Shot-2013-09-06-at-17.29.56-300x215.png" loading="lazy"></a>  </p>

<p>入った。ok 余裕。</p>

<ul>
<li>
<strong>ハマりポイント</strong>　</li>
</ul>

<p>今回久しぶりにVirtualboxの環境を起動させようとしたら、下のようなエラーがでできた。</p>

<p>ns_error_failure</p>

<p><a href="http://sitedo3.s3.amazonaws.com/2013/09/win804.png" rel="nofollow noopener" target="_blank"><img src="http://sitedo3.s3.amazonaws.com/2013/09/win804-300x120.png" alt="win804" width="300" height="120" data-canonical-src="http://sitedo3.s3.amazonaws.com/2013/09/win804-300x120.png" loading="lazy"></a>  </p>

<p>ログにも書き出されていないし、vagrantも起動しなくなってる。<br><br>
virtualboxのバージョンも最新だし。。。。と思って、とりあえず再インストールしたらなおった。<br><br>
どうやらMountainLionとVirtualboxの相性は良くないみたいなので、バージョン変えたり、再インストールしたりするのがいいじゃないかと。<br><br>
なにか情報あったら気軽に連絡ください。</p>

<p>本当に簡単に無料で構築できたのでオススメです。</p>

<p>ご安全に。</p>
