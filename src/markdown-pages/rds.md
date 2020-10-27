---
title: 'RDSのテーブル名命名時の注意点'
slug: "/blog/rds"
date: 2017-09-28T02:00:00.001+09:00
draft: false
aliases: [ "/2017/09/rds.html" ]
---

Statistics(統計)という名称のモデルを作ろうとして、命名に困った。  
  
単数形がない。  
不可算名詞をモデル名にするとよくないことが起きそうだったので適当に調べたら命名に関して以下のような情報があった。  
もっと良い情報があったら教えて欲しい。  

### [Schema Naming Convention](https://www.blogger.com/null)

Following a naming convention makes it easier to understand the database schema. It also helps with some MVC frameworks that use naming convention for modeling.

1.  Use nouns for naming tables. Do not use verbs, adjectives, or other parts of speech.
2.  Use countable nouns instead of uncountable nouns. Name the tables based on what a row represents not the entire table. For example, use ‘song’ instead of ‘music’; use ‘story’ or ‘news\_item’ instead of ‘news’.
3.  Use singular nouns. For example, use ‘student’, ‘department’ etc. but not ‘students’, ‘departments’.
4.  Use ‘\_’ to separate words (do not use CamelCase).

from http://openepics.sourceforge.net/development-strategy-standards/ レスポンスないのでcacheをみた  
  
  
他にInformationやDataなども不可算名詞なので困ったが、同僚と相談して結局"Market(相場)"というモデル名に落ち着いた。  
他に候補として"Trend(傾向)"も挙がったけどモノではないしイメージしにくいのでやめた。  

  

elixirで書いているのにオブジェクト指向でしか設計できないのが悔しいと思った。