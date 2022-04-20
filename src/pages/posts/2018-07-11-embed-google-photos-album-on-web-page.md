---
title: How to Embed a Google Photos Album on a Web Page
description: "Google Photos is great for *storing* your photos. It's even becoming pretty good at *sharing* select photos with select people. But still, the problem for many of us from the Picasa Web Album days is *displaying* our albums publicly."
date: '2018-07-11'
thumb_img_path: images/gphotoalbumsPW.png
content_img_path: images/chromebookleaf.jpg
template: post
layout: ../../layouts/OldMarkdownPostLayout.astro
tags: ["Google Photos"]
---
Google Photos is great for *storing* your photos. It's even becoming pretty good at *sharing* select photos with select people. But still, the problem for many of us from the Picasa Web Album days is *displaying* our albums publicly.

## The problem:

There's no good way to publicly display a specific Google Album, or a set of specific Google Albums, not even within Google itself.

Google Photos does not provide users with a public-facing Gallery page, so I have been using my [Google Plus Profile Page](https://plus.google.com/+SarahRainsberger) and Google Collections to create [something sort of resembling a public photo gallery of Google Photos Albums](/2016/03/29/how-to-make-a-public-album-gallery-page-in-google-photos/)

If Google won't give me a proper public gallery site, then I'd like to figure out how to make my own gallery from the albums I've already created in Google Photos.

## The tool:

I stumbled across a tool at [publicgallery.org](https://www.publicalbum.org/blog/embedding-google-photos-albums) that generates a slideshow of a Google Photos album that has been "shared." (I am careful to [differentiate that from a "Google Photos shared album."](/2016/10/04/google-photos-shared-albums/) Because Google.)

Entering the URL of a Google Photos album will give you some code that you can copy into html to produce a nice, if basic, slideshow preview of all the photos in an album. The slideshow can be played, or navigated through forwards and backwards, photo-by-photo. I added the few lines of code to the html of my Photography page where I wanted the slideshow to appear, and it worked.

You can see it in action [on my Photography page](/photography).

So, thank you for this!

## What it DOES do:

- provides a nice, lightbox-y viewer for photos in a particular Google Album that can be viewed directly on my website

- allows people to "scroll" (click back and forth) through the photos in an album one at a time
- creates a playable slideshow online 

- allows me to manually add albums on a page (presumably as many as I want, organized in a grid to imitate a gallery page)

## What it does NOT do:

- generate a gallery-type, thumbnail preview of the images within a gallery so the entire contents can be viewed or scrolled at a glance

- link back to the original album (So far, it seems that I would have to write my own title/link as a separate line, not part of the element.) It would be nice if the album title displayed within the viewer were a clickable link back to the album in Google Photos.

- update to reflect changes in the original album after the slideshow was originally generated. If a photo is later removed from the album, then instead of simply not showing that photo, the "forbidden" symbol is shown in its place. If a photo is later added to the album, it won't appear in the slideshow. And, strangely, after playing around with adding/removing photos from this album, now the photos that *are* shown are displayed in a different order that I can't quite figure out.

## Conclusion:

This works as a slideshow/click-through viewing of a set of photos that you do not intend to change. 

(I was hoping I could add more photos to my sample gallery as I took new ones, but it appears that won't work.)

If you...

- have an album that is "finished" (its contents won't change)
- only need a one-by-one viewer (either automatically playing or advancing on-click)
- have access to edit the html of a web page

... then this is a good solution and adding the code worked without incident for me to produce the album viewer on my web page.
