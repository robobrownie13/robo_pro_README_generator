const inquirer = require("inquirer");
const generateMarkdown = require("./util/generateMarkdown");
const { writeFile } = require("fs").promises;

const promptUser = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "project_title",
      message: "What is your project name?",
    },
    {
      type: "input",
      name: "description",
      message: "Type a detailed project description.",
    },
    {
      type: "input",
      name: "usage",
      message: "Type a detailed usage description.",
    },
    {
      type: "input",
      name: "installation_instructions",
      message: "Type a detailed installation guide.",
    },
    {
      type: "input",
      name: "contributions",
      message: "How can developers contribute to this project?",
    },
    {
      type: "input",
      name: "test_instructions",
      message: "How can the user test outputs?",
    },
    {
      type: "list",
      name: "license_options",
      message: "Which license will you use for this project?",
      choices: ["Apache-2.0", "EPL-1.0", "MIT", "BSD-3-Clause"],
    },
    {
      type: "input",
      name: "email",
      message: "Enter your preferred email address.",
    },
    {
      type: "input",
      name: "github",
      message: "Enter your github username",
    },
  ]);
};

const init = () => {
  promptUser()
    // Use writeFile method imported from fs.promises to use promises instead of
    // a callback function
    .then((data) =>
      writeFile(
        `${data.project_title.toUpperCase().split(" ").join("")}_README.md`,
        generateMarkdown(data)
      )
    )
    .then(() => console.log("Successfully created markdown file!"))
    .catch((err) => console.error(err));
};

init();
