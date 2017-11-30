---
title: RC Computer Art Pop-up - Day 3
layout: post
---
![SNEZNT trials](/assets/images/genart/03-sneznt/trial2.png)


### Parametric gradients

![parametric gradients](/assets/images/genart/02-parametric/profiler.png)
_Using the Chrome profiler. If you zoom in you can see `p5.color` takes up 42.7% of processing time._

Today I worked on making my parametric gradient more efficient. I used the browser profiler to figure out which were the slow bits: `p5.fill` which sets the fill color of a shape and `p5.curve`, which draws curves. I can't do anything about `p5.curve` since it has to do it's calculations, but `p5.fill` seemed kind of fishy since all it's doing is a setting operation.

Turns out p5.fill is quite expensive because it had to validate all the rgba value inputs. It was taking up 30-40% of processing time. To make it faster, I created the p5.color objects beforehand for each level of gradient and just used them in p5.fill.

So in each draw function:

```
p5.fill(preCalculatedColor[i]);
```

instead of calculating on the fly:

```
for(let i = 0; i < lines; i++){
  p5.fill(255, 255, 255, i/lines);
}
```

I also randomized the end (`x2`, `y2`) parametric equation for each color so there's more variation. But at the same time, I gave them all the same starting point equation (`x1`, `y1`) but with different starting points of `t` so at least there is some coherence in movement.


### SNEZNT

I'm also super fascinated by this retro computer art piece named SNEZNT (I pronounce it seh-nez-uhnt) from [RecodeProject](http://recodeproject.com/artwork/v3n2untitled-6-Korneder)

![SNEZNT](http://recodeproject.com/static/img/cards/v3n2/10.png)

_Image from Computer Arts and Graphics magazine from 1978_

I'm trying to recreate it with p5.js. I got the inner skewed quadrangles to work, but th jitter effect still isn't aligned. I don't like leaving things half-finished but I'm also learning to be okay with sharing unfinished things because sometimes the process is interesting to watch.

To be continued tomorrow!

![SNEZNT trials](/assets/images/genart/03-sneznt/trial1.png)

_Trial 1_


![SNEZNT trials](/assets/images/genart/03-sneznt/trial1.png)

_Trial 2_


