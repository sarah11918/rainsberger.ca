---
layout: ../../layouts/MarkdownPostLayout.astro
title: Setting up React Testing Library in an Astro project
author: Sarah
date: '2021-09-28'
pubDate: '2021-09-28'
description: I am starting to experiment with React unit testing, and since my Astro blog contains React components, I wanted to see what happens when I tried adding React Testing Library to Astro!
slug: react-testing-library-astro
tags: ["react", "astro", "testing"]
---
# React Testing Library ... in Astro!

Since I have all of ONE DAY of experience with [React Testing Library](https://testing-library.com/docs/react-testing-library/intro) under my belt, it's obviously time to try to integrate it into this blog for testing my React components.

RTL is supported by all Create-React-App projects out of the box, so it's easy to get started once you have [a fresh create-react-app repository to start working on](https://twitter.com/sarah11918/status/1442137656587075585). Even if your project doesn't come with built-in support, you can still add it. I didn't know whether to expect RTL to play nicely with Astro, but for sure, I was going to find out!

## Dependencies

My guess is that most people will `npm install @testing-library/react` but you know that, for better or worse, I'm still in the habit of manually editing my `package.json` because that's what people on Chromebooks, without Linux and terminals, do. My additions, based on comparing what was in create-react-app but wasn't already in my Astro project, were:

```json
 "scripts": {
    "start": "astro dev",
+    "build": "astro build",
+    "test": "react-scripts test",
+    "eject": "react-scripts eject"
  },
  
"dependencies": {
    "@snowpack/plugin-postcss": "1.4.3",
    "astro": "0.20.4",
    "astro-list-component": "^0.1.1",
+    "@testing-library/jest-dom": "^5.11.4",
+    "@testing-library/react": "^11.1.0",
+    "@testing-library/user-event": "^12.1.10",
    "node": "^14.13.1",
    "npm": "^7.22.0",
    "react": "^17",
    "react-router-dom": "^5.2.0",
    "react-twitter-widgets": "1.10.0",
    "rollup-plugin-terser": "7.0.2",
+    "react-scripts": "4.0.3",
+    "web-vitals": "^1.0.1"
  },
  
+ "eslintConfig": {
+    "extends": [
+      "react-app",
+      "react-app/jest"
+    ]
+  },
```

## Tests!

Again, with the ALL OF ONE DAY I have been using React Testing Library, I have seen two non-trivially different styles to writing tests. So, I am not yet in any position to compare the merits of either style. I just wanted to make sure I could get ONE passing test written so that I had reasonable confidence my installation worked.

Using a Button.jsx component that was already in my repository from an early "Experiment" page, and of course, not knowing any better, I created `Button.test.js` into which I wrote a test that mirrored the example I'd seen in an earlier tutorial.

```js
// src/components/Button.test.js

import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from './Button';
import "@testing-library/jest-dom/extend-expect"

let getByTestId

beforeEach(()=>{
    const component = render(<Button />)
    getByTestId = component.getByTestId
})

test("header renders with correct text", ()=> {
    const headerElement = getByTestId("header");
    
    expect(headerElement.textContent).toBe("Toggle Button");
});
```

(I agree, it looks a little different than most of the tutorial examples. And I may choose to re-write it more in keeping with a different style. But, a passing test is a passing test!)

## Success!

My only goal at the moment was to see whether React Testing Library could, in fact, be used in an Astro project. I have verified that I can `npm run test` in the Gitpod terminal and I get the test feedback that I'm expecting.

![](https://lh3.googleusercontent.com/pw/AM-JKLWQdzXdjDK8DfpE2DPelNFo8tRZJeyjc9-NgUYCmCxuLxGF4nCUctW_NeHzZfuUgkKbug5HthVNqy2FdMDOQGBRYLhDkreXd4VNQviypUBlNIqRF9msypXCcRB0BmrJgdet6iRlcZHHgYChcfqoCJ49aQ=w1680-h1120-no?).

## Follow-up

I still have much to learn about how to write tests. (I initially wrote, "... how to write GOOD tests" but I'm still really figuring out syntax, in addition to style and plain old *convention*. So. don't hold that against me!)

Today's task was to figure out whether React Testing Library to test React components (wrapped and rendered in an Astro project) needed anything extra to at least RUN in Astro. Good news: adding the dependency seems to "just work."

Now the task is to learn the ins and outs of React Testing Library, and maybe eventually write some GOOD tests. (Of course, BEFORE writing the code that makes them pass.)


