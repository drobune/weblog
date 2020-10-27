#! /usr/bin/env ruby
require 'fileutils'

Dir.foreach(ARGV[0]) do |file|
  puts file
  next if file == "." || file == ".."
  slug =  file.split(".").first
  filepath = ARGV[0] + file
  f = File.open(filepath, "r")
  tempfile=File.open("file.tmp", 'w')
  f.each_with_index do |line, index|
    tempfile<<line
    if index == 1
      tempfile << "slug: \"/blog/#{slug}\"\n"
    end
  end
  f.close
  tempfile.close
  FileUtils.mv("file.tmp", filepath)
end