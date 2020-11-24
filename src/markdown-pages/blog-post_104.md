---
title: 'Qiitaからお引越し'
slug: "/blog/blog-post_104"
date: 2020-11-24
draft: false
tags : [blog]
---

ライブラリ https://github.com/increments/qiita-rb を使って引っ越した。

今年炎上してたけどあんまりみてなくて、久しぶりにみたらContributionが438もあった。

ありがとうQiita。

htmlからmarkdownに変換が面倒だったのでソノママブッコミ。

```ruby
#! /usr/bin/env ruby
require "qiita"

client = Qiita::Client.new
response = client.list_user_items("drobune", per_page: 100)
response.body.each do |post|
  puts post.keys
  File.open("qiita#{post["id"]}.md", "w") do |f|
    f.puts "---"
    f.puts "slug: \"/blog/#{post["id"]}\""
    f.puts "title: #{post["title"]}"
    f.puts "date: #{post["updated_at"]}"
    f.puts "tags: #{post["tags"]&.map{|tag| tag["name"]}.to_s}"
    f.puts "---"
    f.puts post["rendered_body"]
  end
end
```






