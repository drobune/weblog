---
slug: "/blog/gatsby"
date: "2020-10-31"
title: "ウェブ縄文時代入門"
tags: ["javascript", "blog", "gatsby"]
---

清貧を自称する割に外車SUVを乗り回す憧れのエンジニア [@morygonzalez](https://portalshit.net/morygonzalez) 氏が[ウェブ縄文時代の到来](https://portalshit.net/2020/09/04/the-internet-jomon-period) という記事を書いていたのに感銘を受けて私も縄文時代をお迎えすることにした。

私もプラットフォーム依存から脱却して安心を得たい。

GatsbyJSを選んだのは最近良くjavascriptを書くからでHUGOにするかすこし迷った。

Markdownでブログを書いたことがなかったので今回初挑戦。
メモはscrapboxをいつも利用させていただいているので https://github.com/progfay/scrapbox-parser を使ってscrapboxからコピペでブログ記事にできるようにしたいと考えている。

ブログは極力シンプルにしたかったので [gatsby-starter-default](https://github.com/gatsbyjs/gatsby-starter-default) ではなく [gatsby-starter-hello-world](https://github.com/gatsbyjs/gatsby-starter-hello-world) から始めた。

やったことは次の通り。

- bloggerからxmlをエクスポートしてmarkdownに変換
[blog2md](https://github.com/palaniraja/blog2md)

- Gatsbyを整えてmarkdownファイルを置く

- github pagesで公開してカスタムドメインを設定


### 良かった点
- graphQL便利
- gatsbyは静的サイトジェネレーターとしてよくできてる
- シンプルにしたので表示速度速くなった

### イマイチな点
- ローカルのgatsby serverが時々cache関連でバグる
- github pagesは商用OKだと思ってたけど違うかもなのでnetlifyに移行しなきゃいけないかも 

### Gatsbyで使った主なプラグイン

`react-helmet` meta tagをいじるのに使う
 
`styled-components` CSS in JSでコンポーネントにスタイルを施す

 `gatsby-plugin-feed`  RSSは必須
 
  `gatsby-plugin-typography` いい感じに文書のレイアウトを作ってくれる
  
  `gatsby-remark-prismjs` シンタックスハイライト

   こんなの
   ```jsx
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "gatsby-astronaut.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  if (!data?.placeholderImage?.childImageSharp?.fluid) {
    return <div>Picture not found</div>
  }

  return <Img fluid={data.placeholderImage.childImageSharp.fluid} />
}

export default Image
```

### リポジトリ
https://github.com/drobune/weblog

細かいメモはそれぞれ記事にする。
しばらくこんな感じでやってみる