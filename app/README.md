
# Blogging application - ECE Webtech project

This blogging application is part of the ECE Webtech project, designed to demonstrate our ability to create a full-stack web application using modern development tools and practices.

## Introduction

Our blogging application is a platform where users can create, share, and comment on posts. It features user authentication, post creation and management, comments, and a user-friendly navigation system.

## Pre-requisites

- Node.js
- Next.js
- Tailwind CSS
- Supabase account

## Installation

- Clone the repository: git clone https://github.com/clementjalouzet/ece-webtech-2023-fall-gr01-02
- Install dependencies: npm install
- Set up environment variables: Copy .env.example to .env and fill in the values.
- Start the development server: npm run dev

## Usage

- Access the application at http://localhost:3000. 
- Create an account or log in to start creating and interacting with posts.

## Deliverables 

- Vercel URL: https://ece-webtech-2023-fall-gr01-02.vercel.app/
- Supabase project URL: https://supabase.com/dashboard/project/cffouiyooutycxruuqsm

## Authors

- Mathis BAUDRILLARD gr01-02
- Louis FONTANIE gr01-02
- Clément JALOUZET gr01-02

## Evaluation

### Mandatory Tasks

* **Naming convention**
  * Grade: 2
  * Comments: We followed community best practices for naming conventions across our codebase.
* **Project structure**
  * Grade: 2
  * Comments: Our project is structured into clear, logical components and pages.
* **Git usage**
  * Grade: 2
  * Comments: We maintained a clean git history with meaningful commit messages.
* **Code quality**
  * Grade: 2
  * Comments: Our code is formatted and readable.
* **Design, UX, and content**
  * Grade: 3
  * Comments: We focused on a clean design and intuitive UX. However, our website is not responsive on all screens.

* **Home page**
  * Grade: 2
  * Comments: We focused on creating an inviting and informative home page for our blogging platform. The design emphasizes user engagement and easy navigation. At the top of the page, we included a visually appealing banner image with the site's name in bold, making a strong first impression. This was followed by prominently displayed call-to-action (CTA) buttons, such as 'View our articles', 'About us', and 'Contact us', guiding users to explore different sections of the site. We also showcased a selection of the latest posts with thumbnails and short descriptions, encouraging users to start reading immediately. Our goal was to make the home page not only a gateway to content but also an embodiment of the site's theme and spirit, inviting users to engage more deeply with our content.
* **Navigation**
  * Grade: 2
  * Comments: We implemented a consistent and user-friendly navigation bar that is accessible across all pages of the application. The navigation bar features essential links, including 'Home', 'Posts', 'About Us', and 'Contact Us', ensuring that users can easily find and navigate to the major sections of the site. For logged-in users, the navigation bar also includes links to their profile and post creation pages, enhancing the usability for content creators. The navigation bar's style and theme are consistent with the overall design of the application, providing a cohesive user experience. Its placement at the top of each page ensures it is always readily accessible, yet unobtrusive to the main content, facilitating effortless exploration of the site.
* **Login and profile page**
  * Grade: 4
  * Comments: We integrated a robust OAuth2 authentication system, enabling users to securely log in using their GitHub accounts. This approach simplifies the login process and enhances security. Upon successful login, users are redirected to the home page. The profile page displays user information, such as the username and email address. It also allows users to view and manage their own posts and settings. We emphasized user experience in the profile page design, ensuring that it is intuitive and user-friendly. The profile page is a central spot for users to customize their experience, update their personal information, and interact with their content. The seamless integration of the login mechanism with the user's profile provides a personalized and secure experience on our platform.
