const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');
const generateMarkdown = require('./utils/genrateMarkdown');

const questions = [
    {
      type: "input",
      name: "title",
      message: "Please name your Project.",
    },
    {
      type: "input",
      name: "description",
      message: "Please describe the purpose of this project.",
    },
    {
      type: "input",
      name: "link",
      message: "Please provide a URL where a user can access your deployed application."
    },
    {
      type: "checkbox",
      name: "license",
      message: "Please select a license applicable to this project.",
      choices: ["MIT", "APACHE2.0", "none"],
    },
    {
      type: "input",
      name: "require",
      message: "List any project dependencies here.",
    },
    {
      type: "input",
      name: "features",
      message: "List key features about this project here.",
    },
    {
      type: "input",
      name: "usage",
      message:
        "State the languages used for this project.",
    },
    {
      type: "input",
      name: "creator",
      message: "Write your GitHub username.",
    },
    {
      type: "input",
      name: "email",
      message: "Provide an email address.",
    },
    
]