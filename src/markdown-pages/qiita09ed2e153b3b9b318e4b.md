---
slug: "/blog/09ed2e153b3b9b318e4b"
title: ターミナルからTODO管理をするTaskwarriorを使ってみた
date: 2014-06-26T02:24:34+09:00
tags: ["Mac", "Terminal", "todo"]
---
<p>あー明日やんなきゃーっておもったことを寝て起きたらスッキリ忘れる事が多いです。。。</p>

<p>細かい事もフォローできるように一番身近なターミナルからお手軽にTodo管理できれば<br>
と思って探したらありました。</p>

<p><a href="http://taskwarrior.org/" rel="nofollow noopener" target="_blank">本家のサイト</a></p>

<p>なにわともあれ、インストール</p>

<div class="code-frame" data-lang="text"><div class="highlight"><pre>$ brew install task
</pre></div></div>

<h4>
<span id="丁寧な使い方説明" class="fragment"></span><a href="#%E4%B8%81%E5%AF%A7%E3%81%AA%E4%BD%BF%E3%81%84%E6%96%B9%E8%AA%AC%E6%98%8E"><i class="fa fa-link"></i></a>丁寧な使い方説明</h4>

<hr>

<p><a href="http://taskwarrior.org/docs/syntax.html" class="autolink" rel="nofollow noopener" target="_blank">http://taskwarrior.org/docs/syntax.html</a></p>

<h4>
<span id="ざっくりした使い方" class="fragment"></span><a href="#%E3%81%96%E3%81%A3%E3%81%8F%E3%82%8A%E3%81%97%E3%81%9F%E4%BD%BF%E3%81%84%E6%96%B9"><i class="fa fa-link"></i></a>ざっくりした使い方</h4>

<hr>

<ul>
<li>タスク追加</li>
</ul>

<div class="code-frame" data-lang="text"><div class="highlight"><pre>$ task add 郵便局いく
$ task add あのjsのバグ取る
$ task project:hoge add テスト書く #プロジェクトごとにタスクを作る
</pre></div></div>

<ul>
<li>タスク確認</li>
</ul>

<div class="code-frame" data-lang="text"><div class="highlight"><pre> $ task list

ID Age Description
 1 3m  郵便局いく
 2 2m  あのjsのバグ取る
 3 1m  テスト書く
</pre></div></div>

<p>ちゃんと登録してからどれだけ経ったかわかる。</p>

<ul>
<li>タスク削除</li>
</ul>

<div class="code-frame" data-lang="text"><div class="highlight"><pre>$ task 1 done
Completed task 1 '郵便局いく'.
Completed 1 task.
</pre></div></div>

<p>これだけシンプルなら使えそうです。</p>
