---
setup: |
    import ReactCounter from '../../components/ReactCounter.jsx'
    import BirdFetchComponent from '../../components/experiments/BirdFetchComponent.jsx'

title: Hello Astro v0.21.0 - Components in Markdown!
author: Sarah
date: '2021-11-22'
description: This is my first Markdown file written in "new" Astro... so let's see some of those components in markdown we've all been waiting for!
layout: ../../layouts/MarkdownPostLayout.astro
slug: components-in-markdown
tags: ["astro", "markdown"]
---
One of the features we've all been waiting for in the Astro rewrite has been components in Markdown! 🥳

## Here's a React Counter component...

<ReactCounter client:load/>

## And here's another React component...

<BirdFetchComponent client:load/>

## And here's the code for this page... 

Note how we import components via `setup` at the top of the Markdown page's front matter, but then everything else is just as you'd expect in Markdown:

```astro
---
setup: |
    import ReactCounter from '../../components/ReactCounter.jsx'
    import BirdFetchComponent from '../../components/experiments/BirdFetchComponent.jsx'

title: Hello Astro v0.21.0 - Components in Markdown!
author: Sarah
date: 2021-11-22
description: This is my first Markdown file written in "new" Astro... so let's see some of those components in markdown we've all been waiting for!
layout: ../../layouts/MarkdownPostLayout.astro
---
One of the features we've all been waiting for in the Astro rewrite has been components in Markdown! 🥳

## Here's a React Counter component...

<ReactCounter client:load/>

## And here's another React component...

<BirdFetchComponent client:load/>

```

