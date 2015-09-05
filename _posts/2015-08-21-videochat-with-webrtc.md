---
layout: post
title:  "WebRTC Video Chat app"
author: "Sher Minn C"
date:   2015-08-21 13:54:00
event: "Week 1, Day 3-5 at Recurse Center"
categories: projects
excerpt: "<p>I spent the past few days using WebRTC API (barebones, without a library) to build a simple video only sharing app. To go along with that, I also built a simple signalling server (more on this later) to help establish the initial connection.</p>"
---

This is my first Javascript client-side app without the use of a library!

I spent the past few days using WebRTC API (barebones, without a library) to build a simple video only sharing app. To go along with that, I also built a simple signalling server (more on this later) to help establish the initial connection.

This is a really simple overview of what WebRTC is for those who aren't familiar with it. I'll also be including some resources I dug up. There's tons of documentation, but the tutorials are elusive.

## What did I build?

This! A web client so two people can see each other's faces. Or in this case, I can use it to have a chat with myself. Very social.

![video chat app](/assets/images/webrtc/chat-desktop.png)

_The other client was my phone_

Github repository with instructions on how to use [here](https://github.com/piratefsh/webrtc-video-chat).

I'll figure out how to deploy it sometime next week. It also uses a signalling server on Node.js that initiates the call.

## What is WebRTC?

<blockquote>WebRTC is a free, open project that provides browsers and mobile applications with Real-Time Communications (RTC) capabilities via simple APIs.</blockquote>

_from [http://www.webrtc.org/](http://www.webrtc.org/)_

What this means is that it allows browsers to communicate to one another without going through a server. I'll be talking about WebRTC in the web context, though it also exists for the mobile realm.

__For a great intro and how WebRTC works, check out [Getting started with WebRTC](http://www.html5rocks.com/en/tutorials/webrtc/basics/) on HTML5Rocks.__

## Is WebRTC different from WebSockets?

Uhuh! While they both allow for streaming and bi-directional channels, WebSockets are more for communicating with a __server__. WebSockets do still heavily rely on an existence of a server. 

In a context of a WebSocket chat app, clients send messages to the server. Server is responsible for sending that message to the receipient.

Whereas with WebRTC, clients only need to talk to the server to get metadata important for the initial connection with other receipient client. Once the metadata is received on both sides, clients can communicate with one another _even if the server goes down_. 

Pretty cool, huh?

The part where clients need to exchange metadata to initiate the call is called __signalling__. This is where a server comes in, because how else would two clients on the other side of the earth (or room) know what their IPs are?


There is more on the difference between these two on this convenient [Stackoverflow post here](http://stackoverflow.com/questions/18799364/webrtc-vs-websockets-if-webrtc-can-do-video-audio-and-data-why-do-i-need-web).

## Resources on understanding WebRTC

* Start here: [Getting started with WebRTC](http://www.html5rocks.com/en/tutorials/webrtc/basics/)
* Amazing list of WebRTC resources [WebRTC and WebAudio resources](https://docs.google.com/document/d/1idl_NYQhllFEFqkGQOLv8KBK8M3EVzyvxnKkHl4SuM8/edit#)
* Simple RTCPeerConnection example with two local peers [simpl.info RTCPeerCommunication](http://www.simpl.info/rtcpeerconnection/)
* Working example code with a signalling server! [WebRTC Codelab](https://bitbucket.org/webrtc/codelab)

I found the last one to be really useful to see how real client code looks like. A lot of the other examples from the Getting started guides just had two local peers (have a video chat with yourself!) so it was hard to wrap my head around how two peers would connect. The signalling server isn't the most sophisticated, so I used it as a base and added on more specific message types. 

## Next steps

I'll be working on cleaning up the app and learning how to deploy the app plus the signalling server. I'm also planning to include audio and a chat or file transfer feature to learn how to stream arbitrary data. 

I'll also blog about how the protocol works and how I built the app, which ended up being harder than I thought it would be without any libraries.

Till next week!




