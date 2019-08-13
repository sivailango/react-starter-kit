This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

### Full Battery

- Axios
- Bootstrap
- Reactstrap
- Redux
- React Redux
- Redux Form
- Redux Logger
- Redux Thunk
- React Router Dom
- Formik

```
npx create-react-app my-app
cd my-app
npm start
```

### Upgrade Create React App

```
npm install react-scripts@latest
```

### Setup Editor

#### Displaying Lint Output in the Editor

You would need to install an ESLint plugin for your editor first. Then, add a file called .eslintrc.json to the project root:

```
{
  "extends": "react-app",
  "plugins": ["prettier"],
  "rules": {
    "prettier/prettier": "error"
  }
}
```

#### Apply Prettier Formatting on Save (Optional)

You most likely want to apply the Prettier formatting whenever you save your files. To do so, add the following to your Visual Studio Code Workspace Settings:

```
"editor.formatOnSave": true
```

#### Debugging in the Editor

_Visual Studio Code_
You would need to have the latest version of VS Code and VS Code Chrome Debugger Extension installed.

Then add the block below to your launch.json file and put it inside the .vscode folder in your app’s root directory.

```
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Chrome",
      "type": "chrome",
      "request": "launch",
      "url": "http://localhost:3000",
      "webRoot": "${workspaceFolder}/src",
      "sourceMapPathOverrides": {
        "webpack:///src/*": "${webRoot}/*"
      }
    }
  ]
}
```

Note: the URL may be different if you've made adjustments via the HOST or PORT environment variables.

Start your app by running npm start, and start debugging in VS Code by pressing F5 or by clicking the green debug icon. You can now write code, set breakpoints, make changes to the code, and debug your newly modified code—all from your editor.

#### Formatting Code Automatically

```
npm install --save husky lint-staged prettier
```

Add the following field to the package.json section:

```
"husky": {
    "hooks": {
        "pre-commit": "lint-staged"
    }
}
```

Next we add a 'lint-staged' field to the package.json, for example:

```
"lint-staged": {
    "src/\*_/_.{js,jsx,ts,tsx,json,css,scss,md}": [
        "prettier --single-quote --write",
        "git add"
    ]
},
```

https://medium.com/technical-credit/using-prettier-with-vs-code-and-create-react-app-67c2449b9d08

### Use Static Folder

You may create subdirectories inside src. For faster rebuilds, only files inside src are processed by Webpack. You need to put any JS and CSS files inside src, otherwise Webpack won’t see them.

Only files inside public can be used from public/index.html. Read instructions below for using assets from JavaScript and HTML.

You can, however, create more top-level directories. They will not be included in the production build so you can use them for things like documentation.

### Commands

```
npm start
npm test
npm run build
npm run analyze
```

#### Useful Links

- https://github.com/piotrwitek/react-redux-typescript-guide
- https://medium.com/swinginc/react-redux-typescript-into-the-better-frontend-tutorial-d32f46e97995
- https://facebook.github.io/create-react-app/docs/adding-flow
- https://github.com/okonet/lint-staged
- https://prettier.io/
- https://github.com/typicode/husky

### Useful NPM Modules

- https://jaredpalmer.com/formik/
- https://github.com/styled-components/styled-components

### TODO

#### Input Components

- [x] Toogle
- [ ] Date Range Picker
- [ ] Text Mask
- [ ] Pattern

#### Theme

- [ ] Dynamic For Style (Inline, Horizontal, etc.)
- [ ] Sidebar
- [ ] Theme Switcher
