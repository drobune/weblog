---
slug: "/blog/1f27451b2ee512bc2bbf"
title: VimでRubyのインデントだけずれる
date: 2014-05-07T22:47:53+09:00
tags: ["Ruby", "Vim"]
---
<p>vimでgg=Gしてインデント整形してもテンプレートのrubyのブロックだけインデントされなかった。<br><br>
syntasticだけでは不十分だったみたい。<br><br>
下のplug-inを追加すれば綺麗にインデントされた。  </p>

<p>.vimrcに下を追加して  </p>

<div class="code-frame" data-lang="text"><div class="highlight"><pre>NeoBundle 'vim-ruby/vim-ruby'
</pre></div></div>

<p>vimで<br>
:NeoBundleInstall  </p>

<p><a href="https://github.com/vim-ruby/vim-ruby" rel="nofollow noopener" target="_blank">github</a></p>
