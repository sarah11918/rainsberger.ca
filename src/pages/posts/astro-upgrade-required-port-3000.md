---
title: Interpreting the "Upgrade Required" message in live web preview of Astro
author: Sarah
date: '2021-09-04'
description: A misleading error message that might steer you down the wrong path...
layout: ../../layouts/MarkdownPostLayout.astro
slug: astro-upgrade-required-port-3000
tags: ["astro", "no local dev environment"]
---
# Upgrade (not-so-much) Required

If you're starting up one of the [Astro starter examples](https://github.com/snowpackjs/astro/tree/main/examples), or loading your own project in one of the online cloud coding environments (e.g. [CodeSandbox](https://codesandbox.io), [Gitpod](https://gitpod.io), [Forestry](https://forestry.io)) then you might see the following "Upgrade Required" message in the live preview:

![Window preview in CodeSandbox is white page with only the text 'Upgrade Required' and I have handwritten in blue text 'This is a lie!' Below, CodeSandbox has a toast message pop up that says 'Port 3000 Opened - The server is listening on port 3000, do you want to open it?' And I have handwritten a big YES pointing to the button that says, Open Browser pane](https://lh3.googleusercontent.com/pw/AM-JKLUAkXd-cnPK50iX20cedS_VdxY7uPKmOABob6GtKRxfU4Ovd4uA58alnro-u_MVEJySGokEj9k-9EG7GivRHQbXUxaQpzR2H1oBdPgUm01TeeJ7hOWroo9Xv73O04Phn2witGycogvbX7s243Pz3g1hxg=w1180-h597-no?.jpg)

This is an unfortunately misleading message, because there's nothing you need to upgrade. All you have to do is switch to a different port and you'll see that everything is (should be!) working just fine.

Most of the time, you will want this to be port 3000. As you can see in the above screenshot, CodeSandbox *knows* it should open port 3000 for your Astro project, but it doesn't always treat that as the main port. There was a user in the Astro Discord reporting this problem when using Forestry CMS, and they discovered that they actually needed to force port 8080 in order to see their preview.

Your astro.config.mjs file probably includes port 3000 as the port to run the dev server on:

```js
export default {
  projectRoot: '.',
  pages: './src/pages',
  dist: './dist',
  public: './public',
  buildOptions: {
    site: 'https://rainsberger.ca',
    sitemap: true,
  },
  devOptions: {
    port: 3000,
  },
  renderers: ['@astrojs/renderer-react'],
};
```

In CodeSandbox, you can create a sandbox.config.json file to specify the port (and the version of node, because the default version may be too low for Astro):

```json
{
  "view": "browser",
  "container": {
    "port": 3000,
    "node": "14"
  }
}
```

Now, any time this project is opened in CodeSandbox, port 3000 will be used as the main port by default, and you should not see this error message again.