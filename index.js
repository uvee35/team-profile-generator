
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");

const render = require("./src/page-template.js");
const { ifError } = require("assert");
const { log } = require("console");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");


// Gather information about the development team members and render the HTML file.

const teamMembers = [];

function getManagerInfo() { // Gets Manager's Information
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the team manager's name?",
        },
        {
            type: "input",
            name: "id",
            message: "What is the team manager's id?",
        },
        {
            type: "input",
            name: "email",
            message: "What is the team manager's email?",
        },
        {
            type: "input",
            name: "officeNumber",
            message: "What is the team manager's office number?"
        },
    ])
    
    .then((answers) => {
        const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber); 
        teamMembers.push(manager); // Pushes manager into teamMembers array
        addTeamMember();
    });
};

function addTeamMember() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'memberType',
            message: 'What type of team member would you like to add?',
            choices: ['Engineer', 'Intern', 'Finish building the team']
        }
    ])

    .then((answers) => {
        switch (answers.memberType) {
            case 'Engineer': 
                addEngineer();
                break;
        
            case 'Intern':
                addIntern();
                break;
            
            case 'Finish building the team':
                renderTeam();
                break;
        };
    })

};

function addEngineer() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the engineer's name?",
        },
        {
            type: "input",
            name: "id",
            message: "What is the engineer's id?",
        },
        {
            type: "input",
            name: "email",
            message: "What is the engineer's email?",
        },
        {
            type: "input",
            name: "github",
            message: "What is the team engineer's GitHub username?"
        },
    ])
    
    .then((answers) => {
        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github); 
        teamMembers.push(engineer); // Pushes engineer into teamMembers array
        addTeamMember();
    });
};

function addIntern() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the intern's name?",
        },
        {
            type: "input",
            name: "id",
            message: "What is the intern's id?",
        },
        {
            type: "input",
            name: "email",
            message: "What is the intern's email?",
        },
        {
            type: "input",
            name: "school",
            message: "What is the name of the school the intern attends?"
        },
    ])
    
    .then((answers) => {
        const intern = new Intern(answers.name, answers.id, answers.email, answers.school); 
        teamMembers.push(intern); // Pushes intern into teamMembers array
        addTeamMember();
    });
};

function renderTeam() { // Creates the HTML file
    const html = render(teamMembers);

    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR)
    };
    
    fs.writeFile(outputPath, html, (err) =>{
        err ? console.error(err) : console.log('Team HTML has been created!');
    });
};

const init = () => { // Initializes getManagerInfo when page loads.
    getManagerInfo();
};

init();