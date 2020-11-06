---
slug: "/blog/gatsby"
date: "2020-10-31"
title: "blogをGatsybyにした"
tags: ["javascript", "blog", "gatsby", "CMS"]
---

### リポジトリ
https://github.com/drobune/weblog



### シンタックスハイライト

```javascript
// In your gatsby-config.js
plugins: [
  {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [
        `gatsby-remark-prismjs`,
      ]
    }
  }
]
```