# Getting Started with Create React App


Deployment link : https://uplianceassignment12.netlify.app/

React Project Report

Project Overview
This project is a React-based web application with the following key components:
- Counter Component: Allows users to increment, decrement, and reset a counter. The counter value persists even after a page refresh.
- User Data Form: A form for users to enter their details. It auto-generates a user ID and saves data in `localStorage`. Displays a warning for unsaved changes when trying to leave the page.
- Rich Text Editor: A text editor that allows users to format and visualize their entered data. Content persists even after a refresh.

Component Structure

1.Counter Component (`Counter.js`)
- Uses `useState` to manage the count state.
- Uses `localStorage` to persist the count across page reloads.
- Uses `react-spring` for background animation.
- Buttons for increment, decrement, and reset functionalities.

2.User Data Form (`UserDataForm.js`)
- Uses `useState` to store form data.
- Auto-generates a unique `userID` when the form is filled.
- Saves data in `localStorage` to persist user details.
- Implements a `beforeunload` event to warn users about unsaved changes.

3.Rich Text Editor (`RichTextEditor.js`)
- Uses `react-draft-wysiwyg` for rich text formatting.
- Uses `draft-js` to manage text state.
- Saves editor content in `localStorage` to persist text and formatting.

State Management Choices

- `useState`: Used to manage component states (e.g., count, form data, editor state).
- `localStorage`: Used for persistent storage so that data is retained after a page refresh.
- Event Listeners (`beforeunload`): Used in the form to warn users about unsaved changes.


This report provides a summary of the component structure and state management choices.


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
