---
title: Local environment variables -- without the local environment
author: Sarah
date: '2021-10-19'
description: I make use of APIs for accessing both my eBird and Flickr data, but each of these require authenticated access with a secret key. Here's how I can use environment variables while developing on my Chromebook in Gitpod, and deploying to production in Netlify without a local environment in which to store them!
layout: ../../layouts/MarkdownPostLayout.astro
slug: no-local-environment-variables-part-1
tags: ["no local dev environment"]
---
# Local Environment Variables... without the local! (Part 1)

It's common to put environment variables in a dotenv or config file, but with no local environment, only Gitpod's development environment or Netlify's build environment, it's only important that *they* have my environment variables. All the online places that run my code have site options where I can specify these via a dashboard or menu system, so no special files for me!

You can find information about setting
[Gitpod Environment Variables](https://www.gitpod.io/docs/environment-variables/), [CodeSandbox Secrets](https://codesandbox.io/docs/secrets) and [Netlify Build Environment Variables](https://docs.netlify.com/configure-builds/environment-variables/) at their respective docs sites, but they all involve navigating into your account settings and providing a key-value pair. Then, instead of typing out my super secret Flickr API key, for example, I can just retrieve its value via `process.env.MY_FLICKR_API_KEY` in my code.

Here's an example of making an authenticated API call to Flickr in the top part of an Astro page, then rendering a mapping through each photo (via a `<FlickrPhoto />` component):

Notice that the fetch uses a template literal in order to include `api_key=$process.env.MY_FLICKR_API_KEY}` as part of the URL
```astro
// src/pages/flickr-test.astro
---
import BaseLayout from "../layouts/BaseLayout.astro";
import FlickrPhoto from "../components/FlickrPhoto.astro";
const allPhotosResponse = await fetch(`https://www.flickr.com/services/rest/?method=flickr.people.getPublicPhotos&api_key=${process.env.MY_FLICKR_API_KEY}&user_id=28692845%40N03&format=json&nojsoncallback=1`);
const allPhotosResult = await allPhotosResponse.json();
const allPhotos = allPhotosResult.photos.photo;
---

<BaseLayout>
    <main>
        <h1>Test of "Get all my public photos" from Flickr using API key</h1> 
        {allPhotos.map((photo) => (
            <FlickrPhoto photoprops = {photo} client:load />
        ))}
    </main>
</BaseLayout>
```

It's not very exciting, but you can visit this [Flickr test page](/flickr-test) to see each photo being rendered with its title (often just its file name, because I have NOT organized my Flickr stream well!) and the photo id. Each photo also links back to the original photo page on Flickr.com (as is required by the API). The specifics of this are crafted in the `<FlickrPhoto />` component, and I really just did the bare minimum to test the API implementation.

I have a more complicated example using headers and requestOptions, but that will have to wait until ... it works!  ;) 