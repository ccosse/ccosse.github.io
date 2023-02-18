### Reading Edge (ccosse.github.io)
This is my latest project called Reading Edge.  You can try it <a href="https://ccosse.github.io">Here</a>.
Reading Edge trains kids to read carefully by having them reconstruct a series of paragraphs. For each paragraph
there are 3 steps: Read, Repair and Reward.  First they read a straightforward paragraph, a good length is about 
50-100 words.  Second, a percentage of words are chosen at random and thrown into a "bag of words" that need to
be put back into the right place.  Third, after correctly repairing the paragraph, collect a reward of 1 point 
per word corrected.  The all-or-nothing stakes provide incentive to make an effort and read carefully. Each retry
is re-scrambled, as well.  You set the exchange rate for what "1 point" is worth, ie maybe they can buy their way
out of doing chores, or compete for prizes, or just simply avoid being locked-up and electrocuted. (just kidding)

#### Wikipedia Content
That's the process, but where does the reading material come from?  Indeed, content was always a problem. But that
problem has been solved by integrating Wikipedia components directly into Reading Edge. Now you can quickly and easily 
create reading assignments having quality content that will occupy and challenge your students for hours.

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
the ecosystem was named the <i>Net Dispenser</i>.  But now it's just the reading part and the points, and you decide
the exchange rate or how those points are redeemed. 

#### Software
Reading Edge is built around the APIs for <a target="_blank" href="https://www.npmjs.com/package/wikipedia">Wikipedia</a> 
and <a target="_blank" href="https://www.npmjs.com/package/speak-tts">speak-tts</a>, with Google voices.
Reading Edge is built with <a target="_blank" href="https://vuejs.org">Vue.js</a> version 3, composition model, 
with Vite, View Router and Pinia. On the backend is a GCP Firebase Realtime Database and also a Firestore Database.  
The Vue.js bundle is currently deployed to my Github pages account: <a href="https://ccosse.github.io">here</a>.  
Reading Edge does not store any images or data, only links to external sources, namely Wikipedia. Custom urls 
can also be used.
