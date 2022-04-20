---
title: IF Timer v1.0
excerpt: >-
  A quick post to announce a very exciting thing:  I have an app, and now you
  can have it, too!  Get IF Timer now, or read more about it first. . .
date: '2017-12-15'
thumb_img_path: images/fastingcrop.png
hide_header: false
template: post
content_img_path: images/chromebookleaf.jpg
layout: ../../layouts/OldMarkdownPostLayout.astro
tags: ["app"]
---
A quick post to announce a very exciting thing:

I have an app, and now you can have it, too!

Get <a href="https://iftimer.bubbleapps.io">IF Timer</a> now, or read more about it first. . . 

<!-- more -->

## Quick Introduction

Two years ago, I was frustrated by the lack of (what I considered to be) a very simple function that I couldn't find in any Android app: "How long since . . . ?" In fact, you're probably laughing now thinking, "Why don't you just get a generic stopwatch/timer thing? There MUST be dozens, if not hundreds in the app store?" Yeah, you'd think. In fact, although what I wanted was a very simple idea, nothing (as of two years ago, anyway) did exactly what I wanted.

I didn't need a *timer*. I didn't need something to tell me when x minutes or hours had passed. I literally wanted to push a button when I'd done something, and then hours, or even days later, be able to return to it so I'd know when the last time I had done this thing was.

On a train from Germany to Slovakia just a week earlier, Joe and I had been pairing on a "tutoring app" for fun, since the idea I had was similarly basic and he thought it would be a good introduction to code for me. (By "tutoring app" I mean an app wherein a student who feels "stuck" presses a button and randomly gets one of my "familiar phrases" like, "What do YOU think you should do next?" or "What information in the question have you not used yet?") As a result of that train ride, we got "Tutr"

