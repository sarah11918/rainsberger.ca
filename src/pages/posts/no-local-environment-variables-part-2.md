---
layout: ../../layouts/MarkdownPostLayout.astro
title: Local environment variables -- without the local environment Part 2
author: Sarah
date: '2021-10-31'
pubDate: '2021-10-31'
description: One of my APIs requires that I make an authenticated call using Headers in a React component, rendered on an Astro page. This was causing me some grief in Gitpod with my not-so-local environment variables. Here's how the Gitpod community solved it for me!
slug: no-local-environment-variables-part-2
tags: ["no local dev environment"]
---
# Local Environment Variables... without the local! (Part 2)

For a straightforward API call with my API key included right in the URL, I had no problem fetching data using an environment variable (stored both in Gitpod and in Netlify) in the JavaScript code block of my Astro page. (You can see how it's used in [Part 1](/posts/no-local-environment-variables-part-1).)

But, using the eBird API requires a call with Headers which I am making within a React component. 

Problems arose while attempting to replace this string with an environment variable. While this variable appeared to be available upon initial render, almost immediately, the `process` object was not available to my code, causing my component to "disappear" from my Astro page and a console message that process was not defined. The only version of my code that successfully ran used my API key directly as a string in my Header, which obviously exposed it in my source code. Here's how the friendly Gitpod community contributed to my site and at least solved the problem of the exposed API key... (embedded as a CodePen to avoid some Markdown woes.)

<p class="codepen" data-height="300" data-theme-id="light" data-default-tab="js" data-slug-hash="OJjxxZQ" data-editable="true" data-user="sarah11918" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/sarah11918/pen/OJjxxZQ">
  Untitled</a> by Sarah Rainsberger (<a href="https://codepen.io/sarah11918">@sarah11918</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

This script runs on start and build, by adding the command to my `package.json`:
```json
{
  "name": "sastro",
  "version": "1.0.0",
  "private": true,
  "description": "Sarah Rainsberger's personal website",
  "main": "src/pages/index.astro",
  "scripts": {
    "start": "bash parseenv.sh astro dev",
    "build": "bash parseenv.sh astro build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "dependencies": {
    ...
  }
```
This script looks for any key(s) listed listed within it, and anywhere in my code I have typed `process.env.KEY_LISTED_IN_THE_SCRIPT` it temporarily swaps out that string with the actual API key's value from my environment variables that are held by both Gitpod and Netlify. The script also provides a helpful message indicating all files that have been modified to temporarily use the value instead of the variable.

![](https://lh3.googleusercontent.com/pw/AM-JKLXH1LewcHuk-Q0YHSb3o6FwBQsSs9AvpcoJUj-7hEf0VlCvtpZJgaoI5nx_PnbMfjlG4azae_4XSFnqlb17xRKNMGz63Bz8v2jZLcu4Ki8Tqpks4iYaiGTTD3I4ZqhF-V4FmEQoSw7u85Dkxc4JqKDs9g=w1418-h666-no?)

When I `CTRL-C` to terminate the server running dev or build, the script executes a reverse swap so that my code is reverted to using environment variables again. And again, the script provides confirmation of each file that has been reverted.

![](https://lh3.googleusercontent.com/pw/AM-JKLXF2-Lyotn3_Q08cRoIFR8yWYokd8C-aoC35-ehLjErLX44I6UHwZ7bqrNuyB3jJGkhRoUmATAOlHNNr6a3TIaWB1WJb5jWPtY5nAF-DZgeCUMlDYCTrVgxuYLMHYkIPXYFGUyxQLNlHOp3o-ozUoIqaA=w1230-h388-no?)

So, I haven't yet figured out exactly at what stage in my React component's lifecycle `process` becomes unavailable to it, and how being rendered within an Astro page relates to it. But, at least for the purposes of building and deploying, my React app has been given the API value it needs to execute its search, and my code visible on GitHub only shows a reference to the environment variable.

I understand that this solution is "risky and invites failure." Here are a couple of things that immediately come to mind that I now have to be careful about:

- I have to remember not to commit code without first `CTRL+C` stopping the server!
- Since many of my blog posts include code snippets of the material I'm discussing, I have to remember not to type out the actual string `{process.env.THAT_KEY}` in my code sample. (Whereas normally, that would be a totally safe thing to do.)

But, until I have a better solution, or at least a better understanding of the problem, this does achieve the goal of storing my eBird API key as an environment variable and not exposing it by committing it to source.