* **Post creation and display**
  * Grade: 6
  * Comments: We implemented a comprehensive system for users to create, view, and manage their posts. The post creation feature is accessible to authenticated users, allowing them to compose and publish posts with ease. We designed a user-friendly interface for the post creation process, which includes fields for the title, content, categories, and tags, along with the ability to upload or link images. Once a post is created, it is stored in our database and becomes immediately viewable on the platform. Each post has its dedicated page, displaying the full content, author information, and associated comments. We ensured that the posts are presented in an aesthetically pleasing and readable format, with proper attention to typography and layout. The post management functionality allows users to edit or delete their posts, providing full control over their content. Overall, our focus was on creating a seamless and intuitive experience for users to engage with the blogging platform, both as content creators and readers.
* **Comment creation and display**
  * Grade: 4
  * Comments: To foster community interaction and engagement on our platform, we added a feature that allows users to leave comments on posts. This feature is designed to be intuitive and accessible, located at the bottom of each post page. Users can easily submit their comments by filling out a simple form, which includes fields for their name, email, and the comment itself. Once submitted, comments are immediately displayed under the post, enhancing the interactive experience. We implemented measures to ensure that comments are displayed in a readable and organized manner, maintaining a clean and user-friendly interface. This feature not only allows for lively discussions and feedback on posts but also contributes to building a sense of community among users. Our implementation prioritizes ease of use and encourages active participation from users, making the platform more dynamic and engaging.
* **Post modification and removal**
  * Grade: 4
  * Comments: We empowered post authors with the ability to edit and delete their own posts, providing them with full control over their content. This feature was implemented with careful consideration for user experience and content management. Authors can access the edit functionality directly from their post page, where they are taken to an editing interface that mirrors the post creation form. Here, they can make changes to the title, content, categories, and other post elements. The save changes option ensures that the updated content is immediately reflected on the site. Additionally, authors can choose to delete their posts through a simple, yet secure process Our implementation focuses on giving authors flexibility and autonomy over their posts while maintaining a straightforward and intuitive interface for these critical content management functions.
* **Search**
  * Grade: 6
  * Comments: We developed a sophisticated server-side search functionality to facilitate efficient and effective content discovery on our platform. This feature allows users to search for posts by keywords, enhancing the overall user experience and accessibility of content. The search is implemented using Supabase's Full Text Search capabilities, ensuring fast and relevant results. We placed a search bar in a prominent location on the website, making it easy for users to access this feature. When a user enters a search term, the query is processed on the server-side, and matching posts are returned and displayed in an organized manner. This feature not only improves navigation but also helps users quickly find the content of interest, significantly enhancing the usability of our blogging platform. Our focus was on creating a responsive and accurate search system that aligns with the needs of our users for quick information retrieval.
* **Use an external API**
  * Grade: 2
  * Comments: We enhanced our application by integrating the 'random-cat' external API, which provides dynamic and engaging content. This feature is implemented in the footer of our application, where each visit or page refresh fetches a new random cat image from the API. This integration not only adds an element of fun and surprise to the user experience but also demonstrates our ability to incorporate third-party services into our platform. The random cat images serve as a delightful visual treat for our users and showcase our commitment to creating an engaging and interactive platform.
* **Resource access control**
  * Grade: 6
  * Comments: We implemented robust resource access control by leveraging Supabase's Row-Level Security (RLS) features. Our focus was on ensuring the security and integrity of user data and content within our application. We established strict policies to regulate access to different resources: 
    - Only authenticated users are allowed to create posts. This policy is enforced through a custom RLS policy on our 'posts' table, ensuring that unauthenticated users cannot add content to the platform.
    - Additionally, we implemented a policy that allows users to only modify or delete their own posts. This is achieved by checking the 'user_id' associated with each post against the current authenticated user's ID, ensuring that users cannot alter or remove content that they do not own.
  These measures effectively prevent unauthorized access and modifications, ensuring a secure environment for our users to engage with the platform. The implementation of these policies not only safeguards user data but also aligns with best practices in application security and data privacy.
  ![RLS](image/RLS.png)
