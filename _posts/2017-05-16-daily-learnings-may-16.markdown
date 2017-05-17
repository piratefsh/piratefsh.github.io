---
title: "Daily Learnings: Service Workers and San Jose"
layout: post
---
![Cafe Frascatti art](/assets/images/learnings/cafe-frascatti-art.jpg)

_Painting seen at Cafe Frascatti, San Jose_

## Service Workers
I finally sat down and read up on [Service Workers](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers). Workers are used to run async processes. You can use them for anything you want run in the background. I was interested in using them to cache assets so your web app can still work even when offline. Workers can cache assets when your app is loaded. Then, you can set them up to intercept network requests by listening to a `fetch` event and returning the cached asset if the network is not available.

Useful guides for enabling offline caching with Service Workers:
* [Using Service Workers on MDN](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers)
* [Progressive Web Apps with Webpack](http://michalzalecki.com/progressive-web-apps-with-webpack/) - particularly useful if you have a Webpack setup, especially when dealing with hashed asset names.

I got it working for this small [kopi name generator](https://piratefsh.github.io/kopi-teh-namer/public/) app.

## Cool spaces in San Jose
Spent the day wandering downtown. Hasn't changed much since I was here four years ago, still very chill yet with character. Feels like coming home.

* [Live Lotus](https://www.live-lotus.com) is a small and very relaxing yoga space with an indie feel. Spare mats provided with showers. By far the cutest studio I have been in.
* [Social Policy](https://www.yelp.com/biz/social-policy-san-jose-3) is a very comfortable cafe with lots of power ports. Interesting art on walls
* [Cafe Frascatti](http://www.caffefrascati.com/) is an old favorite. Opens late and has a cool upstairs loft with indie art.