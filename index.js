/////////setup required variables/////////////

const inquirer = require("inquirer");
const fs = require("fs");

///////////Set questions for README with inquirer and .then to get answers///////////////

inquirer;
prompt([
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
      await fs.writeFileSync("README.md", generateReadme(userInput))
  )
  .then(() => console.log("README Successfully Created!"));
