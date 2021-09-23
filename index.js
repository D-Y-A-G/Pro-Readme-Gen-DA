/////////setup required variables/////////////

const inquirer = require("inquirer");
const fs = require("fs");

///////////Set questions for README with inquirer and .then to get answers///////////////

inquirer
  .prompt([
    {
      type: "input",
      message: "What is the name of your Project",
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
      name: "future",
    },
  ])
  .then(
    async (answers) =>
      await fs.writeFileSync("README.md", generateReadme(answers))
  )
  .then(() => console.log("README Successfully Created!"));

////////////////function to write README.md file/////////////////////////////

const generatReadme = function () {
  ///need to add name inside parenthesis for readme.md file to be referenced
  const readmeDoc = ``; // need to create read me format between ``
};
