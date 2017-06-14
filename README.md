# LearningOut-Angular
This is a front side of [LearningOut API REST](https://github.com/AlmaOrco/LearningOut).
This gets data from the database through the api server side.

## Notes of branch
Branch in development. It may has bugs and incomplete functionalities.

## Features
Get place list and show them.
Go to detail view when you click in one item.
It can also search by term in while you're writing and show detail view when you click.
Delete place.

## Installation
To run this app, you'll need node 6.3.x or higher, and npm 3.3.x or higher. Check this with 
```
node -v
```
and
```
npm -v
```
If you don't have installed, you can download from [Nodejs.org](https://nodejs.org/es/).

Then, you can install angular-cli
```
npm uninstall -g angular-cli @angular/cli
npm cache clean
npm install -g @angular/cli@latest
```

Clone this project:
```
https://github.com/AlmaOrco/LearningOut-Angular.git
```
And install local project package:
```
npm install --save-dev @angular/cli@latest
npm install
```
This will create the directory *node-modules* with all dependencies listed in *package.json*.

## Running server
Use ```ng serve``` for a dev server, and you can find our app at ```http://localhost:4200/```

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
