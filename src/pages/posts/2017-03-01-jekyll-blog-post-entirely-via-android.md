---
layout: ../../layouts/OldMarkdownPostLayout.astro
title: Jekyll Blog Post Entirely via Android
excerpt: >-
  While I was  mostly ready to switch from Mac to ChromeOS/Android, the last
  piece of the puzzle was this Jekyll blog which is generated on my machine,
  then the static site is uploaded to Heroku. With no means of generating the
  site locally on a Chromebook or Android device, I had to spend some time
  figuring out my alternatives.

  If you can read this, then I am success! And here's what I did...
date: '2017-03-01'
pubDate: '2017-03-01'
thumb_img_path:
content_img_path: images/chromebookleaf.jpg
template: post
tags: ["blogging"]
---
The Samsung Chromebook Plus is already out in the wild and available for purchase. With the calendar flipping to March today, I can now say that the PRO model will be available _next month_!

While I was  mostly ready to switch from Mac to ChromeOS/Android, the last piece of the puzzle was this Jekyll blog which is generated on my machine, then the static site is uploaded to Heroku. With no means of generating the site locally on a Chromebook or Android device, I had to spend some time figuring out my alternatives.

If you can read this, then our efforts worked! And here's what we did...

<!-- more -->

Last year, I discovered the Android app MrHyde by Faudroids. This is a fairly basic app, but it allows me to access (push/pull/edit/preview) a GitLab repository. (Also currently works with GitHub and BitBucket)

This means that within the app, I can very easily checkout a copy of my repository and store it locally on my device. It also provides a built-in text editor for making changes to my files. These changes can be previewed, committed and pushed back to my online GitLab repository. It worked perfectly for maintaining the repository, but it didn't solve the "need to run ruby to generate the static site" problem.

Last month, I spent time researching how the cool kids were choosing to push from GitLab to Heroku. Once I was confident I knew enough to describe the solution to Joe, he graciously took over. (The actual execution was beyond my current abilities.) We debated a couple of options, but settled on choosing to have Heroku itself generate the site whenever a new version was pushed to it. This eliminated the need for me to have a local machine that could run ruby. After he configured my Heroku app to be able to generate my site as a Jekyll blog, then he figured out how to set up GitLab CI (continuous integration) so that every new commit pushed to GitLab triggers an action to push the updated repository to Heroku. You can read the technical details at [The Code Whisperer](http://blog.thecodewhisperer.com/permalink/deploying-jekyll-to-heroku-using-gitlab-ci).

As to how this works in practice, when Joe noticed a small typo on my blog, I was able to quickly fix the typo and update the website *right from my phone, without leaving the treadmill* using MrHyde. I think that's pretty cool!

However, that was just making a minor change to a file that already existed. Don't get me wrong, that's still a *huge* deal, and I was thrilled. But, I also needed to write new posts (like this one), which meant adding new files to the GitLab repository. MrHyde does have an option to create a new text file using its own text editor, but not the option to import a text file created elsewhere. While MrHyde's internal text editor is quite serviceable and markdown-friendly with built-in formatting options, it's not necessarily my first choice of markdown editor for composing. I may also prefer to compose drafts outside of the app entirely, or have a template file as a starting point.

My initial reaction was to find wherever on my phone MrHyde was writing the local repository and see if I could simply sneak a file of my own in there by adding via a file manager. My hope was that the app would simply commit whatever changes had been made to that file structure, whether or not the changes were made within the app itself. Then, I could create my markdown files with whatever app, system or process I wanted and simply move the completed files into the proper place in my file structure. The problem was that for the life of me I couldn't find the repository's files in local storage on my phone. I *knew* they were there, but I just couldn't navigate to them.

So feeling like a bit of an idiot, I emailed the developer and asked where the files were being stored and told him what I was hoping to do with the app. It turns out it wasn't me: the developer had, by design for safety reasons, put the files in a non-accessible part of the phone's storage. He opened an issue on the app's Github page asking for opinions from other users about moving the location to somewhere public and accessible, though less secure. It turns out, other users had wanted the very same thing and were eager to have the storage moved, too!

After some back and forth with the developer and other users on the project's Github issues page, we eventually got through the technical hurdles like different Android devices putting app information in slightly different public locations, or what worked fine for people with Github repositories didn't seem to work for people with GitLab repositories. Last week, a new version of the app was available that worked for everyone who chimed in, and so tonight, I'm attempting my very first entirely Android blog post.

I started with a basic markdown template which I opened on my tablet in MarkdownX (a two-pane markdown editor that shows a live preview on the right while you type on the left). I'm composing on a bluetooth keyboard then saving the file back to Dropbox so I can grab the file on my phone and move it to my MrHyde directory there. (This step is only because my tablet is quite old and slow, so previewing with MrHyde on the tablet doesn't work very well. But, it's a much larger screen for composing with two panes. Otherwise, I could simply do all of this within the tablet itself.) On the phone, I'll preview the post, make any fine adjustments in-app via its own text editor, then commit and push the changes to GitLab. Once I've done that, GitLab CI and Heroku will do their respective things and, about seven minutes later, this post will be live on my website. Let's see whether we just made magic happen!
