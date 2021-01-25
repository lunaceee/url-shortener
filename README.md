# Url shortener

[![Netlify Status](https://api.netlify.com/api/v1/badges/a9c41ce8-b819-4e00-ba12-51d0769b8d98/deploy-status)](https://app.netlify.com/sites/goldbelly-url-shortener/deploys)

[Live demo](https://goldbelly-url-shortener.netlify.app/)

## Project summary

This project is based on Create React App.

- CSS: I used Tailwindcss as the CSS framework to come up with a quick design for the project.
- Functionality: I used [randomstring](https://www.npmjs.com/package/randomstring) generate random slugs for the URLs when there's no custom input from the user.
- State management: I used React Hooks for managing the states, including error handling.
- Data fetching: I used browser's `Fetch` API and `async await` to communicate with the server API endpoint.
- Input field validation: I'm using the built-in input `type` and `pattern` to validate the url and slug value prior to form submission.

## Available Scripts

In the project directory, you can run:g b

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
