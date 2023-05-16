# react-jsonschema-form React seed App

This seed demonstrates how to use [react-jsonschema-form](https://rjsf-team.github.io/react-jsonschema-form/docs/) with React in order to render a simple form for displaying a task entity.

It is based on `create-react-app` and only contains minor modifications, such as:
- npm install @rjsf/core @rjsf/utils @rjsf/validator-ajv8 --save

You can start the app with the following commands:
- Execute `npm ci` to install the prerequisites. If you want to have the latest released versions use `npm install`.
- Execute `npm start` to start the application.

Browse to http://localhost:3000 to see the application in action.

## File Structure

Let's briefly have a look at the most important files:

- `src/schema.json` contains the JSON schema
- `src/App.js` is the main app component and makes use of the `Form` component in order to render a form.

The [schema](src/schema.json) defines the structure of a task.
