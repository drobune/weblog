---
title: '形態素解析してイイ感じに過去ツイートをscrapboxに移動する'
slug: "/blog/scrapbox"
date: 2017-10-30T16:37:00.004+09:00
draft: false
aliases: [ "/2017/10/scrapbox.html" ]
tags : [scrapbox, プログラミング]
---

twilogを使って過去ツイートを検索していて不便だなと思うことがあったのでscrapboxに移動してみた。  

[![](https://gyazo.com/5eb272e2cfca967048d1fc05807b2f4a.png)](https://gyazo.com/5eb272e2cfca967048d1fc05807b2f4a.png)

  
記事数が多くなってもうざいので日記風に日毎にツイートをまとめた(なぜかタイトルが記事ページで表示されない)  
  
  

[![](https://gyazo.com/897373f74ecb38383c47561ea4ac53bd.png)](https://gyazo.com/897373f74ecb38383c47561ea4ac53bd.png)

  

[![](https://gyazo.com/514a5b5e53162725cafeaf96de252c7a.png)](https://gyazo.com/514a5b5e53162725cafeaf96de252c7a.png)

  
scrapbox用ハッシュタグを作りたくて [MeCab](https://taku910.github.io/mecab/) という形態素解析エンジンを使ってツイートの名詞を抽出した。  
  
  
メカブがすごすぎて「はー」以外の感想がないんだけど、僕の日本語がダメすぎてクソみたいなタグが量産されていたので一部手動でクリーニングしている。  
  
タグの出現回数のランキングTOP200はこんな感じ。  
  

> \[\["京都", 1241\], \["High", 1044\], \["Low", 1039\], \["listening", 475\], \["今日", 422\], \["YouTube", 317\], \["via", 315\], \["nonamea", 313\], \["774", 313\], \["日本", 292\], \["gyazo", 276\], \["10", 254\], \["仕事", 253\], \["時間", 249\], \["The", 240\], \["the", 232\], \["オフィス", 220\], \["最近", 219\], \["会社", 209\], \["エンジニア", 204\], \["開発", 204\], \["明日", 185\], \["pastak", 183\], \["自分", 183\], \["好き", 181\], \["DJ", 180\], \["this", 177\], \["昨日", 177\], \["上京", 177\], \["東京", 174\], \["情報", 174\], \["ニュース", 171\], \["SoundCloud", 168\], \["Google", 165\], \["NOTA", 162\], \["is", 161\], \["サーフィン", 161\], \["子供", 158\], \["12", 148\], \["Love", 147\], \["コード", 147\], \["ブログ", 146\], \["世界", 146\], \["24", 145\], \["サービス", 145\], \["ゲーム", 143\], \["サイト", 143\], \["アプリ", 141\], \["画像", 139\], \["11", 137\], \["for", 132\], \["Inc", 132\], \["Gyazo", 131\], \["track", 130\], \["夜明け", 130\], \["22", 128\], \["息子", 128\], \["どこ", 128\], \["公開", 124\], \["18", 123\], \["なん", 123\], \["99", 123\], \["写真", 122\], \["感じ", 122\], \["19", 119\], \["23", 119\], \["14", 117\], \["30", 116\], \["便利", 116\], \["17", 112\], \["PC", 111\], \["ta", 111\], \["13", 109\], \["20", 108\], \["技術", 108\], \["16", 107\], \["最高", 107\], \["2015", 107\], \["oshaley", 106\], \["you", 104\], \["Linux", 104\], \["アメリカ", 102\], \["2016", 101\], \["15", 100\], \["21", 100\], \["あと", 100\], \["マジ", 99\], \["サーバ", 99\], \["akiroom", 99\], \["今週", 97\], \["勉強", 96\], \["弊社", 96\], \["以上", 95\], \["アップ", 95\], \["発表", 94\], \["!!", 94\], \["food", 92\], \["agaskortur", 92\], \["ジャスティス", 92\], \["hidesys", 91\], \["show", 91\], \["必要", 89\], \["Web", 89\], \["動画", 88\], \["GitHub", 87\], \["大阪", 85\], \["アルバイト", 85\], \["奈良", 84\], \["みんな", 84\], \["予定", 84\], \["機能", 83\], \["100", 82\], \["音楽", 82\], \["記事", 81\], \["27", 80\], \["問題", 80\], \["26", 79\], \["まとめ", 79\], \["可能", 79\], \["購入", 78\], \["ビール", 78\], \["デザイン", 78\], \["Japan", 77\], \["25", 77\], \["28", 77\], \["参加", 76\], \["月曜", 76\], \["社長", 75\], \["リリース", 75\], \["Qiita", 75\], \["時代", 75\], \["対応", 74\], \["今年", 74\], \["ダメ", 74\], \["データ", 74\], \["web", 72\], \["友人", 72\], \["Windows", 72\], \["snhr", 72\], \["速報", 70\], \["イベント", 70\], \["テスト", 70\], \["with", 70\], \["検索", 69\], \["クラブ", 69\], \["コメント", 69\], \["jp", 68\], \["個人", 68\], \["学生", 68\], \["リモート", 68\], \["セット", 68\], \["29", 67\], \["社内", 67\], \["株式会社", 65\], \["人間", 65\], \["一番", 65\], \["システム", 65\], \["台風", 64\], \["プログラマ", 64\], \["twitter", 64\], \["木屋", 64\], \["Emacs", 64\], \["ファイル", 63\], \["Blog", 63\], \["無理", 63\], \["一緒", 63\], \["気持ち", 63\], \["名前", 62\], \["オープン", 62\], \["nhk", 62\], \["NHK", 61\], \["意味", 60\], \["ページ", 60\], \["IT", 60\], \["google", 60\], \["社会", 60\], \["ネット", 60\], \["ライブ", 59\], \["利用", 59\], \["女性", 59\], \["タイム", 59\], \["2014", 59\], \["以外", 58\], \["TechCrunch", 58\], \["英語", 58\], \["js", 58\], \["無料", 58\], \["live", 58\], \["開催", 57\], \["広告", 57\], \["募集", 57\], \["プログラミング", 57\], \["GIGAZINE", 57\], \["hiromitu", 57\], \["2001", 57\], \["方法", 56\], \["人生", 55\], \["日本語", 55\], \["トラック", 55\], \["ソース", 55\]\]

scrapboxにimportはできたんですが。まともに動かなくなってしまいました。テスト用のプロジェクトでやってよかった。  
イイ感じにハッシュタグを振るのは難しいですね。TF/IDFも試してみるのもいいかもです。  
ザーっとサムネイルをみて懐かしさを覚えることはあるけど、あまり便利さは実感していないです。  
使ったスクリプト