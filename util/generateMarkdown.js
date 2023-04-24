// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return "";
  } else {
    const licenseLink = license.link;
    return licenseLink;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.project_title}

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

## Installation Instructions
${data.installation_instructions}

## Contributions
${data.contributions}

## Test Instructions
${data.test_instructions}

## License Options
${data.license_options}

## Questions
${data.email}
${data.github}

`;
}

module.exports = generateMarkdown;
