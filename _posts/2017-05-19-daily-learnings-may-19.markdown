---
title: "Daily Learnings: Vint Cerf, obscure browser caveats & restorative yoga"
layout: post
---

I spent most of the past 3 days at Google I/O, which was a lot of information overload. I could talk about what happened there, but most tech news sites are already doing a good job at it, so I'm just gonna mention random things of particular interest.

## Vint Cerf
[Vint Cerf](https://www.wikiwand.com/en/Vint_Cerf) was an instrumental figure in the first commercial email service. Apparently a motivation for him to work on email was to be able to communicate reliably with his wife who was hard of hearing. This was mentioned at one of the talks at Google I/O on accessiblity (embedded below). I couldn't find an exact source verifying this, but it seems like Cerf was aware of [needs of the hard of hearing](https://www.verywell.com/people-vinton-cerf-1046180) and sees the Internet as [a great equalizer for the hearing and deaf](https://partners.nytimes.com/library/cyber/week/021398deaf.html).

<iframe width="560" height="315" src="https://www.youtube.com/embed/38fbB8wCPzg" frameborder="0" allowfullscreen></iframe>

## Big Web Quiz
Paul Lewis and Jake Archibald's talk was my favorite ever. It's all about browser gotchas on script loading/execution and rendering. Did you know that the only two animated CSS properties that are automatically composited are `transform` and `opacity`? Composited here means that the element that is animated is on a separate layer when rendered, so the elements below do not have to be rerendered everything the animated element moves or changes.

Also, preloaded assets are stored in separate caches than HTTP2 assets.

You can watch the full talk for weird and obscure browser goodness. It's the best:

<iframe width="560" height="315" src="https://www.youtube.com/embed/vAgKZoGIvqs" frameborder="0" allowfullscreen></iframe>

## Restorative Yoga
I went for a restorative yoga class today. It involves letting gravity help your body completely relax. Apparently it's different from yin yoga which can involve active and deep stretching. It involves a lot more props and is not meant to push your body, rather it aims to take you to that state right between being awake and asleep -- totally relaxed, but still mindful.