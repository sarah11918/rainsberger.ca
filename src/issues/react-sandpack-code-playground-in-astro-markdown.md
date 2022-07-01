---
# setup: |    
#     import MySandpack from '../../components/experiments/MySandpack.jsx'
title: React Sandpack Code Playground in Astro's Markdown!
author: Sarah
date: '2022-01-30'
description: After getting a Codepen Sandpack (embedded code playground) to work in an Astro page as an imported React component, my next task was to get this component rendered to a Markdown page, so it can be used in a blog post.
layout: ../../layouts/MarkdownPostLayout.astro
slug: react-sandpack-code-playground-in-astro-markdown
hero: "https://lh3.googleusercontent.com/pw/AM-JKLUkGRS-TEI21wRFhUQ8uOUEMs1zu2iQT9DJ69C0c-4W2n_4KFE5ZzrGjhZ_3CMiidSd9BmAFjCew3999QnfrTRHB-PrPEMnov5YLzcG1PBrBBMpjQGuuSeSBCwhrNpzry7-2Q47O-LONDbxlyO97TztBA=w250-no?"
alt: "Sandpack code playground embedded in a Markdown file showing a function that uses state, renders variables and produces a working counter"
tags: ["astro", "markdown", "react", "blogging"]
code: |
    export default function App() {
        const greeting = 'yo';
        const user = 'Sarah';
        return <h1>{greeting} {user}</h1>
    }
counter: |
    import { useState } from 'react';

    export default function App() {
        const [count, setCount] = useState(0);
        
        return (
         <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>+</button>
            <button onClick={() => setCount(count - 1)}>-</button>
         </div>
        );
    }
combined: |
    import { useState } from 'react';

    export default function App() {
        const [count, setCount] = useState(0);
        const greeting = 'yo';
        const user = 'Sarah';
        return (
         <div>
            <h1>{greeting} {user}</h1>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>+</button>
            <button onClick={() => setCount(count - 1)}>-</button>
         </div>
        );
    }
---

MySandpack client:only="react" codez={frontmatter.code}


Since [Astro .md Markdown files can render React components](/posts/components-in-markdown), I knew I should be able to get this Sandpack code playground to render on this page.

But, I want to be able to pass this component custom code for the **`App.js`** file as props, so that my playground doesn't just start by displaying basic React app template every time. This way, I can have a custom component coded and displayed right on page load.

In an .astro Astro page, [this works just fine](/experiments/codesandbox-sandpack) because I can define a variable as a string of code in my Astro frontmatter. What I wasn't sure about was trying to pass a multi-line **`App()`** function (that maybe had characters that needed escaping??) to my React component via Markdown.


## Sarah tries the weirdest things . . . 

I tried a few things, both inline and via a variable defined in front matter. (I *am* kind of proud of discovering that this would work:

```jsx
<MySandpack client:only="react" codez="export default function App() { \n const greeting= 'Hello' \n return <h1>{greeting} World</h1> \n}"/>
```
It *did* produce a multi-line function! But, no one (but me) would ever do that.)

## Sarah tries to find a more reasonable solution . . . 

So, I continued on to find a "real" solution that might be actually useful. And, it's working pretty well so far, at least for this simple case. 

I didn't want to annotate all my carriage returns (line breaks? Do we still say carriage return if we don't use typewriters anymore?), so I had to figure out another way to pass a multi-line string as props to my Sandpack component. And, Astro does now allow using front matter values as variables in Markdown, though I'd never tried passing these as props to React components. What's the worst that could happen??

I recalled using multi-line excerpts in my very old Jekyll blog, so sure enough, I checked back and saw that I had in fact formatted multi-line yaml strings before using [block scalar styles](https://stackoverflow.com/questions/3790454/how-do-i-break-a-string-in-yaml-over-multiple-lines). So, with a bit of fiddling (and, making sure to use only single quotes or back ticks instead of double quotes to define my variable strings), I ended up defining my code in my front matter like this:

```jsx
code: |
    export default function App() {
        const greeting = 'yo';
        const user = 'Sarah';
        return <h1>{greeting} {user}</h1>
    }
```

And then I could pass **`{frontmatter.code}`** into my React Sandpack component like this:

```jsx
<MySandpack client:only="react" codez={frontmatter.code}/>
```

Surely that's a solution normal people would find reasonable!

## Sarah gets fancier . . . 

What about: 

```jsx
code: |
    import { useState } from 'react';

    export default function App() {
        const [count, setCount] = useState(0);
        const greeting = 'yo';
        const user = 'Sarah';
        return (
         <div>
            <h1>{greeting} {user}</h1>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>+</button>
            <button onClick={() => setCount(count - 1)}>-</button>
         </div>
        );
    }
```

Aw, yeah... That works too! (Screenshot)
![Sandpack code playground embedded in a Markdown file showing the above function that produces a working counter](https://lh3.googleusercontent.com/pw/AM-JKLUkGRS-TEI21wRFhUQ8uOUEMs1zu2iQT9DJ69C0c-4W2n_4KFE5ZzrGjhZ_3CMiidSd9BmAFjCew3999QnfrTRHB-PrPEMnov5YLzcG1PBrBBMpjQGuuSeSBCwhrNpzry7-2Q47O-LONDbxlyO97TztBA=w1486-h701-no?)

## Instructional React Code playgrounds

This paves the way for including little React components that can be edited and enhanced, complete with browser preview, right in my blog posts! 

My biggest worry had been that entering custom code to initialize the playground would be icky. But, using the block layout in yaml works perfectly fine, is easy to type, and easy to read.

My backup plan (and, it's still not a terrible idea for some situations) would have been to make a new, individual Sandpack React component for every new code playground that I wanted to initialize. Though it would create a *lot* more component files, they could each be named, the code would only be written once in the component (not in page frontmatter), and it would be easy to import **`<SandpackCounter />`** and know exactly what I'm getting.

It would, in fact, solve one Astro problem I have right now: I can only get *one instance of the same component to render to any one page* (either .md or .astro). If I try to render the same component multiple times, only the *last* one is rendered. But, if I had two completely different components, then they would both import just fine.

But, it's working!