---
layout: post
title:  "TpOpenHouse"
date:   2021-1-7 22:24:07 +0800
category: project
status: Done
default: all
image: "/assets/tpopenhouse/tpopenhouse1.png"
img_width: "55%"
about: "An app for showcasing and promoting Temasek Polytechnic."
---


<div class="slideshow-container">

 {% for img in site.tpopenhouse_image %}
  <div class="mySlides fade">
    <div class="numbertext">{{img.index}} / {{site.tpopenhouse_image | size}}</div>
    <div style="width: 100%; text-align: center;">
      <img src="/assets/tpopenhouse/{{img.img_name}}" style="width: {{img.width}}">
    </div>
  </div>

  <a style="background-color: #717171;" class="prev" onclick="plusSlides(-1)">❮</a>
  <a style="background-color: #717171;" class="next" onclick="plusSlides(1)">❯</a>
 {% endfor %}
</div>

<div style="text-align:center">
  {% for img in site.tpopenhouse_image %}
    <span class="dot" onclick="currentSlide({{img.index}})"></span> 
  {% endfor %}
</div>

<br><br>

Project was chosen by the school to be used for Temasek Polytechnic Open House 2020 & 2021. I worked with 4 other students in building this application. My role of this project is that of a `front-end developer`. 

When deployed during the open house over 3days, we have had upmost of about `2,600` downloads as of 17 January 2020.

- Display Temasek Polytechnic's catalog of information (e.g. Courses).

- Display activities that will be occuring on that day, and sends out notification to interested individuals when it is about to start.

- A treasure hunting game using generated QR codes scattered throughout, with prizes to be won.

<br><br>

<div class="video-container">
  <h3 style="text-align: center;">Video</h3>
  <div style="width: 100%; text-align: center;">
    <video muted src="https://user-images.githubusercontent.com/58838335/182028546-c206b259-b30a-46b7-856c-457d55f7f1cc.mp4" controls="controls" style="width: 35%;"></video>
  </div>
</div>




<br>

1. `Ionic 4` used as the frontend framework

1. `Typescript` as the main programming language 

<br>

Click [here][onedrive] to find out more.

<br>

Check it out on [Github/tpopenhouse][github] for the source code.

[github]: https://github.com/LamJingJie/tpopenhouse2020
[onedrive]: https://onedrive.live.com/?authkey=%21AC0WT3OM1B15q1M&cid=DF6D60F58A42CCCF&id=DF6D60F58A42CCCF%21111701&parId=DF6D60F58A42CCCF%21111407&o=OneUp


<link rel="stylesheet" type="text/css" href="/exproject-portfolio/style/tpopenhouse/tpopenhouse.css">
<script src="/exproject-portfolio/style/tpopenhouse/tpopenhouse.js"></script>