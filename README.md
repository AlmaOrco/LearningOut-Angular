# LearningOut-Angular
This is a front side of [LearningOut API REST](https://github.com/AlmaOrco/LearningOut).
This gets data from the database through the api server side.

## Features
Get place list and show them.
Go to detail view when you click in one item.
It can also search by term in while you're writing and show detail view when you click.
Delete place.
Add new places and modify and existing place.

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
git clone https://github.com/AlmaOrco/LearningOut-Angular.git
cd LearningOut-Angular
```
And install local project package:
```
npm install
```
This will create the directory *node-modules* with all dependencies listed in *package.json*.

## Running server
Use ```ng serve``` or ```npm start``` for a dev server, and you can find our app at ```http://localhost:4200/```

## Deployment
To deploy the project in production mode, you follow this step.
Clone this project:
```
git clone https://github.com/AlmaOrco/LearningOut-Angular.git
cd LearningOut-Angular
```
You'll need to know the hostname (or **"host:port"**) of your api and set the **SERVER_HOST** constant, in */src/environments/environment.prod.ts*

Compile the project with *ng build*. Add *--prod* flag to avoid dead code and get a lighter version of files.
```
ng build --prod
```
This creates all necesary files in the directory *dist*.
Copy these files to your server and open your index.html code. Notice that routes are pointing to the root of your server. Remember to update the routes of src and href attributes if you put them in inner directory.

Now, you can go to your browser and tip url of your app.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
