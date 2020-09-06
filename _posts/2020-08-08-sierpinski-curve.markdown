---
title: "Rare implementations: Sierpinski's curve"
layout: post
---
<div class="media">
  <img width="500" src="/assets/images/uncommon-fractals/sierpinskis-curve/sierp-curve-stack-9.svg"/>
  <p class="left">Yep, Sierpinski's curve, not the more <a href="https://en.wikipedia.org/wiki/Sierpinski_triangle" target="_blank">famous triangle</a>. It's a form of space-filling curve and is quite enjoyable to look at.</p>
</div>

## Existing solutions

So, this isn't a rarely seen fractal, but a particular variant of it is. There are many ways to implement this fractal. Many of those implementations that I found online were of [this variety](http://csharphelper.com/blog/2014/07/draw-a-sierpinski-fractal-curve-in-c/), where you had a distinct drawing function for each 4 types of edges.

<div class="media">
<img src="/assets/images/uncommon-fractals/sierpinskis-curve/howto_sierpinski_curve1.png"/>
<p>
  <em>
    Implementations I found relied on hardcoding each type of curve
    <a href="http://csharphelper.com/blog/2014/07/draw-a-sierpinski-fractal-curve-in-c/">source</a>
  </em>
  </p>
  </div>

I love seeing different approaches to the same problem and much respect to all the people who published their code from which I learned a lot. However, I was convinced there had to be a more elegant way. It came in the form of a Youtube video from Eddie Woo.

<div class="media">
  <iframe width="600" height="315" src="https://www.youtube.com/embed/Ps9itT9KcdM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

It's such an elegant explanation for space filling curces and in particular the Sierpinski's curve, by thinking about it as a subdivision of space. I highly recommend all 4 parts of the space-filling curve series.

The advantage of this implementation over the existing implementations is that it also surfaces the intermediary iterations, the ones that have edges that look like bulbs, in addition to the classic Sierpinski's curve shape.

<div class="media">
  <div class="flex">
    <img src="/assets/images/uncommon-fractals/sierpinskis-curve/sierp-curve-6.svg"/>
    <img src="/assets/images/uncommon-fractals/sierpinskis-curve/sierp-curve-7.svg"/>
  </div>
  <p><em>left: 6th iteration with the 'bulbs'. right: 7th iteration, classic Sierpinski's curve shape, where 'bulbs' appear in negative space.</em></p>
</div>

While writing this, I found a L-Systems implementation of the curve. It doesn't generate the intermediary iterations with the circular bulbs that the Eddie Woo's space division method does though. I think it should be possible to do so for a L-Systems implementation though. Would love to see it.

<div class="media">
  <blockquote class="twitter-tweet"><p lang="en" dir="ltr">Couldnt find an L-system formula for the fractal Sierpinski curve and came up with this by moding the square Siep code. Axiom: F--XF--F--XF, rule: <br>X-&gt;XF+F+XF--F--XF+F+X, angle 45. <a href="https://twitter.com/hashtag/makevember?src=hash&amp;ref_src=twsrc%5Etfw">#makevember</a> <a href="https://twitter.com/hashtag/openscad?src=hash&amp;ref_src=twsrc%5Etfw">#openscad</a> <a href="https://t.co/MR9SV4sh9G">pic.twitter.com/MR9SV4sh9G</a></p>&mdash; kitwallace (@kitwallace) <a href="https://twitter.com/kitwallace/status/1190917301010391045?ref_src=twsrc%5Etfw">November 3, 2019</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
</div>

## Approach

So I ended up implementing the space division method and you can find the code [here](https://github.com/piratefsh/svg-js/blob/inktober-2019-20/src/components/Drawing.js#L58).

Below I extracted the most interesting parts of the algorithm and commented on it. All syntax is JavaScript[^9].

```js

function sierCurve(len, iters, lineWidth = 1, offset = { x: 0, y: 0 }) {
  // find the two triangles from the first subdivision
  // i had to translate them to center them in the canvas

  const tri1 = [{ x: 0, y: len }, { x: 0, y: 0 }, { x: len, y: 0 }].map(
      p => translate(p, offset)
  );
  const tri2 = [
      { x: len, y: 0 },
      { x: len, y: len },
      { x: 0, y: len }
  ].map(p => translate(p, offset));

  // get points for each half of square recursively
  const half1 = sub(tri1, iters);
  const half2 = sub(tri2, iters);

  //combine points and draw lines
  const points = [...half1, ...half2];
  points.forEach((p, i) => {
      const n = points[(i + 1) % points.length];
      drawLine(p.x, p.y, n.x, n.y, lineWidth);
  });
}

// the recursive function as described in Woo's video
function sub(pos, iters = 1) {
  const [p1, p2, p3] = pos;
  const points = [];

  // find center of current triangle
  const centroid = triangleCentroid(...pos);
  if (iters == 0) {
      // if recursed all the way down, add point
      points.push(centroid);
  } else {
      // else, subdivide triangle into two right angle triangle
      // and add the points for each
      const sub1 = [p1, midpoint(p1, p3), p2];
      const sub2 = [p2, midpoint(p1, p3), p3];
      points.push(...sub(sub1, iters - 1));
      points.push(...sub(sub2, iters - 1));
  }

  return points;
}
```

I'm basically doing the same thing that Woo does in the video, but in code. The only noteworthy difference is that the recursive code only works on triangles, so I had to split the initial square into two triangles, recurse on both and connect them.

In order to find the center of the triangle, I had to implement a simple function to calculate the [centroid of a triangle](https://github.com/piratefsh/svg-js/blob/inktober-2019-20/src/components/Drawing.js#L58). I also wanted to draw this as a single curve to make for easier plotting, so this implementation works by collecting the points on the curve and draws them all at the end.

<div class="media">
  <blockquote class="twitter-tweet"><p lang="en" dir="ltr">Sierpinski&#39;s curve. I haven&#39;t seen this around much. Both are the same curve, but the left is at iterations 1, 3, 5, 7 and the right is at 2, 4, 6, 8.<br><br>A really good explanation of how it works here: <a href="https://t.co/yqyvJ3ZThc">https://t.co/yqyvJ3ZThc</a><br><br>code: <a href="https://t.co/ULoEr8uLiA">https://t.co/ULoEr8uLiA</a> <a href="https://t.co/HXTuab0iyb">pic.twitter.com/HXTuab0iyb</a></p>&mdash; piratefsh (@piratefsh) <a href="https://twitter.com/piratefsh/status/1186091226392616961?ref_src=twsrc%5Etfw">October 21, 2019</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

  <p>If you stack them, they give rise to interesting texture.</p>
</div>


## Finished result
Here's my implementation in the browser. I added some UI to control the number if iterations and basic styles. <a href="/assets/files/sierpinski-curve/" target="_blank">Click to open in new tab.</a>

You can download them as SVGs, feel free to use for your own purposes. I just ask that you credit by linking back.

<iframe width="640" height="700" src="/assets/files/sierpinski-curve/index.html"></iframe>


Any comments, questions or corrections are welcome to me [at] piratefsh [dot] net! Just be nice and respectful.
