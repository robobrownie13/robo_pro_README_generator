// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return "";
  } else {
    return `[![License](https://img.shields.io/badge/license-${license
      .split("-")
      .join("_")}-green.svg)](https://opensource.org/licenses/${license})`;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink() {
//   if (!license) {
//     return "";
//   } else {
//     const licenseLink = [License](./LICENSE)
//     return licenseLink;
//   }
// }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return "";
  } else {
    return `For information on ${license}, follow this link: [${license}](https://opensource.org/licenses/${license})`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.project_title}    
${renderLicenseBadge(data.license_options)}

## Table of Contents   
   
- [Description](#Description)
- [Usage](#Usage)
- [Installation Instructions](#Installation)
- [Test Instructions](#Test)
- [Contributions](#Contributions)
- [License](#License)
- [Questions](#Questions)   

## Description   
   
${data.description}   

## Usage   
   
${data.usage}   

## Installation   

${data.installation_instructions}    

## Contributions   

${data.contributions}    

## Test     

${data.test_instructions}   

## License       

${renderLicenseSection(data.license_options)}   

## Questions   

Contact me at ${data.email}    

You can also view my profile: [${data.github}](https://github.com/${
    data.github
  })  


`;
}

module.exports = generateMarkdown;
