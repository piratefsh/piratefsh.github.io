---
layout: post
title:  "Deploying a WebRTC app and STUN/TURN Servers"
author: "Sher Minn C"
date:   2015-08-27 15:11:00
event: "Week 2 at Recurse Center"
categories: projects
excerpt: "<p>I built a video chat app last week. Now it was time to deploy it and a STUN/TURN server. Lots of frustrated configuration work happened.</p>"
---

2016 Update: Hey so I've been getting a bunch of email from people asking if I can help debug/build/fix their WebRTC projects. Unfortunately that's not within my capacity right now. I haven't worked with WebRTC since this post went up, so I'm not the most up to date on this stuff. I would recommend posting your questions to StackOverflow or a JS community. All the best!

---

So I finally have a working WebRTC video chat app, and it's up over here: [45.55.61.164:2013](45.55.61.164:2013). And it works! \*throws confetti\*.
 
Here's a screenshot from a call to a friend in Philly. It also works on Chrome for Android!

<img src="https://pbs.twimg.com/media/CNNv1LxUcAAtxu1.jpg" width="300"/>


I made it look more video chat-like and cleaned up some of the code. The code is updated on it's [Github repository](https://github.com/piratefsh/webrtc-video-chat), though I still need to update the README.

## Deploying a WebRTC app

I deployed the client and signalling server from [last week](/projects/2015/08/21/videochat-with-webrtc.html) on a VPS on Digital Ocean, which I highly recommend if it's your first time working with a VPS! It has great tutorials on how to set your VPS up and many how-to-deploy-your-app guides broken down into digestable chunks. 

It was my first time working with a VPS, and the tutorials could not have made it better. I used [this](https://www.digitalocean.com/community/tutorials/how-to-setup-a-node-js-development-environment-on-a-vps-for-a-team) deploying Node.js guide.

## Network woes

Deploying my app went okay. But even after getting it up on a server, it still wouldn't stream video from the Recurse Center wifi network to anything external. 

On WebRTC, clients exchange information about their network (obtained from a STUN server which tells clients about handy-dandy things about themselves, like their external IP, which is necessary for clients behind NAT). Using that information, clients can then talk to one another, peer-to-peer. 

__However__, for clients on more complicated networks or with firewalls, knowing all this network data about them wouldn't allow you to connect anyway. This is why you'll need a TURN server, which relays data between clients when P2P fails. Apparently the failure rate is about 14% at this day and age, according to [http://webrtcstats.com/](http://webrtcstats.com/).

Relevant reading on HTML5Rocks, from which I learned most of this: [WebRTC in the real world: STUN, TURN and signaling](http://www.html5rocks.com/en/tutorials/webrtc/infrastructure/)


## Deploying a TURN server
Fortunately, I didn't have to implement my own TURN server because there are a bunch of open source ones out there! I spent a day trying to configure and install [restund](http://nil.uniza.sk/sip/installing-and-configuring-restund-stunturn-server) and another random implementation whose name I forgot, but to no success. They either didn't have enough documentation to configure things right, or seemed to be working with both clients connected to it, but just REFUSED to stream data. Gah.

I ended up going back to [Coturn](https://github.com/coturn/coturn), [install guide here, kinda?](https://github.com/coturn/coturn/wiki/CoturnConfig), which is a more updated version of a popular implementation, [rfc5766-turn-server](https://code.google.com/p/rfc5766-turn-server/) which is now deprecated. It also works as a STUN server.

You can find the RFC5766 specs for TURN and STUN [here](https://tools.ietf.org/html/rfc5766). 

Given all of Coturn's scary looking config, it wasn't too bad to deploy. I installed the .deb file on my Ubuntu VPS.

I left most of the defaults for config (a sample of which you can find in the etc/turnserver.conf in the download), but you should set the `listening-ip` and `user`s. I didn't want to use a database for user accounts for simplicity's sake. 

__Things to note:__

* You will need user accounts for the TURN features. STUN servers allow for anonymous connections though.
* This also works as a STUN server!
* Run it in verbose mode to see all the connections: `turnserver -v`
* Remember to open your UDP and TCP ports. I used the `ufw` command line tool to manage my ports.
* The RFC5766 specification does not include IPv6 support, so your device on IPv6 only mode may not be able to connect to the Coturn server. My phone on T-mobile IPv6 mode couldn't at first, but I forced IPv4 on it and it worked. More details on IPv6 support is detailed in [this RFC6156 specification](https://tools.ietf.org/html/rfc6156), but I don't know if it's implemented anywhere.

## Now it works!

With that all in place, my video call app finally works! I could call out from the mysterious Recurse Center network and connect to friends! Too awesome. 

## What's next?

I think I'm done with this project for now, though it would be cool to implement file transfer or chat (which uses a different streaming API than video/audio). 

All in all, it was a good first week and a half at RC. On to the next project!
