### [Reading Edge] (https://ccosse.github.io)
At the heart of Reading Edge is a simple paragraph reconstruction activity in which the student first reads
a short paragraph and is then asked to reconstruct it by replacing a random handful of words in their correct
spots:
![image](https://user-images.githubusercontent.com/5249621/233723143-a471a8ec-b0d0-45c1-888e-c14b0bcc7fa2.png)
![image](https://user-images.githubusercontent.com/5249621/233723552-2c8c3b94-10ec-44f1-82d2-5e4f97ea9367.png)
![image](https://user-images.githubusercontent.com/5249621/233723781-2974927f-98a8-48a8-be37-5ce6b51588d1.png)

The words list is created dynamically, and the activity works on the levels of: context, punctuation, 
capitalization, comprehension and attention to detail.  Try the [DEMO] (https://www.readingedge.org) and you can 
__feel__ yourself actually having to think and pay close attention, which is the exact point.

##### Wikipedia Content
Originally (~2004) this process was developed in order to confirm that my own kids had actually read
various news articles they were told to read. If they completed the activity and had the points to prove it, then
one could rest assured that they had read it carefully.

However, constructing such activities requires work from the parent or teacher, and that is most definitely __not__ the point!
So now, 20 years later, with Vue.js and Wikipedia's javascript API this process of building activities has an interface 
to minimize the work for the parent / teacher, and keep kids reading, engaged and challenged all at the same time.
![image](https://user-images.githubusercontent.com/5249621/233731964-3d59f01c-77ef-40fe-a5fa-93f537d3fb7f.png)

#### Wikipedia Content (continued)
Every article in Wikipedia has a short summary paragraph, and these summary paragraphs are what the application
is designed to work with. Furthermore, many Wikipedia articles have large numbers of high-quality images, so Reading Edge
facilitates and actually __emphasizes__ the use of those images for the purposes of stimulating curiosity and reader engagement.
![image](https://user-images.githubusercontent.com/5249621/233734238-5ef7bcc9-899f-42ee-adbe-377a0616dd66.png)

Now you can quickly and easily create reading assignments having quality content that will occupy and challenge your 
students for hours. Note that Reading Edge currently does not store images and text data, only public urls, in order to
avoid legal minefields.

### There is a [Gallery] (https://www.readingedge.org)

#### Language Support
The app also works in multiple languages with both text and speech support. The speech part is separate from Wikipedia
language controls, but Reading Edge connects the right Wikipedia content, in various languages, with the correct 
voice for speech playback.  Current languages are: English (US), English (UK), German, Italian, French, Indonesian, Russian,
Thai (but using Indonesian (wrong) speech-voice), Chinese (MD,TW,HK), Kiswahili, Portuguese (BR), Spanish and Korean.

#### Credits and Attribution
Reading Edge is built around the APIs for <a target="_blank" href="https://www.npmjs.com/package/wikipedia">Wikipedia</a> 
and <a target="_blank" href="https://www.npmjs.com/package/speak-tts">speak-tts</a>, with Google voices.
Reading Edge does not store data or files, it only stores links to external sources, like Wikipedia. Custom urls can also be used. 

#### History of Reading Edge
Previous versions of this application were developed for the author's own children from about 2005 thru 2010.
At that time the points earned were credits for internet access via a specially-configured Raspberry-Pi 
(configured as a Wifi hotspot-kiosk with a credit-meter). With this arrangement I could produce assignments while
at work, ie from my office, and my kids would literally teach themselves new things by the time I got home.  If they
wanted internet access, at least, which they did.  Reading Edge was the prototype app for a larger proposed ecosystem
based around the credits-for-internet-access scheme. Reading Edge itself went by the name <i>Force Reader</i> and
the ecosystem was named the <i>Net Dispenser</i>.  But now it's just the reading part and the ability to earn points, while you decide
the exchange rate and how those points are redeemed. 


#### Software
Reading Edge is built around the APIs for <a target="_blank" href="https://www.npmjs.com/package/wikipedia">Wikipedia</a> 
and <a target="_blank" href="https://www.npmjs.com/package/speak-tts">speak-tts</a>, with Google voices.
Reading Edge is built with <a target="_blank" href="https://vuejs.org">Vue.js</a> version 3, composition model, 
with Vite, View Router and Pinia. On the backend is a GCP Firebase Realtime Database and also a Firestore Database.  
The Vue.js bundle is currently deployed to my Github pages account: <a href="https://ccosse.github.io">here</a>.  
Reading Edge does not store any images or data, only links to external sources, namely Wikipedia. Custom urls 
can also be used.
