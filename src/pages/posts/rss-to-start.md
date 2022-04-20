---
title: "RSS - getting started"
author: Sarah
date: '2022-01-05'
description: I finally did the work to create an RSS feed for this blog. I'll be getting in to how I (eventually!) set this up in Astro, but first, here's a quick description of how I *consume* RSS. (And, convienently, how I'm gonna test that I can successfully see a new post!)
layout: ../../layouts/MarkdownPostLayout.astro
slug: rss-to-start
hero: "https://lh3.googleusercontent.com/pw/AM-JKLUDPhhaB6hat3-VsNbicjTZ40xOqiiC-Pe9kkp_mehr5ov8itSBxMqQteJICrTr2_CExAlF_9AEZJsHt5g8n425gq8qKrSFYMwMA4-v_1zNmp0LcivQ5IKoguPyWZOJZHxwE-zbTwgUVT5EMVu5oRmdOA=w250-no?"
tags: ["rss", "astro", "blogging"]
---
I'm a huge fan of RSS, and it's always bothered me that this blog, in its Astro incarnation, didn't have a feed. So, I finally sat down and made it happen today!

To be completely honest, though, I don't use RSS as much as I used to. That's mostly because I'm a ridiculous power Twitter user and I have mostly been able to turn Twitter into an RSS alternative. My Twitter clients provide some features that my feed readers don't, so there can be a real benefit to creating an RSS-via-Twitter experience.

But, most people won't go through what I go through to craft a Twitter experience that can truly mimic an RSS experience. And, there are still some situations where RSS is preferable to Twitter. Most notably, it's common for organizations to Tweet out their blog posts several times, sometimes over the course of several days. When you organize and curate the way I do, and you see every Tweet, it's annoying to see so many duplicate Tweets when in a feed reader it would just show up as *one* single blog post. So even *I* need RSS to compensate for the fact that people won't always Tweet the way I want them to!

Here's a quick look at my setup, in case it's helpful for you.

# To Sync or Not To Sync

After Tweeting about getting my blog rss set up, I was asked whether I had an recommendations for a feed reader. And yes, yes I do! But, like everything in life, *it depends.* And the first thing it depends on is whether you want to be able to read your feeds on multiple devices.

## Android Apps

I mostly read rss on my Android phone. But, that hasn't always been, and isn't always the case. There are two feed apps I've been really happy with. One is a local feed consumer/subscriber only, and the other *requires* a "back-end" subscription service that it pulls from and syncs with.

For a local Android app, I loved Flym from the [Play Store](https://play.google.com/store/apps/details?id=net.frju.flym) or from [F-droid](https://f-droid.org/packages/net.frju.flym/), especially on a tablet! It is simple, modern, free and open source [GitHub]( https://github.com/FredJul/Flym) although it is sadly no longer maintained due to some changes on Google's end regarding news apps that have made updates an undue hardship on the maintainer. (But, he is happy to leave the code available for forking if anyone wants to continue his work!)

For a syncing Android app, I keep coming back to [Feed Me](https://play.google.com/store/apps/details?id=com.seazon.feedme), which is also entirely free, ad-free and whose [source is available on GitHub](https://github.com/seazon/FeedMe). It has some customizable actions I really like (including swipe one direction to keep unread, swipe in the other direction to add to Pocket) and a MUST for me: mark read as you scroll by. Note that you *need* an account through one of the popular web-based feed readers that you will log into from this app.

You may prefer [Focus Reader](https://play.google.com/store/apps/details?id=allen.town.focus.reader) which is also excellent, though it does require the paid Pro version to get some of Feed Me's free features. But, paying for Pro also gives you some additional features that don't happen to be of particular use to me. So, if you like Feed Me but would actually use all of Focus Reader's pro features, it's a solid option as well.

## Sync service

Again, I have tried a bunch, but I keep coming back to [The Old Reader](https://theoldreader.com). It's simple, reliable, and for me, it's a plus that it's a bit more "utilitarian" looking than many of the other options. I don't spend a lot of time reading my feeds on the web. In fact, if I'm visiting The Old Reader directly in my browser, it's often to manage my subscriptions or, most likely, to try to catch up on hundreds of unread posts in a feed. In that case, I *want* a very mimized, compact view of headlines so I can scan for only the interesting posts and get through a long list rather quickly.

Here are a couple of good articles to explore other options, especially if you intend to read in the browser on a regular basis, and want to take advantage of a more magazine-like view: [Web-Based Readers](https://www.youneedfeeds.com/web-based) and [7 Best Free RSS Readers](https://bloggingwizard.com/free-rss-feed-readers/).

## Conclusion

While I actually do like to follow *people* (who will often Tweet when they have a new blog post out anyway) on Twitter, following something like Android or Chromebook tech news is much more suited to RSS. The info is not time sensitive, and it's not highly "interactive." It's higher volume, and, it's repetitive on Twitter. 

You can start completely free with "The Old Reader" and "Feed Me" (on Android) and work up to paid plans with more features if and when your usage demands it.