---
slug: "/blog/16c4761606d6eeab2e5a"
title: herokuでslugsizeが増えた！とりあえずローカルでassets:precompileする
date: 2014-05-07T23:12:19+09:00
tags: ["Rails", "Heroku"]
---

<h4>
<span id="概要" class="fragment"></span><a href="#%E6%A6%82%E8%A6%81"><i class="fa fa-link"></i></a>概要</h4>

<hr>

<p>herokuへのデプロイ中、アプリのslugsizeが前見た時の倍(100MB)になっていて<br>
コーヒーこぼしかけた。</p>

<p>最大サイズギリギリちゃうんかい！とおもったら最大は300Mらしく一安心したけど、<br>
とりあえず調査。</p>

<h4>
<span id="めも" class="fragment"></span><a href="#%E3%82%81%E3%82%82"><i class="fa fa-link"></i></a>めも</h4>

<hr>

<div class="code-frame" data-lang="text"><div class="highlight"><pre>$ heroku run bash --app アプリ名

heroku~ $ du -m -s *
31  app
9   bin
1   config
1   config.ru
2   db
2   doc
1   Gemfile
1   Gemfile.lock
1   lib
1   log
1   Procfile
59  public
1   Rakefile
1   README.md
1   script
1   spec
1   ssl
27  tmp
180 vendor

heroku~/vendor $ du -m -s *
1   assets
144 bundle
1   heroku
1   plugins
36  ruby-1.9.3

/vendor/bundle/ruby/1.9.1 $ du -m -s *
1   bin
1   build_info
2   bundler
1   bundler-1.3.2.gem
1   doc
142 gems
1   specifications

</pre></div></div>

<p>gemがほとんどなんだなーっと。でも最近gem入れてねーっすよ？？</p>

<p>ってことは。。。</p>

<div class="code-frame" data-lang="text"><div class="highlight"><pre>~/public $ du -m -s *
1   404.html
1   422.html
1   500.html
58  assets
1   favicon.ico
1   mentenance.html
1   robots.txt
</pre></div></div>

<p>。。。assetsの中も圧縮されたデータがハッシュ付きで入ってるしなー。<br>
いままでassets:precompileをdeploy時にやっていたので、これを機にローカルでやるように切り替えよう。</p>

<p>ローカルプリコンパイルを有効にして</p>

<div class="code-frame" data-lang="text"><div class="highlight"><pre>heroku labs:enable user-env-compile -a myapp
</pre></div></div>

<p>プリコンパイルして</p>

<div class="code-frame" data-lang="text"><div class="highlight"><pre>RAILS_ENV=production bundle exec rake assets:precompile
</pre></div></div>

<p>デプロイ！</p>

<blockquote>
<p>Asset precompilation completed (162.43s)</p>
</blockquote>

<p>これが</p>

<blockquote>
<p>Detected manifest.yml, assuming assets were compiled locally</p>
</blockquote>

<p>こうなる。yay!</p>

<p>でも、slugsizeは変わりません。。。。</p>

<p>調査の結果、次のようなやり方で解決しました。</p>

<p><a href="https://github.com/rumblelabs/asset_sync" rel="nofollow noopener" target="_blank">asset_sync</a>使ってprecompileしたassetsgがs3にあげてあるのに、<br><br>
herokuのpublic/assetsにあげられていることが原因だった。</p>

<p>というわけで、ローカルでプリコンパイルの設定を修正しました。</p>

<h3>
<span id="1-gitignoreの見直し" class="fragment"></span><a href="#1-gitignore%E3%81%AE%E8%A6%8B%E7%9B%B4%E3%81%97"><i class="fa fa-link"></i></a>1. gitignoreの見直し</h3>

<p>下の二行を追加した。<br>
manifest.ymlにdigest付きの最新ファイルが記述してあり、<br><br>
herokuではそれをベースにassetの参照先urlを生成しているので、そ<br>
れ以外のassetsファイルをgit管理対象外とする。</p>

<div class="code-frame" data-lang="text"><div class="highlight"><pre>
public/assets/*
!public/assets/manifest.yml
</pre></div></div> 

<h3>
<span id="2--プリコンパイル" class="fragment"></span><a href="#2--%E3%83%97%E3%83%AA%E3%82%B3%E3%83%B3%E3%83%91%E3%82%A4%E3%83%AB"><i class="fa fa-link"></i></a>2.  プリコンパイル</h3>

<div class="code-frame" data-lang="text"><div class="highlight"><pre>rake assets:precompile

</pre></div></div>

<p>一度ステージングのs3を削除しておいたので、全件アップ。<br>
めっちゃ時間かかった。。。</p>

<h3>
<span id="3--herokuにpush" class="fragment"></span><a href="#3--heroku%E3%81%ABpush"><i class="fa fa-link"></i></a>3.  herokuにpush</h3>

<div class="code-frame" data-lang="text"><div class="highlight"><pre>git push heroku master
-----&gt; Preparing app for Rails asset pipeline
       Detected manifest.yml, assuming assets were compiled locally
-----&gt; Discovering process types
       Procfile declares types      -&gt; web, worker
       Default types for Ruby/Rails -&gt; console, rake

-----&gt; Compiled slug size: 59.8MB
-----&gt; Launching... done, v134
</pre></div></div>

<p>100M --&gt; 59M</p>

<p>めっちゃへった。ok。</p>

<p>いろいろ試行錯誤してやったので、asset_pipelineのいい勉強になりました。<br><br>
herokuはslugサイズ10Mを推奨しているらしい。今は69M弱。根本的に減らさないとまずいな。。。</p>
