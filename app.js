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
            message: "What is your name?"
        },
        {
            type: "input",
            name: "github",
            message: "Enter your Github username."
        },
        {
            type: "input",
            name: "about",
            message: "Provide some information about yourself:"
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
            message: "What is the name of your project?"
        },
        {
            type: "input",
            name: "description",
            message: "Provide a description of the project (required)"
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
            message: "Enter the Github link to your project (required)"
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