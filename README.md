# QA Automation challenge

This challenge was created with Cypress, using as languaje JS and Mocha as assertions.

## How is it composed?
- The suite is divided in two main sections:

-**Page Object:** In this section you will find a different file for each page of the website, that's allows to rehuse code and a clean view.
We will find the selectors and validations fot this page here. In this case, we only need the home page, so we will se only one file. 

-**TestCases:** Here we can find the test cases for the suite, in this case, we have 5 test cases, each one are referenced to the same page ('HomePage'). At the beginning we have the view ports, this allows us to run in differents views, such as mobile, ipad, or desktop version. 
    





## How to run it?

- To run the suite, make sure you have nodeJS installed, if not, install it. 
-To verify that, run: 
```sh
npm --version
```
- Install Cypress
```sh
npm install cypress
```
- After that, just open a code editor or nun it from a terminal:
```sh
npx cypress open
```
- The complete test suite will be running


