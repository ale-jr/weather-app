# Weather App
Just a simple project that allows you to check the weather :D

## Folder contents

#### /public
Where our html, assets and environment variables are
### /src
All those React things
* __/components:__ React components divided by folder, with index.tsx as the component entrypoint, some comoponents have a style.tsx file, for Material-ui styling and a types.tsx for Typescript definitions
* __/context:__ React contexts divided by folder, follows the same rules of components
* __/hooks:__ Lovely hooks for the aplication, divided by folder too
* __/theme:__ Some Material-ui theme definitions
* __App.tsx:__ Where the magic happens, here we have some context providers and entrypoints for our components
* __index.css:__ Just some definitions for html, body and root div, should not be used for styling
* __index.tsx:__ Entrypoint for our application
* __react-app-env.d.ts:__ Typescript definitions

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.