Procedure to make this project.

Create project dir
$ mkdir default
$ cd default/
$ yarn init
Answer questions from yarn

Setup git
$ git init
Initialized empty Git repository in /Users/ianeverett/node/default/.git/

Add any modules, this example only testing with mocha and chai.

https://www.npmjs.com/package/mocha
$ yarn add mocha --dev

https://www.npmjs.com/package/chai
$ yarn add chai --dev

And a validation package for checking validiity of objects
https://www.npmjs.com/package/joi
$ yarn add joi

Install eslint, I use airbnb rules
$ yarn add eslint --dev
$ yarn eslint-plugin-import  --dev
$ yarn add eslint-config-airbnb-base  --dev

Setup .eslintrc file like this:-
{
  "extends": "airbnb-base",
  "rules": {
    "no-console": "off"
  },
  "env": {
    "mocha": true
  }
}

