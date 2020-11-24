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
