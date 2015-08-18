---
layout: post
title:  "Battle of the Captchas"
date:   2015-04-30 10:02:46
categories: projects
---

My task this week was to figure out an alternative captcha to Google's ReCaptcha. Here's a quick history lesson on the ReCaptcha and some other options to it.

## ReCaptcha v1

I'm hella sure everyone is familiar with that jumbly mess of words that was Recaptcha v1.
It's not pretty, frustration-inducing, and is probably only flawlessly solvable by superhumans. There are also [human farms](http://www.blackhat-seo.com/2009/captcha-farms/) who do nothing but solve reCaptchas all day.

![Google Recaptcha version 1](/assets/images/captchas/recaptcha-v1.png)

*To be fair, my doctor's handwriting is only a sliver more legible*


## ReCaptcha v2

Just this year, Google came up with reCaptcha v2 ([Techcrunch article](http://techcrunch.com/2014/12/03/googles-recaptcha-mostly-does-away-with-those-annoying-captchas/), a sleeker way to keep the robots out of your forms. 

![Google Recaptcha version 2](/assets/images/captchas/recaptcha-v2.png)

*Simple, and real sexy*

You just have to click on that checkbox, and voila, you're done! It works by detecting your behaviour prior to checking that box. If your behaviour is suspicious, (e.g. if you fill in the form too quickly) it busts out a second level of verification which is either reCaptcha v1, or an image selection game like this:

![Google Recaptcha version 2](/assets/images/captchas/recaptcha-v2-level-2.png)

*There was another one asking you to pick out cakes which I liked better. But road signs are okay too, I guess*

All that is fine, but still rather annoying when it gets to the second level verification. After way too much form testing for a company website, everyone in my office seems to be hitting second-level for any reCaptcha v2 (not just the one we were testing). 

## Alternatives?
The general consensus is that 'no captcha is the best captcha'. This means ways of detecting spambot behaviour without having a solvable component. Still, here are some alternatives to the reCaptcha I stumbled upon.

### Honeypots
This is a real simple 'no captcha' solution. Amidst [various](http://www.usertesting.com/blog/2014/04/09/think-your-site-needs-captcha-try-these-user-friendly-alternatives/) [alternatives](http://www.experiencesolutions.co.uk/blog/2014/03/19/5-alternatives-to-captcha-that-wont-baffle-or-frustrate-users/) blogged about, a simple way to thwart spambots is by setting up [honeypots](http://haacked.com/archive/2007/09/11/honeypot-captcha.aspx/). 

Honeypots are simple, CSS-hidden inputs that are not visible to the user, but visible to a bot which typically parse just the HTML. Great to have as a backup or second verification to another captcha.


### Simple Matchers
I'm not sure what the real term for these are, but I'm just gonna call them matchers. They require some matching interaction that doesn't just fill in a field somewhere.

Here's [one](http://wordpress.demos-sites.net/w2_contact_form/ajax-contact-form-wordpress-shortcode/) that requires you to drag and drop a matching color:

![No Spam Captcha](/assets/images/captchas/captcha-nospam.png)

Great selection of colors as it overcomes the issue of color-blindness. I tested it on a [color-blindness simulator](http://www.color-blindness.com/coblis-color-blindness-simulator/):

![No Spam Captcha](/assets/images/captchas/captcha-nospam-coblis.png)

This one was nice, but was part of a paid service. It's implementable, but having to introduce a drag and drop library felt like an overkill just for a captcha. I wanted to keep our captcha as lightweight as possible. Also, I ain't gonna cross-browser test that thing on IE8 (apparently we have clients who visit the site on Windows XP. Cue gasp).

### Math
Not to say that robots are worse at math than humans are, but this would work assuming that bots don't have built in intelligence to detect math questions like these:

![Math Captcha](/assets/images/captchas/captcha-math.png)

I actually quite like this one, simple, no worries about cross-browser testing and gets the job done. It wasn't a preferred choice of the team though.

### Select the color
Here's one I came up with:

![Color Captcha](/assets/images/captchas/captcha-color.png)

They're all just radio buttons with associated labels styled over them with different colors. It should fail gracefull with an older browser (I'm looking at you, IE8) and doesn't require any additional Javascript to work. To make it harder for bots to guess, the order should be randomized and more colors can be added. 

It doesn't pass the color-blindness test with flying colors though (ahem), but I figured adding the keyword for position (third) would compensate for that. Shapes could work as well (e.g. pick the red triangle) to get over that.

It's simple, and not totally foolproof (you can always get bots to detect the hex color and do some simple math to determine if it's reddish), but good enough for a super-duper lightweight solution.

## What now?
Well, I'm still figuring out what works best -- though ideally I'd like to find out just how spam bots work, and how intelligent they really are. 

It's a bit of a compromise -- just how complicated does a captcha have to be for the sake of thwarting bots? Do we stick to the tried and true Google ReCaptcha? Do do use a fancy sliding-drag-drop thing? Is that level of complexity necessary? How likely is your website to be spammed? So many questions to answer. Til next time!


