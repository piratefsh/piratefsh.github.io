---
layout: post
title:  "Subway Turnstile Charts!"
author: "Sher Minn C"
date:   2015-10-05 18:18:00
event: "Week 8 at Recurse Center"
categories: projects

---

I have pretty charts! Courtesy of [Plotly](https://plot.ly/feed/), which Kristin recommended. Paired with Miriam on learning how to create simple charts with it, which was super productive. It is sooo easy and so good to use. Would totally recommend for quick and pain-free graphs.
<div>
    <a href="https://plot.ly/~sherminn/104/" target="_blank" title="Top 10 Popular stations on the A line" style="display: block; text-align: center;"><img src="https://plot.ly/~sherminn/104.png" alt="Top 10 Popular stations on the A line" style="max-width: 100%;width: 600px;"  width="600" onerror="this.onerror=null;this.src='https://plot.ly/404.png';" /></a>
    <script data-plotly="sherminn:104"  src="https://plot.ly/embed.js" async></script>
</div>

## Working with Plotly
Plotly has a Python wrapper that generates a chart for you. It's a wrapper around D3, so you don't have to mess around with D3 directly. You do need an account to use Plotly, and all of your charts will be public unless you give them money for a paid account.

Given some data, it'll generate an interactive chart and do nice things like autoscaling. It'll spit out an url to your chart online, which you can embed as shown below. It falls back on a static image if the chart fails to load, which is pretty awesome. They also have tons of very simple [examples of different chart](https://plot.ly/python/) creations. 

<div>
    <a href="https://plot.ly/~sherminn/196/" target="_blank" title="Entries and Exits Over Time for 14 ST-UNION SQ by Datetime" style="display: block; text-align: center;"><img src="https://plot.ly/~sherminn/196.png" alt="Entries and Exits Over Time for 14 ST-UNION SQ by Datetime" style="max-width: 100%;width: 600px;"  width="600" onerror="this.onerror=null;this.src='https://plot.ly/404.png';" /></a>
    <script data-plotly="sherminn:196"  src="https://plot.ly/embed.js" async></script>
</div>

*Also, another awesome feature: try selecting just a part of the chart (e.g. one day)! It'll zoom in to that selection!*

## An initial observation

Take these with a grain of salt since this is just for a month of data and for one station. Aparently more working people take the subway than tourists -- note the very prominent drops in traffic on weekends. There are also strange dips on Thursdays -- people working from home towards the end of the week perhaps? And it seems that Fridays are popular days to be on the subway.

<div>
    <a href="https://plot.ly/~sherminn/200/" target="_blank" title="Entries and Exits Over Time for 14 ST-UNION SQ by Date" style="display: block; text-align: center;"><img src="https://plot.ly/~sherminn/200.png" alt="Entries and Exits Over Time for 14 ST-UNION SQ by Date" style="max-width: 100%;width: 600px;"  width="600" onerror="this.onerror=null;this.src='https://plot.ly/404.png';" /></a>
    <script data-plotly="sherminn:200"  src="https://plot.ly/embed.js" async></script>
</div>

Also, for the sake of formality, the top 10 most popular stations on a chart:

<div>
    <a href="https://plot.ly/~sherminn/185/" target="_blank" title="Top 10 MTA Subway Stations By Number of Entries &lt;br&gt;from 2015-08-29 00:00:00 to 2015-09-25 23:59:58" style="display: block; text-align: center;"><img src="https://plot.ly/~sherminn/185.png" alt="Top 10 MTA Subway Stations By Number of Entries &lt;br&gt;from 2015-08-29 00:00:00 to 2015-09-25 23:59:58" style="max-width: 100%;width: 600px;"  width="600" onerror="this.onerror=null;this.src='https://plot.ly/404.png';" /></a>
    <script data-plotly="sherminn:185"  src="https://plot.ly/embed.js" async></script>
</div>


## What's next
Heatmaps! I finally have a larger data set of 3 months from Jun 2015 to Aug 2015 (which took a few hours to process and clean today) and am gonna see how it matches up with the preliminary data!

