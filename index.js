const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
const { type } = require('os');


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
    type: 'list',
    message: 'what is the licensed used?',
    name: 'license',
    choices: ['MIT', 'Apache', 'GPL', 'BSD', 'None'],
},
{
    type: 'input',
    message: 'what is your github?',
    name: 'github',
},
{
    type: 'input',
    message: 'what is your email?',
    name: 'email',
}
])


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