![Coding on a train](https://lh3.googleusercontent.com/pw/AM-JKLXdQcxIacFKH6x4PPZxXcU_8Y5ak-pdQnHeE1NtAiCcdWFQ89JXCisZ5BteykM5vJYF6hW2r_17aAZGbVM9V0Qj3Rg2FnIo-uU2qoumH_tquKMfF23hGIf4D7lgPPLqjdVgqoWejNjG9q6NSWXcFefkWg=w1752-h987-no?.jpg)
![Me with my first 'app'](https://lh3.googleusercontent.com/pw/AM-JKLU52pi7OY8FK3BlrVoQWf_v5rgJ7NVN8b-VQj4mHOi_gVaVn9TGvdCvwUfrJ2q_MadkQFk30Hy2WaX7dsdXELeGUraOsBquD3nNTclXhqZuQuxEkq9UYXmjpFKbfCTJiFy_fnsnbmxiypCKTgfbua2tnA=w1752-h987-no?.jpg)

## Second Verse, Same as the First

A few days later, with some new skillz behind us and ready to tackle my actual problem, we created "Sinz"

Sinz had some issues, but it ... worked? Yes, I could press a button and then whenever I checked back in with Sinz, it would tell me how much time had passed. Unless the app had stopped running in the background. Unless the screen had been rotated. You get the picture. But it was a nice little experiment and my first glimpse into solving my own problems with our* own tech. It wasn't really *my* tech, though I was an active contributer with respect to requirements and logic and test cases. And it wasn't something I could recreate on my own. I didn't have a dev environment set up on my own machine and a few days of reading and following code certainly wasn't enough for me to start *writing* code from scratch.

## Time for MY app

A few months later, I heard of an upcoming webinar being given by Tara Reed of [Apps Without Code](https://appswithoutcode.com). Conveniently, it was on one of Joe's bowling nights, so I decided to participate. Thanks to her inspiring story, and an introduction to some services that can be used to implement the functions of apps, without actually coding an app directly, I signed up for a [bubble.is](https://bubble.is) account the next day and started playing around. I'd used IFTTT (If This Then That) to cobble together some other tiny systems before, so that didn't seem too beyond me. (In fact, I implemented a [sharing feature for the read-it-later service Pocket](/2017/02/05/direct-share-to-another-pocket-account-using-ifttt-and-todoist/) before they themselves had implemented proper sharing. And still to this day, my feature goes "one step further" than theirs. So, Joe and I are the proud, exclusive users of super-direct-insta-share in Pocket.)

I spent some time going through bubble's tutorials (so unlike me!) to get used to how it worked. After a afternoon of logic and conditionals (and bad naming that will be addressed in version 2!), I found that I had a working web app that did exactly what I wanted.

## Sinz 2.0 = IF Timer 1.0

One of the things I had wanted Sinz to track was my intermittent fasting. Joe and I now typically eat only once per day, and fast the rest of the day. I wanted to always have at a glance how long I'd been fasting without having to do any arithmetic in my head. How long has it been since we ate? 8 hours? 16 hours? Surely this seemed like a simple thing my phone could do for me. Version 0.1 of my app did exactly that. Reliably, without fail. (Unless, of course, I tried to get fancy and make misguided changes to the app that already worked, of course!)

I'm very pleased to announce version 1.0 today, which (cross fingers) not only works reliably, but has a few niceties, too. And, most importantly, this past week I figured out how to create a login feature (with, eventually, log out!) and support multiple users. (This was a big step for me since previously, in order to show anyone my app and let them play with it by pressing buttons, they'd be changing MY personal data!)

Allowing multiple users and figuring out how to maintain separate user data means that not only can I now *show* people my app (which I really couldn't before), but I can now have other people *use* my app. And in fact, a handful of people currently are! (And you can, too.)

## How to use IF Timer

You might not think of yourself as someone who fasts, but actually, we all do! If you sleep, you fast! Some people just do it a little more intentionally, or for a little longer than others. Anyone can use this app just to see what "state" your body is currently running in based on when you last consumed food.

There's a little info button in the app to give you the pop-up cheat sheet for fasting: for 3 - 5 hours after you eat, your body is digesting. If you go a full 12 hours without consuming food, your body actually does start to "fast" (even though we think of it as fasting for 12 hours) and that's when your body really starts to burn fat at a nice clip. In between, you're "satiated." So, if you press the "Start Fasting" button in IF Timer, then the app will hold on to that time and every time you come back to refresh the page (it's a web app, so it just runs in a browser), your status will be updated and you can see at a glance how long you've been fasting and what fasting state your body is in (based on the theory of roughly how long your body does what).

![App in use, showing 'Fed' state](https://lh3.googleusercontent.com/pw/AM-JKLUHi-n3NT64l4huA8MJjQEhFXznIVKCSavKvtt1OzT-lo6tEfB8JULTAhELowYKeu3SwJvI0g_YjfNKU8dIfnnArtsYlzbjzbxZw3twSuq19IG1PhoLMTqUbvTYXR5lScNWmW8t5H0aSSpBmV_VxT9p2w=w250-no?.jpg)
![App in use, showing 'Fasting' state](https://lh3.googleusercontent.com/pw/AM-JKLVUDrH7Go_5OF1TizDG-ijAgVq196dX0S6XoeBhXxNZtNGo8lPWcc2Q9-GJMxk48tBRSIkImoNiO8BgMSo1opCeqaPD2Ey0nn1DVKXlo9jfLUeHRzYGPPRe6frVUST4C6BP7alNA-TuLy2FRkMjYRKOWA=w250-no?.jpg)

Even if you don't intentionally incorporate fasting into your routine, you can use this app to see how frequently you "hit green" and get your body into a nice, healthy fat-burning state. (There are other health benefits of hitting the fasted state, too. But most of us don't need much more convincing than fat-burning!) 

That's all it does for now, but that's enough for version 1.0 while I work on some other ideas.

If you'd like to try it, just head to [IF Timer]https://iftimer.bubbleapps.io in any browser, on any device, and sign up with your email address.

Please bear in mind that it *is* version 1.0 and I've focused more on the function than the appearance. But, I have some ideas for improvement in mind already and am happy to receive constructive feedback.
