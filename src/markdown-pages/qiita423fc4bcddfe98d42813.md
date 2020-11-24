---
slug: "/blog/423fc4bcddfe98d42813"
title: vagrantがbridge接続できなかった時の対処法
date: 2014-05-17T19:37:15+09:00
tags: ["Vagrant"]
---

<h2>
<span id="概要" class="fragment"></span><a href="#%E6%A6%82%E8%A6%81"><i class="fa fa-link"></i></a>概要</h2>

<p>macでvagrant導入して開発環境構築したんですが、<br>
いざ同一LANのデバイスからアクセスしようとしてみたらうまくいかなかった。</p>

<p>macのfirewallは切ってあるし、他のサーバ立ててみたら<br>
リモートデバイスからアクセスできたので、vagrantの設定が問題でした。</p>

<p>試行錯誤してうまくいかなかったのでバージョンアップして再起動してどーーんで解決。<br>
一応経緯をメモとして残しておきます。</p>

<h2>
<span id="メモ" class="fragment"></span><a href="#%E3%83%A1%E3%83%A2"><i class="fa fa-link"></i></a>メモ</h2>

<h3>
<span id="vagrantfile" class="fragment"></span><a href="#vagrantfile"><i class="fa fa-link"></i></a>Vagrantfile</h3>

<div class="code-frame" data-lang="text"><div class="highlight"><pre>Vagrant.configure("2") do |config|
  config.vm.box = "centos64"

  config.vm.box_url = "http://developer.nrel.gov/downloads/vagrant-boxes/CentOS-6.4-x86_64-v20130731.box"

  config.vm.network :private_network, ip: "192.168.33.11"

  config.vm.network :public_network

  config.vm.synced_folder "./", "/vagrant", owner: 'vagrant', group: 'vagrant', mount_options: ['dmode=777', 'fmode=777']
  config.vm.provider :virtualbox do |vb|
    vb.gui = false
  end
end
</pre></div></div>

<p>networkでpublicからも接続できるよう選択</p>

<h3>
<span id="vagrant-upのときににbridge接続するデバイスを選択" class="fragment"></span><a href="#vagrant-up%E3%81%AE%E3%81%A8%E3%81%8D%E3%81%AB%E3%81%ABbridge%E6%8E%A5%E7%B6%9A%E3%81%99%E3%82%8B%E3%83%87%E3%83%90%E3%82%A4%E3%82%B9%E3%82%92%E9%81%B8%E6%8A%9E"><i class="fa fa-link"></i></a>vagrant upのときににbridge接続するデバイスを選択。</h3>

<p>en0を選択<br>
<a href="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.amazonaws.com%2F0%2F17326%2F9919cebb-6dac-e4f1-9172-c51fa669ca68.png?ixlib=rb-1.2.2&amp;auto=format&amp;gif-q=60&amp;q=75&amp;s=87ff4d3ea118027bf215a0ad48608c63" target="_blank" rel="nofollow noopener"><img src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.amazonaws.com%2F0%2F17326%2F9919cebb-6dac-e4f1-9172-c51fa669ca68.png?ixlib=rb-1.2.2&amp;auto=format&amp;gif-q=60&amp;q=75&amp;s=87ff4d3ea118027bf215a0ad48608c63" alt="Screen Shot 2014-05-17 at 18.17.26.png" title="Screen Shot 2014-05-17 at 18.17.26.png" data-canonical-src="https://qiita-image-store.s3.amazonaws.com/0/17326/9919cebb-6dac-e4f1-9172-c51fa669ca68.png" srcset="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.amazonaws.com%2F0%2F17326%2F9919cebb-6dac-e4f1-9172-c51fa669ca68.png?ixlib=rb-1.2.2&amp;auto=format&amp;gif-q=60&amp;q=75&amp;w=1400&amp;fit=max&amp;s=44a504371742c561ea6f981906135792 1x" loading="lazy"></a></p>

<p>vagrant内でのifconfig</p>

<div class="code-frame" data-lang="text"><div class="highlight"><pre>eth0      Link encap:Ethernet  HWaddr 08:00:27:60:FC:47
          inet addr:10.0.2.15  Bcast:10.0.2.255  Mask:255.255.255.0
          inet6 addr: fe80::a00:27ff:fe60:fc47/64 Scope:Link
          UP BROADCAST RUNNING MULTICAST  MTU:1500  Metric:1
          RX packets:802 errors:0 dropped:0 overruns:0 frame:0
          TX packets:691 errors:0 dropped:0 overruns:0 carrier:0
          collisions:0 txqueuelen:1000
          RX bytes:69074 (67.4 KiB)  TX bytes:59586 (58.1 KiB)

