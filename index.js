const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);
const generateMarkdown = require("./utils/generateMarkdown.js");

function promptUser() {
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
            name: "username",
            message: "What is your GitHub username?"
        },
        {
            type: "input",
            name: "repo_name",
            message: "What is your repo name?"
        },
        {
            type: "input",
            name: "screenshot",
            message: "Enter source for project screenshot (ex: '/assets/SharedScreenshot.jpg')"
        },
        {
            type: "input",
            name: "installation",
            message: "Installation instructions"
        },
        {
            type: "input",
            name: "usage",
            message: "Usage instructions"
        },
        {
            type: "input",
            name: "tests",
            message: "Project Tests"
        },
        {
            type: "input",
            name: "email",
            message: "Enter your email address so users know where to direct any questions they may have about the project."
        },
        {
            type: "input",
            name: "fullname",
            message: "What is your fullname?"
        }
    ];
    const answers = inquirer.prompt(questions);
    return answers
}

    async function init() {
        console.log("Let's build a new ReadMe")
        try {
            const data = await promptUser();
            const markdown = generateMarkdown(data);
            await writeFileAsync("README.md", markdown, "utf-8");
            console.log("Sucess!");
        }
        catch (err) {
            console.log(err);
        }
    }


    init();
