// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license !== "none") {
      return `![Github license](https://img.shields.io/badge/license-${license}-blue.svg)`;
    }
    return "";
  }

  //Creating a function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title} 
  ${renderLicenseBadge(data.license)}
  ## Description
  ${data.description}
  ## Deployed URL
  ${data.link}
  ## Table of Contents
  * [Features](#features)
  * [Languages & Dependencies](#languagesanddependencies)
  * [Testing](#testing)
  ## Features
  ${data.features}
  ## Languages & Dependencies
  ${data.require}
  ## How to Use This Application:
  ${data.usage}
  ## Testing
  ${data.test}`;
};

  module.exports = generateMarkdown;
