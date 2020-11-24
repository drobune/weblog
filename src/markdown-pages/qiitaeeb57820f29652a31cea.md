---
slug: "/blog/eeb57820f29652a31cea"
title: Mac/Marvericksでpip installしたプログラムが動かないとき
date: 2014-06-26T12:31:04+09:00
tags: ["Python", "Mac", "pip"]
---
<p>ディストリがねーよと怒ってらっしゃる。</p>

<div class="code-frame" data-lang="text"><div class="highlight"><pre> raise DistributionNotFound(req)  # XXX put more info here
</pre></div></div>

<p>だが、こちらのコマンドを入力すると治るとおっしゃる。</p>

<p>参考<br>
<a href="http://dev.imanol.me/post/65244552920/python-on-osx-mavericks" class="autolink" rel="nofollow noopener" target="_blank">http://dev.imanol.me/post/65244552920/python-on-osx-mavericks</a></p>

<div class="code-frame" data-lang="text"><div class="highlight"><pre>$ curl -O http://python-distribute.org/distribute_setup.py
$ sudo python distribute_setup.py
$ sudo rm distribute_setup.py
$ sudo easy_install pip
$ sudo pip install virtualenv
$ sudo pip install virtualenvwrapper
</pre></div></div>

<p>治った。</p>
