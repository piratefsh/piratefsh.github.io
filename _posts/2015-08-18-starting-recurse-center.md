---
layout: post
title:  "Starting at the Recurse Center"
date:   2015-08-18 17:07:00
categories: projects
---

Today is Day 2 at the Recurse Center, and I'm making it a point to write down stuff that I've been working on, regardless of how small they are! 

## Day 1 

### 1.1 Small programming challenges
Hadn't written any code for this month, so I thought I'd start out with small [dailyprogrammer](https://www.reddit.com/r/dailyprogrammer/) exercises. Worked on a [couple](https://www.reddit.com/r/dailyprogrammer/comments/3h9pde/20150817_challenge_228_easy_letters_in/) of [easy](https://www.reddit.com/r/dailyprogrammer/comments/3ggli3/20150810_challenge_227_easy_square_spirals/) challenges parallel with other Recursers. Looking at solutions on second one on square spirals was quite a learning point on how to eliminate your search space instead of generating the entire thing.

Also played around with [Google Foobar](http://jacquerie.github.io/google-foobar-post-mortem/), a fun little challenge that popped up when we Googled `python list comprehensions`. Completed the first simple challenge, which was given a multi-digit number, sum up all of the digits, which gives you a new number. Keep on summing up the digits until you are left with just one. Still trying to get used to doing things the Python way.

**My solution on repl.it [here](http://repl.it/BCVA/0).**

---

## Day 2

### 2.1 Small programming challenges

Continued with the Foobar challenges. Level 2 Challenge 1 was given a number of time intervals, find the maximum number of time intervals you can attend without any overlaps. Tried to come up with a fancy algorithm for it that included putting all the intervals in a big timeline and weed out the overlaps (which only passed 2 test cases D:) but found a handy-dandy algorithm that just did that (after struggling for a couple of hours) over here: [Activity Selection Problem](www.wikiwand.com/en/Activity_selection_problem). It makes sense but I still don't understand why it's optimal, might revisit sometime soon.

**My implementation on repl.it [here](http://repl.it/BCYb/1).**

### 2.2 WebRTC 
**Web Real Time Communications, peer to peer browser stuff**

Also looked at WebRTC for a bit. This [HTML5Rocks tutorial](http://www.html5rocks.com/en/tutorials/webrtc/basics/) seems like a great place to start and the demos of WebRTC capabilities are pretty darn cool.

<iframe width="560" height="315" src="https://www.youtube.com/embed/p2HzZkd2A40" frameborder="0" allowfullscreen></iframe>

I'm interested in playing around with WebRTC and to get a better idea of how P2P clients work over the web. Some implementations of WebRTC worth looking into:

* Chat clients
* Video and audio chatrooms
* P2P JS games
* File transfer (this might be fun!) e.g. [Sharedrop](https://www.sharedrop.io/)