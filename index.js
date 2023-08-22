const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');


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
    message: 'what is the installations?',
    name: 'installations',
},
{
    type: 'input',
    message: 'what is your projects usage?',
    name: 'usage',
},
{
    type: 'input',
    message: 'what is the technologies used?',
    name: 'tech',
},
{
    type: 'input',
    message: 'who contributed?',
    name: 'contributed',
},
{
    type: 'input',
    message: 'what is the licensed used?',
    name: 'license',
},
{
    type: 'input',
    message: 'what is your github?',
    name: 'github',
},
])

// TODO: Create a function to write README file
function writeToFile(generateMarkdown, data) {
    fs.writeFile('README.md', generateMarkdown(data), (err) =>
    err ? console.log(err) : console.log('Success!'));
}

// TODO: Create a function to initialize app
function init() {
    questions
    .then((data) => {
        writeToFile(generateMarkdown, data);
    })
}


init();
