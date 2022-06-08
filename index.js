// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title"
    },
    {
        type: "input",
        message: "Input description of your project",
        name: "description"
    },
    {
        type: "input",
        message: "How do you install your project?",
        name: "installation"
    },
    {
        type: "input",
        message: "How do you use your project?",
        name: "usage"
    },
    {
        type: "input",
        message: "What are the contribution guidlines?",
        name: "contributors"
    },
    {
        type: "input",
        message: "What are the test intructions, if any?",
        name: "tests"
    },
    {
        type: "checkbox",
        message: "Choose a license listed below.",
        name: "licenses",
        choices: ["Apache", "Boost", "GNU", "Eclipse", "None of the above"]
    },
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "github"
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email"
    },
    
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    fs.writeFile(fileName, data ,function(error){
        if(error) console.error(error);
    })
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(function(response){
        response.name

        writeToFile('./README.md',generateMarkdown(response))
    })
};

// Function call to initialize app
init();
