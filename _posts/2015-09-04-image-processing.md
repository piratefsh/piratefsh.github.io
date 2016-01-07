---
layout: post
title:  "Image Processing - Part 1: Sobel Edge Detection"
author: "Sher Minn C"
date:   2015-09-04 11:15:00
event: "Week 3 at Recurse Center"
categories: projects

---



I spent a lot of time this week learning about and implementing the [Sobel edge detection](https://www.wikiwand.com/en/Sobel_operator) filter with Javascript on `<canvas>`. Keeping with my promise to keep library use to a minimum, it was written in vanilla Javascript.
![sobel](/assets/images/imageproc/sobel-01.png)

_That's a photo of an installation in the [Noguchi Museum](http://www.noguchi.org/), which is a magical place_

## Demo and Github repo

The demo is currently on video mode, though it also works with individual images (you'll need to do that in `main.js` though, sorry! I should probably put in a UI option for that).

Also, it uses the `navigator.getUserMedia()` API which is only available on Chrome, FF and Opera for now. Sorry Safari and iOS peeps.

<a class="btn btn-primary" href="https://piratefsh.github.io/image-processing/">Try it out</a>
<a class="btn btn-default" href="https://github.com/piratefsh/image-processing">Github repo</a>

## How I went about it

### Researching what this edge-detection thing is
I talked to John, one of our RC facillitators, about how to get started on an image detection project, and he was super helpful with breaking the project down and where to get started. I decided to go with his suggestion on starting with edge detection as a gateway into image processing.

I spent a lot of time looking at material from college classes on edge detection. This [set of slides from UNR](http://www.cse.unr.edu/~bebis/CS791E/Notes/EdgeDetection.pdf) somehow worked for me, especially with the step-by-step examples and less scary math. It was really frustrating at first because a lot of explanations were math driven, which wasn't immediately obvious to me. Instead of trying to get all of the theoretical stuff down from the get-go, I decided to just jump into an implementation, after which everything made so much more sense! 

Also, this [StackOverflow thread](http://stackoverflow.com/questions/17815687/image-processing-implementing-sobel-filter) was useful to see an implementation in actual code. I also found a [Canny edge detector](https://github.com/cmisenas/canny-edge-detection) by an alum Recurser, which was pretty cool. Canny is basically a set of things pre- and post-processing you can do to make edge detection more effective. 

### What is this Sobel filter thing

I would talk more about how the Sobel filter works, but there's a lot of material out there including the ones I linked to that's pretty good. But the idea behind it is to detect edges on an image by detecting where the changes in gradients happen (e.g. bright foreground to dark background). The Sobel filter is a way to calculate how big the change in gradient is.

### A thing that happened

Most of the time spent this week (after doing reading and research) was __optimizing Javascript__. The time taken to filter started off as `500ms` per frame, but with some help from [Benoit](https://github.com/benoitvallon) (fellow Recurser who was awesome enough to work on optimizing my code), we managed to get it down to sub `100ms` per frame. That was pretty surprising -- an 80% improvement! (what whattt). We learned a bunch about Javascript optimization gotchas -- one of which was how the FF SpiderMonkey engine does not optimize for reverse array writing (writing elements in array from the last to first), but Chrome's V8 does. It doesn't make a difference for an array of 10K elements, but it was a huge difference for 100K elements. 

For example, running this [jsperf performance test](http://jsperf.com/push-allocated-vs-dynamic/49) (credit goes to Ben for finding this) on Chrome vs Firefox reveals that Chrome doesn't care if you start writing in reverse, but FF __really__ doesn't like it at `3.09 ops/s` compared to the usual `140 ops/s` when it isn't reversed. Interestingly enough, the app actually runs faster in FF now when we went back to sequential writing. We initially tried out the reverse writing because of the kinda handy `while(i--){...}` thing you can do that was supposed to save you a couple of operations. We still haven't figured out why that is, and what the engines do differently, but that's for another day.

Evidence:

__Chrome 45.0.2454.85 on Mac OS X 10.10.5__
![jsperf on chrome](/assets/images/imageproc/jsperf-chrome.png)
__Firefox 40.0 on Mac OS X 10.10__
![jsperf on firefox](/assets/images/imageproc/jsperf-ff.png)


## What's next

I'm gonna move on and work on shape detection (how to detect circles on an image?!) and maybe dig a little deeper into the inner workings of Javascript, which turns out to be pretty interesting. We also did whiteboarding for frontend web job interview prep (worked with Allie, our other RC facillitator!) which got me thinking about Javascript function innards. 

p/s: There is a blazing fast implementation of Sobel on JSFeat, demo-ed [here](http://inspirit.github.io/jsfeat/sample_sobel.html) that's sub 10ms, but I think I'm content with where we've gotten so far.


