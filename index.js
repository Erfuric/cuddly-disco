const inquirer = require('inquirer');
const fs = require('fs');


inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your user name?',
      name: 'Name',
    },
    {
      type: 'input',
      message: 'What is your location?',
      name: 'Location',
    },
    {
      type: 'input',
      message: 'Bio?:',
      name: 'Bio',
    },
    {
        type: 'input',
        message: 'What is your LinkedIn URL?',
        name: 'LinkedIn URL',
     },
     {
        type: 'input',
        message: 'What is your GitHub URL?',
        name: 'Github URL',
     },
  ])

