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
      choices: ["APACHE", " BSD ", " MIT ", " GNU "],
    },

    {
      type: "input",
      message: "Please add your application features (optional):",
      name: "features",
    },

    {
      type: "input",
      message: "Enter your GitHub Username:",
      name: "github",
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

const generateReadme = function (writeFile) {
  const readMe = `# **🏆${writeFile.title}🏆** </br>


  ## Project Description
  
  ${writeFile.description}

  ---  
 
  ## Table of Contents
  
  -[Installation](#installation)

  -[Usage](#usage) 

  -[Credits](#credits) 

  -[License](#license) 

  -[Features](#features) 

  -[Questions](#questions)

  ---
  
  ## Installation
  
  ${writeFile.installation}
  
 ---
  
  ## Usage
  
  ${writeFile.usage}
  
  ---

  To add a screenshot, create an 'assets/images' folder in your repository and upload your screenshot to it. Then, using the relative filepath.
  
  ## Credits

  ![collaborators](https://img.shields.io/npm/collaborators/inquirer)]
 
  ---
  
  ${writeFile.collaborators}
  
  
  ## License
  
  ${writeFile.license}
  
  ---
  
  ## 🌟Badges🌟
  
  ![badmath](https://img.shields.io/github/languages/top/nielsenjared/badmath)
  
  ![GitHub Stars](https://img.shields.io/github/stars/dnsarce21/Pro-Readme-Gen-DA?style=social)
  
  ![followers](https://img.shields.io/github/followers/dnsarce21?style=social)

  ---

  ## Features
  
  ${writeFile.features}

  ---

  ## How to contribute
  
  [![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](code_of_conduct.md)
  ![Contributors](https://img.shields.io/github/contributors/dnsarce21/Pro-Readme-Gen-DA)

  ---
  
  ## Tests
  
  Write tests for your application and provide examples on how to run them here.

  ---
  
  ## Questions
  
  🥇For any questions please contact me on
  
  GitHub: https://github.com/${writeFile.github} 
  
  email me @: ${writeFile.email}`;

  return readMe;
};

/////Need to work on BADGES and formatting README better///////////////
