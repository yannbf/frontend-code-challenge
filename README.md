# Real Estatium

Project created as a challenge from McMakler. It shows real estate advertisements and their info (based in euro).

Regarding the layout, some dummy stuff was added just to make the project look more like a complete application, instead of just showing the required components.
If you just want to see how the application looks like, check the SCREENS folder in this repo.

## Project Features

* Preprocessor: SASS. Chosen because it's way better than CSS, as you have superpowers like @import, color functions, variables, and so on.
* Framework: Angular5. Chosen because Angular is a powerful framework that is built with a reactive way of thinking. Working with RxJS is incredible and even better when mixed with NGRX. Angular comes with typescript, which is great to be adopted in large projects, not only giving great autocompletion and access to documentation, but also enhancing the development process and greatly reducing errors before they ever get the chance to happen.

* Unit Tests with Jasmine and Karma.
* Prettier for a better standardized code.
* TSLINT and SASSLINT for better development and readability of the produced code.
* NGRX/STORE + EFFECTS, used just to show state management skills, as the scope of the project doesn't call much for such setup.
* Redux DevTools ready.
* Responsive application.
* Well moduled and componentially structured.
* PWA ready.
* Wallaby ready.
* Husky + LintStaged + Git hooks: precommit for running linters and prettier, prepush for doing unit tests. 
* Customized npm scripts: Deploy, to build the production version of the application and make it ready for github pages. 
* Uses materialize to follow google material design standards

## Credits

all icons/elements were done by me (Yann Braga) using Sketch.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
