---
title: How to Connect a Chromebook to Radisson Hotel Wifi
subtitle: null
description: "Can't connect to wifi on your Chromebook when you stay at Radisson hotel because of their captive portal? No, it's *not* just a matter of finding a non-SSL page to start your connection like with many other captive portals. Here's what I did to approximate a working wifi connection on my Chromebook at Radisson hotels. Maybe someone from Radisson will see this and upgrade their wifi system!"
date: '2018-12-10'
thumb_img_path: /images/ScreenshotRadissonAutoRefreshPlusSettingsBecauseRedirect.png
content_img_path: images/chromebookleaf.jpg
template: post
layout: ../../layouts/OldMarkdownPostLayout.astro
tags: ["solutions"]
---

Can't connect to wifi on your Chromebook when you stay at Radisson hotel because of their captive portal? No, it's *not* just a matter of finding a non-SSL page to start your connection like with many other captive portals. 

If you're on a Chromebook, every few (5 - 60?) seconds, Radisson's wifi connection will cut out, tell you you're not online, and ask you to click to reconnect. In Gothenburg, Sweden, this happened every 2-5 seconds. Here in Riga, Latvia, it's more like 8-15 seconds, but I can sometimes get as much as a full minute between connection drops. Reading Radisson hotel reviews on TripAdvisor, I can see this is also a problem for travellers in the U.S.

