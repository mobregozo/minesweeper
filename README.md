# MinesWeeper App

This is a SPA, developed with AngularJs as the main framework.
A Playground for users whowant to plat MinesWeeper, which  is a single-player puzzle video game, where the objective of it is to clear a rectangular board containing hidden "mines" without detonating any of them.

## Dependencies

Make sure you have NodeJs installed, because NPM manager will be needed.

 - NodeJs Installed, becase we are going to use NPM package manager.

 - First install Gulp globally - For automation purposes
    
    npm install -g gulp


## Run The App

gulp

Build the App

gulp prod

Zip the App

gulp zip

Clean Dist Folder

gulp clean

How to Run the App

npm test

## Directories and Files Description

package.json : Server-side dependencies.

bower.json : Client-side dependencies.

gulpfile.js : Gulp tasks are specified and described in there

/app : Source Code

app/comonents: Each component /module of the App.
app/assets : External Files : images, css and libs.
app/shared : Shaded content between the up suchs directives

/app/index.html : The single page app HTML. 

/app/app.js : Main angular module.
/app/config.js : Main angular configuration and dependencies.
/app/constants.js : Main angular costants.

e2eTests: Protractor configuration and test implementation

karma.config.js: Karma configuration file

##Next Steps

The intention was to create a well sctrured App, easy to mantain and esclate. 

Furthermore, here is the list of items that could be added to make this product better:

User Login, In order to support private sessions
Keyboard interaction, to let the user play the game the the keyborad
API integration.