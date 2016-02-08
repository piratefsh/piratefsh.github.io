---
title: Clearing saved app data on MacOS X
layout: post
categories: [how-to]
tags: [os, macos, guide]
published: True
author: "Sher Minn C"
excerpt: "<p>In which I poke around ~/Library to hunt down vestiges of saved app data to stop GifLoopCoder from hanging on me.</p>"
---

Recently I've been playing around with this nifty tool called [GifLoopCoder](http://www.gifloopcoder.com/) (GLC). Do not be fooled by the 90s-esque website, you can do some really [cool stuff](https://twitter.com/search?q=%23gifloopcoder&src=typd) with it. It's built on Electron, which I don't have much knowledge about, but from what I understand, allows you to build desktop apps with HTML/CSS and JavaScript. 

It's a pretty cool IDE and is fantastic for making looping animations, but I hit a little bug while using it. 

While refactoring, I accidentally introduced an infinite loop and ran the code. Electron hanged, and was responsive. So I did what any regular impatient person would do -- killed it in the Activity Monitor.

That should solve the problem, aite?

Nope. 'Course not.

When I next launched the app, it was blank-screening on me. 

![blank gifloopcoder](/assets/images/appdata/glc.png)

> _sad face_

From the title bar, I could see that GLC was still trying to load the project I just killed.

It wasn't the first time I've seen this. Zulip has blank-screened on me before too. To fix it, I had cleared the application cache and saved state:

~~~
rm -rf ~/Library/Cache/<app package name>
rm -rf ~/Library/Saved\ Application\ State/<app package name>
~~~

The package names can be somewhat inconsistent -- for GLC, the cache folder was `glc` and the application state was `com.github.electron.savedState`. I'm wondering what would happen if there was a package name conflict with another Electron app, in that case?

So this had previously worked with Zulip, but GLC was still trying to load the old project data. No amount of deleting and restarting would let GLC start afresh.

After digging around in `~/Library`, I stumbled upon `~/Library/Application\ Support/glc`, which apparently contains Local Storage!

~~~
drwx------   7 sherminnchong  staff    238 Feb  7 19:20 GPUCache/
drwx------   6 sherminnchong  staff    204 Feb  7 19:48 Local Storage/
-rw-------   1 sherminnchong  staff  18370 Feb  7 19:58 Preferences
~~~

A quick `rm -rf` later, GLC no longer tries to load the old project, and starts afresh.

I'm not sure what the difference between each location is for, but this works for a quick fix to purge old app data.

### tl;dr
Saved application data can be stored in multiple places, and the following should clear most of it, at least for GLC:

~~~
rm -rf ~/Library/Cache/<app package name>
rm -rf ~/Library/Saved\ Application\ State/<app package name>
rm -rf ~/Library/Application\ Support/<app package name>
~~~


