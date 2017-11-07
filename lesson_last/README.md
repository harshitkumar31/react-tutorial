# Lesson 1

## Where to start?

We'll start with coding right away and come back later to understand setup.

Setup the React Project:

```cmd
 npm init
 npm install --save react react-dom
```
Create the following directory structure

```

| - index.html
| - webpack.config.js
| - /src
| ------ || index.js
| - /dist
| - .babelrc
```

### Why do we need a bundler? 
You can use a bundling tool like webpack,browserify,rollup. They help you write modular code, bundle different files to small packages and can help reduce the loading time drastically.


Add the following contents to src/index.js

```javascript
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById('root')
);
```

Add the following to index.html
```html
<html>
<head>
	<title></title>
</head>
<body>
	<div id="root">
		<!-- This is where your React App will get rendered. -->
	</div>
	<script src="dist/app.js"></script><!-- Refers to the js file generated by webpack -->
</body>
</html>
```

### Configuring Webpack

Installing webpack and loaders

```cmd
npm install --save-dev babel-core babel-loader webpack
```

For [ECMAScript 2015](https://babeljs.io/learn-es2015/) and React Presets:
```cmd
npm install babel-preset-es2015 babel-preset-react --save-dev
```

For more options, visit [Webpack Configuration Object](https://webpack.js.org/configuration/)

Add the following to webpack.config.js :

```javascript

const webpack = require('webpack');
const path = require('path');

const BUILD_DIR = path.resolve(__dirname, 'dist');
const APP_DIR = path.resolve(__dirname, 'src');

const config = {
    entry: {
        app: `${APP_DIR}/index.js`,//specifies the entry file for webpack
    },
    output: {
        path: BUILD_DIR,
        filename: '[name].js',
        publicPath: '/dist',
    },
    module: {
        loaders: [
            {
                test: /\.jsx?/,
                include: APP_DIR,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.js?/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
        ],
    },
    resolve: {
        extensions: ['.json', '.js', '.jsx', '.png', '.jpg'],
        modules: [
            'node_modules', 'src',
        ]
    },
};

module.exports = config;

```

[Babelrc Usage](https://babeljs.io/docs/usage/babelrc/)

Add the following to .babelrc:
```json
{
    "presets": [
        "es2015",
        "react"
    ]
}
```

And finally modify the package.json file:

```json
{
  "name": "lesson_1",
  "version": "1.0.0",
  "description": "## Where to start?",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack" // Add this
  },
  ..........
}

```

Now run the following command:

```cmd
npm run build

```

If you have followed the steps, your output should look similar to the below screenshot:

![alt text](res/screen1.png "Screen 1")


Here are a few resources:

* [Official React Tutorial](https://reactjs.org/tutorial/tutorial.html)

* [Egghead](https://egghead.io/technologies/react)

* [Webpack Tutorial](https://laracasts.com/series/webpack-for-everyone)