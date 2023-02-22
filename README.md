### Reading Edge (ccosse.github.io)
![image](https://user-images.githubusercontent.com/5249621/220449531-7399edb1-8ffb-4412-84fa-3c313f2493ad.png)


At the heart of Reading Edge is a simple paragraph reconstruction activity.  First you read a paragraph in its
normal form, then you reconstruct the same paragraph in which 15-20% of the words have been replaced with a list
of word choices. The list is created dynamically, and the activity works on the levels of: context, punctuation, 
capitalization, comprehension and attention to detail.  

For each corrected word the student is awarded 1 point.  The default value of an Assignment is 50 points. You can 
change the value and make the Assignment "repeatable" so students can return to the application whenever they want
to earn more points.  You set the exchange rate for what "1 point" is worth, and thus you control the incentive.

#### Wikipedia Content
That's the process, but where does the reading material come from?  Indeed, content was always a problem. But that
problem has been solved by integrating Wikipedia components directly into Reading Edge. Now you can quickly and easily 
create reading assignments having quality content that will occupy and challenge your students for hours. Note that 
Reading Edge does not store images and text data, only public urls, which is not a limitation, and eliminates a lot
of license and attribution overhead.

#### Reading Edge Terminology
Reading Edge terminology goes like this: each paragraph is part of a <i>page</i>. A page also contains images
and page-configuration data.  An <i>assignment</i> is a list of pages, and a <i>course</i> is a collection of
assignments and <i>students</i>.  When you click the "New Assignment" button at the top of the Teacher Dashboard,
the resulting assignment object has a default configuration which will present random Wikipedia summaries until 
the points-goal is reached or the user exits the assignment. You can add comma-separated <i>guide-words</i> to
guide your Wikipedia results. 


#### Quick Setup Example
Here's a quick setup.  First, login using your GMail. This creates your storage space and directs you to the Teacher 
Dashboard.  At top center you click to add a new course.  In the course, you click to create a new assignment.  Edit the 
assignment and provide one or more comma-separated guide-words.  You are done, except that you don't have any students yet.
Share your course-key with anyone you like. They can login and go to the <i>Student Dashboard</i> to enter the course-key
and enroll themselves.  From there they can earn points via the assignments you prepare and assign to them.  

#### You account has 2 roles
Your account has both a Teacher and a Student role, so you can enroll in the course you just created and experience 
as a student first-hand.  Switch between Teacher Dashboard and Student Dashboard using the switch-account button 
on the toolbar.  

#### Language Support
The app also works in multiple languages with both text and speech support. The speech part is separate from Wikipedia
language controls, but Reading Edge connects the right Wikipedia content, in various languages, with the correct 
voice for speech playback.  Current languages are: English (US), English (UK), German, Italian, French, Indonesian, Russian,
Thai (but using id speech-voice), Chinese (MD,TW,HK), Kiswahili, Portuguese (BR), Spanish and Korean.

#### Credits and Attribution
Reading Edge is built around the APIs for <a target="_blank" href="https://www.npmjs.com/package/wikipedia">Wikipedia</a> 
and <a target="_blank" href="https://www.npmjs.com/package/speak-tts">speak-tts</a>, with Google voices.
Reading Edge does not store data or files, it only stores links to external sources, like Wikipedia. Custom urls can also be used. 


![image](https://user-images.githubusercontent.com/5249621/219883125-dbe568fc-8917-44e8-a045-c69b580b862a.png)

![image](https://user-images.githubusercontent.com/5249621/219884881-ed17c553-ea3c-4bcb-9a62-df29d4031a25.png)

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

### Demo Pages Text
Welcome to Reading Edge! After reading this paragraph click on "Step 2" button at the bottom and reconstruct the paragraph. When finished, click the "Step 3" button to collect your points, and then click the same button again to repeat the process and earn more points.

It connects to Wikipedia for unlimited, trustworthy content. You can show your students whatever pictures you want and make them read whatever you write. For example, here is a picture of a schooner.
