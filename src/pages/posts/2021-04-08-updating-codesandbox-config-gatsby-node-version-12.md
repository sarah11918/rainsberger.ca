---
layout: ../../layouts/MarkdownPostLayout.astro
title: Updating Node version to fix Gatsby issues in CodeSandbox
author: Sarah Rainsberger
subtitle: 'Just another adventure in #CodingOnAChromebook!'
date: '2021-04-08'
pubDate: '2021-04-08'
description: "It just didn't make sense that no online editors were building Gatsby projects, so I decided to dive in."
hide_header: false
template: post
thumb_img_path: images/gatsbysandboxerror1.png
slug: 2021-04-08-updating-codesandbox-config-gatsby-node-version-12
tags: ["blogging", "solutions"]
---
## The Problem:

I'd been doing most of my vanilla JavaScript and React coding in Replit, but now that I was finally ready to peek under the hood of Gatsby and try a basic starter project, I noticed that Gatsby was not (no longer?) one of the default starter project languages in Replit. I tried importing a Gatsby repository into Replit, and it wouldn't build. Hunting around in the forums, it seemed like Gatsby was indeed an issue on Replit and whatever support there may have been at one point was quietly dropped. CodeSandbox, however, seemed to have tons of Gatsby projects. So, I took this as an opportunity to spend a little time over there using their online IDE.

When I picked a project to fork, however, I was getting a fatal error upon build. So I tried another project, and another, and another... same thing. I knew that Gatsby had recently updated to V3, and eventually figured out that Node 12 is required, but CodeSandbox was consistently using Node 10. (I assume that a similar issue was affecting Replit.)

But, there were *dozens* (hundreds?) of Gatsby projects on CodeSandbox... many of the previews just showing "502 Bad Gateway" instead of a main page thumbnail, and most of them just not building at all. So, surely they intended to support Gatsby (you can still choose a Gatsby Starter when creating a new project), so finally I asked for help.

## The Solution:

Fortunately Sara Vieira [@NikkitaFTW](https://twitter.com/nikkitaftw) noticed my tweet and created a Gatsby starter for me. What I noticed was that this project had a sandbox.config.json file that included the following code:

```js
{
    "infiniteLoopProtection": true,
    "hardReloadOnChange": false,
    "view": "browser",
    "container": {
        "node": "12"
    }
}
```

(OK, to be completely honest, I didn't realize it was just some regular-old code file because when I view it in CodeSandbox, it's "helpfully" rendered so that I see a bunch of input fields for selecting options. Like it's A. Thing.) But today, I realized I could just view the plain content of the file, and that it *was* just a file I could add to *any* of my CodeSandbox projects! (I don't know why it didn't occur to me before... like this was the one magical Gatsby project that was going to work on CodeSandbox... )

![CodeSandbox configuration options as a GUI](https://lh3.googleusercontent.com/pw/AM-JKLUIekiQSUYVO3nOE-grRvhzDXQLGkwuWqNNCLL7mVlk3UMNT3UvhMHL29_O9gW50Q1aYtouRs8cbgTp_9OOnoH_mQ3BJVdX3FUsZbJYxp8eDCkPgsDMbjBfVHnOcADnwYN1S84p_mMkDdngeP_WSTc_Zw=w2384-h1380-no?.jpg)

So once again, realizing that "this can't possibly be how it's supposed to work" and never being afraid to just try (and often break) things, I tried just adding that config file to a different Gatsby project and now my new forked-from-elsewhere Gatsby project is also working in CodeSandbox! SMRT! (Though, it does make me wonder why that config file isn't just there by default in every project. But that's a topic for my "Online Code Editors are basically made for already-developers, and all the help/support topics assume you already know all the ins and outs of code editors and development stuff, and only need help with the "now you're doing it online" aspect" collection of essays.)

![CodeSandbox configuration options as code](https://lh3.googleusercontent.com/pw/AM-JKLVIWIwZ1JbF3DfQbpdGnvtTio6053otcBT_HoplXjmCwqFOqXtb0u_sf0diM1UIaJKfsrIw9kcQGCLElrybSIDJhRL-A4BbUzRyOYH_p9LshFLYfit1Lxcq-J8KOwxPfSfX6T_CuB1ctNkv8WJg6UNHdA=w1680-h974-no?.jpg)

This is one of the more frustrating aspects of trying to learn (and do) coding on a Chromebook (without Linux) entirely in browser-based editors. With no local environment, I don't have a lot of control over my own environment. I still don't think you can "Gatsby in Replit" at all, so it's great that there are several different online coding options, even if I have to figure out each one. And, CodeSandbox has now become my Gatsby playground!

(Aside: Let's see how this post works! This is my first attempt at using Stackbit's new dual content-code editor. And, uh, of course, I broke it. Then I kind of hacked my way back into something that seems to be working again, and now I'm just gonna hit publish and see what happens!)
