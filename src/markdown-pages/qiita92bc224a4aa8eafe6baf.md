---
slug: "/blog/92bc224a4aa8eafe6baf"
title: macでandroid studioのプロジェクトを開くときのgradle home
date: 2014-05-01T04:05:32+09:00
tags: ["Android", "Mac", "android_studio"]
---
<p>前提として初めてandroidアプリを触る人です。<br>
僕はこの時点でscript言語しか触っていないです。<br>
javaに関する知識はhellow worldと文献程度。</p>

<p>まずandroid studioのインストールします。<br>
ここでは問題ありませんでした。</p>

<p>次にgitから既存のソースを落としてimportしようとすると、、、</p>

<p>gradle homeを設定せよと怒られます。</p>

<h2>
<span id="gradle-home" class="fragment"></span><a href="#gradle-home"><i class="fa fa-link"></i></a>gradle home??</h2>

<p><a href="http://www.gradle.org" rel="nofollow noopener" target="_blank">gradle</a>とはjavaのビルドツールです。<br>
グラドルと読んでも差し支えないかと思います。</p>

<p>android studioで必要というのはわかりましたが、場所がまったくわかりません。<br>
StackOverFlowをみると<br>
Android_studio/plugin/gradle/libでいけるというとうなので試しました。</p>

<p>ようやくimportできたような画面になりましたが、エラーが出ています。</p>

<div class="code-frame" data-lang="text"><div class="highlight"><pre>You are using an unsupported version of Gradle. Please use version 1.10.
</pre></div></div>

<p>僕がandroid studioをインストールした時の最新版は1.11でした。</p>

<p>という訳でmacのローカルにgradleの1.10を入れます。</p>

<div class="code-frame" data-lang="text"><div class="highlight"><pre>$ brew versions gradle
1.11     git checkout 01f2e6f Library/Formula/gradle.rb
1.10     git checkout c6baa40 Library/Formula/gradle.rb
1.9      git checkout 5bab5e9 Library/Formula/gradle.rb
1.8      git checkout 9214e60 Library/Formula/gradle.rb
1.7      git checkout f826cc9 Library/Formula/gradle.rb
1.6      git checkout fff7c0b Library/Formula/gradle.rb
</pre></div></div>

<p>なので</p>

<div class="code-frame" data-lang="text"><div class="highlight"><pre>$ git checkout c6baa40 Library/Formula/gradle.rb
$ brew info gradle
gradle: stable 1.10, devel 1.11-rc-1
http://www.gradle.org/
/usr/local/Cellar/gradle/1.10 (143 files, 42M) *
  Built from source
From: https://github.com/Homebrew/homebrew/commits/master/Library/Formula/gradle.rb
</pre></div></div>

<p>で、問題のgradle homeとは/usr/local/Cellar/gradle/1.10/libexecのことなので<br>
これをandroid studioのGradle settingsに設定してgradleの問題はクリアできました。</p>

<p>が、しかしまた別のエラーがでたので、それは別エントリにします。</p>

<div class="code-frame" data-lang="text"><div class="highlight"><pre>Cause: failed to find target android-18
</pre></div></div>