* **Account settings**
  * Grade: 4
  * Comments: We developed a comprehensive user dashboard to allow for personalization and management of account settings. This dashboard is designed to be user-friendly and intuitive, enabling users to easily update their personal information such as name, and preferred language. The dashboard's layout is straightforward, presenting all editable fields in a clear and organized manner. Users can effortlessly navigate through different sections, make changes, and save their updated preferences. The implementation involved setting up forms for data input and integrating them with the backend to handle updates securely and efficiently. This feature enhances the user experience by providing a degree of control over their profiles and preferences, thus catering to the diverse needs and expectations of our user base.
* **WYSIWYG integration**
  * Grade: 2
  * Comments: To enhance the post creation and editing experience, we integrated a What You See Is What You Get (WYSIWYG) editor into our blogging platform. This feature significantly improves the usability and accessibility of content creation for our users. The WYSIWYG editor allows users to easily format text, add links, insert images, and perform various styling actions in a user-friendly interface that immediately reflects the changes. This implementation was aimed at making content creation more intuitive, especially for users who may not be familiar with markdown or HTML syntax.
* **Gravatar integration**
  * Grade: 2
  * Comments: We successfully integrated Gravatar into our application, enhancing the visual identification of users. This feature allows for the automatic display of user avatars in various sections of our platform, including the header, comments and user profiles. Whenever a user's email address is associated with a Gravatar account, their chosen Gravatar image is automatically fetched and displayed. This integration not only personalizes the user experience but also brings a familiar aspect of digital identity to our platform, as Gravatar is widely used and recognized across various online platforms. The implementation involved linking the Gravatar service with our user database, ensuring that the avatars are updated in real-time and accurately reflect the users' current Gravatar images. This feature adds a layer of personalization and visual appeal, making the platform more engaging and user-friendly.
* **Light/dark mode**
  * Grade: 2
  * Comments: We implemented a theme switcher feature in our application, enabling users to toggle between light and dark modes according to their comfort. This functionality enhances the visual comfort and accessibility of our platform, catering to different lighting conditions and individual preferences. The implementation involved integrating a toggle button within the user interface that switches the theme of the entire application seamlessly. We utilized Tailwind CSS for efficient theme management, ensuring a consistent and responsive design across all components in both light and dark modes. The inclusion of this feature not only adds to the aesthetic appeal but also demonstrates our commitment to providing a user-centric and inclusive experience.

### Bonus Tasks

* ***Thumbnail image***
  * Grade: 4
  * Comments: For enhancing the visual appeal and informativeness of our blog posts, we implemented a thumbnail image system. This feature allows users to upload or link to an image that will be displayed as a thumbnail for each post. We utilized the Next.js Image component to efficiently handle and display these images. This component optimizes image loading, ensuring fast page speeds and improved user experience. We stored the image URLs in the 'posts' table of our database, associating each image with its corresponding post. During the post creation or editing process, users can specify the image URL, which is then rendered on the post list and individual post pages. Our implementation focused on both functionality and aesthetics, ensuring that the images are displayed appropriately across different device sizes for a responsive design. The integration of this feature significantly enhances the visual aspect of our blogging platform, making it more engaging and interactive for users.

## Miscellaneous

### Course Feedback

Throughout this course, we greatly appreciated the hands-on approach to learning full-stack web development. The curriculum's focus on modern web technologies, including Next.js, Supabase, and Tailwind CSS, provided us with practical skills and insights directly applicable to current industry standards.

One of the course's strengths was its practical orientation, which allowed us to apply theoretical concepts in a real-world project setting. This experience has been invaluable in understanding the intricacies of building and deploying a full-scale web application.

However, we observed a gap in the curriculum regarding advanced React patterns and state management techniques. While the course laid a solid foundation in React fundamentals, additional content on complex React concepts, state management libraries (like Redux or Context API), and best practices in larger-scale applications would have been highly beneficial.

Overall, the course provided an excellent learning experience.

### Project Reuse

- [O] We authorize the professors to use our project as an example for the next year students.
