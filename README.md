# **Welcome to the Quiz app assignment**

A basic quiz application with a focus on essential features and a minimalistic design, aiming to evaluate the understanding of a variety of topics in frontend web development.

## **The Assignment**

The assignment you're about to tackle is a simplified version of a real-world quiz application, built using the A remix template we’ve prepared for you. This application is designed to be small and manageable, allowing you to focus on the project's core functionality while demonstrating your web development skills, adherence to web best practices, and proficiency in frontend web development.

## **Data**

The application will store quiz data locally, using a simple object structure and does not have a backend or an API integrated. However, you are welcome to use local storage in the browser, a simple SQLite database, your own backend or an API if you prefer.

## **Best Practices**

Following best practices is crucial for developing high-quality, maintainable, and user-friendly web applications. Here are some of best practices we adhere to in our projects:

1.  **Code Organization and Readability:** Employ a modular and well-organised code structure to enhance maintainability. Use descriptive variable and function names, meaningful comments where appropriate, and proper indentation to make the code easy to understand and navigate.

2.  **Accessibility:** Minimise accessibility barriers by adhering to web accessibility guidelines. Ensure proper colour contrast, keyboard navigation, and alternative text for images to cater to users with disabilities.

3.  **Version Control:** Employ a version control system like Git to track changes. Regularly commit changes with meaningful commit messages to facilitate code reviews and traceability.

4.  **Responsiveness:** Ensure the application adapts seamlessly to different screen sizes and devices, providing a consistent user experience across desktops, tablets, and smartphones.

By following these best practices, you can create a robust, user-friendly, and maintainable quiz app that demonstrates your proficiency in both front-end development and web development principles.

## **Design**

The design of the simple quiz app should prioritise simplicity, clarity, and accessibility. Here are some key design considerations:

