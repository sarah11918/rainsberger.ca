---
setup: |
    import ReactCounter from '../../components/ReactCounter.jsx'
layout: ../../layouts/MarkdownPostLayout.astro
title: Astro now has Draft Posts in Markdown!
author: Sarah
date: '2022-01-26'
pubDate: '2022-01-26'
description: "An exciting contribution by a community member has us all drafting new posts..."
slug: draft-markdown-posts-in-astro
hero: "https://lh3.googleusercontent.com/pw/AM-JKLW5_x_VX1Yc1Pyo5GwU-ptYInDKww8s1e9OxFZNGoPrqmZSu0afEyM5uLzZgnzE8ahMZ3KBbPPZE4CxZxFAz54jcbG3zdFpcSt_hrBO1elOH22xgLg1ASZfgVl9SYGB_koYDxhm8kISu6VAyJkLzvLXFQ=w250-no?"
tags: ["astro", "markdown", "blogging"]
---
Thanks to [Pranav](https://github.com/retronav), Astro [v0.22.15](https://github.com/withastro/astro/blob/main/packages/astro/CHANGELOG.md#02215) now supports adding a `draft: true` field to the front matter of a Markdown blog post to prevent the page being build during `astro build`! 🥳

With any luck, you wont see this page... until I remove the draft flag!

## UPDATE: You... *sort of* saw the post??

But, that's GOOD. Sort of!

It's actually super-fun troubleshooting and dissecting this on the [Astro Discord](https://astro.build.chat) right now. (Join us!)

So it turns out that what's actually happening is that `draft: true` is indeed, absolutely preventing the page from being built. BUT, the function we all use to generate lists of posts (e.g. Post archives, list of most recent posts, RSS items in the .xml document) is based on fetching the post data (ie Markdown front matter) from EVERY .md file that exists in a particular folder or file path.

Because this post *exists* as a file (even though it's marked as a "draft post"), it's being included in any data fetch that scans all the pages and pulls out their info. But, a page is NOT being built. So, if you click on the listing for the page, or try to go their from your RSS feed, you'll get a 404 because no page was actually built.

## Building a post, building a site... building Astro!

I'm having a ton of fun right now dealing with all the layers of this issue. I'm updating this post in one tab (so y'all don't think my site is broken) while having a discussion in support with the builder of this feature and the user who noticed something was unusual in another.

Not only are we figuring out *what* the issue is, we are actually empowered to *fix* it... either by changing the new draft feature in some way or updating our documentation. We're now discussing things like:

- what exactly *is* happening under the hood?
- what do we WANT to happen?
- what do we think a USER would expect to happen?
- should we muddy the integrity of the pure task of "fetching all your markdown content" or simply provide documented examples of how to use this basic function (with e.g. filters) to produce a particular outcome?

So, I've taken off the draft flag and you should now actually see this page. If this kind of stuff interests you, then consider joining us, and you, too, can confuse all your RSS readers!

## Here's the front matter for this page (when it was a draft)... 

```astro
---
// setup: |
//     import ReactCounter from '../../components/ReactCounter.jsx'

title: Astro now has Draft Posts in Markdown!
author: Sarah
date: '2022-01-26'
draft: true
description: "An exciting contribution by a community member has us all drafting new posts..."
layout: ../../layouts/MarkdownPostLayout.astro
slug: draft-markdown-posts-in-astro
tags: ["astro", "markdown", "blogging"]
---
```

## And here's a React Counter component...

Just so we have something else exciting in front matter to show off.  ;)

<ReactCounter client:load />
