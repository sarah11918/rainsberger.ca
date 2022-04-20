---
title: A footer that sits at the bottom of "short" pages
author: Sarah
date: '2021-07-31'
description: Using flex-grow to create a "spacer" div to solve the problem of a footer displaying halfway down a page when you don't have enough content to fill the entire height of the screen.
layout: ../../layouts/MarkdownPostLayout.astro
slug: flex-responsive-footer
tags: ["astro", "css"]
---

Because some of my pages are just short testing pages, maybe containing a single React component, there isn't always enough content to push the footer right down to the bottom of the page. (See my [About](/about) page for an example.)

Here's a basic framework for an Astro Layout file (e.g. BaseLayout.astro) that uses flex-grow to incorporate a "spacer" \<div\> immediately before the footer.

```html
---
const {title} = Astro.props;
---
<!DOCTYPE html>
<html lang="en">
  <head></head>
  <body style="min-height:100vh; display:flex; flex-direction: column">
    <header><header>
    <slot /> <-- Page content, which could be very short!
    <div class="spacer" style="flex-grow:1"></div>
    <footer>Spacer keeps me at page bottom!</footer>
  </body>
</html>
```

WHAT YOU NOW GET ON A "SHORT" PAGE:

<blockquote style="background: lightgray; padding: 1em;">
Stuff that takes as much space as it needs, starting at the top of the page.

SPACER

Stuff that takes as much space as it needs, but ends at the bottom of the visible page instead of immediately following the earlier stuff.

</blockquote>

Add any other content/components you want, but remember that the spacer will expand in height to fill any empty space. It will push down whatever is below it, if necessary, to exactly fill the visible page.

So, put the spacer immediately before what you want to appear at the bottom of any empty space, in my case, just the footer. But you could put something else there, too.