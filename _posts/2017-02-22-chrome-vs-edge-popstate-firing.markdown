---
title: Unexpected Chrome vs Edge popstate firing
layout: post
---

Discovery of the day: Edge always fires a `popstate` event when the URL hash is updated, even though it is updated to the same string as before. Chrome, on the other hand, only fires `popstate` if the updated hash is different the second time.

So for example, if I click on a link with `href=#foo` twice, Edge will fire two `popstate` events, where Chrome will fire only one. In the examples below , I used `location.hash`, but I have verified that the link clicking works the same way.

__Popstate behavior on Edge 14. `popstate` fired twice.:__
![Popstate behavior on Edge 14 ](/assets/images/engineering/edge14 popstate.png)

__Popstate behavior on Chrome 56 `popstate` fired once:__
![Popstate behavior on Chrome v56](/assets/images/engineering/chrome popstate.png)

__Then there's Edge 13 that doesn't fire `popstate` at all (ohgodwhy):__
![Popstate behavior on Edge 13](/assets/images/engineering/edge13 popstate.png)
This is a [known bug](https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/3740423/) and claimed to have been fixed, I assume in later versions of Edge.

I am not sure what the specs of this are, but if we consider each state that a homepage can be in tied to a unique URL, it makes sense to not have to fire a state change when the hash value remains the same. Then again, apparently browsers are known to [handle the popstate event differently](https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onpopstate#The_popstate_event).

Popstate specs for the curious who might be up to the task of finding out the correct behavior: [link](https://html.spec.whatwg.org/#the-popstateevent-interface).

This was giving me a pretty nasty bug (modals that depended on popstate events to fire were not showing) that took awhile to figure out. So hopefully this helps someone out there.
