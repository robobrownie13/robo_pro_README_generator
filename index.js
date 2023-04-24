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
      choices: [
        "Apache License 2.0",
        "GNU General Public License v3.0",
        "MIT License",
        'BSD 2-Clause "Simplified" License',
        'BSD 3-Clause "New" or "Revised" License',
        "Boost Software License 1.0",
        "Creative Commons Zero v1.0 Universal",
        "Eclipse Public License 2.0",
        "GNU Affero General Public License v3.0",
      ],
    },
    {
      type: "input",
      name: "email",
      message: "Enter your preferred email address.",
    },
    {
      type: "input",
      name: "github",
      message: "Enter your github profile link.",
    },
  ]);
};

const init = () => {
  promptUser()
    // Use writeFile method imported from fs.promises to use promises instead of
    // a callback function
    .then((data) =>
      writeFile(
        `${data.project_title.toLowerCase().split(" ").join("")}_README.md`,
        generateMarkdown(data)
      )
    )
    .then(() => console.log("Successfully wrote to markdown file!"))
    .catch((err) => console.error(err));
};

init();

//   .then((data) => {
//     const filename = `${data.project_title
//       .toLowerCase()
//       .split(" ")
//       .join("")}.md`;

//     fs.writeFile(filename, JSON.stringify(data, null, "\t"), (err) =>
//       err ? console.log(err) : console.log("Success!")
//     );
//   });
