## Reading Edge: Reading Proficiency Through Paragraph Reconstruction

### August 6, 2023

### Abstract

Reading Edge is built around a simple, two-step paragraph reconstruction activity whereby a student reads a paragraph and then reconstructs the same paragraph with 15-20% of the words replaced by a drop-downs of word choices. When the paragraph is correctly reconstructed the application awards points equal to the number of corrected words and the student can continue to the next paragraph. If the student misses any word then the exercise is repeated with the same paragraph but with a different set of randomly chosen words replaced.

Reading Edge is the core activity from an edu-kiosk platform developed in 2013 in which the points were cashed-in to unlock internet access. There were two problems with the original: hardware complexity and content creation. Reading Edge 2023 solves the first problem by leaving it up to the parent or teacher to define the value of earned points, ie the incentive. The second problem is solved by integrating with Wikipedia to quickly and easily produce assignments of reliable quality from article summaries and images.

### Application Description

Reading Edge is built with the latest reactive web framework, called Vue.js, and is hosted on a scalable cloud server running the latest Ubuntu Linux. User authentication is handled with Google Firebase and data is stored using a combination of Google Firestore and Google RealTimeDatabase services. The source code of the project is stored in a private GitHub repository.

The application itself is a responsive WebApp which runs in a browser, there is nothing to download or install. One benefit of this is that users are always served the latest version. Another benefit is that the same code works for desktop and mobile platforms, alike.

Reading Edge does not store text or images from Wikipedia, but rather only links to text and images on Wikipedia. The exception to this is if a user modifies an article summary text, or provides their own custom text. Images are never saved, and thus all images must be publicly available on the internet. Images outside of Wikipedia can be used so long as they have a publicly accessible url, as the url is all that is saved to the database. Assignment pages generated from Wikipedia content are still attributed as such by automatically providing a link to the original article when the page is generated.

#### Paragraph Reconstruction

The paragraph reconstruction exercise at the heart of Reading Edge was a product of necessity to ensure accountability from the author's own children. With a desirable incentive in place the exercise eliminates the need to constantly monitor the student. For, if anyone reconstructs a paragraph with 20% of the words replaced you can rest assured that they must have read the paragraph carefully and paid attention to details like context, grammar and punctuation, while a good incentive compels them to make the necessary effort on their own.

### Recommendations for Use

Careful reading and comprehension of material seem to occur naturally with sufficient incentive, whether it be genuine interest in the material or something else like internet access or money. However, the parent or teacher can further promote positive outcomes by providing material that the student is interested in. So, if the Reading Edge is being used mainly to promote careful reading itself, as opposed to careful reading about some core subject, then the assignment generator's interface to Wikipedia enables the parent or teacher to quickly produce content tailored to individual students' interests.

As an example, consider a student who is interested in airplanes. In this case a teacher could set the number of pages to a reasonable number, say 10, and enter a few comma-separated search terms like "airplane", "boeing jets" and "commercial aircraft", hit the generate button and review the results. It might be necessary to delete one or two pages that aren't exactly relevant, but generally this process takes only a minute or two, and can occupy a student with interesting content for upwards of 30 minutes.

Typical articles in Wikipedia have many associated images, as well. The parent or teacher (instructor hereafter) can configure the number of images to retrieve, and these images can stimulate further interest and compel the student to look forward to the remaining material and take pleasure in the whole endeavour of reading. In short, the system is designed to make it easy to customize material on a per-student basis.

#### Teacher & Student Users

Every account has two roles: teacher and student. Upon logging in the user is placed in the teacher role. Teachers can create courses and assignments. Each course has a unique course-key which the teacher can share by whatever means they like. The system does not get involved in this transaction, however. The course-key can be sent by email or written on a piece of paper, it doesn't matter. Anyone who has the course-key can switch to student role and enroll themselves by entering the course-key in the enrollment pop-up, including the instructor.

#### Courses & Assignments

Courses and assignments are each created from a single button click. This creates an object from a default template which can then be developed according to taste. One of the first things one typically does is to set the title of the course or assignment, for example. From a selected course, the user can then add assignments from a template with a single click. Likewise, from a selected assignment the user can add blank pages from a template with a single click. Or, using the results of a search, the user can preview pages of the search's result set and optionally click to include them in the assignment. For maximum convenience and efficiency the user can let the assignment generator automatically create a set of pages from user specified search terms. In this case it is advisable to request a few more pages than actually desired and have the ability to delete a few.

#### Wikipedia Interface

The Wikipedia interface is found at the top of the left sidebar. It includes an interface to generate a complete assignment in one of 20+ languages from a comma-separated list of search terms. If you are creating an assignment in Spanish, for example, then you would select Spanish as the language, set the number of pages desired, and use a comma-separated list of Spanish search terms, for best results.

Below the assignment generator is the basic search control. The user can configure the number of search results to return, the language of the returned pages, and the comma-separated list of search terms to search with. Clicking on any search term loads the corresponding article into a preview panel from which the user can decide to add the page to the current assignment or not.

Below the search control is a special feature called "On This Day", which returns roughly 10-20 articles selected by Wikipedia about notable historical events which occured "on this day" in history, from present to ancient times. These are returned just like normal search results and are loaded into the preview panel in the same way as regular search results. You could, for example, just make an entire assignment consisting of the articles corresponding to any given day of the year. The default date is the current date, but can be changed to any date from a popup calendar.

#### Multi-Language Support

Reading Edge incorporates several language features. The user selects the language first, before conducting a search or generating pages. The results are then returned in the language selected. It is not meant take a Spanish page and change the language to English. However, Wikipedia does have translations of pages to other languages, and these alternative pages are included as clickable links in the page interface once a page has been added to an assignment. Further, if a page is in Spanish, for example, then the text-to-speech functionality will speak the text in Spanish (see below). It is also possible to change the language from the page editor interface and listen to a passage written in Spanish but spoken with a French voice, which can be amusing.

#### Text-To-Speech

As mentioned in the previous section (Multi-Language Support), setting a language affects both the search results and the voice used to read-aloud a given passage. The text and audio are separate systems. Currently the language choices are limited to those supported by the text-to-speech system, even though Wikipedia translates to hundreds of different languages. The text-to-speech system currently supports 20+ languages, with the most recent being Thai and Kiswahili.

Burmese is one language that is not supported by the tts system, however one could still paste Burmese text into an empty page and just not use the tts playback. Burmese text, to continue with the example, could be obtained by using Google Translate and just copy-and-pasting into a blank page. Of course you could also set the language to French and it would read the Burmese text with a French accent. Again, amusing for a few minutes but not useful.

### Benefits

#### Nevada

### First Goals

#### Self-Sustaining

#### Enjoyable Experience

### Future Goals

#### Student Assessment

#### Quantify Effectiveness

#### As Resesarch Tool

### Challenges

#### Parent Engagement

#### School Engagement

#### Homeschooler Engagement

[comment]: #### Financial Support

### Project Status

#### Team & Collaboration

#### Software Development

[comment]: #### Non-Profit Organization

### Appendix

#### Project History

##### Asymptopia Software

<a href="https://www.asymptopia.com" target="_blank">website</a>

##### Product of Necessity

The original platform required kids to complete reading assignments in exchange for credits that could then be used with special hardware to grant internet access.

[comment]: #### Budget

[comment]: #### Marketing

#### Author
