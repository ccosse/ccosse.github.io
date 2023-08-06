### Welcome! 
Reading Edge leverages Wikipedia content to generate or build "paragraph reconstruction" assignments for your child or students.
Each page of an assignment contains a short Wikipedia summary passage and images. The student reads the original passage and then
reconstructs it by replacing a random handful of words in their correct places. The system awards one point per correct word placed.
Use the exercise to keep kids accountable and the rewards system to bring out their best efforts.

### Reading Edge
https://youtu.be/JbOJ6Jzabic
<a href="https://youtu.be/JbOJ6Jzabic" target="_blank">
![image](https://user-images.githubusercontent.com/5249621/241815952-1d80bac0-e1c7-4938-92d7-4e621d6fc6fd.png)
</a>
![image](https://user-images.githubusercontent.com/5249621/233723143-a471a8ec-b0d0-45c1-888e-c14b0bcc7fa2.png)
![image](https://user-images.githubusercontent.com/5249621/233723552-2c8c3b94-10ec-44f1-82d2-5e4f97ea9367.png)
![image](https://user-images.githubusercontent.com/5249621/233723781-2974927f-98a8-48a8-be37-5ce6b51588d1.png)

The words list is created dynamically, and the activity works on the levels of: context, punctuation, capitalization, comprehension and attention to detail.  Try the DEMO (https://www.readingedge.org) and you can __feel__ yourself actually having to think and pay close attention, which is the exact point.  Note that you cannot edit or change the Demo Course or Demo Assignments, but anyone can create their own Courses and Assignments.  See built-in help (dashboard level) for details.

#### Wikipedia Content
Originally (~2004) this process was developed in order to confirm that my own kids had actually read various news articles they were told to read. If they completed the activity and had the points to prove it, then one could rest assured that they had read it carefully.

However, the process of constructing reading activities requires work from the parent or teacher, and that is most definitely __not__ the point! Over the years I revisited this project many times, each time with the latest web-architecture, but something always came up (work!) and it never got finished.  However, I know from experience just how effective the simple core exercise is, and so I never let go of this project.  Now, some 20 years later, with Vue.js and Wikipedia's javascript API, here is Version 1.0 of Reading Edge -- the App I've always wanted to __make publicly available__.  It remains a work-in-progress by a one-man-band, but you can use it today! And it will only get better with time.  Be a pioneering early adopter!

![image](https://user-images.githubusercontent.com/5249621/233731964-3d59f01c-77ef-40fe-a5fa-93f537d3fb7f.png)

#### Wikipedia Content (continued)
Every article in Wikipedia has a short summary paragraph, and these summary paragraphs are what the application is designed to work with. Additionally, many Wikipedia articles have large numbers of high-quality images, so Reading Edge facilitates and actually __emphasizes__ the use of those images for the purposes of stimulating curiosity and reader engagement.

![image](https://user-images.githubusercontent.com/5249621/233734238-5ef7bcc9-899f-42ee-adbe-377a0616dd66.png)

Now you can quickly and easily create reading assignments having quality content that will occupy and challenge your students for hours. Note that Reading Edge currently does not store images and text data, only public urls, in order to avoid legal minefields.

#### There is a Gallery (https://www.readingedge.org/gallery)

#### Language Support
Reading Edge works in multiple languages with both text and speech support. Current languages are: English (US), English (UK-Male), English (UK-Female) German, Italian, French, Indonesian, Russian, Thai (need voice), Chinese, Kiswahili, Portuguese, Spanish (ES), Spanish (MX), Korean, Dutch, Polish, Hindi and most recently: Thai and Kiswahili.  Try this: search for the same thing in different languages and you'll get different sets of images and text, as well!

#### Credits and Attribution
Reading Edge is built around the APIs for <a target="_blank" href="https://www.npmjs.com/package/wikipedia">Wikipedia</a> and <a target="_blank" href="https://www.npmjs.com/package/speak-tts">speak-tts</a>, with Google voices.  Reading Edge does not store data or files, it only stores links to external sources, like Wikipedia or any custom url you provide. Reading Edge is built with the following software and the packages 
<ul>
  <li><a target="_blank" href="https://vuejs.org">Vue.js</a>
  <li><a target="_blank" href="https://quasar.dev">Quasar</a>
  <li>Vue.js v3, Composition model,  with <a target="_blank" href="https://vitejs.dev">Vite</a>, <a target="_blank" href="https://router.vuejs.org">Vue Router</a> and <a target="_blank" href="https://pinia.vuejs.org">Pinia</a>.
  <li><a target="_blank" href="https://cloud.google.com">GCP</a> Firebase Realtime Database and also a Firestore Database
  <li><a target="_blank" href="https://www.npmjs.com/package/speak-tts">speak-tts</a>
  <li><a target="_blank" href="https://www.responsivevoice.org">Responsive Voice</a>
  <li><a target="_blank" href="https://www.npmjs.com/package/wikipedia">Wikipedia</a>
  <li><a target="_blank" href="https://vuejsexamples.com/an-explosion-of-confetti-as-a-vue-3-component/">vue-confetti-explosion</a>
  <li><a target="_blank" href="https://www.npmjs.com/package/flag-icons">Flag-icons</a>
  <li><a target="_blank" hter="https://fonts.google.com/">Google Material Icons</a>
</ul>

<!--
#### History of Reading Edge
Previous versions of this application were developed for the author's own children from about 2005 thru 2010. At that time the points earned were credits for internet access via a specially-configured Raspberry-Pi (configured as a Wifi hotspot-kiosk with a credit-meter). With this arrangement I could produce assignments while at work, ie from my office, and my kids would literally teach themselves new things by the time I got home.  If they wanted internet access, at least, which they did.  Reading Edge was the prototype app for a larger <a target="_blank" href="https://netdispenser.github.io/">__proposed ecosystem__</a> based around the credits-for-internet-access scheme. Reading Edge itself went by the name <i>Force Reader</i> and the ecosystem was named the <i>Net Dispenser</i>.  But now it's just the reading part and the ability to earn points, while you decide the exchange rate and how those points are redeemed. 
-->
![image](https://user-images.githubusercontent.com/5249621/233739151-5f715921-ce0a-4ec8-b293-975beececeba.png)

#### More Images
![image](https://user-images.githubusercontent.com/5249621/233742352-6481d850-09d0-4221-8ba2-fd8197972d41.png)
![image](https://user-images.githubusercontent.com/5249621/233742367-3a764474-112c-404d-b944-b1f82cdf8ab7.png)
![image](https://user-images.githubusercontent.com/5249621/233742403-4855d0f8-2ca2-4e0c-8fcb-e72fced094ca.png)
![image](https://user-images.githubusercontent.com/5249621/233742953-74178c90-b9b3-4760-b8a3-ea90de7471a1.png)
![image](https://user-images.githubusercontent.com/5249621/233744696-3900c1f7-7429-4858-89b2-f54696d7bc5a.png)


