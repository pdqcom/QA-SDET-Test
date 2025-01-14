# PDQ QA SDET Technical Assignment
Thanks for applying! The steps of this interview process are as follows:
1. Phone screening
2. Technical assessment <- *this is where we are now!*
3. Technical interview
4. Cultural interview
5. C-suite interview

## Technical Assignment Details
This assessment is meant to imitate what a working environment is like. You are welcome to use all the tools available to you as you would in the role itself. However, should you progress to the next round of interviews you will be expected to perform an in depth explanation of your solutions.

We do not want this to take any more of your time than necessary, so please do yourself a favor and set a maximum 2 hour time limit. 

We have created our own version of TODO MVC. It is the same as the regular one, but we've added a few bugs.

This test is designed to test your Playwright capabilities using typescript. There are 2 main pieces to the homework. Each is described in more detail further in this doc.

2 Pieces of the assignment:

1. Find a few of the bugs we have purposely created in TODO MVC and submit bug reports for each using GitHub issues on your personal repo.
2. Complete Playwright tests in the tests>todo.spec.ts You may create new folders for any organization you prefer. Keep a focus on Page Object Model layout while creating these test.

## Submission Details
1. To keep your work private from other applicants, pull this repo and create a [mirror](https://docs.github.com/en/repositories/creating-and-managing-repositories/duplicating-a-repository) in your personal GitHub account
2. Add your changes to the Playwright tests, and bugs reported in your Github issues
3. When you are ready to share, invite nate8282, sowardskimberly, matthewstclaire, dkarter, GibbyPDQ, JasonNoonan, Nickjgniklu, and jason-amick to your repo. Send an email to Jenna letting her know you are ready to have your work reviewed

## Set up TODO MVC

1. Clone this repo and create a [mirror](https://docs.github.com/en/repositories/creating-and-managing-repositories/duplicating-a-repository) in your personal GitHub account of this repo you are reading now - https://github.com/pdqcom/QA-SDET-Test
2. Navigate your terminal to the repo
3. In your terminal run `npm install` - set up the dependencies
4. In your terminal run `npm run serve` - run the program locally on your machine
5. To run Playwright you might need to install Playwright. While in your project directory navigate to the tests folder and run `npx playwright install`
6. To run the Playwright UI run `npx playwright test --ui`


### 1. Submit bug reports
Here are some product requirements to help you see how things are supposed to work in the app. 

#### Product Requirements
- When no todos are added users can only view the add item textbox
- Users can create a todo list item by typing into the box "What needs to be done?" then selecting Enter on the keyboard
- Users can have multiple items in their TODO list
- Once a user submits an item to their list, they can see: their todo item in the list, how many items are uncompleted, All button, Active button, Completed button, and Clear completed items buttons. The view will default to All items when the first todo is added
- Users can complete an item by selecting the radio button next to the item. Once selected a green checkmark appears and the item is crossed off the list. The number of items left updates to show how many are uncompleted
- Users can complete all items by selecting the down arrow above the radio buttons when there are uncompleted todos
- Once a task is completed it can be viewed in the All or Completed views
- Users can uncheck all todos by selecting the down arrow above radio buttons when all radios are selected
- Users can edit a todo item by double clicking the item, then selecting Enter on the keyboard to submit the change
- Users can delete an item in the todo list by selecting the "X" next to the todo item when they hover over the todo item. Once deleted the count of items left is updated to show uncompleted tasks. The item is removed from all lists. 
- User can select All. This will show all uncompleted and completed todos
- User can select Active. This will only show all uncompleted todos
- User can select Completed. This will only show all completed todos
- User can select Clear completed to delete all Completed tasks. All completed tasks will be immediately be removed from view
- Once a todo is added, the user will always see the bottom banner even if there is no todo in the view (All, Active, Completed)
- Refreshing the page starts a new state and the users can start again from scratch

#### Submit bug reports
We've purposely added a handful of bugs to this repo.

In your private github repo, submit those bug reports to your repo in the github issues.

### 2. Update/Create Playwright tests
We've created a framework of the tests and some of the skills we would like to see. Please use typescript and keep a focus on Page Object Model layout while creating these tests. You may create any files/folders that you like for organization.

We also want to see an example of your API testing so we added 3 tests in there using the SWAPI API. More info is in the comments of the todo.spec.ts folder of documentation and what tests we want to see.

Make sure you have run the setup instructions for Playwright from the "Set up TODO MVC" section of this ReadMe.



# TodoMVC: React

## Description

This application uses React 17.0.2 to implement a todo application.

-   [React](https://reactjs.org/) is a JavaScript library for creating user interfaces.

## Requirements

The only requirement is an installation of Node, to be able to install dependencies and run scripts to serve a local server.

```
* Node (min version: 18.13.0)
* NPM (min version: 8.19.3)
```
