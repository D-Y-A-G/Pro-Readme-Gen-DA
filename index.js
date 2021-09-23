/////////setup required variables/////////////

const inquirer = require("inquirer");
const fs = require("fs");

///////////Set questions for README with inquirer and .then to get answers///////////////

inquirer
  .prompt([
    {
      type: "input",
      message: "What was your motivation?",
      name: "motivation",
    },

    {
      type: "input",
      message: "Why did you build this Project?",
      name: "reason",
    },

    {
      type: "input",
      message: "What problem does it solve?",
      name: "problem",
    },

    {
      type: "input",
      message: "What did you learn?",
      name: "learned",
    },

    {
      type: "input",
      message: "What makes your Project stand out?",
      name: "unique",
    },

    {
      type: "input",
      message: "What were some challenges you experienced?",
      name: "challenges",
    },

    {
      type: "input",
      message: "What features will you implement in the future?",
      name: "future",
    },
  ])
  .then(
    async (answers) =>
      await fs.writeFileSync("README.md", generateReadme(answers))
  )
  .then(() => console.log("README Successfully Created!"));

////////////////function to write README.md file/////////////////////////////

// const generatReadme = function () {
//   ///need to add name inside parenthesis for readme.md file to be referenced
//   const readmeDoc = ``; // need to create read me format between ``
// };
