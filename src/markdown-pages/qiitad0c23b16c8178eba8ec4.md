---
slug: "/blog/d0c23b16c8178eba8ec4"
title: Mac/Marvericksのjrnl(Python)でUnicodeEncodeErrorが出て困った。
date: 2014-06-26T22:07:58+09:00
tags: ["Python", "Mac", "jrnl"]
---
<p>ターミナルで使えるメモプログラム<a href="http://maebert.github.io/jrnl/index.html" rel="nofollow noopener" target="_blank">jrnl</a>はスーパー便利なのですが、ふとした拍子におかしくなった。</p>

<p>何叩いてもこのエラーが</p>

<div class="code-frame" data-lang="text"><div class="highlight"><pre>$ jrnl
Traceback (most recent call last):
  File "/usr/local/bin/jrnl", line 9, in &lt;module&gt;
    load_entry_point('jrnl==1.8.1', 'console_scripts', 'jrnl')()
  File "/Library/Python/2.7/site-packages/jrnl/cli.py", line 159, in run
    touch_journal(config['journal'])
  File "/Library/Python/2.7/site-packages/jrnl/cli.py", line 92, in touch_journal
    util.prompt("[Journal created at {0}]".format(filename))
UnicodeEncodeError: 'ascii' codec can't encode characters in position 0-12: ordinal not in range(128)
</pre></div></div>

<p>対象ソース読んでみるとファイル開くときに落ちてるくさい。</p>

<p><code>$ jrnl -ls</code>は通るからどっかにunicode混じってるのかなと思って~/.jrnl_configをのぞくと案の定unicodeが混じってた。</p>

<div class="code-frame" data-lang="jrnl_config"><div class="highlight"><pre>{
  "default_hour": 9, 
  "timeformat": "%Y-%m-%d %H:%M", 
  "linewrap": 79, 
  "encrypt": false, 
  "editor": "", 
  "default_minute": 0, 
  "highlight": true, 
  "journals": {
    "default": "\u307b\u3052\u307b\u3052\u307b\u3052\u307b\u3052\u307b\u3052\u307b\u3052"
  }, 
  "tagsymbols": "@"
}
</pre></div></div>

<p>対象部分をさっと<code>"~/jrnl.txt"</code>にかえたら治った。</p>

<p>なんでこういうことになったのかよくわかってないです汗</p>
