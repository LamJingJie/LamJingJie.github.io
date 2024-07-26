---
layout: post
title:  "Property-Noti"
date:   2021-03-12 22:24:07 +0800
category: project
status: Done
default: all
image: "/assets/propertynoti/propertynoti1.jpg"
img_width: "40%"
about: "Sends notification to phone when an event is nearing regarding properties."
---

<div class="slideshow-container">

 {% for img in site.propertyNoti_img %}
  <div class="mySlides fade">
    <div class="numbertext">{{img.index}} / {{site.propertyNoti_img.length}}</div>
    <div style="width: 100%; text-align: center;">
      <img src="/assets/propertynoti/{{img.img_name}}" style="width: {{img.width}}">
    </div>
  </div>

  <a style="background-color: #717171;" class="prev" onclick="plusSlides(-1)">❮</a>
  <a style="background-color: #717171;" class="next" onclick="plusSlides(1)">❯</a>
 {% endfor %}

</div>

<div style="text-align:center">
  {% for img in site.propertyNoti_img %}
    <span class="dot" onclick="currentSlide({{img.index}})"></span> 
  {% endfor %}
</div>


<br><br>

Allows user to add, create or delete their `property event`. Sends notification to user device when an `property event` is nearing. The `notification date` cannot be set after the event day itself.

Does not require internet to function. Data is stored inside your device cache using `localstorage`.
<br><br>


# Example
{% highlight ruby %}
 return await LocalNotifications.schedule({
        notifications: [
            {
                title:title + " (" + address + ") ",
                body: "Ending at " + enddate + "!",
                group:dategroup,
                groupSummary:true,
                autoCancel: false,
                id: id,
                extra:{
                    data_address: address,
                    data_title: title,
                    data_enddate: enddate,
                    data_dategroup: dategroup
                },
                iconColor: '#0000FF',
                schedule: { at: date }, 
            }
        ]
    })
#=> Schedule notification data and time in accordance to the user.
{% endhighlight %}

<br>

1. `Ionic 5 React` used as the frontend UI framework. Allowing me to build cross-platforms for IOS, Electron & Android.

1. `LocalStorage` as the database in order to have it work effectively offline.

1. `Typescript` as the main programming language followed by JS (for the backend)

<br>

Check it out on [Github/Property-Noti][github] for the source code.

[github]: https://github.com/LamJingJie/property-noti


<link rel="stylesheet" type="text/css" href="/exproject-portfolio/style/propertynoti/propertynoti.css">
<script src="/exproject-portfolio/style/propertynoti/propertynoti.js"></script>