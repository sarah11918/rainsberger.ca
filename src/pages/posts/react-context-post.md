---
layout: ../../layouts/MarkdownPostLayout.astro
title: React Context Post
author: Sarah
date: '2021-07-18'
pubDate: '2021-07-18'
description: An example of React context in Astro, using a currency example
slug: react-context-post
tags: ["react", "astro"]
---



# Using Context in React to pass values to (grand!)child components without prop drilling - rendered in an Astro page

These are my notes as I play around first with plain old React context, and then specifically within the context of Astro. 

I had recently incorporated Firebase authentication into a Gatsby project, and the model I followed used context to pass around the logged in (or out) state. The other new project I'm experimenting runs on Astro, which does not yet allow for shared context across the entire app, but instead is structured with discrete "Isands of React" all existing indepenedently within a larger project. 

So, I wanted to take a deep dive into a simple example to explore React context firstly, as its own thing (since I'm currently using it in Gatsby) and then secondly, as a way to better understand Astro's architecture.

This is not necessarily a design recipe to follow, although it is a correct, working implementation of React context that you can use as a pattern, if that's what you're looking for. I say it's not a design recipe because, as we'll see, sometimes you don't actually want to use context at all! Sometimes, the benefits from using context to get data from A to B *don't* outweigh the risks and tradeoffs! And that's cool, but I want to explore how context is working so I can understand it when it *does* make sense to use it... and so that I can use it when that choice has already been made for me and I have to live with it, like in my Gatsby project.

So if at any point you find yourself asking, "K, but why would you even do it like that?" . . . (a) Great question! That shows real thought and care about what you're doing, and will take you far! and 2. It's because I'm practicing, testing the limits of, and yes, totally abusing the hook! (brb, starting a petition to add abuseContext() as the next official React hook.)

I used the excellent example from <a href="https://www.robinwieruch.de/react-usecontext-hook">Robin Wieruch</a> and made extensive notes-to-self along the way! 

## What we have

- DATA: an array of "book" objects e.g. id: 1, title: The Road to React, price: 19.99
- a root App, that passes the list of books (DATA) as props to the "Books" component
- a Books component, that accepts a list of books as props and maps over it, rendering a "Book" component for each element
- a Book component, that creates a line item display for a single book

### What we want

We want to be able to specify a CURRENCY SYMBOL in the root app (remember, our prices are only numbers!) and have access to that currency in the Book component (grandchild of the App), who is responsible for creating the display. Book needs to render the currency symbol, and the way things are structured now, it needs to receive this value from App.

But, if the root app defines the currency, then in order to pass that info to the Book component, it would pass a "currency" prop down to its child Books (which doesn't use it), who in turn passes it down again to Book through props.

... Or, we create and use CONTEXT that can be shared by all of the root App's descendents.

(I mean, or we make better DESIGN CHOICES, but then we wouldn't get to practice using React context! So, let's do it...)

To do this, we:
- create some currency context
- wrap our root App in a context provider, where we can specify our value for currency (e.g. "€" or "$")
- use the context ONLY IN THE EXACT COMPONENTS WHO ACTUALLY USE IT (i.e. Book but not Books)

### Makin' Context . . . 

![SNL character](/images/copies.gif)
<!-- <img src="/images/copies.gif" width="200" alt="Rob Schneider's 'Makin' Copies' character from SNL"/> -->

(No one else was watching SNL in the early 90s??)
   
```js
//Create the file src/components/CurrencyContext.jsx
import { createContext } from 'react';

const CurrencyContext = createContext();

export default CurrencyContext
```
 
### Wrappin' Context . . .

```js
//Create the file src/components/CurrencyApp.jsx
import React, { useContext } from 'react';
import CurrencyContext from '../components/CurrencyContext.jsx';
import Books from '../components/Books.jsx';

const CurrencyApp = () => {
  return (
    <CurrencyContext.Provider value="€"> //Here, we provide the value for "currency" for all descendents
      <Books list={DATA} /> 
    </CurrencyContext.Provider>
  );
};

export default CurrencyApp;
```  
 
### Usin' Context . . .

```js

//Create the file src/components/Book.jsx
import React, { useContext } from 'react';
import CurrencyContext from '../components/CurrencyContext.jsx'

const Book = ({ item }) => {
  const currency = useContext(CurrencyContext); //This is how we uu-use it!
  return (
    <li>
      {item.title} - {item.price} {currency} //<-Now, we can access "currency"
    </li>
  );
};

export default Book
```
  
    
### *Avoidin'* Context . . .
     
```js
//Create the file src/components/Books.jsx
import React from 'react'; //Look, Ma - no context!
import Book from '../components/Book';

const Books = ({ list }) => {
  return (
    <ul>
      {list.map((item) => (
        <Book key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default Books
```
 
### Providing Data

I can provide book data to the app component in different ways. For simplicity's sake, I'm just going to manually enter an array right in the CurrencyApp file. But, this data can come from another file, be fetched from an external source etc.

So, with some data, my CurrencyApp.jsx component looks like this:
   
```js
//src/components/CurrencyApp.jsx - now with DATA
import React, { useContext } from 'react';
import CurrencyContext from '../components/CurrencyContext';
import Books from "../components/Books.jsx";

const DATA = [
  {
    id: '1',
    title: 'The Road to React',
    price: 19.99,
  },
  {
    id: '2',
    title: 'The Road to GraphQL',
    price: 29.99,
  },
  {
    id: '3',
    title: 'The Road to GastbyJS',
    price: 29.99,
  },
  {
    id: '4',
    title: 'The Rocket to Astro!',
    price: 29.99,
  },
];

const CurrencyApp = () => {
  return (
    <CurrencyContext.Provider value="€">
      <Books list={DATA} />
    </CurrencyContext.Provider>
  );
};

export default CurrencyApp;
```
    
 Now, I have a fairly typical, working example of React context:
 - I have *a file that creates context* 
 - I have *an App whose return is wrapped in context*, and 
 - I *import and use the useContext hook in any (but only those) descendent components individually* who rely on data passed as an attribute from the context provider.

## The Astro Bits - rendering context-laden React component

To render my App component in an Astro (.astro) page...

- import the component in the front matter (you'll probably already be importing a layout of some kind)
- include the component (*with some kind of hydration* if it is interactive, like a button, and uses JavaScript)


```js
---
import BaseLayout from '../layouts/BaseLayout';
import CurrencyApp from '../components/CurrencyApp.jsx';
---
<BaseLayout title = "React Currency Context">
   <main>
    <CurrencyApp /> // or e.g. <CurrencyApp client:load />
  </main>
</BaseLayout>
```

... and this is what we get:
***
- The Road to React - 19.99 $
- The Road to GraphQL - 29.99 $
- The Road to GastbyJS - 29.99 $
- The Rocket to Astro! - 29.99 $  
***
Note that we did not need to hydrate this component at all; although JavaScript is executed in order to produce the formatted list of books, the final output is entirely HTML. 

(This is what Astro means when they say, "Ships with less JavaScript!" The JavaScript is executed server-side, at build, to render HTML and pass it along to the browser. You really have to *mean it* if you want to send JavaScript to the end user!)


### Speaking of hydration . . .

Well, then why don't we expand this example to create a "Buy" button for each list item so we can see what happens when JavaScript gets involved?

You weren't doing anything else today, right??

I could (and *would*, and ***should***!) just create a local onClick function for my button. But since we're exploring context, (and *only* since we're exploring context), I'm going to add *a function* to my context and pass it from the root App to a new button component that my Book component (rendering the display line item) will use.

**Note: this is terribly over-complicated and an unwise design choice! Do not do this! I'm only doing this so I can practice sharing various bits of the context to different components within my app.**

In fact, why don't we put *everything* in context?! (Other than the fact we've already decided it's overusing context for no good reason. We're just playing around to see how context works!)


```js
// src/components/CurrencyApp.jsx
import React from 'react';
import CurrencyContext from '../components/CurrencyContext.jsx';
import Books from "../components/Books.jsx";
 
//One big object, whose properties are a list, a function, and a currency symbol
const DATA = { 

  list: [
    {
      id: '1',
      title: 'The Road to React',
      price: 19.99,
    },
    {
      id: '2',
      title: 'The Road to GraphQL',
      price: 29.99,
    },
    {
      id: '3',
      title: 'The Road to GastbyJS',
      price: 29.99,
    },
    {
      id: '4',
      title: 'The Rocket to Astro!',
      //title: 'The Voyage to Astro!',
      price: 29.99,
    },
  ],
  
  buy: () => {
    alert("Sorry, this is just a test!");
  },

  currency: "$",
  
};


const CurrencyApp = () => {
  return (
    <CurrencyContext.Provider value={DATA} > //Sharing the entire object via context
        <Books /> //Note: we're no longer passing "props" because the list of books will come from context
    </CurrencyContext.Provider>
  );
};
 
export default CurrencyApp;
```

Now, each component that uses some data from the parent root App will import CurrencyContext (and access only the object properties that they use. They have access to the whole object, but I will just destructure out any object properties actually needed when using the shared context. 

(Note: in this example, each component happens to only use exactly one object property from the shared context, and a different one in each component... probably another sign that if I were *designing* here, I should examine whether in fact I *really* want to do all this via context! And, that name: CurrencyContext? Ugh. Context is so much more than currency now! When your name sucks, that's probably another sign that you're heading into dangerous waters. If I were truly *designing* this app, I'd like to think I would rename my context, and change the name in all my files. (You would, right? Because you're responsible? You've never let long-established names become meaningless, or worse, misleading?) But, I realllly just want to practice context, design be damned, so put on your lifejacket!)

```js
// src/components/Books.jsx

import React, { useContext } from 'react';
import CurrencyContext from '../components/CurrencyContext.jsx';
import Book from '../components/Book';

const Books = () => {
  const { list } = useContext(CurrencyContext) // destructure just the list array
  return (
    <ul>
      {list.map((item) => (
        <Book key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default Books
```

```js
// src/components/Book.jsx

import React, { useContext } from 'react';
import CurrencyContext from '../components/CurrencyContext.jsx';
import BookBuyButton from '../components/BookBuyButton.jsx';

const Book = ({ item }) => {
  const { currency } = useContext(CurrencyContext); //destructure just the currency symbol
 
  return (
    <li>
      {item.title} - {item.price} {currency} {' '} <BookBuyButton />
    </li>
  );
};

export default Book
```
And now, a new component, a Buy button, that will execute our buy function when clicked. (JavaScript! Yay!) This is the component that will require us to hydrate our CurrencyApp on the Astro page.

```js 
// src/componenst/BuyBookButton.jsx

import React, { useContext } from "react";

import CurrencyContext from "../components/CurrencyContext.jsx";

const BookBuyButton = () => {
  const { buy } = useContext(CurrencyContext); //destructure just the buy function
  return (
      <button onClick={buy}>Buy!</button>
  );
};

export default BookBuyButton;
```

## Drumroll please . . .
And, here's what we get. Try clicking the buttons!
    <!-- <hr />
    <CurrencyApp client:load/>
    <hr />  -->

## The Astro bits - "Islands of React"

IN PROGRESS -- write here about islands of react, and where context can and can't be shared -- relate it to state, which will be another post

## In Summary . . .

It's important to remember that this was just an exercise to understand and execute the createContext() and useContext() hooks.

One advantage that React Context give us is being able to share data among components that don't have a near common ancestor. It puts common data at the top of the tree and allows any descendents to use it. Data doesn't have to be passed down from a direct parent through props, so components that don't need the data don't have to see it. And, since it's one common source of data, you can be sure everyone pulling from context is getting the same values.

But, data that is passed this way is only available through context. A component that relies on context may be difficult to reuse elsewhere in a different.... context. I might *think* I'm writing a reusable button component (helpful!), but if it can't execute its onClick function without access to some shared context somewhere, how reusable is it really? 

What happens when I actually try to reuse that button somewhere else in the system? Do I still have access to that context? Can I easily test that component in isolation? Does the "handle clicking on a buy button" function really need to be stored separately from the button? Is any other component, other than a "Buy" button actually going to use it? (I mean, maybe yes. I don't know what you're doing. I'm sure I could create a scenario where that does make some sense. Every design choice is a tradeoff, and it makes sense to think through the consequences of these choices.)

Similarly, my Book component needs to render a currency symbol to display a line item for a book, and right now it can't perform its one job without knowing which symbol to use. Where should it get that information from, really? Context from the root of the App? Good question! Glad I don't have to care because I'm *only practicing using context* right now, not trying to make a sensible design! ;) So I'm making the choice to make that value available via shared context, but not for any particular (and perhaps flying in the face of any good!) design reasons.

<!-- ## Credits

- [Robin Wieruch](https://www.robinwieruch.de/react-usecontext-hook) - I was looking *5EVA* for an example to work through that was easy-to-understand, and made a bit more sense to discuss in words as a problem. (i.e. "Books" and "currency symbols of their prices" rather than "Child and "Grandchild" components and "context value 42"). Also, and why is this a thing, but so few blog posts I found with code examples mention **which file** the code snippet is coming from! When you're working with multiple components that use each other, it helps to be explicit about in which component stuff is happening. I appreciate that Robin's blog post does that!

- [Cassidy Williams / cassidoo](https://cassidoo.co/) - Cassidy makes a ton of great content, but my introduction to her was through her [Scrimba Building Reusable React](https://scrimba.com/learn/reusablereact) course. I took this course when it was very new (early preview!), and when *I* was very new to React, so it did feel a little advanced at the time. But even when I would think, "I'm going to have to come back to this again..." I knew it was an excellent foundation that I would grow into. Is it funny that one of the things I remember most, off the top of my head a year later, is Cassidy's voice telling me not to overuse Context?? I think that's great!

- [Bob Ziroll](https://twitter.com/bobziroll) - Bob's Scrimba courses [Learn React for Free](https://scrimba.com/learn/learnreact) and [The React Bootcamp](https://scrimba.com/learn/react) were soooo good. Full stop. As a former teacher and employer/mentor/trainer of tutors, I constantly fight against the tendency to evaluate an instructor while I'm simply trying to be a student myself. It's very distracting, and of course, it can sometimes drift towards critical thoughts like, "Well, why didn't he just say *that*?" or "It would have helped to have seen *this* example before that one."  In Bob's case, though, I had to tune out the "Wow, he's really very, very good!" noise ALL THE TIME. Pretty sure Bob is why I'm doing React AT ALL.

- [J. B. Rainsberger](https://jbrains.ca) - Probably gonna have to credit Joe on LOTS of posts going forward, because Joe. But in this case, we had an excellent discussion about design patterns. His context-skepticism was helpful to prompt me to think carefully about use case. By asking a ton of questions, (including, but not limited to, the thinly-veiled question, "Do you see why this is terrible?") he led me to some more understanding about Astro's "Islands of React," which was the whole reason for doing this little example in the first place! -->



