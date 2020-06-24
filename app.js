// const fs = require("fs");
// const generatePage = require("./src/page-template.js")

// fs.writeFile("index.html", generatePage("Jane", "janehub"), err => {
//     if (err) throw err;
//     console.log("Portfolio Complete! Check out index.html to see the output!");

// })

const inquirer = require("inquirer");
const { type } = require("os");
const promptUser = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is your name?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                }
                else {
                    console.log("Please enter your name!");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "github",
            message: "Enter your Github username.",
            validate: usernameInput => {
                if (usernameInput) {
                    return true;
                }
                else {
                    console.log("Please Enter a Github username");
                    return false;
                }
            }
        },
        {
            type: "confirm",
            name: "confirmAbout",
            message: "Would you like to enter some information about yourself for an 'About' section?",
            default: true
        },
        {
            type: "input",
            name: "about",
            message: "Provide some information about yourself:",
            when: ({ confirmAbout }) => confirmAbout
        }
    ])
}

const promptProject = portfolioData => {
    if (!portfolioData.projects) {
        portfolioData.projects = [];
    }
    console.log(`
        =================
        Add a New Project
        =================
    `);
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the name of your project?",
            validate: projectNameInput => {
                if (projectNameInput) {
                    return true;
                }
                else {
                    console.log("Please enter a project name!");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "description",
            message: "Provide a description of the project (required)",
            validate: projectDescriptionInput => {
                if (projectDescriptionInput) {
                    return true;
                }
                else {
                    console.log("Please enter a project description");
                    return false;
                }
            }
        },
        {
            type: "checkbox",
            name: "languages",
            message: "What did you code this project with?",
            choices: ["Javascript", "HTML", "CSS", "ES6", "JQuery", "Bootstrap", "Node"]
        },
        {
            type: "input",
            name: "link",
            message: "Enter the Github link to your project (required)",
            validate: linkInput => {
                if (linkInput) {
                    return true;
                }
                else {
                    console.log("Please enter a Github link!");
                    return false;
                }
            }
        },
        {
            type: "confirm",
            name: "feature",
            message: "Would you like to feature this project?",
            default: false
        },
        {
            type: "confirm",
            name: "confirmAddProject",
            message: "Would you like to enter another project?",
            default: false
        }
    ]).then(projectData => {
        portfolioData.projects.push(projectData);
        if (projectData.confirmAddProject) {
            return promptProject(portfolioData);
        }
        else {
            return portfolioData;
        }
    });
}

promptUser()
    .then(promptProject)
    .then(portfolioData => console.log(portfolioData));