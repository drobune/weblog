---
slug: "/blog/1c4b72de3c47ff557d45"
title: psshでsudoを実行する
date: 2014-10-15T13:53:24+09:00
tags: ["SSH", "pssh"]
---
<div class="code-frame" data-lang="text"><div class="highlight"><pre>$ pssh -P -x '-tt' -h nodelist -i 'sudo service nginx restart'
</pre></div></div>

<p>普通に実行するとttyがねーよと怒られるので -P -x- '-tt'をつける</p>
