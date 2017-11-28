---
title: RC Computer Art Pop-up - Day 2
layout: post
---
![parametric gradients](/assets/images/genart/02-parametric/iphonexsimulation.png)


## Parametric Equations
Last evening, I played with parametric equations from this excellent video tutorial:

<iframe width="560" height="315" src="https://www.youtube.com/embed/LaarVR1AOvs" frameborder="0" allowfullscreen></iframe>

## Inspiration
On the way to School of MA, I saw this ad for the iPhone X that had a really pretty wallpaper image. [Cory](https://twitter.com/corydominguez) mentioned that it looked parametric, which is coincidentally what I was playing with. I thought it'd be cool to make something generative with the same feel.

## Ta-da
This is what I came up with. Make sure to check out the <a target="_blank" href="http://piratefsh.github.io/p5js-art/public/aurora/">full view</a> and play with the controls.

<iframe src="http://piratefsh.github.io/p5js-art/public/aurora/" width="600" height="300"></iframe>
[Code](https://github.com/piratefsh/p5js-art/tree/parametric-equations) | [Full View](http://piratefsh.github.io/p5js-art/public/aurora/)

### Step 1
In addition to similar parametric equations used in the video, I made the lines curves instead, with parametric control points.

Here's an example of patterns drawn from parametric equations.

![step 1](/assets/images/genart/02-parametric/heart.png)

### Step 2
Then, I added a fill to the curve, and made the distance between curves small enough that it looks like a gradient.

Here's an example of patterns drawn with some fill.

![step 2](/assets/images/genart/02-parametric/folded-circle.png)

### Step 3
I then added customizable color and also multiple colors. I also removed the stroke lines to go for a smoother gradient look, but you can add them back with the controls, if you'd like. If you look at the yellow and orange bits, you'll notice that it belongs to the same parametric curve but the fill shifts from yellow to orange in a gradient.

![step 3](/assets/images/genart/02-parametric/colored.png)

Later on, I added a way to scale the amount of colors so there will be more blue and teal, followed by yellow/orange and white with the least amount of presence.

### Code
[Github repo](https://github.com/piratefsh/p5js-art/tree/parametric-equations)

---

I was supposed to play with color gradients today but I got distracted. Jonathan Dagan shared a the [Recode Project](http://recodeproject.com/), repository of retro computer art with lots of stuff from the 70s. They're really cool and I want to play with recreating some of them tomorrow.

p/s: these daily posts are really quick and dirty so I don't feel the need to spend too much time on perfecting them. please excuse the mess.
