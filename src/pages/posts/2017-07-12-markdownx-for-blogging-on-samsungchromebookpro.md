---
title: Using MarkdownX Android app for Blogging on Samsung Chromebook Pro
subtitle: ''
excerpt: >-
  I sat down to write a post about setting up my Twitter client on my phone, but
  this post quickly became about the app I'm using to write this post, instead.
date: '2017-07-12'
thumb_img_path: images/markdownxcrop.png
content_img_path: images/chromebookleaf.jpg
template: post
layout: ../../layouts/OldMarkdownPostLayout.astro
tags: ["blogging", "markdown"]
---
I sat down to write a post about setting up my Twitter client on my phone, but this post quickly became about the app I'm using to write this post, instead.

My first post written from the Chromebook used the Android app [JotterPad](https://play.google.com/store/apps/details?id=com.jotterpad.x) as a markdown editor. This time, I'm using the other app that made the cut when I was evaluating apps a few months ago: [MarkdownX](https://play.google.com/store/apps/details?id=com.ryeeeeee.markdownx).

Let the showdown begin... 

## Live Preview
One thing I really do *immediately* like about Markdown X is the double-pane mode showing my markdown writing on the left and a live, updating preview on the right. You can toggle this display in the phone app, but the Chromebook automatically uses the tablet version and gives you only this multi-view. Half of the screen is enough horizontal space for me to compose on a 12-inch Chromebook, so this is great for me. Although, some reviewers in the Play Store wish they could turn off the preview when using smaller tablets. 

![Markdown's Multi-pane view](https://lh3.googleusercontent.com/pw/AM-JKLXIYLA_noHF_Gye0P0lkRGKWLtEjkL7srZddPLeviwln6-5Xuchp9k09jPNmvE1WrXeAOwYZajdG1-nXTYb30KJ1whnSeXxjeoptKpnhIjskeAeqyn1T45DQE8wRssW6qmuLNhf60h8WnkjiYnHhpgdJg=w1752-h1169-no?.jpg)

The markdown preview, as in other editors, looks a little wonky at the top because it also displays the required [yaml front matter for my Jekyll blog](https://jekyllrb.com/docs/frontmatter/) as well as the "more" separator used for displaying just the first bit of the post on my home page.

Otherwise, the preview is as you'd expect: links show up in the preview as coloured hyperlinks, font sizes and styles are rendered as well as all the other markdown-y things. The app has a built in cheat sheet you can navigate to, which is handy because I still don't feel very fluent in markdown and have to stop myself from reverting to html tags that I already know. And, it has a markdown toolbar for some of the popular formatting options. So, it's a very nice app to **use** while actually writing.

Unfortunately, there's more to a markdown editor than just writing. What happens to those words? Where do they go? How do you return to them later?

## File Saving / Organization
This has been causing me a bit of grief, to be honest. I'm not yet sure how much to attribute this to running Android apps on a Chromebook vs. using the app itself, but it's a bit quirkier than I'd like.

MarkdownX can store your .md files either locally or on Dropbox. If locally, though, I can't find in the filesystem where the files are located. This leads me to believe that the data is being stored somewhere I can't simply navigate to through a file explorer. I like to have direct access to my files so they can be moved, deleted, backed up or even opened with other apps. There is a "share" feature available from the menu when editing a post, and the option to share as a markdown file or as html. But, I don't seem to be able to "share to" my local file system (or "export" as sometimes this option is called). So, after saving my initial draft of this post locally, I switched to saving to Dropox. This is not without its quirks, either.

Saving a file to Dropbox will automatically create a new folder labeled "markdown" in Dropbox for you. That's fine, I guess. But, when you are editing a "Dropbox" file, the autosave icon changes to an upload icon. So I assumed I had lost the notion of auto save and should therefore manually click the upload icon as I went along. (Maybe I hadn't, but since the one icon replaced the other, it's a reasonable thing to assume.) Doing so created another, nested "markdown" folder inside my "markdown" folder every time I saved. Losing the autosave is problematic enough, but if saving creates all these nested folders, then I don't see how working off of a Dropbox hosted file is at all tenable.

. . . so untenable, in fact, that I've saved and reopened this file back up in JotterPad to finish it. A bit of a shame, since I liked composing in MarkdownX very much. But, I just didn't feel comfortable enough with the file saving options. That and the app hadn't been updated since 2015 and the website listed on the Google Play store was no longer in operation. Given that JotterPad was last updated 9 days ago, I think we have our markdown editor winner.  :)

Don't get me wrong, JotterPad is working well and looks very clean. I just prefer the split screen of MarkdownX to alternating between edit mode:

![Edit Mode on JotterPad](https://lh3.googleusercontent.com/pw/AM-JKLXMZqn74KSTZN1qWI2mVwAzwh-tP8wLtvx8hxBSQvLIdN0b4uUaKXuu4pVPipMSd2PNHPZ00sb214R0oF04GdPH4Cdgs7xU3GlWwqwF3wBfy--4dE2WtbXec0LubGkj9me5MUh8hRkIXk1BSlGa_jX86g=w1752-h1169-no?.jpg)

and preview mode:

![Preview Mode on JotterPad](https://lh3.googleusercontent.com/pw/AM-JKLVJZGIBqozMuRh-Yq36T1sBcE_5PTgX9CGf5kh058e_wOoD29MgGuTmlUXcNPfXbmbgrf92B7Q04n_bPS1Spz8hMSNqCgblmL5Ye-bmWTwhtiDFxhwYTGKK2n3bZ67sL8Fai0AWdKwFFNyiVekQwTh4RQ=w1752-h1169-no?.jpg) 

In fact, what I would prefer to both of these options is something like what [Typora for Mac OS](https://typora.io/) does. Visit [Typora's website](https://typora.io/) and check out how snazzy their live preview updating *changing what you type to markdown preview as you type it* is. It sounds like it might be distracting, but it's actually amazing. In fact, the only time I felt I was coming close to actually learning and internalizing markdown was when I used Typora to compose.

I'm not done playing around with my options yet, though! Stay tuned for my next attempt at simply composing in markdown in the browswer window directly on Gitlab.com. (And, of course, I haven't even installed [MrHyde](/2017/03/01/jekyll-blog-post-entirely-via-android/) on the Chromebook yet...)

But, as far as Android markdown editor apps go, I guess I'll be sticking with JotterPad.

## UPDATE:  I found the files!

OK, so it took a little more digging, and I needed to install a separate file explorer (I use [AndExplorer](https://play.google.com/store/apps/details?id=lysesoft.andexplorer)), but I did manage to navigate to and move around my MarkdownX local files. 

Most of my apps create their own data folder directly in a top level of the Android system, but *some* apps store their data under Android>Data>(developer/app specific folder). That's where my MarkdownX files were stored. It took a while to find them because I'm on a Chromebook and with respect to viewing the *Android*-specific storage in Chrome OS's file manager. . . well, "You can't get there from here."

In a Chromebook, you can navigate to the Settings panel (settings? really?) and select "Storage Management" which will give you a path down which you can eventually see the contents of the Android portion of your machine. Although menu items such as "copy" and "move" exist in this, let's-call-it-a-file-manager(?), I didn't find these to work, even when just trying to move files around within the Android storage portion. ("Share", to either Google Drive or Dropbox did work.)

So, I think I will be doing a semi-complete 180 on my initial verdict! I did finally install [MrHyde](https://play.google.com/store/apps/details?id=org.faudroids.mrhyde) on this Chromebook, and holy crap are the early returns sweet! Whatever my final process ends up being, MrHyde will be play the starring role. I'll experiment with a few things on my next couple of posts and report back. But the next task at hand is absolutely to make this a MrHyde-optimized setup. (This app has its own markdown editor built in, so it's possible that I won't even need a separate app, but I may prefer the markdown writing experience of a dedicated, more full-featured editor like MarkdownX or JotterPad.)

Stay tuned for more about MrHyde! It's an exciting little app!
