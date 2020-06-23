// const fs = require("fs");
// const generatePage = require("./src/page-template.js")

// fs.writeFile("index.html", generatePage("Jane", "janehub"), err => {
//     if (err) throw err;
//     console.log("Portfolio Complete! Check out index.html to see the output!");
    
// })
  
const inquirer = require("inquirer");

inquirer
    .prompt([
        {
            type: "input", 
            name: "name",
            message: "What is your name?"
        }
    ])
    .then(answers => console.log(answers));