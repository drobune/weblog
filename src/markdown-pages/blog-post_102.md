---
title: 'GatsbyJSの初回ロード時にスタイルが一部崩れる'
slug: "/blog/blog-post_102"
date: 2020-11-18
draft: false
tags : [javascript, gatsby]
---


一部のページで初回アクセスのときだけスタイルが崩れる現象に困ったのでその対処法をメモ。


### 期待する表示


![](https://gyazo.com/598cb024b47246c480d6bbf83da33c74.png)

### 初回アクセス時の表示

![](https://gyazo.com/c6c2ae6c228d9519786984284e040d9d.png)

リロードすると期待する表示になる。

gatsby-browser.jsのここが問題だったようでLayoutを呼ぶ場所をブラウザ側ではなくSSG側にもっていくことで解消した。

```diff-jsx
- import Layout from "./src/components/layout"

- export const wrapPageElement = ({ element, props }) => {
-   return <Layout {...props}>{element}</Layout>
- }
```

コミット
[dfdf1b6 ](https://github.com/drobune/weblog/commit/1916ea3a6902040b39100c1f7e7c29dbeef19f79#diff-2f15e01c012970971795674aff1caf0619691d7d47cfe1b5be49ac414bac09a2)


gatsby-browser.jsファイルはブラウザで実行されるときの共通処理を書いたりするという認識なんだけど公式の通りCommonJSで書いたらエラーになったりするのでイマイチよくわかってない...