---
title: "Daily Learnings: How Children Fail, vintage vibrators and distributed database sacrifices"
layout: post
---

__Introduction:__ I am starting a daily log of interesting things I have learned in a day. I just spent a week reunited with alumni of the [Recurse Center](https://recurse.com), an endlessly curious and excited community of programmers and learned so many interesting things that are worth sharing.

* __How Children Fail by John Holt__ [(Amazon)](https://www.amazon.com/dp/B018P2AB94/ref=dp-kindle-redirect?_encoding=UTF8&btkr=1). Holt writes about how the school system does no justice to children as learners. 

  Holt writes about several recurring characters, one of which resonated with me. Choice quotes on Emily:

  <blockquote>
    Remember when Emily, asked to spell "microscopic," wrote MINCOPERT? That must have been several weeks ago. Today I wrote MINCOPERT on the board. To my great surprise, she recognized it. Some of the kids, watching me write it, said in amazement, "What's that for?" I said, "What do you think?" Emily answered. "It's supposed to be 'microscopic.' " But she gave not the least sign of knowing that she was the person who had written MINCOPERT.
  </blockquote>
  Source: Holt, John. How Children Fail (Kindle Locations 139-142). Kindle Edition. 

  <blockquote>
    One day it was Emily's turn to place the weight. After much thought, she placed it wrongly. One by one, the members of the "group" said that they thought it would not balance. As each one spoke, she had less and less confidence in her choice. Finally, when they had all spoken and she had to unlock the beam, she looked around and said brightly, "I don't think it's going to balance either, personally." Written words cannot convey the tone of her voice: she had completely dissociated herself from that foolish person (whoever it was) who had placed the weight on such a ridiculous spot. When she pulled the peg and the beam swung wildly, she almost seemed to feel vindicated. Most of the children hedge their bets, but few do it so unashamedly, and some even seem to feel that there is something dishonorable in having so little courage of your own convictions. 
    <br/><br/>
    I see now that I was wrong about Emily's task. The task for her was not to spell "microscopic," or write a word backwards, or balance a weight <strong>The thought in her mind must have been something like this: "These teachers want me to do something. I haven't got the faintest idea what it is, or why in the world they want me to do it. But I’ll do something, and then maybe they'll let me alone.</strong>"
  </blockquote>

  Source: Holt, John. How Children Fail (Kindle Locations 206-214).  . Kindle Edition. Emphasis mine.

  __I learned this from__: Holt was mentioned as an inspiration for the learning environment RC hopes to create [in this blog post](https://www.recurse.com/blog/113-join-rc-and-help-build-a-better-place-to-learn):


* __CAP Theorem__ [(Wikipedia)](https://www.wikiwand.com/en/CAP_theorem). In a distributed network of data stores, it is impossible to guarantee all three of the following (i.e. choose two, sacrifice one):
    - Consistency: all reads will get the most recent write, otherwise throw an error
    - Availability: every read request gets a non-error response (may not be the most recent write)
    - (Network) Partition tolerance: the system works even when a network may not be fully connected due to whatever reason (e.g. subnet with nodes A and B are connected to subnet C and D. A partition occurs when say the switch between the two subnets go down and therefore A and B cannot communicate with C and D).
  I took the above examples from the Wikipedia page, which does a pretty good job at explaining the theorem. 

  __I learned this from:__ Cory Dominguez

* __Vintage Vibrators__ as seen at the [Antique Vibrators Museum](http://antiquevibratormuseum.com/) in San Francisco. Well-known electronic consumer brands like Sears, Hamilton Beach and Oster used to make vibrators marketed as massagers to cure hysteria.
    ![Hamilton Beach vibrator from 1900s](/assets/images/learnings/hamilton-beach-vibe.jpg)

    _Hamilton Beach vibrator from 1902_

    ![Old school Hitachi Massager](/assets/images/learnings/hitachi-vibe.jpg)

    _Old school Hitachi Massager, which is still around today but modernized. The Hitachi is the #1 all time favorite item at Good Vibrations_

    [Good Vibrations (NSFW link)](http://www.goodvibes.com/) in the Bay Area is an all around amazing sex-positive, female-owned and staffed store.

    __I learned this from__: wandering around San Francisco 2 years ago and rediscovering Good Vibrations on this trip.
