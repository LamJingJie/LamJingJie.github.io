---
layout: post
title:  "Tlextractor"
date:   2024-07-26 22:24:07 +0800
category: project
status: Done
default: all
image: "/assets/tlextractor/pic3.png"
img_width: "90%"
about: "Extracts student project data out from Tldraw."
---

<div class="slideshow-container">
 {% for img in site.tlextractor_img %}
  <div class="mySlides fade">
    <div class="numbertext">{{img.index}} / {{site.tlextractor_img | size}}</div>
    <div style="width: 100%; text-align: center;">
      <img src="/assets/tlextractor/{{img.img_name}}" style="width: {{img.width}}">
    </div>
  </div>

  <a style="background-color: #717171;" class="prev" onclick="plusSlides(-1)">❮</a>
  <a style="background-color: #717171;" class="next" onclick="plusSlides(1)">❯</a>
 {% endfor %}
</div>

<div style="text-align:center">
  {% for img in site.tlextractor_img %}
    <span class="dot" onclick="currentSlide({{img.index}})"></span> 
  {% endfor %}
</div>

<br><br>

TLExtractor is a Python script that extracts data from tldraw pages, saves it as JSON, and process images. Supporting both `standard` and [`Custom Submission Template`](https://github.com/LamJingJie/tldraw/tree/dynamic_submission_template) with features like `depth-first search`, `async`, `multi-threading` and `multi-processing`.

This is mainly used to extract specific students data. Where they would utilize a template to submit their project to. In which this script would then utilize to extract the necessary data.


<br>

<div class="video-container">
  <h3 style="text-align: center;">Video</h3>
  
  <video src="https://github.com/user-attachments/assets/dc9f5a26-42ee-4a25-8939-9bdc7ec75dfa" controls="controls" style="width: 100%;"></video>
</div>

<br>

1. `Depth-First Search` algorithm used to search through tree-like data structure, starting from the deepest and working up.

1. `Async programming` creating as many coroutine objects as there are pages. Running all of them concurrently while ensuring minimal overhead

1. `Multi-Processing` used to process multiple images in true parallel

1. `Playwright` website scrapper.

1. `Multi-Threading` loading threads for each page. Simulate loading screen

1. `Python` as the main programming language.


<br>

# Example
{% highlight ruby %}
#=> JSON Data Structure
{
     "project title": "CORE STUDIO 02-24-TEST",
     "data": [
         {
             "page": "benchmark 01",
             "date": "DUE 26 MAY (SUNDAY) 2359",
             "description": "First iteration of site in blender/rhino",
             "students": [
                 "person1",
                 "person2",
                 "person3",
             ]
         }
     ]
}
{% endhighlight %}

<br>

Check it out on [Github/Tlextractor][github] for more information.

[github]: https://github.com/LamJingJie/tlextractor


<link rel="stylesheet" type="text/css" href="/exproject-portfolio/style/tlextractor/tlextractor.css">
<script src="/exproject-portfolio/style/tlextractor/tlextractor.js"></script>