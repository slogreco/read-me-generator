
function generateMarkdown(data) {
  return `
<h2 align = "center"><strong> ${data.title} </strong></h2>
  
<p align = "center"> ${data.description}

<a href= "https://github.com/${data.username}/${data.repo_name}"> Explore the Repo </a>

<a href= "https://${data.username}.github.io/${data.repo_name}"> View Deployment </a>

<a href="https://github.com/${data.username}/${data.repo_name}/issues">Report Bug/Request Features</a>

</p>

<img src= "${data.screenshot}" alt = "screenshot">

## Table of Contents

\n* [Installation](#installation)
\n* [Usage](#usage)
\n* [Contributing](#contributing)
\n* [Tests](#tests)
\n* [Questions](#questions)
\n* [License](#license)

## Installation

1. Clone the repo

  git clone https://github.com/${data.username}/${data.repo_name}.git

2. Installation

<p>${data.installation}</p>

## Usage

<p>${data.usage}</p>

## Contributing

Contributions are what make the open source community an amazing place to be learn, create, and inspire. All contributions you would like to make are greatly appreciated.

1. Fork the Project
2. Create your Feature Branch (git checkout - b feature / NewFeature)
3. Commit your Changes (git commit - m 'Add some NewFeature')
4. Push to the Branch (git push origin feature / NewFeature)
5. Open a Pull Request


## Tests

<p>${data.tests}</p>

## Questions

[Send me an Email](mailto:${data.email}) 

[Reach out to me on Github](https://github.com/${data.username})

## License

MIT License

Copyright (c) ${new Date().getFullYear()} ${data.fullname}

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

  `;
}

module.exports = generateMarkdown;