eth1      Link encap:Ethernet  HWaddr 08:00:27:D6:BF:25
          inet addr:192.168.33.11  Bcast:192.168.33.255  Mask:255.255.255.0
          inet6 addr: fe80::a00:27ff:fed6:bf25/64 Scope:Link
          UP BROADCAST RUNNING MULTICAST  MTU:1500  Metric:1
          RX packets:12 errors:0 dropped:0 overruns:0 frame:0
          TX packets:14 errors:0 dropped:0 overruns:0 carrier:0
          collisions:0 txqueuelen:1000
          RX bytes:1752 (1.7 KiB)  TX bytes:900 (900.0 b)

eth2      Link encap:Ethernet  HWaddr 08:00:27:5B:7B:C7
          inet addr:192.168.100.106  Bcast:192.168.100.255  Mask:255.255.255.0
          inet6 addr: fe80::a00:27ff:fe5b:7bc7/64 Scope:Link
          UP BROADCAST RUNNING MULTICAST  MTU:1500  Metric:1
          RX packets:36 errors:0 dropped:0 overruns:0 frame:0
          TX packets:23 errors:0 dropped:0 overruns:0 carrier:0
          collisions:0 txqueuelen:1000
          RX bytes:6462 (6.3 KiB)  TX bytes:3042 (2.9 KiB)

lo        Link encap:Local Loopback
          inet addr:127.0.0.1  Mask:255.0.0.0
          inet6 addr: ::1/128 Scope:Host
          UP LOOPBACK RUNNING  MTU:16436  Metric:1
          RX packets:0 errors:0 dropped:0 overruns:0 frame:0
          TX packets:0 errors:0 dropped:0 overruns:0 carrier:0
          collisions:0 txqueuelen:0
          RX bytes:0 (0.0 b)  TX bytes:0 (0.0 b)
</pre></div></div>

<p>ホストOSのブラウザではeth1,eth2ともにアクセスできるのに<br>
同一LANからeth2のアドレスを指定してもうまくいかない...</p>

<p>この辺りを参考にしていろいろいじってみるもだめでした。<br>
<a href="http://www.h-fj.com/blog/archives/2013/10/31-103556.php" class="autolink" rel="nofollow noopener" target="_blank">http://www.h-fj.com/blog/archives/2013/10/31-103556.php</a></p>

<p><a href="http://momijiame.tumblr.com/post/65525042320/vagrant-public-network-ip" class="autolink" rel="nofollow noopener" target="_blank">http://momijiame.tumblr.com/post/65525042320/vagrant-public-network-ip</a></p>

<p><a href="http://hatacomp.hateblo.jp/entry/2013/07/27/132359" class="autolink" rel="nofollow noopener" target="_blank">http://hatacomp.hateblo.jp/entry/2013/07/27/132359</a></p>

<p>なのでOS再起動&amp;vagrant/VirtualBoxバージョンアプ。</p>

<p>vagrant 1.2 -&gt; 1.6<br>
VirtualBox 4.2 -&gt; 4.4</p>

<p>VirtualBox, Vagrantともにpackageをダウンロードしてアップグレードするだけ、<br>
特に問題なくもでることなくバージョンアップできて、再びvagrant up</p>

<h3>
<span id="vagrantでのifconfig" class="fragment"></span><a href="#vagrant%E3%81%A7%E3%81%AEifconfig"><i class="fa fa-link"></i></a>vagrantでのifconfig</h3>

<div class="code-frame" data-lang="text"><div class="highlight"><pre>[vagrant@localhost ~]$ ifconfig
eth0      Link encap:Ethernet  HWaddr 08:00:27:60:FC:47
          inet addr:10.0.2.15  Bcast:10.0.2.255  Mask:255.255.255.0
          inet6 addr: fe80::a00:27ff:fe60:fc47/64 Scope:Link
          UP BROADCAST RUNNING MULTICAST  MTU:1500  Metric:1
          RX packets:529 errors:0 dropped:0 overruns:0 frame:0
          TX packets:374 errors:0 dropped:0 overruns:0 carrier:0
          collisions:0 txqueuelen:1000
          RX bytes:56678 (55.3 KiB)  TX bytes:46760 (45.6 KiB)

