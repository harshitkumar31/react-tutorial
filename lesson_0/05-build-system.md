# Build system

That is not generally how you write React applications. We have a complete new directory structure.

## `create-react-app`

This tool called `create-react-app` simplifies a lot of things for us.
https://github.com/facebook/create-react-app

```shell
npm install -g create-react-app
```

Creating a React application is as easy as

```shell
create-react-app <appname>
```

Wow 🎉

```
my-app
├── README.md
├── node_modules
├── package.json
├── .gitignore
├── public
│   └── favicon.ico
│   └── index.html
│   └── manifest.json
└── src
    └── App.css
    └── App.js
    └── App.test.js
    └── index.css
    └── index.js
    └── logo.svg
    └── registerServiceWorker.js
```

Javascript is generally not written in HTML. But not the other way round. 😉
