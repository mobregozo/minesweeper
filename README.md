# MinesWeeper App

This is a SPA, developed with AngularJs 1.5 as the main framework.
A Playground for users who wants to play MinesWeeper, which  is a single-player puzzle video game, where the objective is to clear a rectangular board containing hidden "mines" without detonating any of them.

Demo:
https://minesweeperapp.herokuapp.com


## Dependencies and Dev-dependencies

Make sure you have NodeJs installed, because NPM manager will be needed.

Install Gulp globally - For automation purposes
    
`npm install -g gulp`

To run the test

`npm install -g karma-cli`

Then run the following command in order to install all the dependencies:

`npm install`

## Run The App in a Development Mode

`gulp`

Build the App

`gulp prod`

Zip the App

`gulp zip`

Clean Dist Folder

`gulp clean`

How to Run the Test of  the App

`npm test`

## Directories and Files Description

package.json : Server-side dependencies.

bower.json : Client-side dependencies.

gulpfile.js : Gulp tasks are specified and described in there

/app : Source Code

/app/comonents: Each component /module of the App.
/app/assets : External Files : images, css and libs.
/app/shared : Shaded content between the up suchs directives

/app/index.html : The single page app HTML. 

/app/app.js : Main angular module.
/app/config.js : Main angular configuration and dependencies.
/app/constants.js : Main angular costants.

/e2eTests: Protractor configuration and test implementation

karma.config.js: Karma configuration file

##Next Steps

The intention was to create a well sctrured App, easy to mantain and esclate. 
I developed a component called 'mine', with the intention to make a reusable AngularJs component.