eth1      Link encap:Ethernet  HWaddr 08:00:27:D6:BF:25
          inet addr:192.168.33.11  Bcast:192.168.33.255  Mask:255.255.255.0
          inet6 addr: fe80::a00:27ff:fed6:bf25/64 Scope:Link
          UP BROADCAST RUNNING MULTICAST  MTU:1500  Metric:1
          RX packets:20 errors:0 dropped:0 overruns:0 frame:0
          TX packets:17 errors:0 dropped:0 overruns:0 carrier:0
          collisions:0 txqueuelen:1000
          RX bytes:2920 (2.8 KiB)  TX bytes:1198 (1.1 KiB)

eth2      Link encap:Ethernet  HWaddr 08:00:27:5B:7B:C7
          inet addr:192.168.100.106  Bcast:192.168.100.255  Mask:255.255.255.0
          inet6 addr: fe80::a00:27ff:fe5b:7bc7/64 Scope:Link
          UP BROADCAST RUNNING MULTICAST  MTU:1500  Metric:1
          RX packets:54 errors:0 dropped:0 overruns:0 frame:0
          TX packets:19 errors:0 dropped:0 overruns:0 carrier:0
          collisions:0 txqueuelen:1000
          RX bytes:7858 (7.6 KiB)  TX bytes:1928 (1.8 KiB)

lo        Link encap:Local Loopback
          inet addr:127.0.0.1  Mask:255.0.0.0
          inet6 addr: ::1/128 Scope:Host
          UP LOOPBACK RUNNING  MTU:16436  Metric:1
          RX packets:0 errors:0 dropped:0 overruns:0 frame:0
          TX packets:0 errors:0 dropped:0 overruns:0 carrier:0
          collisions:0 txqueuelen:0
          RX bytes:0 (0.0 b)  TX bytes:0 (0.0 b)
</pre></div></div>

<h3>
<span id="routeの結果" class="fragment"></span><a href="#route%E3%81%AE%E7%B5%90%E6%9E%9C"><i class="fa fa-link"></i></a>routeの結果</h3>

<div class="code-frame" data-lang="text"><div class="highlight"><pre>vagrant@localhost ~]$ route
Kernel IP routing table
Destination     Gateway         Genmask         Flags Metric Ref    Use Iface
192.168.100.0   *               255.255.255.0   U     0      0        0 eth2
10.0.2.0        *               255.255.255.0   U     0      0        0 eth0
192.168.33.0    *               255.255.255.0   U     0      0        0 eth1
link-local      *               255.255.0.0     U     1002   0        0 eth0
link-local      *               255.255.0.0     U     1003   0        0 eth1
link-local      *               255.255.0.0     U     1004   0        0 eth2
default         192.168.100.254 0.0.0.0         UG    0      0        0 eth2
</pre></div></div>

<p>設定は同じそうですが。。。はたして</p>

<p><a href="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.amazonaws.com%2F0%2F17326%2Fedb5c1d1-b563-640e-4c10-21cf4948f96e.png?ixlib=rb-1.2.2&amp;auto=format&amp;gif-q=60&amp;q=75&amp;s=f8cd6d0cdbb51f85222f52056907c2f3" target="_blank" rel="nofollow noopener"><img src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.amazonaws.com%2F0%2F17326%2Fedb5c1d1-b563-640e-4c10-21cf4948f96e.png?ixlib=rb-1.2.2&amp;auto=format&amp;gif-q=60&amp;q=75&amp;s=f8cd6d0cdbb51f85222f52056907c2f3" alt="2014-05-17 18.42.46.png" title="2014-05-17 18.42.46.png" data-canonical-src="https://qiita-image-store.s3.amazonaws.com/0/17326/edb5c1d1-b563-640e-4c10-21cf4948f96e.png" srcset="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.amazonaws.com%2F0%2F17326%2Fedb5c1d1-b563-640e-4c10-21cf4948f96e.png?ixlib=rb-1.2.2&amp;auto=format&amp;gif-q=60&amp;q=75&amp;w=1400&amp;fit=max&amp;s=e0a1f44928c39971caea872ad47cc2cc 1x" loading="lazy"></a></p>

<p>無事デバイスからアクセスできました！<br>
にっちもさっちも行かない時はバージョンアップして再起動してどーーんっすよ。</p>
