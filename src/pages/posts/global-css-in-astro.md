---
title: Adventures with Global CSS in Astro
author: Sarah
date: '2021-07-30'
description: A comparison of what happened (spoiler alert -- it got weird!) when I tried to import styles/global.css into my layout.astro file.
layout: ../../layouts/MarkdownPostLayout.astro
slug: global-css-in-astro
tags: ["astro", "css"]
---

Full disclosure: I have no idea whether what I was doing was _supposed_ to work, but, it didn't _not_ work (by all appearances)... until I ran Lighthouse and realized that I had no \<!DOCTYPE html\> in my HTML output.

Here's just my documenting what happened...

## Stylin'

After a couple of weeks of an unstyled, text-based Astro site, I wanted to make it look a little nicer. Specifically, I had an example in CodePen of a CSS-based responsive navigation menu I'd previously built during one of my Scrimba classes. So, it was time to introduce CSS to Astro.

## Making Styles available to Layout.astro

Had I read the Astro docs? Sure. Did I _follow_ the Astro docs? No. For whatever reason, that's neither here nor there, I decided to "give" my layout component styles by...

```js
---
const {title} = Astro.props;
import '../styles/global.css';
import '../styles/nav.css';
---
<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta name="description" content={title}>
      <title>{title} - Astro Elsa</title>
    </head>
    <body>
    ... etc
```

I imported everything else I wanted to use, so I figured this would give me my styles. And, it did! Perfect. Done.

## To \<!DOCTYPE html\>, or not to \<!DOCTYPE html\>

Everything _worked_ and _looked_ fine, but running Lighthouse told me that I had no \<!DOCTYPE html\> tag. When I inspected and viewed the source of my site's index page, my source started with \<html\> and then included what turned out to be an Astro-generated link to a single .css file that incorporated the contents of both of my individual .css files:

```html
<html lang="en">
  <head>
    <link rel="stylesheet" href="/_astro/common-1n5K9K.css" type="text/css">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="HomePage>
    <title>HomePage - Astro Elsa</title>
  </head>
```

## Checking the Astro docs

When I went to the documentation, sure enough, I didn't see anything indicating that this was "the way" ("a way?") to import styles, but rather, I did see an example of including regular ol' stylesheet links in \<head\> to the files. So, I changed my code to:

```js
---
const {title} = Astro.props;
---
<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta name="description" content={title}>
      <title>{title} - Astro Elsa</title>
      <link rel="stylesheet" href="/styles/global.css" />
      <link rel="stylesheet" href="/styles/nav.css" />
    </head>
    <body>
```

... and sure enough, now my html source looked like:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="HomePage>
    <title>HomePage - Astro Elsa</title>
    <link rel="stylesheet" href="/_astro/common-Z9tgXF.css" type="text/css" />
  </head>
</html>
```

## Conclusion:

Both ways of incorporating my css files resulted in my css rules being combined into one /\_astro/common-\*\*\*\*\*\*.css file and a stylesheet link being created in \<head\>.

But, when importing my styles within the astro layout component's code fence, this link was inserted _at the very beginning of the page head_. When I included a stylesheet reference link myself, the astro css file's link appeared in the same position as where I'd written it in my component. I don't know whether this is significant, I'm just observing it as a difference between the two situations.

And, the \<!DOCTYPE html\> was, by some process, removed when importing styles. When I wrote my own stylesheet links, however, even though Astro did combine them and give me a new css file, it did not also remove my !doctype tag.

So, that's what happened!
