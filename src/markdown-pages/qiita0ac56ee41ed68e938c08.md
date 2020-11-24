---
slug: "/blog/0ac56ee41ed68e938c08"
title: ファイルが多すぎてrmできないときの対処法
date: 2014-12-26T16:24:17+09:00
tags: ["Linux"]
---
<p>logrotateミスって大量のファイルが出来てしまった...<br>
find -execを使う。</p>

<div class="code-frame" data-lang="text"><div class="highlight"><pre>$ find . -type f -exec rm -fv {} \;
</pre></div></div>
