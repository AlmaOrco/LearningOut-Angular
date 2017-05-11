# LearningOut-Angular
This is a front side of [LearningOut API REST](https://github.com/AlmaOrco/LearningOut).
Actually, I'm trying to connect both sides by http request sending json responses.

For now, this app shows data stored in the service class. I'm working on this.

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
