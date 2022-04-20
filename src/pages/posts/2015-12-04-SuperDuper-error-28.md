---
title: 'How I fixed SuperDuper Error Type 28: no space left on device'
subtitle: ''
date: '2015-12-04'
excerpt: >-
  The story of "Error 28: no space left on device" means when you're quite
  certain your external hard drive is large enough to backup your laptop's
  internal hard drive.
hide_header: false
template: post
layout: ../../layouts/OldMarkdownPostLayout.astro
tags: ["solutions"]
---
Yesterday, (aka "The Day that Tech Stopped Working") after a string of tech annoyances, I figured the safest thing to do was to quickly run a backup. (I don't have automated backups, but I do run a SuperDuper backup a few times per month, and especially whenever I've made major changes to my file system.) Somewhat befitting the crazy I had, for the first time, running a SuperDuper backup failed. 

Although the last thing I wanted to do was to spend *more* time at my machine, I proceeded to research what "Error 28: no space left on device" means when you're quite certain your external hard drive is large enough to backup your laptop's internal hard drive.

Somewhat disconcertingly, the search engine hits I was getting for this error code were mostly from 2011 and 2012. Many of them seemed to affect people who had recently upgraded to Mac OS X Lion, and skimming through forum posts, seemed to involve Time Machine backups. It's nearly *2016*, I'm running Mac OS 10.10 Yosemite and I've never used Time Machine, so naturally, I had high hopes for solving this problem . . .

What I did notice, however, was people asking, "Why is SuperDuper backing up my Trashes?" and other questions related to files that shouldn't need to take up space in your backup. This made me think that there were perhaps some temporary files that, after having moved around two 40GB folders of photos, might be causing the problem. (In fact, sort of the problem, just not in the way I was thinking.)

So, I wasn't too worried, although I wasn't sure what to do about it. My first thought was that I might need to wipe and do a fresh backup from scratch. (In retrospect, given how I ended up fixing the problem, this would have worked. But, it would have taken MUCH longer that what I actually did.)

It turns out that SuperDuper was simply trying to write those new folders first before deleting the old ones, since it probably encountered them in their new location (up a level in the filesystem) before drilling down to their older positions where it would have deleted them. In the end, there wouldn't be an issue with space on the device. But given the order in which SuperDuper was likely performing the copy actions, it just didn't have a spare 80GB to play with on my external drive.

At Joe's suggestion, <b>I simply navigated to those two particular folders *on my backup drive* and deleted them manually</b>. This meant that for the moment, I didn't have a backup of those two folders (on this drive), but as soon as I ran the backup, SuperDuper would throw them back in there. I didn't know that I could manually tweak the backup drive, as I'm sure that's not the point, but it seems to have worked out just fine.

Since a lot of what I do on this machine involves organizing hundreds of GBs of photos, I'm making a note of this lesson in case it happens again! In this case, I had wanted to move two large folders out of "Pictures" so that I could set Spider Oak to simply backup and watch for future changes in that whole folder, rather than add new subfolders to the backup every time I created them.