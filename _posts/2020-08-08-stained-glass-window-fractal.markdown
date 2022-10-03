---
title: "Rare implementations: Stained glass window"
layout: post
---

Wherein I try to reverse engineer a mysterious space-filling curve of unknown author from the 1960s.

One of my white whales was this 'Stained Glass Window' piece published in Computers and Automation in 1963[^6]. It was the second place winner in the first ever computer art competition ran by the magazine.

<div class="media">
  <div class="flex">
    <img src="http://piratefsh.github.io/presentations/recreating-vintage-art/img/art/computers-and-automation-aug-1963.png"/>
    <img src="http://piratefsh.github.io/presentations/recreating-vintage-art/img/art/computers-and-automation-jul-1963-pg3.png"/>
  </div>
  <p><em>Stained Glass Window as seen in the August 1963 Computers and Automation magazine on the right</em></p>
</div>

We don't know who the artist was, it only cited the US Army Ballistics Research Lab as its origin[^7]. It looks like a space filling curve, not unlike the Sierpinski's curve from before, but decidedly unique with their cross-like recursive corners.

I spent a long time trying to recreate this fractal. We know for sure it was generated as a fractal because it was described in the magazine as an _area-filling curve_. It was also published in H.W. Franke's Computer Graphics Computer Art in 1971, citing the "principle of the 'snow-flake' curve", a reference to the Koch snowflake. I love it when all my obsessions come together.

I talk about my reverse engineering process here:

<div class="media">
  <iframe width="600" height="315" src="https://www.youtube.com/embed/OR_TzMFhv50?start=821" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

But basically my approach was by drawing each edge of the cross as a spade-like shape. Recurse on each line with smaller spades. Please watch the video for a better explanation. You can find the code [here](https://github.com/piratefsh/svg-js/blob/3c14c4440b8970fe6f007414e01b7e0e792b65ce/src/components/Drawing.js#L117).

<div class="media">
  <div class="flex">
    <img src="/assets/images/uncommon-fractals/stained-glass/stained-glass-1.svg"/>
    <img src="/assets/images/uncommon-fractals/stained-glass/stained-glass-2.svg"/>
  </div>
  <div class="flex">
    <img src="/assets/images/uncommon-fractals/stained-glass/stained-glass-3.svg"/>
    <img src="/assets/images/uncommon-fractals/stained-glass/stained-glass-4.svg"/>
  </div>
  <p><em>First 4 iterations of the stained glass window fractal from my implementation</em></p>
</div>

I still think my implementation could be more elegant. I don't like how I had to [hardcode the drawing for each curve](https://github.com/piratefsh/svg-js/blob/3c14c4440b8970fe6f007414e01b7e0e792b65ce/src/components/Drawing.js#L30)[^8]. It more closely resembles the common Sierpinski's implementation (with distinct drawing functions for each type of edge)[^1] than it does the subdivision approach.

Maybe I'll revisit it again in the future. But if you're reading this, consider this an invitation to write a more elegant solution. If you do, please write to me at sherminn [at] piratefsh [dot] net. Any comments, questions or corrections are welcome to me, just be nice and respectful.

---

[^1]: See 'Existing Solutions' on my [last post](/2020/08/08/sierpinski-curve.html) on Sierpinski's curve.
[^6]: You can download it at [http://bitsavers.trailing-edge.com/pdf/computersAndAutomation/196308.pdf](http://bitsavers.trailing-edge.com/pdf/computersAndAutomation/196308.pdf). Bitsavers does amazing archival work.
[^7]: It has been suggested to me that space-filling curves were likely explored as a way to cover an area for an attack, which is a chilling thought.
[^8]: To clarify, I had to hardcode both the spade and the tube curves.