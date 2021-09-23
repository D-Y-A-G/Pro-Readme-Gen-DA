/////////setup required variables/////////////

const inquirer = require("inquirer");
const fs = require("fs");

///////////Set questions for README with inquirer and .then to get answers///////////////

inquirer
  .prompt([
    {
      type: "input",
      message: "What is the name of your Project?",
      name: "title",
    },

    {
      type: "input",
      message:
        "Please provide a brief description of project answering WHAT, WHY and HOW?",
      name: "description",
    },

    {
      type: "input",
      message: "What are the steps required to install your project?",
      name: "installation",
    },

    {
      type: "input",
      message: "How is your application used?",
      name: "usage",
    },

    {
      type: "input",
      message: "Add collaborators (optional):",
      name: "collaborators",
    },

    {
      type: "checkbox",
      message: "Please choose a license for your project!",
      name: "license",
      choices: ["APACHE", "BSD", "MIT", "GNU"],
    },

    {
      type: "input",
      message: "Please add your application features (optional)",
      name: "features",
    },

    {
      type: "input",
      message: "Enter your GitHub Username:",
      name: "questions",
    },

    {
      type: "input",
      message: "Enter your email address:",
      name: "email",
    },
  ])
  .then(
    async (answers) =>
      await fs.writeFileSync("README.md", generateReadme(answers))
  )
  .then(() => console.log("README Successfully Created!"));

////////////////function to write README.md file/////////////////////////////

const generateReadme = function (inquire) {
  const readMe = `#<Project Title>${inquire.title}

  ## Project Description
  
  ${inquire.description}
  
 
  ## Table of Contents
  
  -[Installation](#installation) -[Usage](#usage) -[Credits](#credits) -[License](#license) - [Features](#features) - [Questions](#questions)
  
  ## Installation
  
  ${inquire.installation}
  
 
  
  ## Usage
  
  ${inquire.usage}
  

  
  To add a screenshot, create an 'assets/images' folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:
  'md ![alt text](assets/images/screenshot.png)'
  
  ## Credits
  
  ${inquire.collaborators}
  

  
  ## License
  
  ${inquire.license}
  
 
  
  ---
  
  ## Badges
  
  ![badmath](https://img.shields.io/github/languages/top/nielsenjared/badmath)
  
  [shields.io](https://shields.io/)
  
  ## Features
  
  ${inquire.features}
 

  ## How to contribute
  
  [![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](code_of_conduct.md)
  
  ## Tests
  
  Write tests for your application and provide examples on how to run them here.
  
  ## Questions
  
  For any questions please contact me on GitHub: ${inquire.questions} or email me: ${inquire.email}`;

  return readMe;
};
