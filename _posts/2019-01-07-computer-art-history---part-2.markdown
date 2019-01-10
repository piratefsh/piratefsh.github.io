---
title: "History of Computer Art -- Part 2: Plotters"
layout: post
---
I'm writing a series of blog posts on computer art history from the 1960s onwards. In this installment we'll talk about the __plotters__.

My personal fascination with plotters comes from watching it in action. If you look up media posts on Twitter for [#plottertwitter](https://twitter.com/search?f=videos&vertical=default&q=%23plottertwitter&src=typd), you will be rewarded with many delightfully hyponotic videos of plotters in action. As of early 2019, most of the plotters featured are the Axidraw by EMSL. However, plotters have had a long history, and while their capabilities have not varied much since their start, the ways in which they are used have shifted.

## What is a plotter?
There are two prevalent types of plotters, the _mechanical_ plotter and the _electronic_ plotter. One of the premier manufacturers of plotters was Calcomp, in Anaheim California. While researching them, I came accross one of their reference manuals [^1]. Calcomp ran from 1958 to 1999, when it closed due to lack of capital. But it seems like the company has been revived as a merger of two companies since and continues to produce large format printers and cutters.[^2]

<img src="/assets/images/compart-history/calcomp/calcomp-565.jpg" alt="a calcomp 565 plotter" width="480" class="block"/>
_CalComp 565 plotter[^7]_

The first type of plotter was the __mechanical plottter__. I like to think of a mechanical plotter as a drawing robot. It holds a pen and can move accross a paper surface on a XY-axis. The first Calcomp plotter, the Calcomp 565 was a __drum plotter__. To use it, you would load a roll of paper on which the machine could advance or reverse, moving on the Y-axis. The pen move across the surface of the paper and move on the X-axis. Drum printers such as the Calcomp 565 allowed continuous rolls of paper to be fed into it, allowing up to 120 feet of continous surface, which made it ideal for large or continuous diagrams.

<video src="/assets/images/compart-history/calcomp/calcomp-565-sine.mp4" alt="CalComp 565 drawing a sine wave on paper" width="520" autoplay muted loop></video>
_CalComp 565 drawing a sine wave [^7]_

Calcomp also made __flatbed plotters__. As the name suggests, the surface to be drawn on would be laid out flat. This was a preferred type of plotter for cases where you needed to view the whole piece as it is being plotted in real time, or if you needed to plot on various surfaces or paper that could not be loaded into a drum [^7]. Flatbeds also made it easy to update drawings by going over them in multiple passes, where I imagine it would be a nightmare to align if it were in a drum plotter. The Axidraw, for example, is a modern-day flatbed plotter.


And then they were the __electronic or microfilm plotters__. It works in a similar way as the mechanical plotter, but instead of a pen, it uses an electron beam and instead of paper, it "draws" on microfilm. It was a little hard for me to understand how this works at first, because microfilm technology isn't as common nowadays. But the idea is that it plots an electron beam in a cathode ray tube, runs it through a camera lens system, which records these beams onto microfilm. I think of like how a CRT display works, but it also exposes light onto film. The microfilm can then be viewed. A particularly notable microfilm plotter was the SC-4020, which was a peripheral device to the IBM 7090 (mentioned in the last article). There is a whole book written on the SC-4020 and it's use at Bell Labs in the 60s and 70s: _Peripheral Vision
Bell Labs, the S-C 4020, and the Origins of Computer Art_ by Zabet Patterson (MITPress [link](https://mitpress.mit.edu/books/peripheral-vision)). It's a good read and captures the zeitgeist of computer graphics at the time and I'd totally recommend.

The SC-4020 is a special one because it was used to make the first ever known computer animation in 1963. It was created by E.E. Zajac and it simulated the motion of a communications satellite around the earth [^6]

<video src="/assets/images/compart-history/sc4020/zajac.mp4" alt="CalComp 565 drawing a sine wave on paper" width="520" autoplay muted loop></video>
_Simulation of a Two-Gyro Gravity Gradient Attitude Control System by E. E. Zajac, 1963[^8]_

The microfilm plotter has also had it's moment to shine for the use of art, most notably was the collaboration between Lilian Schwarts and Ken Knowlton at Bell Labs.


## Applications
Historically, plotters were made with practical applications in mind, but just like their computer counterparts, engineers and artists soon found creative applications for them.

<iframe width="560" height="315" src="https://www.youtube.com/embed/AAc4VLR6-Dg?start=41" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
_In this promotional video for Calcomp plotters in 1968, some applications that they mention are meteorology, atomic physics, medical research, oceanography, astronomy, highway engineering (?) and so on.

// resolution, compare microfilm to pen plots?
A nice feature of the pen plotter is the high resolution that it can draw. Some of the nicer CalComp models can draw on a resolution as fine as 0.0125mm.

Because the plotter "prints" by moving a pen across a surface, drawings are defined as vectors, instead of raster image. This required a slightly different way to approaching a drawing meant for a screen. For example, look at this plotter piece by Edward Zajec titled RAM 13[^3]. The title of the work, "RAM" comes from the name of the Random Number Generator (RAM) subroutine in Fortran IV. This image was produced with a DP-1 Plotter run on an IBM 1620.

There are two major components to this image: the vertical lined background, and the grid of trapeziums in the background. To recreate this using my usual raster graphics drawing tools, the easiest way is to draw the background and to lay the foreground rectangles over it with a white fill.

However, with a plotter, we need a way to tell the plotter to stop drawing those vertical lines where the rectangles exist.

To recreate this, I'm using Scalable Vector Graphics (SVG) which are a really nice standard way to represent vectors.

Plotters were great for creating large diagrams of graphics and are still in use today for The term "plotter" is still used today to refer to large format printers with inkjet or toner-based mechanisms. They're more like large printers rather than the plotters of the 60s and 70s. [^5]


## Textures

## Optical illusions
Because plotters are really good at drawing repeated fine lines, a thing that would be tiring to do by hand, it lent itself well to creating optical art. It is also worth noting that this overlapped with a rising interest in optical art. MoMA in New York City held an opart exhibit titled _The Responsive Eye_, featuring works by Bridget Riley. Riley's work was an inspiration to computer artists at the time //todo: Noll

An aesthetic that surfaced a lot was moire art. This can be achieved by layering two sets of fine lines and offsetting them slightly.

## Color
Plotters allowed for the use multiple colors. Most other output devices of the era suchas microfilm and printers are often monotone, mostly outputs in black and white. Color often had to be added manually by hand using filters (before the days of Instagram filters). Plotters could hold up to four different pen colors and different pens could be swapped in for a variety of effects.

// todo hw franke matrix

## Why are plotters still so fascinating?

Why is it in 2019 we are still fascinated by this old-school drawing robot?

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">can&#39;t get anything else done when the plotter is running. so mesmerizing to watch ahhh. <a href="https://twitter.com/hashtag/plottertwitter?src=hash&amp;ref_src=twsrc%5Etfw">#plottertwitter</a> <a href="https://t.co/9OqUPTXcuf">pic.twitter.com/9OqUPTXcuf</a></p>&mdash; Sher Minn (@piratefsh) <a href="https://twitter.com/piratefsh/status/1043702264165281793?ref_src=twsrc%5Etfw">September 23, 2018</a></blockquote>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

Everyone I know who has seen a plotter at work or seen videos of it have absolutely loved watching it. I'm wondering if it's just the pure novelty of it -- most of us born after the 1960s probably have not encountered a plotter in our everyday lives.

I think part of the novelty comes from the fact that our default output device is the color LCD screen and we have come to rely on other forms of output less and less. Some 15 years ago when I was still in high school, paper via printers (dot-matrix and laser) was still really my default mode of output.

But now we have tablets, e-ink readers, phones, and so on. The need to manifest information on paper has been greatly minimized. It's easy to forget that there was once a time when there wasn't a prevalent default option.

I kind of like how plotters also offer a glimpse into the construction of its image. It paints, an image stroke by stroke, a single line at a time and it is satisfying to watch it come to fruitation. Much like how watching cooking videos are so satisfying because you get to witness the birth of a beautiful thing.

Personally in this era as digital graphics are getting more and more sophisticated and complicated, there is a certain comfort in looking at something two-dimensional in black and white.

In 1969, Calcomp held an international plotter art competition. As part of the press release, I found this quote by James Pyle, assistant to the President at CalComp,[^4]

<blockquote>
  <p>"Pyle is convinced that computer/plotter art will be accepted as a recognized art form, "if only because it gives a humanizing aura to machinery."</p>
</blockquote>

<blockquote>
  <p>"He is certain of one thing and that is that computers will never spontaneously generate a picture.</p>

  <p>"First, someone has got to have an idea and that someone is always going to be a human being," he says."</p>
</blockquote>

https://www.youfab.info/2015/winners/plotter-drawing
graphtec plotter
mark wilson
http://www.digitalvasari.com/23_mark-wilson/

---

[^1]: _CalComp Software Reference Manual_ (1976). Retrieved from [http://bitsavers.informatik.uni-stuttgart.de/pdf/calcomp/CalComp_Software_Reference_Manual_Oct76.pdf](http://bitsavers.informatik.uni-stuttgart.de/pdf/calcomp/CalComp_Software_Reference_Manual_Oct76.pdf)
[^7]: Types of plotters in _CalComp Software Reference Manual_ (1976). Retrieved from [http://bitsavers.informatik.uni-stuttgart.de/pdf/calcomp/CalComp_Software_Reference_Manual_Oct76.pdf](http://bitsavers.informatik.uni-stuttgart.de/pdf/calcomp/CalComp_Software_Reference_Manual_Oct76.pdf)
[^2]: _About Us_ (2017). Retrieved from [http://www.calcompgs.com/About](http://www.calcompgs.com/About)
[^3]: Fig. 2, Zajac E. (1969) _RAM 13_, [Computer generated drawing]. From _A Little-Known Story about a Movement, a Magazine, and the Computer's Arrival in Art_ by Margit Rosen, 2011 (pp. 392)
[^4]: Smithsonian Science Service High Resolution Exhibit Pictures. Retrieved from [https://web.archive.org/web/20060903020302/http://scienceservice.si.edu/exhibit2.htm](https://web.archive.org/web/20060903020302/http://scienceservice.si.edu/exhibit2.htm)
[^5]: Mott, E. (n.d.) _Plotter Vs. Wide Format Printer_. Retrieved from [https://smallbusiness.chron.com/plotter-vs-wide-format-printer-58737.html](https://smallbusiness.chron.com/plotter-vs-wide-format-printer-58737.html)
[^6]: Patterson, Z. (2015) _Peripheral Vision: Bell Labs, the S-C 4020, and the Origins of Computer Art_
[^7]: Hachtmann, P. (2007, Jun 9). _Calcomp 565 Plotter working_. Retrieved from [Youtube](https://www.youtube.com/watch?v=dSEvVxdJNIw&t=1s)
[^8]: Zajac, E. E. (1963). _Simulation of a Two-Gyro Gravity Gradient Attitude Control System_. Retrieved from [Youtube]('https://www.youtube.com/watch?v=RocLdMyUG-4')
[^9]: Somma R. (n.d.) __A Calcomp 565 drum plotter__[digital image]. Retrieved from [https://www.wikiwand.com/en/Calcomp_plotter](https://www.wikiwand.com/en/Calcomp_plotter)