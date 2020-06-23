const fs = require("fs");
const generatePage = require("./src/page-template.js")

fs.writeFile("index.html", generatePage("Jane", "janehub"), err => {
    if (err) throw err;
    console.log("Portfolio Complete! Check out index.html to see the output!");
    
})
  
