#React Test - Daniel Hardiman - 08/09/20
***

Thank you for your consideration for the role of React Developer.


Hosted on Netlify => [https://agitated-shannon-194663.netlify.app/]

**Notes**

First of all I checked out the spec via sketch and the pdf, checked the api via postman and then I checked to see what assets have been provided.

I then created a new Gatsby project and checked/loaded the assets I needed.
(At this point I had to read the docs again as I have only used Gatsby once and failing that I asked my best friend stack-overflow how to correctly load fonts in Gatsby)

I decided what components I had to build and what children they will have, then softcoded them in place and began to build them out @1923 as per spec.

I then put colourful backgrounds and borders to help me visualise where they will go. 

After I was happy with how the page looks @ full size I began to make it responsive (desktop first).

I had any problems I generally go to (in this order) the documentation, google, discord/spectrum forums of devs that I'm a member of and then If I had the option I would speak with another developer rather than not complete or bodge something. Whats a problem to me could be a simple fix for someone else.  


***
**Issues:**

**Fetch is failing:**

HOSTED BY NETLIFY
- index.js:56 Mixed Content: The page at 'https://agitated-shannon-194663.netlify.app/' was loaded over HTTPS, but requested an insecure resource 'http://buildingbrands.co/
react-test/wallet.json'. This request has been blocked; the content must be served over HTTPS.

HOSTED BY LOCALHOST
- Reason: CORS header ‘Access-Control-Allow-Origin’ missing

I would usually look at the server and see what headers are present and allow access to the website im fetching from.
Works fine through postman and firefox dev tools.

**SVG Loading bar**
Im not happy about the svg loading bar/'Ticker' (or the name tbh 😅) The base bar should be thicker and at mobile both are too small. First time I have animated the svg dash-array. I would love to know what a/if there's a better option than what I have used.

**Background colour**
I changed the background color to a linear gradient @1800px.
This is because a straight line appears on smaller devices due to the white background of the image meeting the light grey background.

**Mobile**
I would like to see a design for mobile as Im not happy about how it looks on mobile

**Font sizes**
I followed the design but changed the main bold text size.
It stated 4rem but didnt look like the design so I chamnged it to 6rem 

**Gatsby Image**
I need to do more research on Gatby-image. I couldnt get it to full size while using it so I switched to Import it myself.
Looks like a Handy feature though.

**Mobile**
Button arrow comes off line on tablet and below => change from baseline to center for tablet/mobile