You can find the reference design in this [figma link](<https://www.figma.com/file/4AFir6BVBClc0CljOyxm1d/Web-App-Quiz-(Assignment)?type=design&node-id=3%3A3057&mode=dev&t=4aFDB9bggLvkmnAQ-1>). You can use it as a reference for the design, but you are free to use your own design as long as it follows the design principles below.

**Colour Scheme:**

- Employ a clean and uncluttered colour palette that compliments the quiz theme.

- Use browser’s built-in colour contrasting tools to ensure readability of text and backgrounds .

- Consider using colour-coding to indicate correct or incorrect answers.

- **Bonus**: consider using custom properties in CSS/SASS to make them easier to change.

**Typography:**

- Choose clear and readable fonts that are easy on the eye and suitable for the target audience.

- Use appropriate font sizes for headings, body text, and button labels.

- Maintain a consistent font style throughout the application.

**Layout and Hierarchy:**

- Create a structured layout that guides users through the quiz experience.

- Use clear visual hierarchy to prioritise important elements, such as the question, answer choices, and progress indicator.

- Organise content effectively to avoid clutter and maintain a clean, uncluttered appearance.

**User Interface (UI) Elements:**

- Design intuitive and user-friendly UI elements, such as buttons, input fields, and progress indicators.

- Ensure responsive design to adapt to different screen sizes and devices.

- **Bonus**: Use appropriate animations and transitions to enhance the user experience without overwhelming the interface.

**Accessibility:**

- Follow web accessibility guidelines to ensure the application is usable by people with disabilities.

- Use proper colour contrast, keyboard navigation, and alternative text for images to cater to a wider audience.

- Provide clear instructions and feedback to guide users throughout the quiz.

By carefully considering these design principles, you can create a visually appealing and user-friendly simple quiz app that enhances the overall learning experience for users.

As for the technical part, we highly recommend the use of SASS, following the [7-1 pattern](https://sass-guidelin.es/#the-7-1-pattern) and the [BEM methodology](http://getbem.com/) or you can use vanilla CSS if you prefer that. Using any other pre-processors, frameworks, component libraries are **strictly prohibited**.

## **User Stories**

### **Quiz Creator**

**As a user, I want to register on the quiz application to create quizzes.**

**Details:**

- As an unregistered user, I should not be able to access the dashboard area or any administrative routes, requiring me to log in first.

- The user needs to register for an account to create quizzes.

- The user should be required to provide basic information, such as a username, an email address, and a password to register

- The password should be validated for security when registering to ensure the integrity.

  - Password length: A minimum password length of 8 characters should be enforced.

  - Character requirements: Passwords should contain a combination of uppercase and lowercase letters, numbers, and special characters.

  - Password uniqueness: Passwords should not be identical to the username or contain the username. (**Bonus**)

- The user should be redirected to the login page after registration the process succeeds.

- The user is redirected to the dashboard page after the login process succeeds where they can manage past quizzes (if any exist) and create new ones.

- The user should be presented with a clear error message in case of any error in both registration and login pages.

- The user should have an option to logout from the application.

- The title of the web page should reflect the current page the user is currently on.

**As a registered user, I want to see a dashboard that lists all of the quizzes I created.**

**Details:**

- The dashboard should display a list of all quizzes created by the registered user.

- Each quiz should include a title, view quiz details (questions and answers), copy link to access the quiz and a button to delete it.

- Clicking on the "view" of the quizzes will show a pop-up with questions and answers of that specific quiz.

- When the delete pressed it should show a prominent confirmation dialog in a pop-up.

- The user should be able to copy the link to the quiz and share it with others.

**As a quiz creator, I want to see a specific quiz I created.**

**Details:**

- A quiz page should contain the title, questions with their answers.

- Show a list of all participants, their results / grade.

- **Bonus**: Show a chart of the results (number of participants who got each grade).

**As a quiz creator, I want to create and share my quizzes with others.**

**Details:**

- A user can create a quiz, the quiz creation form will pop-up in a modal and have all the details necessary for creating a new quiz.

- The quiz has a _required_ title field to be identified and can be used as the unique link.

- Each quiz should have a unique identifier or link that can be shared with others.

- When a user clicks copy to clipboard, the link for the quiz should be copied to their clipboard.

**As a quiz creator, I want to create quizzes with multiple choice questions.**

**Details:**

- The application should provide options for creating multiple choice quizzes.

  - the quiz creator should specify the correct answer and provide incorrect options.

  - the user will be prompted to specify the correct answer if they haven’t when submitting.

  - the user has to provide four options for each question.

- **Bonus**: Allow the quiz creator to re-order the answers by dragging and dropping.

**As a quiz creator, I want to include text in the questions of my quizzes.**

**Details:**

- The quiz creator should be able to specify the question.

- The application should make the quiz at least have 1 question.

- The quiz creator should be able add more questions.

- **Bonus**: Add a button to remove a question.

### **Participant**

**As a participant, I want to be able to access and take quizzes without having to create an account.**

**Details:**

- Participants should be able to access quizzes directly through a unique link provided by the quiz creator.

- No registration or authentication is required to access and take quizzes.

- The user is prompted to provide a name before starting the quiz.

- **Bonus**: if the user does not provide a username, generate a random username to differentiate the users.

**As a participant, I want to answer the questions at my own pace.**

**Details:**

- Participants should have the flexibility to answer the quiz questions at their own pace without any time constraints.

- The system should not automatically end the quiz or progress to the next question until the participant is ready.

- Participants should be able to skip questions.

**Bonus: As a participant, I want to see a timer that indicates the time spent on the quiz.**

**Details:**

- A timer should be displayed throughout the quiz to track the participant's time for each question and the overall quiz duration.

- The timer should be clearly visible and easy to interpret, enabling participants to effectively monitor their speed and manage their time.

- The timer should start once the quiz begins and stop once the participant submits their final answer.

**As a participant, I want to see my progress as I answer questions.**

**Details:**

- A progress indicator should be visible throughout the quiz to help participants track their progress and gauge how much of the quiz they have completed.

- The progress indicator should clearly indicate the number of questions answered and the number of questions remaining.

**As a participant, I want to view my overall score and a breakdown of my answers after completing the quiz.**

**Details:**

- After completing the quiz, participants should see a screen displaying their overall score and a breakdown of their answers, including skipped, correct and incorrect answers.

## **Development**

**This is a Remix + Vite based app!**

Here are some pre-configured environments to start developing and exploring right away! You can use your local development setup as well.

[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/Fastlink-WSC/quiz-app-remix) [![Open in CodeSandbox](https://img.shields.io/badge/open_in_codesandbox-151515?logo=codesandbox&style=for-the-badge)](https://codesandbox.io/s/github/Fastlink-WSC/quiz-app-remix) [![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/Fastlink-WSC/quiz-app-remix)

📖 See the [Remix docs](https://remix.run/docs) and the [Remix Vite docs](https://remix.run/docs/en/main/future/vite) for details. Feel free to use GitHub discussions to ask questions.

Run the Vite dev server:

```sh
yarn dev
```

## Deployment

First, build your app for production:

```sh
yarn build
```

Then run the app in production mode:

```sh
yarn start
```

Now you'll need to pick a host to deploy it to.

### DIY

If you're familiar with deploying Node applications, the built-in Remix app server is production-ready.

Make sure to deploy the output of `npm run build`

- `build/server`
- `build/client`

## **Submission and Deliverables**

- Source code pushed to a git repository and providing us with the link, or by simply forking this repo then opening a Pull request.

- A `README.md` file with setup instructions, project overview, additional documentation, and any notable design decisions.

## **Deployment (Bonus)**

Deploying your Quiz application to a production environment demonstrates your ability to take a project from development to completion and make it accessible to a wider audience. It also shows your understanding of deployment best practices and your ability to ensure the application's stability and scalability.

While not mandatory, deploying your application would be a valuable addition to your submission and showcase your overall skills as a developer.

## **Grading Criteria**

- **Functionality**: Your implementation of the user stories will be evaluated based on its correctness, completeness, and adherence to the provided specifications and requirements. Effective use of the Remix framework and its core features.

- **Web Best Practices**: Your adherence to web best practices, such as code organisation, accessibility, and responsiveness.

- **Styling**: Styling skill and use of Sass following best practices, styling consistently and reducing duplication. Responsive design and browser compatibility

- **Error Handling**: Demonstrate clear error handling and user feedback for loading states and failures. All forms and user inputs must include proper validation.

- **Code Quality**: How well-organised and properly documented the code through using naming conventions.

- **React Proficiency**: Your proficiency in React, including component design, state management, and prop drilling.

## **Timeline**

Please complete the assignment within **10 days** from the time of receiving the assignment.

_Good luck with the project! We're looking forward to seeing your submission._
