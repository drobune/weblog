---
slug: "/blog/c60c135a0c36ddf120a2"
title: WordPressをロリポップからec2にお引っ越しした。
date: 2014-06-09T15:45:44+09:00
tags: ["WordPress", "EC2", "CMS", "ロリポップ"]
---

<h2>
<span id="概要" class="fragment"></span><a href="#%E6%A6%82%E8%A6%81"><i class="fa fa-link"></i></a>概要</h2>

<p>ロリポップ安いんだけど自由度が低い（とくにdns）のでec2に引っ越した。<br>
ec2のmicroインスタンスだと一ヶ月ぶん回しても2,000円程度。サーバ触ってみたいって人におすすめ。大きな流れをメモっときます。</p>

<h2>
<span id="ec2の準備" class="fragment"></span><a href="#ec2%E3%81%AE%E6%BA%96%E5%82%99"><i class="fa fa-link"></i></a>ec2の準備</h2>

<p>chef-soloで適当に構築。<br>
git <br>
httpd24<br>
php55<br>
msql55</p>

<h2>
<span id="wordpressソースコードの移動" class="fragment"></span><a href="#wordpress%E3%82%BD%E3%83%BC%E3%82%B9%E3%82%B3%E3%83%BC%E3%83%89%E3%81%AE%E7%A7%BB%E5%8B%95"><i class="fa fa-link"></i></a>wordpressソースコードの移動</h2>

<p>　1. ロリポップのftpサーバからlocalにファイルを落とす。</p>

<div class="code-frame" data-lang="text"><div class="highlight"><pre>$ wget --user=yourname --password=yourpass -mc ftp://ftp.your.main.jp/
</pre></div></div>

<p>ここでオプションを忘れると再帰的にフォルダを落とせず、あとで「ん？」ってなる。</p>

<p>　2. githubにリポジトリ作る（.gitignoreでwp-config隠せばpublicでもいける）</p>

<p>　3. ec2でcloneする(/var/www/とかで)</p>

<p>　4. wp-configの設定</p>

<p>　※ localからpushしたらec2でpullされるよう設定する。<br>
<a href="http://rfs.jp/server/git/git-hook-post-receive.html" class="autolink" rel="nofollow noopener" target="_blank">http://rfs.jp/server/git/git-hook-post-receive.html</a><br>
　</p>

<h2>
<span id="dbのデータを移動" class="fragment"></span><a href="#db%E3%81%AE%E3%83%87%E3%83%BC%E3%82%BF%E3%82%92%E7%A7%BB%E5%8B%95"><i class="fa fa-link"></i></a>DBのデータを移動</h2>

<ol>
<li>ロリポップの管理画面でデータベースを選択して、MySQLのdumpファイルを取得する。</li>
</ol>

<p><a href="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.amazonaws.com%2F0%2F17326%2F4d28c60a-a48d-5fc7-d4d9-6b48aa6ab677.png?ixlib=rb-1.2.2&amp;auto=format&amp;gif-q=60&amp;q=75&amp;s=2e53886fb3ab2c35f94072abd9072ef3" target="_blank" rel="nofollow noopener"><img src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.amazonaws.com%2F0%2F17326%2F4d28c60a-a48d-5fc7-d4d9-6b48aa6ab677.png?ixlib=rb-1.2.2&amp;auto=format&amp;gif-q=60&amp;q=75&amp;s=2e53886fb3ab2c35f94072abd9072ef3" alt="Screen Shot 2014-06-09 at 15.29.41.png" title="Screen Shot 2014-06-09 at 15.29.41.png" data-canonical-src="https://qiita-image-store.s3.amazonaws.com/0/17326/4d28c60a-a48d-5fc7-d4d9-6b48aa6ab677.png" srcset="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.amazonaws.com%2F0%2F17326%2F4d28c60a-a48d-5fc7-d4d9-6b48aa6ab677.png?ixlib=rb-1.2.2&amp;auto=format&amp;gif-q=60&amp;q=75&amp;w=1400&amp;fit=max&amp;s=441acd41b428f5fcc7e050aee5a86779 1x" loading="lazy"></a></p>

<p>wp-configの中の値を入力する</p>

<p><a href="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.amazonaws.com%2F0%2F17326%2F5aeae2a7-8245-b50a-73c8-3fed4f3f5625.png?ixlib=rb-1.2.2&amp;auto=format&amp;gif-q=60&amp;q=75&amp;s=88ff30b62750548b0da6cda7ed919ab9" target="_blank" rel="nofollow noopener"><img src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.amazonaws.com%2F0%2F17326%2F5aeae2a7-8245-b50a-73c8-3fed4f3f5625.png?ixlib=rb-1.2.2&amp;auto=format&amp;gif-q=60&amp;q=75&amp;s=88ff30b62750548b0da6cda7ed919ab9" alt="Screen Shot 2014-06-09 at 15.31.47.png" title="Screen Shot 2014-06-09 at 15.31.47.png" data-canonical-src="https://qiita-image-store.s3.amazonaws.com/0/17326/5aeae2a7-8245-b50a-73c8-3fed4f3f5625.png" srcset="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.amazonaws.com%2F0%2F17326%2F5aeae2a7-8245-b50a-73c8-3fed4f3f5625.png?ixlib=rb-1.2.2&amp;auto=format&amp;gif-q=60&amp;q=75&amp;w=1400&amp;fit=max&amp;s=cacea323909ee6d56acc36ba01c314b6 1x" loading="lazy"></a></p>

<p>exportでsqlファイルを落とす。</p>

<p><a href="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.amazonaws.com%2F0%2F17326%2F0b9888db-ef79-d973-261d-aade4a0cd65a.png?ixlib=rb-1.2.2&amp;auto=format&amp;gif-q=60&amp;q=75&amp;s=f07fc1a884c0e00947a19f8a6d0bbde9" target="_blank" rel="nofollow noopener"><img src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.amazonaws.com%2F0%2F17326%2F0b9888db-ef79-d973-261d-aade4a0cd65a.png?ixlib=rb-1.2.2&amp;auto=format&amp;gif-q=60&amp;q=75&amp;s=f07fc1a884c0e00947a19f8a6d0bbde9" alt="Screen Shot 2014-06-09 at 15.32.57.png" title="Screen Shot 2014-06-09 at 15.32.57.png" data-canonical-src="https://qiita-image-store.s3.amazonaws.com/0/17326/0b9888db-ef79-d973-261d-aade4a0cd65a.png" srcset="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.amazonaws.com%2F0%2F17326%2F0b9888db-ef79-d973-261d-aade4a0cd65a.png?ixlib=rb-1.2.2&amp;auto=format&amp;gif-q=60&amp;q=75&amp;w=1400&amp;fit=max&amp;s=8f65f0182aeb6213e73ef571810c694f 1x" loading="lazy"></a></p>

<ol>
<li><p>sqlファイルをwordpressのgitリポジトリに追加してec2に移動</p></li>
<li><p>ec2のMySQLにレストアする。</p></li>
</ol>

<div class="code-frame" data-lang="text"><div class="highlight"><pre>mysql -u root -p yourdb &lt; hogehoge.sql
</pre></div></div>

<p>これであとはec2でhttpd.confをいじれば公開できるかと思います。</p>
