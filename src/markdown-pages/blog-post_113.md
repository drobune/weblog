---
title: 'StravaやYAMAPなどで分割された運動ログ（GPXファイル）をマージする'
slug: "/blog/blog-post_113"
date: 2020-12-13
draft: false
tags : [strava]
---

腕時計の電池切れなどで運動ログが分割されてしまった場合の対処法です。

StravaやYAMAPなど位置情報のログを利用したサービスであればアクティビティのGPXファイルをダウンロードすることができます。

GPXファイルとはxmlファイルです。緯度経度情報、標高に加えてextensionsとして心拍数など様々なデータが<time>ごとに蓄積されています。

GPXサンプル
```xml
<?xml version="1.0" encoding="UTF-8"?>
<gpx creator="StravaGPX" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.topografix.com/GPX/1/1 http://www.topografix.com/GPX/1/1/gpx.xsd http://www.garmin.com/xmlschemas/GpxExtensions/v3 http://www.garmin.com/xmlschemas/GpxExtensionsv3.xsd http://www.garmin.com/xmlschemas/TrackPointExtension/v1 http://www.garmin.com/xmlschemas/TrackPointExtensionv1.xsd" version="1.1" xmlns="http://www.topografix.com/GPX/1/1" xmlns:gpxtpx="http://www.garmin.com/xmlschemas/TrackPointExtension/v1" xmlns:gpxx="http://www.garmin.com/xmlschemas/GpxExtensions/v3">
 <metadata>
  <time>2020-12-11T23:26:31Z</time>
 </metadata>
 <trk>
  <name>Morning Ride</name>
  <type>1</type>
  <trkseg>
   <trkpt lat="34.9854050" lon="135.7743400">
    <ele>46.5</ele>
    <time>2020-12-11T23:26:31Z</time>
    <extensions>
     <gpxtpx:TrackPointExtension>
      <gpxtpx:hr>104</gpxtpx:hr>
     </gpxtpx:TrackPointExtension>
    </extensions>
   </trkpt>
  </trkseg>
 </trk>
</gpx>
```

プレーンテキストファイルなのでコピペで<trekpt>をくっつければよいのですが、面倒な方はインターネッツで結合ツールが提供されいます。

https://joewein.net/bike/gpxmerge/

結合したGPXファイルを各々のサービスにアップロードすれば複数のアクティビティログが結合された状態になっているとおもいます。
