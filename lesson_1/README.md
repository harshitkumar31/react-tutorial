# Lesson 1

## Where to start?

Here are a few resources:

[Official React Tutorial](https://reactjs.org/tutorial/tutorial.html)

[Egghead](https://egghead.io/technologies/react)


Setup the React Project:

```cmd
 npm init
 npm install --save react react-dom
 npm install --save-dev webpack

```

Create the following directory structure
```

|- index.html
|- webpack.config.js
|- /src
	|- index.js

```

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

</body>
</html>
```