![Chrome OS pop up notification to connect to the internet](https://lh3.googleusercontent.com/pw/AM-JKLW-J6dwVx1sq6qysqH0a2OF-TUVoxOv3L_AjhZxpaReei0YvbHZFA8W36HKaFfLVr7jcbwqd3v4CRD62V5LMJXgzDas2-plY6vYWiGN7TwCXN-mzwFxgAACWWsGyiG1AAbEj_xDyNRjWIqtLiC8NT3Stg=w1752-h1169-no?.jpg)

Here's what I did to "approximate a working wifi connection" on my Chromebook at Radisson hotels. Maybe someone from Radisson will see this and upgrade their wifi system!

Already feeling my pain and just want the solution? Head directly to the [**tl;dr**](/2018-12-10-connect-to-radisson-wifi-on-chromebook/#tldr)

## The *general* problem, as I understand it:

Radisson hates Chromebooks!  :)

OK, seriously, the problem is that, due to a Chromebook's "mostly Chrome browser" ChromeOS, it is known to sometimes have trouble with public wifi. It often over-zealously doubts the security of the connection, since it was designed as a primarily always-online, secure machine. Captive portals often appear to "hijack" your internet connection, by directing you away from the (by now, probably "secure") site your browser tried to navigate to, and instead, taking you to *their* connection page. 

This is generally desirable behaviour, since you wouldn't want to type in your banking website, but find yourself automatically redirected to a different website (which could be disguised to look very similar to your banking website, and could collect your login info if you tried to log in). Many of our devices are set to hit secure sites upon opening, and if your phone, tablet or laptop senses a security threat, it may never perform a "dangerous" redirect to take you to the page where you can log in to the public wifi.

While annoying, most of us have figured out a way around this common connection problem. The easiest solution I have found is to set my browser homepage to a *non-secure* website like the aptly named   [Never SSL](http://neverssl.com/v2) where the browser's security doesn't kick in when you are redirected. If you didn't ask for a secure page in the first place, then your device considers it less likely to be a security risk when your connection takes you to a different page than the one you requested. Even if my device's browser tries to hit a secure site first (often it's Google, on my Android device), it's one click for me to hit the "home" button in my browser and force a non-secure page, and let the redirect happen.
 
## The *specific* problem, as I understand it:
Sadly, the "I can't connect to wifi on a Chromebook at Radisson hotels" problem is *more* than just finding a way to let this initial redirect happen on a Chromebook. The particular wifi portal that Radisson uses requires Chromebook users to hit a non-secure page that will redirect you to their own "portal status" page **every few seconds** to maintain an active internet connection. It probably also requires this of phones and other devices, but it seems that the security settings in ChromeOS do not allow this to happen transparently in the background while maintaining an active connection during all this traffic hijacking.

What does this look like to a Chromebook user on Radisson hotel wifi? After initially connecting via a splash screen, you can browse for anywhere from 2 to 60 seconds like normal. At some point, you will hit a web page (probably secure, since most pages are today), and you'll be greeted with Chrome's offline dinosaur, or a message that the website you were on has closed the connection, and perhaps a popup notification saying that the wifi connection requests that you sign in.

![Chrome offline dinosaur](https://lh3.googleusercontent.com/pw/AM-JKLVCGwv-dmsX2CzeUQQSIvIqy3hucP8YD3MqozGNJLo0ZKgFNhBQrDT8Fu4PI-IOB-X3jZt0ImzhvaILP8QoJEXD3DB5Ykxof8ooeLQ0ohSRyL8_lgMQ3AKUO7xMXbrCR_4pLNEDUQiDsoOuffyuPbJY8w=w1752-h1169-no?.jpg)

In Gothenburg, this was **every two to three seconds**. I often did not have enough time to load a single page before my connection had timed out, and my Chromebook was essentially offline for three days.

Here in Riga, I was at least getting 8 - 40 seconds of continued connection, so I could read a page or two of an online forum, then dinosaur/closed connection, then click to reconnect, and repeat.


## The technique:

After searching the problem and seeing some online discussions (mostly about the *general* problem, not my *specific* problem), it seemed that the same trick to initially force the captive portal redirect might be useful in my situation, too. Often these captive portal splash screens require user action (checking a box to agree to terms, typing in your room number). But, in my specific situation, I wasn't being asked to repeat those splash screen actions every time. I was just being redirected to the portal status page, not the splash screen itself.  And, since I was constantly being faced with this portal status page, I could see that my device had 24 hours of authorization. All I needed to do was refresh this portal status page and my connection, if lost, would indeed auto-reconnect. And, thanks to the nature of Chrome, just the act of returning to any offline-error-message tab will automatically attempt to reload it. This seemed like a lot of stuff that could happen on its own if I could figure out how to automate it. . . 



## The tool:
After searching how to automatically refresh Chrome tabs (surely this had to be a thing!), I came across a a few auto-refresh Chrome extensions that seemed simpler than trying to execute javascript or do something that required a terminal. I eventually settled on [Auto Refresh Plus](https://chrome.google.com/webstore/detail/auto-refresh-plus/hgeljhfekpckiiplhkigfehkdpldcggm) for one very specific reason: Radisson hates Chromebooks!  :P

![Auto Refresh Plus Chrome extension settings](https://lh3.googleusercontent.com/pw/AM-JKLXSIL3p3xEw2sYme5XREtHlheYba9thE45pym516rJ3d1wh2OvayZyh2_JlrU2salLHcJhy00JqnvG_4te76KpS4HhOHDC7UAWpAU6fWzCq-knDri6h04p-d-y64F1zg5i2ze0_QLmwqWuEujyjvotOiA=w1752-h1169-no?.jpg)

Just as the length of the connection time out is unpredictable, so too is the action taken after the portal refresh unpredictable. **Sometimes** the portal status page simply refreshes. But other times, after a portal status refresh, that page redirects itself to Radisson's menu page, and the portal status opens in a small pop up window.

![Radisson home page redirect and pop up](https://lh3.googleusercontent.com/pw/AM-JKLXC6HogxSbg2KjOuKmnvXPeOzESSTw3F6a9f0zX4NlJYNhIu7bnsZJcEpROfh9eVQexVzGMEgry8MOodZg32rp2wVOEXWuQfgGEtUZPIWHerxXMzPsD6-YzYnudGyPlRaBqcuAn-mGX_rPu_hg2_zgC5A=w1752-h1169-no?.jpg)

What this means is that I can't simply set an action to "refresh a tab" because every few refreshes, Radisson is hijacking it's *own* tab, and redirecting it to an entirely different page. Refreshing *that* page does *not* re-establish my internet connection.

So, after trying a couple of Auto Refresh Chrome extensions, I had to choose the one that allowed me to specify *which page* is constantly refreshed in my tab. (And yes, every few minutes, I'm manually clearing pop up windows.) But, what I am able to do is set that extension to reload the portal status URL every three seconds (yes, **three seconds**), whether or not that tab has found itself redirected to Radisson's own page. In both Sweden and Latvia, the captive portal status page URL is  http://portal.mikenopa.com/status so that's what I've used in the Chrome extension. It did seem like another non-secure page, like Never SSL, would work too. But, rather than cause a redirect to the portal status half the time, I decided just to use that page itself.


## What my browsing experience is like now:

I have one pinned tab in Chrome with the Auto Refresh Plus Chrome extension set to ~~refresh~~ load the captive portal status window every 3 seconds. (As @jbrains pointed out, it's not really a refresh since sometimes I'm forcing a different URL on the tab.)

If I am browsing, and click a link while my connection is active, all appears normal. These connetion windows last from a few seconds to almost a minute.

If I am browsing, and click a link while I have lost connection, I get a Chrome offline/connection closed page. If I do nothing at this moment and simply wait:

1. my portal status page will eventually (sometime in the next three seconds) be loaded in the pinned tab
and my connection will be reestablished.

2. my offline page will attempt to reload itself as soon as a connection is reestablished.

And of course, I'm manually clearing a small pop-up window ever few reconnections.

## What my Android app experience is like now:

Let's just say, I'm using my phone.  ;)

Actually, I am writing this on a Markdown app right now that is only synching locally, not online, so it's fine. But, for example, if I try to use one of my Twitter apps (which I have set to manual refresh), I time my refreshes for the exact moment I've just seen (via a refreshed tab icon) my pinned Chrome tab successfully load the captive portal status URL. Otherwise, I get error messages (annoying) which then have to be cleared (more annoying), so I'm sticking with offline apps and the browser (which at least will auto reload when it can) for now.

## Conclusion:

I have rather inelegantly but somewhat successfully imitated a stable Chromebook wifi connection at Radisson hotels by stringing together short connection windows (of 5 - 60 seconds) via automated browser refreshes. It is adequate for performing brief, discrete internet requests that can be completed during a connection window. And, if a request is made during a lapse in connection, as long as I am browsing, Chrome will automatically try again when it detects the internet again. 

But, I'm timing any important actions like "buy" or "submit" to occur just after I've seen a successful refresh in my pinned tab. When the captive portal status page is loaded, there's a discernable grey favicon that loads in the tab. When the page redirects itself to Radisson's own page, there's only a generic tab icon, and a pop up window is created which takes over and steals focus. So, I watch for the favicon to refresh to another favicon, and when it does, I know I have another good few seconds of internet to make a successful network request.

It's *like* an internet connection!

Radisson, this is really not OK. Please know that your wifi is essentially unusable for **an entire class of internet devices**. While I *can* browse individual web pages, I can't do anything that won't survive a connection drop... every few seconds.

## tl;dr

If you can't maintain a wifi connection on your Chromebook at a Radisson Hotel (worldwide!) because it keeps wanting you to sign in (but not really sign in again, just hit that captive portal status window) . . .

0. Bear in mind your internet  connection won't be continuous: it will automatically reconnect every 5 - 60 seconds, but it should be enough to get you browsing.
1. Copy the website URL link from the captive portal status window pop-up, the one that tells you you've been online for a few seconds. (It's probably http://portal.mikenopa.com/status )
2. Install the Chrome extension [Auto Refresh Plus](https://chrome.google.com/webstore/detail/auto-refresh-plus/hgeljhfekpckiiplhkigfehkdpldcggm)
3. Pin a tab in Chrome, and set that tab, via the Chrome extension, to refresh the specific captive portal URL (not just refresh the tab, because the tab will change on you) every three seconds
4. Be prepared to close a captive portal status pop-up window every few minutes
5. Don't try to do anything that won't survive a connection drop every few seconds, but browsing is mostly fine, with some waiting for auto connect.
6. If you get an offline Chrome dinosaur or connection closed tab, it should refresh itself in a few seconds once the connection has been restablished, but you can manually refresh. 
7. I suggest timing any manual refreshing, or clicking important buttons like "buy" or "submit" to occur just after you've seen your pinned tab sucessfully refresh, and you can see the portal status icon in the tab.
