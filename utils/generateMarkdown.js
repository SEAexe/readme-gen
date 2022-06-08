// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  if(this.license == "true"){
      return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  } else {
      return ""
  };

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == "Apache"){
      return "https://opensource.org/licenses/Apache-2.0"
  } else if (license == "Boost"){
      return "https://www.boost.org/LICENSE_1_0.txt"
  } else if (license == "Eclipse"){
      return "https://opensource.org/licenses/EPL-1.0"
  } else if (license == "GNU"){
      return "https://www.gnu.org/licenses/gpl-3.0"
  } else {
      return ""
  };

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license == "None of the above") {
      return ""
  }else {
      return `## License
      This license was used for this application`
  };

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  
  console.log(data)
  
return `## ${data.title}


## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Contributors](#contributors)
- [Usage](#usage)
- [Tests](#tests)
- [Questions](#questions)
## Description
${data.description}
${renderLicenseSection(data.license)}
${renderLicenseBadge(data.license)}
[![license](https://img.shields.io/badge/license-${data.license}-blue.svg)]()
## Installation
${data.installation}
## Contributors
${data.contributors}
## Usage
${data.usage}
## Tests
${data.tests}
## Questions
- GitHub: ${data.github}
- Email: ${data.email}

## Screenshots
- ![Insert description here](Insert link to picture)

`;

}

module.exports = generateMarkdown;
