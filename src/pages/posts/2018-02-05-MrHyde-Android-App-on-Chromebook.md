---
title: MrHyde Android App on Chromebook
subtitle: ''
description: "Unexpectedly, I've been doing most of my blog post editing directly via a browser while logged into GitLab.com instead of using an Android markdown editor. I wanted to revisit my options, however, so here goes a post composed via MrHyde."
date: '2018-02-05'
thumb_img_path: images/mrhydecomposecrop.png
content_img_path: images/chromebookleaf.jpg
template: post
layout: ../../layouts/OldMarkdownPostLayout.astro
tags: ["blogging"]
---
Unexpectedly, I've been doing most of my blog post editing directly via a browser while logged into Gitlab.com instead of using an Android markdown editor. I wanted to revisit my options, however, so here goes a post composed via MrHyde.


I'd tried to make some minor edits to a post on my phone using [MrHyde](https://play.google.com/store/apps/details?id=org.faudroids.mrhyde), but I found that pushing changes from there to Gitlab didn't work. It had been a while since I'd popped open the app on my Chromebook, however, so I thought I'd try a post here and see whether I have the same problem.

MrHyde had been working very well for locally cloning my Gitlab repository, pulling the most recent version, allowing me to create a new post or edit an existing one and preview the site before pushing. But, on my phone it had started to fail at the pushing stage. It *thinks* it has pushed, but I see no evidence of that on Gitlab.com (which is the copy that then deploys to Netlify). Recently, the app on my phone also was unable to generate a preview of my website. So, I got out of the habit of using it and ended up working on Gitlab.com directly.

Feeling adventurous this afternoon, I thought I'd experiment again. On my Chromebook, I was able to successfully clone my repository, but attempting to preview what I've written in this post thus far has failed. (Error message that it didn't work.) So, I suspect when I now try to save/push to Gitlab, the commit will similarly fail. Let's see. . . 

**Well, that was a pleasant surprise!**

So, I don't get preview, but I do get a successful commit and push. That's not nothing! And, the phone app appears able to commit+push again, too.

![MrHyde compose window](https://lh3.googleusercontent.com/pw/AM-JKLUtyNJk4j09B1fJ0BP6KnKg9jK8LCMohaLiFnC8XlEB5549VZFf9hSnD8zmxGJGA75KJD0_q31ZypqsqBzcESUJlE3GJGNYOgzNKyJOwf81F-jAGNB0_hXnvdJWe7YVgbQIo5osncLTGyIP4iU3tlhURQ=w1752-h1169-no?.jpg)
 
As you can see, it's just a basic text editor, but it does the job. And, the fact that you can see that image at all is another success!

When the MrHyde app was first released, it wasn't possible at all to navigate to the locally-cloned repository on the Android device. These files were instead kept in a hidden part of the system. After some discussion with the app creators and other users, the app was changed to make these files in a more accessible part of local storage. This means that I can now move images, or any other files for that matter, into my locally-cloned repository via an Android file explorer app. I'm currently using [X-plore](https://play.google.com/store/apps/details?id=com.lonelycatgames.Xplore) because the two-pane view is especially nice on a Chromebook.  When I push+commit, the image files are uploaded to Gitlab in the folder I've put them.

None of this may sound particularly earth shattering, but it's important to remember that I am on a Chromebook that cannot, itself, generate my Jekyll static site blog. (I haven't installed linux and am not interested in doing so at the moment.) All the Chromebook can do is create/edit/manage files. 

My website only gets updated when a commit has been pushed to Gitlab, so most of my experimentation revolves around the best way to update my Gitlab repository. Recently, this has meant logging in at Gitlab.com and manually editing markdown files online in my browser, as well as uploading individual photos one-by-one to my images folder.

Using MrHyde allows me to pull a copy of my repository and add files to (or modify files in) its existing folder structure, then commit and push. So, this is a pretty exciting development for someone trying to maintain a Jekyll static site with only an Android phone and a Chromebook! 

Firstly, this method allows me to work offline, and in any Android text editor I want. I can work without an internet connection, and I'm not at the mercy of composing into a text input field on a web page. (Because nothing *ever* goes wrong composing into text fields!) 

Secondly, it provides a snapshot backup of my files in the event that data is lost at Gitlab. True, it is not a full git history. But, in the event of sudden data loss, I have the files to recreate the most current version of the website. For my purposes, that's good enough right now. 

Thirdly, I can change more than one file at a time. I can add multiple photos to my image folder at once, rather than uploading each one individually and keeping track of which ones have or have not yet been added to Gitlab.

Additionally, it is pretty handy to just be able to whip out my phone and fix a typo on my website right in an Android app.

So, all in all, I am currently success!
