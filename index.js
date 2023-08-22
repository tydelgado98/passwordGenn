// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = inquirer
.prompt([
{
    type: 'input',
    message: 'what is your project title?',
    name: 'title',
},
{
    type: 'input',
    message: 'what is your project description?',
    name: 'description',
},
{
    type: 'input',
    message: 'what is your project title?',
    name: 'title',
},
{
    type: 'input',
    message: 'what is your project title?',
    name: 'title',
},
{
    type: 'input',
    message: 'what is your project title?',
    name: 'title',
},

// TODO: Create a function to write README file
function writeToFile(generateMarkdown, data) {

}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
