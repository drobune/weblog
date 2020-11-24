---
slug: "/blog/2c0b64fdffd4451ee825"
title: rpm_check_debug vs depsolveがでたぞ
date: 2014-10-03T15:29:11+09:00
tags: ["CentOS", "Vagrant", "chef-solo"]
---
<p>vagrantにcookしてたら次のようなエラーが</p>

<div class="code-frame" data-lang="text"><div class="highlight"><pre>================================================================================
Error executing action `install` on resource 'package[php-mysql]'
================================================================================


Chef::Exceptions::Exec
----------------------
 returned 1, expected 0


Resource Declaration:
---------------------
# In /home/vagrant/chef-solo/cookbooks-3/php/recipes/default.rb

 11:   package pkg do
 12:     action :install
 13:   end
 14: end



Compiled Resource:
------------------
# Declared in /home/vagrant/chef-solo/cookbooks-3/php/recipes/default.rb:11:in `block in from_file'

package("php-mysql") do
  action [:install]
  retries 0
  retry_delay 2
  package_name "php-mysql"
  version "5.4.33-2.el6.remi"
  cookbook_name :php
  recipe_name "default"
end
</pre></div></div>

<p>vagrantにsshしてyum install php-mysqlしてみる</p>

<div class="code-frame" data-lang="text"><div class="highlight"><pre>Running rpm_check_debug
ERROR with rpm_check_debug vs depsolve:
libmysqlclient.so.16()(64bit) is needed by postfix-2:2.6.6-6.el6_5.x86_64
libmysqlclient.so.16(libmysqlclient_16)(64bit) is needed by postfix-2:2.6.6-6.el6_5.x86_64
 You could try running: rpm -Va --nofiles --nodigest
Your transaction was saved, rerun it with: yum load-transaction /tmp/yum_save_tx-2014-10-03-06-11Hr12mV.yumtx
</pre></div></div>

<p>衝突してるみたい。<br>
とりあえず<code>yum clean all</code>しても直らん</p>

<p>結局問題になっているpackageをyum removeしてもう一度やったら入った。。。</p>
