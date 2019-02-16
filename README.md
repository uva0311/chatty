Chatty
=====================

A realtime messagaing web application built with ReactJS, WebSocket, along with boilerplate constructed with Babel and Webpack. The learning objectives from this application are the following:

1. expose to modern web application development tools, namely Webpack and Babel
2. understand the lifecycle of ReactJS
3. integrate JavaScript OOP concepts into web application development
4. demonstrate bidirectional communication between client and server sides through
   WebSocket


### Screenshot
Here is a short gif to show how the app works
![chatty-msg](http://g.recordit.co/9mGNVdGojs.gif)


### Usage

Clone this repo and create your own git repo.

```
git clone git@github.com:uva0311/chatty.git
cd chatty
git remote rm origin
git remote add origin [YOUR NEW REPOSITORY]
# Manually update your package.json file
```

Install the dependencies and start the server.

```
npm install
npm start
open http://localhost:3000
```

### Client Dependencies

* react
* react-dom
* Webpack
* webpack-dev-server
* babel-core
* babel-loader
* babel-preset-es2015
* babel-preset-react
* babel-preset-stage-0
* css-loader
* node-sass
* sass-loader
* sockjs-client
* style-loader

### Server Dependencies

* express
* ws
* uuid




