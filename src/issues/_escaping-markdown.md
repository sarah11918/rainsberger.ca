---
layout: ../../layouts/MarkdownPostLayout.astro
title: "Escaping Markdown Characters in Astro"
date: '2021-08-12'
author: "Sarah Rainsberger"
description: "Exploring the ins and outs of special Markdown characters in Astro"
slug: "escaping-markdown"
tags: ["astro", "markdown"]
---

Here is a list of the characters that may need to be escaped with the \ character according to [MarkdownGuide.org](https://www.markdownguide.org/):

```
\ ` * _ { } [ ] < > ( ) # + - . ! |
```
-----

Characters that _must_ be escaped:

1. The single backtick:

```
  `
```

2. The left curly brace: `{`

*Fun fact! Astro can't actually render this character at all yet! [This pull request](https://github.com/snowpackjs/astro/pull/1094) will fix that, by the time you read this. Thanks Jon! ;)*

----- 

Characters that _can_ render without escaping, **but only if they do not appear in a position where they'd usually have a "function" in Markdown**:

- \* (unless it occurs at the beginning of a line, or starting a line in a list item, in which case it is treated like a bullet) Note: _edf does not need any escaping unless there is a second _ somewhere later that occurs without a space in front of it.

- _Also needs no escaping provided that a second _ does not touch any text characters to "close" it.
- \# needs to be escaped if it starts a line but # does need to be escaped
- [and], (and),
- < and > (but, `<and>` does not render any visible text)
- \+ is only an issue in positions where it may be interpeted as a bullet
- \- is similarly an issue at the beginning of a line when it may be interepreted as a bullet, (or multiple --- in succession as a horizontal line)
- | will need to be escaped in markdown tables, so it is not interpreted as a new column, and can also be written as `&#124;`
- .  ! } \