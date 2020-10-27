---
title: 'Mac + OBS Studio + LoopbackでDJ配信を高音質で行う方法'
slug: "/blog/mac-obs-studio-loopbackdj"
date: 2020-04-21T17:26:00.002+09:00
draft: false
aliases: [ "/2020/04/mac-obs-studio-loopbackdj.html" ]
---

[![](https://1.bp.blogspot.com/-HgAUB8UPoBM/Xp1lgpsSUlI/AAAAAAAAAP4/ktDjwW-9NzMUwf8jck2BY4GIo0IZCtaDACLcBGAsYHQ/s640/EV90CCTUYAAQgA1.jpeg)](https://1.bp.blogspot.com/-HgAUB8UPoBM/Xp1lgpsSUlI/AAAAAAAAAP4/ktDjwW-9NzMUwf8jck2BY4GIo0IZCtaDACLcBGAsYHQ/s1600/EV90CCTUYAAQgA1.jpeg)

  
先日 Twitch を使ってDJ配信をしたのでその方法をシェアします。  
Masterのアウトプットをそのまま配信することにこだわりました。スマホのマイクとかを通すと音悪くなるので嫌です。  
  
配信を見てくれた友人からは音は問題なかったと言われました。  
  
Twitchを選んだのはOBS Studioが対応していて音楽を流す権利についてゆるいと聞いたからです...  
  
  
環境  
\- macOS Catalina  
\- OBS Studio (無料の動画配信ソフト）  
\- Loopback (有料の仮想サウンドデバイスアプリ）  
  
配信用カメラはlogicoolの物を使ってます。  
[![B005LFFE7I](https://m.media-amazon.com/images/I/41Agcx4AmXL._SL500_.jpg)](https://www.amazon.co.jp/dp/B005LFFE7I/?tag=5an0-22)  
[ロジクール ウェブカメラ C615 ブラック フルHD 1080P ウェブカム ストリーミング 折り畳み式 360度回転 国内正規品 2年間メーカー保証](https://www.amazon.co.jp/dp/B005LFFE7I/?tag=5an0-22)  
1080pに対応しているのでキレイに撮れます。  
  
  
  
僕は演奏にableton liveを使っています。インターフェイスはApogee Duet 2です。  
Thinkpad T450(Windows 10) で同じことをしようとしたんですがマシンリソースが足りずにできませんでした。  
  
急遽Windows -> Macに移行したのでAbletonやインターフェイスのドライバの設定でハマりましたが、Macで通常演奏ができている前提で書きます。  
  
ableton の出力を loopback のインプットに刺して OBS Studioで loopbackのinputをキャプチャする設定をします。  
  
macOSはPC内のsound outputをキャプチャするのにサードパーティーのソフトウェアが必要です。無料のiShowUで頑張ろうとしましたがうまくいかず、Loopbackという王道そうな名前のソフトを買いました。テストだけなら無料で使えます。  
  
  

*   1.  abletonの音をLoopbackに回す。 Monitorでスピーカーを指定するのが大事！！

  

[![](https://1.bp.blogspot.com/-UFoxZEkUHwM/Xp6szHOKFLI/AAAAAAAAAQQ/JIX2PjzlqDMtcqPXRdywHM0s_2M6z1zdACLcBGAsYHQ/s640/Screen%2BShot%2B2020-04-21%2Bat%2B17.10.54.png)](https://1.bp.blogspot.com/-UFoxZEkUHwM/Xp6szHOKFLI/AAAAAAAAAQQ/JIX2PjzlqDMtcqPXRdywHM0s_2M6z1zdACLcBGAsYHQ/s1600/Screen%2BShot%2B2020-04-21%2Bat%2B17.10.54.png)

  

*   2\. OBS Studioの"Sources"ペインにAudio Input Captureを追加して”Loopback”を選択

  

  

  

[![](https://1.bp.blogspot.com/-DO3DTfTAmEU/Xp6s2PGrbYI/AAAAAAAAAQU/IwaKJZ89aIoiFrThJZLDhMBtAAdLirGSwCLcBGAsYHQ/s640/Screen%2BShot%2B2020-04-21%2Bat%2B17.11.31.png)](https://1.bp.blogspot.com/-DO3DTfTAmEU/Xp6s2PGrbYI/AAAAAAAAAQU/IwaKJZ89aIoiFrThJZLDhMBtAAdLirGSwCLcBGAsYHQ/s1600/Screen%2BShot%2B2020-04-21%2Bat%2B17.11.31.png)

  
  
  
  
以上です。  
  
有料のLoopbackを使わずに無料の [iShowU](https://support.shinywhitebox.com/hc/en-us/articles/204161459-Installing-iShowU-Audio-Capture) を使ってPC内のoutをキャプチャできるみたいですが、僕はできませんでした。情報あったら教えて欲しいです。  
  
では良き配信を！