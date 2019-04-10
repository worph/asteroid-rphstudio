# WebApp Game

This project is a a boiler plate for a WebApp Game. This kind of game run on every target with modern web browsing capabilities while providing native feels to the user.
Target supported by this boiler plate:

 1. Web browser : Chrome, Firefox etc...
 2. Mobile App: Android linux
 3. Desktop Application: Windows, Mac, Linux

## Tech stack

The main source code use [Phaser](https://phaser.io/) + [React](https://reactjs.org/) + [Typescript](https://www.typescriptlang.org/) to generate common static files.

**React**
_React_ makes it painless to create interactive UIs. Design simple views for each state in your application. This framework is used to make the UI of the game.
This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
You can find the react guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

**Phaser**
Phaser - A fast, fun and free open source HTML5 game framework. A Desktop and Mobile HTML5 game framework. A fast, free and fun open source framework for Canvas and WebGL powered browser games.

**Typescript**
**TypeScript** is an open-source programming language developed and maintained by Microsoft. It is a strict syntactical superset of JavaScript, and adds optional static typing to the language. **TypeScript** is designed for development of large applications and transcompiles to JavaScript.

**ionic** / **docker** / **electron**
Then 3 other frameworks are used to generate native target binary:
 1. Web browser: [Docker Container](https://docs.docker.com/) (well docker is optional here but I like the concept)
 2. Mobile App: [Ionic framework](https://ionicframework.com/) 
 3. Desktop Application: [Electron](https://electronjs.org/)  generate game executable with installer.



## How to use
interesting source code files are in sub folder **public** and **src**
For quick start see the React documentation or execute:
`npm install`
`npm start`

## code structure
the **src** folder is composed of 2 main part:
the **app** part where you have regular React pages used to easily make menu and stuff.
The **game** part where the library Phaser is used to effectively create the game.

## How to deploy
To deploy a game with this starter use the underlining framework to generate your target. The code project from each framework is under their own respective directory. They are very simple sub project and you can read the documentation of each framework to understand how to use it.
Sub Folder:
 1. **docker** : execute docker_build.bat to generate a docker container with the WebApp Game
 2. **electron** : execute electron_build.bat to generate a desktop executable and installer with the WebApp Game
 3. **ionic**: execute  ionic_build.bat to generate android apk for phone

