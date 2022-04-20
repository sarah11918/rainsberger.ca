---
title: >-
  Creating your own Direct-Share-to-Friend feature in Pocket using IFTTT and
  Todoist
subtitle: ''
excerpt: >-
  Even though Joe and I both have our own Pocket accounts, for the longest time
  there was no in-app way to notify each other when we found something we think
  the other person should read. Even though that feature has recently been
  added, we didn't just want a *notification* that required action. I wanted to
  directly add to his reading list so that articles would automatically be
  downloaded for offline reading with no action required on Joe's part. So, I
  cobbled together my own direct sharing system so that I can simply tag an
  article in Pocket for Joe, and it will automatically show up right in his
  Pocket reading list. This is how I did it...
date: '2017-02-05'
thumb_img_path: images/pocket1.jpg
content_img_path: images/chromebookleaf.jpg
template: post
layout: ../../layouts/OldMarkdownPostLayout.astro
tags: ["solutions"]
---
[Pocket](https://getpocket.com/) is our "read it later" service of choice. Unfortunately, its current sharing options leave a little something to be desired. 

Even though Joe and I both have our own Pocket accounts, for the longest time there was no in-app way to notify each other when we found something we think the other person should read. Even though that feature has recently been added, we didn't just want a *notification* that required action. I wanted to directly add to his reading list so that articles would automatically be downloaded for offline reading with no action required on Joe's part. So, I cobbled together my own direct sharing system so that I can simply tag an article in Pocket for Joe, and it will automatically show up right in his Pocket reading list. 

<p>This is how I did it...</p>
<!-- more -->

# How I Use Pocket

I throw pretty much ALL my reading in Pocket. I find that I can manage my time better when I don't feel a false sense of urgency to read everything I see online right away, but rather put links and articles safely somewhere out of sight and out of mind until I decide to spend time reading. 

All of my devices (phone, tablet, Kobo e-reader) can run Pocket, which downloads everything for offline reading. So Pocket is perfect for storing up items for flights, waiting in lines, showing up at choir rehearsal early, and anywhere else I might not have wifi.

I also use Pocket to send articles and links to Joe. I am his internet filter, scanning broadly for and evaluating tips, tools and other items of interest so that he only has to read a chosen few things. 

## What I Want
Pocket could make my life a lot easier if it had a built-in "push" system between users. But right now, Pocket's idea of "sharing" an article with someone else consists of sending them an email with a link to the article. 

Yes, it notifies them that there's something to read. But, that person needs to have checked their email, read that email and clicked on the link. More likely, they're going to *avoid* clicking on the link in the email because they don't want to read it just yet. Wouldn't it be easier if this article were just waiting for them the next time they opened up Pocket to read?

## What I Did

As you can see, Pocket allows users to use optional tags to organize their reading list:

![Pocket articles can have one or more tags](https://lh3.googleusercontent.com/tglzzmE2987jZgcpdeuW-X4xzEosHbyDDBEaoU5Xv6cSlrYD8b2yYPf5cI-SFhj6eZCwAI69mc78NM-9I7NW6dcMr7ouyKtcqCdKorEF3zWj8-FdaGKwMimZCwpkzX38UOHNpGiuxcVsKa6PtdtjqB50N6yJCFCJpD5A7lOzu6ikzW3vfLW0hyGIXWo53wO8mcmhbwoOc5li8VXXgQqJcbvtqYc-7XfjiJPIIDCBMJ_2WjTALIRe4sBMZ9QV8wA9w5ehXLqEcREtWrohfmTjKuCrqHUQPm389RibfZh0SjsUeetSZIM5qSqJ_tA5Y7ErwE8xH3cflLyC5gptiPaJ5kXoMZpgomqQL4o3Ebk7d7B_svBdcD025NbP5EgKRd2VxHt0P42hPRoz6aw9xx7bXvlVhPSoGTSZsF9xe8_HtTXf4kxKsHiDOTt8sG0jFLMeoX17ONwcZllyjjgrgNPcDgkTfApmt-UQQ9FzRF3Xqi_52U-hKv7qxkK0iJR_PFi5bArEuqMbPzp0XT8NjB_YvI23ewKjMDbQrJNJe2DDn7P_uzG9IuEDRiw3qRuA3xw9e_Xh25RVrK4rbHXwYvzuD1iI4wzgPfXLxAD6b4awon7JsAjViU3dkjnQQldWSmEZrITjiYVGfgYEoMPEY1ZvM68MeM0kKlIbMa6aQcmAlL0=w1024-h482-no?.jpg "Pocket articles can have one or more tags")

I created a few "Joe-specific" tags, like *jbr* for general reading, *jbr-mood* for items related to mood and motivation and *jbrbiz* for tech or business-related articles.

![List of tags including various jbr tags](https://lh3.googleusercontent.com/lnzi5y5yGSwDhsQFCd9LdUsCW7a0PgTPtX1LDcZVUgk84u_aolpatUg9gwYvUAi72VRe1561f5dnppqh8X2foXgMYyerkn_rl3rZqJU1PvrGClsEwBFGFvucF7jqVSJ-DGSVty5BT9gZp6J_HV29j6E_X0GDBjFjPCOv7WKCRS5bEgazxJf9n8SMhZGvZwyw0RETlJlljfULZ_SxvOcnXr8y-i9uoP7AqR-1oh4TZBsTwL0TdHOHEhnls1Hd_G2txno-UWSNjttDmqn_E6FM_GVuY566MvuB8y7gp9piwh8P5BqEtVZnCJUmBBfXLItexr67dR2-pOulFbSuUOISckJ0BbUh9lNS2ciJ5-MFHfJDmrLpy8l1vJ5hqnIEmbxbaubmZawGZuu8049dukyeiwC7Ucd34nTjsQht8VYzJSCnDsUXs1MqlxPscyWgnin4gWydxLcODvvaqmf3nRwitwJOnN7_qVgAgC5uIE-OFi9omuezrKWN1uhkMfxFzt4RrDapFyQeooH0pZHNrUTFUaOCvD2VKOekQegpTNx13j_-zc13sSpHjR301E0FftOw-j8RSVB8bb0iUPH4kSpJ1LCM5uTiuWovcno3FReagA4nXFHJxpzbTjpkGN5zmnmb-07FEOftl_5D5jrYgg5NYiEVFUt6AQs5HJW5hRn3xxM=w622-h453-no?.jpg "List of tags including various jbr tags")

Then, using IFTTT (If This Then That), I created applets (formerly called recipes) so that adding a particular tag to an artcle in Pocket creates a new task in a particular shared Todoist project. 

![IFTTT applets](https://lh3.googleusercontent.com/YvaOas4MjOBXRz6lgfaCgi4H-myrtCyJ0Zpn5YgY8n-ChQNgwumnj7j_7aksTEEsMTygECAfPdNT6bvN0R83LVmleLmrrhCC34FMnJZf9eLgJE8fkVjZaukoRA__Mgjc2uOWEXI_Pih_8dgw_zRbZJs5FcHRHMdSPPydgxKClqFNuMZnTrYtBXVA_xcu1rm_E5EhQXC0qWyxu--17AgtzYIVYxbsYHRBeKWxDJEI140wKGJZNULQTmrF6HMKpe5m9q2BTtGohMx3MS43jPO7E1sXkZrg6gT32hhho9eVDWw1747Bqrr_oPpH0O9fAJT64MBdOYgVsMVwec4ga72RI0838EKDSCurYVsg_5qOIR3-KvOHEsPyAVNRt3B30ZikQ4kpqHa4LYCgEV4rPtgb2CfrxxlZdJRTxfi6UoRvpljji8dXzQy5CCtKg016rz7xtv2cjlYylrmmV-GtjkhJu7RNKYkxnICt-CzeLp2pWGJvvuXRoBgimLtu4rXLKmnLqZAnMrD8C0P2fEYl9Qsyb7utYbMnvnl8ZBd6K7C15GIJ_xSMic2Vh12QePrx8Lk_by7igcRbpZNNA5j7rxq9av_WroQlGCKE2b1krrebB7Ymdn8BPeH7XVpMU80btLjg2hZSpPlohOCvOzdFWOVNTHMt-gGEbb5JR2lwjP3KM1s=w828-h530-no?.jpg "IFTTT applets")

To do this, simply choose Pocket as your "trigger" service, and select "New item tagged."

![Choose Trigger](https://lh3.googleusercontent.com/-TueZLQrONMrPZFTxxEfFD_tcYNY0ZF80xT94xjVTijjYNiJQWok-yg_l_TIo5oMxSL6CVjTtoo_-gyL9EOPdQecq1KlyBPscQSUEOGuTMOjLwap_q5x62tMo7mtY8S4BjjawlZUpentLJ1varwQ-sp0swQ4yu7iIwkBQjtIffTsVgxf02oloI6m3p2zirkoPtrwHQ3mED8roGhLZux9CxzMQLCPAbWHi-BynvgY-slV4KKj9hN5om4XBKQd13GJWIYE0N6Vmw9w3rE7AgvxX7etcl0msGYOJ-X4MaaBJVFle7smfbFpnmw7tILXnfez9oujaqpMxY0J_6UpqijJeqlXdS8TtMIr39tTdOcbk0IOkReaA8IUTd_KZy_hg-CZLJ5ux32XchNCcVt2SfFa61VW_uRG8qia6W82RXJn81cqVvlRhbwt8HwQe3J9HwRpr8-reMhQZMfG1XA-BiZ2hIdpMNDUmLJvJvcTzAT182HsYy3Y-DfGx19u5o0gR-HsHWzrkXKXvrNuVA8EtOeeQysbZXn-QKmDTrEZ9VGJTlQECq5nNO78FVKTIC0ZFZ5RS5WxPEeAaci2OCQAuvMp0mXzGnSg5zAhhtx0TPk9MZ9n6i4PW_j7HHhsGYI59qVcC6GmTwnDjm6xNdvdV5pY__sxLbUi2BsKjaM3vW5XYS0=w1006-h455-no?.jpg "Choose trigger")

Then you'll be asked to specify the tag, in my case *jbr* or *jbr-mood* or *jbrbiz*. The nice thing about using tags is you can create as many different applets as you want, either to send to different people, or like I do, to send to the same person but pre-categorized.

![Complete trigger](https://lh3.googleusercontent.com/YNS059AWBshbY62ZgqK5Z11mtgpHuc7cAkg0khzZzI1o2TLF0Nr422aP5Ky6EI-elSFImstHWoMyQixquUrKhdE2SnrVrXcUhvCUz3Y-3I5kj7uchFISn35bMgWhX7PstpsrOlBbjApq2Y45QC5luZmpC2v5uHsFhm0mnixMe7buAiztGb0kTMx-54RkaBN0-Tzmdgfb8UIP9PDcF89uMRt9awS7i0PYv9nZ2Ib3ffYQeWBZ09214ES4gFsSatrnWgex0FjIGpGrulmoNSg9p1NdjmgsApVZT6_zcz77SzxHjEyYFi77iQgNfkGXBdDBck7U59Q6KjIBKfYmBaHv3fFtZDxScm5RTieQ9QV7iQpGWAxa6Vj2EVJMTjE72-Os-APotR5lJjCTpnfQe58uFwviwNkZ54QaESZEPF4a25l3Ak74Dj9QoyedePPzCIOQ1iUBVYqjZHQmXNKsJb8a7MvW98hg2kElbnmhOuCZ5cNf2CKHPnMXZahlPfHncQt-mC2UsYHmjsUyLX1FvcVW_YiFq-l9PVzzNQ6r_ATBu0Oc4kGByT94BntwORv7cQBzviUNjoflhAIWghJsSsQqeJ6PwrRwun9H_8lLERhwrX6X5N9zJLaU_-307v24RtiRpYVUreJ1UbyksVTMmynFAESUdRJSFxf4WdFuqLbd0gc=w589-h537-no?.jpg "Complete trigger")

In step four, I choose Todoist which only has one action available: "Create task"

![Create task](https://lh3.googleusercontent.com/P_5Ko8lIDUX1yHgIS7emrOaz7I18aqf6J9F9uweL9fCwcLYt6_e_aMrLzRZEnxini5q1YheZ6k7F0tHo1HtR621L4VWx4JjNoZuBHknPB2B2XLlgrZWEfLQq5QQaNfpKxnCRHfrCW1vc71SRowNbn4u3I4MNUncvgek1OvuthjIfCV26XE3heScGHkMu6hhFjN6P9dFkQbu7IbX8sYxMrHT7R59XnreJkOjp2ohbYXXEaae7h9UbpAph639zXAQuTTbuAPGSd-OJdetvg8tuAwKsQxCsJyKxPeuwEzbwasmvhuJUASGNHewx36fXMbsoXlXssJwxeA_NxT761etHHvsV_7q9g-oiVWgAf9a_3Ob7G6h-TFPgMrP7XVqv35LuPUoAeGSmUW8Rg5FtGRvy_7B5t0ez61GtVTKneY4IXVmCROu9PdbpWmFlO-1EQsQFRxBufN5f4I53Q3Lrpj0HU1G08PYdndKPNqI1lyZZ6rIInddCL7nxszlT-3RJjMvU70CYF5xy94K1evSppdGdXmBIEZFYRG99u3Xgcm57R9rHpcZ-O5uq_uJqUcPxIf_HieBziQJH_fGB0URABMbY-dPIdqShQNzQ7-bcjfTpCdc4ReYxFTAXfU_api79eEKEsosHTdgc4e2ASq3VL22YpLWwq_xQkwdaEZHymGhh2hU=w891-h592-no?.jpg "Create task")

You'll need to specify the project in which you want the task created (in my case JBR-Pocket) but the Task Content will already be filled with Title and URL. Those default ingredients are fine. That's all you need for this to work.

![Complete action fields](https://lh3.googleusercontent.com/6yJnLbxpUr4Zprk4d-tt3B7_EcS64woMxv5DOWtw_YkYg9lltZajfDvSn43hhmlR9mQrcJqlOHM-d3kb8yo9OvC0MwSWgIT96hTs-4TxWVs3xniqw4Jqqex9oVATvdbNpa774mu8UXQlmW0dlEkX6O01mXE1UVQeDDWiIHRaGqsWtBK8FFnu6J2KvhpCsK8N5dPIqLJgrisXujRgOmT9lCgo7MSaWFSkcZsf9XNsb1h_SLbR5QV4UInH6vt0w_sZP0WMzLdOmifcb_w6rD7FN5-Y4qX8ZjuTbRv3BA6CD0Wcw_AWTtuDpzbGbIEzJSkkxfvWk3JIk-hfMKxFPZguQB4EN5ZsIlcBHdQVAXO4XmS8-ufRV19lV_j-OBURd9pC2x2gqfrdfCKDxzdL1lqA6FUrtOOu4m2B90TAaCq0lGXXJaZ-UxUEBZpaU-IkY9UXgY0e3Mgq1Nna_jzVMrFN-C88qmseqEUo9OvIBqOBQs-NWaK0fm08N0OogQbj4H42Wyjj2Y6I39_mM6PJKkoIc3qo3ND1D6SkALyktyNIoiEJLyJkTX-hHSGaVhbzO7wIW43cE4qI9eVZnZ5llntNQtSapvijbseuVX1HRzz7o3VhmpCzSqbisOjST9zNpgO-tVb2ycaOQHlUVyrFKI8VVY6omwdrGbhFi9deFIdytyM=w592-h640-no?.jpg "Complete action fields")

There are other fields that can be filled in, but since the goal isn't to actually create a to-do task with a due date and priority, you can just leave the rest of these blank.

![Task content](https://lh3.googleusercontent.com/4WKmYXk5wwDUMaPY1HrRQWljx0XRJkPeBvbvSOpRDsfPcZ4puTJoTuTp_drlwgYTnku6hanP-xyLZqxCJkF0dFZy6CROM6kRQKbkPX6n3SdEQYNMtrQwdMB5Dh5bxiiduY3BVyDkXZLVJFKxSgTyFjVdoqKHDXcOkuC57fsFBPbp6qrbJw2D_Qbi3WFh81mZON37N0HLrFTZCgvuJxDii9sWo2zT_SBkY5hbdOw_gvD1xnCVTXKK1FFwuV0T-cDu20AIo3NKB3kZLyM704ybV-hrfRz6wCtCuIdNOwlhC6Eo491hcDm3QKtO1yptn2AAryHNAN-0ABV9AlFsQXM7-vjtQ-vJiGIc0cwYIZo-ZTKUtonratHDRfAfbOEhzdHYaLi-GZ126Tla5MunJVhyAdIvCwikW6Pnm-XV7mjo8yGST1orgUNQJGCctw85y7Ys3BInznqQ16PmgkX8WBwEi_E-JkdNttyFNldDkydKvoGbJ_UOkmKRU9ryVo54AOsTqBAw_Y52GHFM5RyqCv7IOBN6zA4VpF-XAnKQlbOuUifu9-cX2Q3HoEz_Fgip1FfERJgsJkLOzEA8r5nK1yX3aylIGRYd1a4IOG3DN5NutfJhercPSckqrBEnvLum1ympwDmQtfy30Xkg_i_mFIg6x7BFJnWoJHBkMOwt8n9WHVQ=w369-h641-no?.jpg "Task content")
<p></p>

## What I Had to Get Joe To Do

The above was only one half of the solution. At this point, I could get tasks into a Todoist project that I shared with Joe. Now, I needed him to create his own IFTTT applets so that new tasks showing up in those projects would trigger an action to send the content of those tasks into Pocket.

This time, Todoist is the trigger service. A new task created in Todoist by *my* IFTTT recipe should be the trigger for *his* recipe:

![Choosing new trigger](https://lh3.googleusercontent.com/JkTRYRvMUWuiK_e7LtY1Dustf_6oYNMV_TRgiEYJwg-cR73j9TeyaCq3ZUb-umcqWX8Y4AFhLhJ7nN1jkw5jMJMjoPgEZAecrzzO6bugFuixL20p91Rut2uTByEn1r08s8abgsNpEfAmUOpFMPOcCdZeEs07BvaA_3pRQLCXLq3NO5ix5E_Eu_RNInzXXoIYLLNTW2Nm4xhJhY_Jsx7BphiVeY_G48ow9hr_HpOYm7UFR6HoNvgVqr-D3HgGliD5YBhbLSvUBOqeDa8ZoDsX6G0odujhMI3s3zO-AQ06Z95quS3dTfqlaSFXFeMinWKHwsMB7YkyWn8a8QBxwsFJzteyuaKBwQaN7hN4Efouhs07RSmgb-7WhJPWqXI3XCbE58UC8pubvgknFlwQy2wehl-BGWZbxUxe7YgkBwGwlyDcMnnO70yS-15BgMRp_canVlYxjyJ6WZVMnsl81c8b10Qi4N2qO9X7fZopZ1GEUASHHtxZbQnYfxxaUH_XBS-W9iVD-VpbcER7HPwoydTMgu8X1t_hO9Qe8s_dqV8IOpE-AWIJM7xpijSD7vSkZPfbkaMLivNuBZuUvtRNv-jrn_PKBzGD1SoWUDzy9nzD7SWCJXLBPYkYcoxS3lYcZm95XTHDHhN7CXcrVX6oB6Mwg9T4gLSjmbHjNLZ2Q8T41KE=w1024-h587-no?.jpg "Choosing new trigger")

Notice that the trigger says "New task with label" but we are using Projects instead of labels. That's OK; you'll see you can specify either one once you select the trigger.

![Complete trigger with project to watch](https://lh3.googleusercontent.com/Rg0RrbcwVNT2uCJgKw402KBBExKYG7BNj7jL8dWi9HkORarU8GeX1cPV08mo-rKBD1xMfdp7wD77gbAY8813_zOqZ5iaM9njY9IB1zTI7D8H_As7ujCTM7Q1Sx-pKY6nOYofnW1_CZgRGgVcCImrgVf3HV7nZUKAxlh8P0c0bvOvwJT2Kt8CKOOBEvRcT6EJG0VK0z2vL4qHFmUZ5sjWIUo1WZZRZgICpx4DDL84WVfvLk9C-VnK5fZPmJ1O7pyvg-Ru4_7C_bcrQi--DHQJp51wTRiWXQds7RBoPEYeYnureiFeDXBARZdt7iEmIfv4X7V2psOkoF1WVu4dXe1HfexBrHkOq-zjeTjkmLrG9Nlj-ve4NVn-CiiMv99BeZRN74d6hv1DO3TbMvDXMTcNkWgtEhHItVpt9B2P_KHvOOD7PAXVWuiR3xn9x4q7sagcyN9-BRzoUDVK-baC8wUM5t77pnK5NutTL94XrJqvex3osiO1QBiQluO9fjwqI1-Mw3dvtnhe4SV6Jj099Vs-nTidsv8flplJRzRGCr8HuLoe48oNJMlBNGgn8S5_mEhgVAK3yFh-TMcIlLM7pcXgpcuywDw14ejcOkM_U5NdyBWbMTr669FUCM376e6zALm33TbBxEKjlZDCsTHxzyaPShdMzkm0OLH6Ait_R4Iz9hc=w457-h615-no?.jpg "Complete trigger with project to watch")

And now Pocket is the service that performs the action in response to the trigger. Again, there's only one action you can choose: "Save for later"

![Save for later is the only option](https://lh3.googleusercontent.com/NfrnLGObo_kppFKpaiUaQr22WcneFOfcEs9myjQG4LHWF9PwhjYuxP4uL-jmenL6T44g92pfuLXeeLv_dPj5HTJGvVeZn2Fp3Urv7W5XczF0646EKkgS2CifOFfmVvYKVleHDFnMVoKLdOlBgw6L6QPj71CSl67poUQVYZKzM3UCxUFP58WwHr1PyCfFOiAdjohI48vXXgTfvPAnta-5hu2h85E4qJBvmahrmZzF4QOvOKb5N7SJWeZmxbYm95NBIewotqNgCOgoai1sJ4hZ439VfWtiNafVR17V2opw4KH8kzueMYrHU50Sg0zTMdYnVjA7SsVMaA2a7WZpeIZn6CtZ2xqTycD2xmYHg2DvJ94tdEjhCioXWc1QrqlJvBnZ7fHQBIMKNi-TvP-XpigSKJyf-KjRAAPx743W2VrblGBFDxrpijijhx0vTHuE51ZsPESW_ajp81cCD9YVE4Eu8Yq1OYJUjrVV2wD_dpLOIYTiz86wHddpomlFdMPUlaNAUx_jIV2NjHsekXX8n8dnXWaay4t45RzPpkwG_yuyzPwdPgJCTEjUKZpqQFZItVmSCSFC8-Nz33PeMkymW1uNvonbxwNN4MmtKfcTznQ_3v5qc10qpVUPLVTlBacXnakIN_QvSitpBx4velL2WxaDv74xIP6qqVqdehdvIHy9p4s=w823-h579-no?.jpg "Save for later is the only option")

This time, however, we want to change the default values filled in the fields. We don't want Pocket to save the task itself, we want it to save the *content* of the task, which is an article. 

![Change default to task content](https://lh3.googleusercontent.com/k_x6TG8vbI5720pkFnAIqt_s39J8BZ2yHIoIqc7eCPosMdWZ44tszVZRANFMITrS8YOHhjSgBQWCzCjIcbu5revBlBbdhoari70PO2nYun6p3ULziPsQMqP8tusiFGAp6yBhkXgD7G8OLGjlNsYPVCXWq5XgyqjqU125P5pizKZBUgdmQckfkQjUpAEn-XGeiuvLqrI877Zz2zAuZaWqJln7UB0zPbl_toQN2JsUoL1JC2jbUltyKs0x9-NMnZul_LRAdNzAdL0tcVw1bPpuiBb5gZ1Dexh6eIV9RcHglgpZ7OX7cD-TzEAWap5_98RBIo7axD4-LS8VRpm-MRwZnGA9akyRphrOK6JyKdrhaZjZmV1a_aWZx7UWIRMATOLNehuPqSJJgJmUza0-0DKW5G3PW5ZN1gsSfDgzBgOE6bRANCsZGCVfZPxlzhsl4uGsOdyZViFAcvZpXGGW5-hIupM1JZS24YQXWfHQyVye23U7FhFyk-dnwbtVmSG-jzRJMDpQYVh7SdiIimPcZjEnAYKzfdFDT9t6SQZsMmJNlW8FS_sVm9pFKquBNhnVXUzoqAkQAx4VJODU64g1TsD7782IjuGxA2bgB3vCgMSKA4i9v1VSAHVlz9TJ1V14bFk6cA22HnnNiqTNjGPgZ3rJqQIlNRXmdGBAMLvZV4ccdWE=w424-h623-no?.jpg "Change default to task content")

And, if you want these saved articles to have a certain tag, I'd choose the Project name as the tag. So, delete the pre-filled values and choose these: URL field should be TaskContent and Tags field should be Project.

![URL field should be TaskContent and Tags field should be Project](https://lh3.googleusercontent.com/CPo5wpCF997BZ78Y5SJo8_2mUcvGM21dx1bTwop9MgVUXhncrtomk816uxmJjyAUwPQT6HHx_3GGesMrxDTuj42VbaVr9UVJp_BSkfRvGpkoR3su1SUOVdLKAXOwY-qBlwh3Kj0Yl65t5qpS5Aq3Vj27Llf580btSnDU3Dozhd2dGu6IF6mtklj5X9ZQLNmrdqU91plY026XbscRf7r7HudN6qgsN5dPQYQ-_g2HuV1xOKYnaVda-dLRxiDAEvErQSzh2xPH7CpJVpL67ZDga3kb5ChMo1mlPIh2qcNn05_NnKDN8Ks42blQ8M-3zsdW9oKiAreWFqKmHRRHB12Ugb9zi31lUEh-XRPzh3T9tb4py7PEv3noJbkUQFIanDJPH1BFt-fl4dh39Gv6TvQs4R9SyaJp0fua6YTQ-Snpzi2ayVhg0lg2JUZWz4iR6ioxADNVyCUaNWPjL5rpY83ZAAenDfIuAvuSfTewk7O6td_GLURs5YjNWptP0ASPk9oyrBsQ8Jy-y7UD0oKRwFuG5i-T3XIVG5HzWKXrJ2Vx2xowtD5gRiZrm8y2zG3clLOz_x-gH9lXZSRQ45HNisS1fY-LK1_WHdn_-T2kOeveZV7MskDgO1OGmuiKfRjFm7OZr374kCQuwNBrqhepkCTp74BIWqOiPA1i2iPry5ucTwQ=w502-h615-no?.jpg "URL field should be TaskContent and Tags field should be Project")


And that's it! Now, my workflow is simply:

1. I tag an item in Pocket
2. The item (eventually) is added to Joe's reading list in Pocket!

And Joe's workflow is:

1. Open Pocket.
