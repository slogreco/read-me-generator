const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

// array of questions for user
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is your project title?"
    },
    {
        type: "input",
        name: "description",
        message: "Description of your project"
    },
    {
        type: "input",
        name: "installation",
        message: "How can someone install their project on your computer?"
    },
    {
        type: "input",
        name: "usage",
        message: "Enter source for project screenshot/demo/code examples"
    },
    {
        type: "input",
        name: "questions",
        message: "Enter link where questions about project can be directed"
    },

];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
