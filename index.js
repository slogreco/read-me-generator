const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
    return inquirer.prompt([
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
            name: "screen_shot",
            message: "Enter source for project screenshot (ex: '/assets/SharedScreenshot.jpg')"
        },
        {
            type: "input",
            name: "fullname",
            message: "What is your fullname?"
        },
        {
            type: "input",
            name: "year",
            message: "What year would you like on your license?"
        }
    ]);
};

function generateReadMe(answers) {

    return `
<h2 align = "center"><strong> ${answers.title} </strong></h2>
    
    <p align = "center"> ${answers.description}

    <a href= "https://github.com/ + ${answers.username} + / + ${answers.repo_name}"> Explore the Repo </a>

    <a href= "https:// + ${answers.username} + .github.io/ + ${answers.repo_name}"> View Deployment </a>

    <a href="https://github.com/ + ${answers.username} + / + {answers.repo_name} + /issues">Report Bug/Request Features</a>

</p>


## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
* [License](#license)

## Installation

1. Clone the repo

    git clone https://github.com/${answers.username}/${answers.repo_name}.git

2. Install NPM packages

    npm install

## Usage

<img src= "${answers.screenshot}" alt = "screenshot">


## Contributing

Contributions are what make the open source community an amazing place to be learn, create, and inspire. All contributions you would like to make are greatly appreciated.

1. Fork the Project
2. Create your Feature Branch (`git checkout - b feature / NewFeature`)
3. Commit your Changes (`git commit - m 'Add some NewFeature'`)
4. Push to the Branch (`git push origin feature / NewFeature`)
5. Open a Pull Request


## Tests



## Questions



## License

MIT License

Copyright (c) ${answers.year} ${answers.fullname}

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

    `

}


init();
