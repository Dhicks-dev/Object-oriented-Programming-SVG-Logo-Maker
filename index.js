const inquirer = require('inquirer');
const fs = require('fs');
const { generateShape } = require('./lib/shapes');

// Function to generate SVG content based on user input
function generateSVG(text, textColor, shape, shapeColor) {
    const shapeContent = generateShape(shape, shapeColor);

    // SVG template
    const svgTemplate = `
    <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        <rect width="100%" height="100%" fill="${shapeColor}" />
        ${shapeContent}
        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${textColor}" font-size="50">${text}</text>
    </svg>`;

    return svgTemplate;
}

// Function to write SVG content to file
function writeSVGFile(text, textColor, shape, shapeColor) {
    const svgContent = generateSVG(text, textColor, shape, shapeColor);
    fs.writeFileSync('logo.svg', svgContent);
    console.log('Generated logo.svg');
}

// Array of shapes
const shapes = ['circle', 'triangle', 'square'];

// Function to prompt user for input
function promptUser() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'text',
            message: 'Enter up to three characters:',
            validate: input => {
                if (input.length <= 3) {
                    return true;
                }
                return 'Please enter up to three characters.';
            }
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'Enter text color (color keyword or hexadecimal number):'
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Choose a shape:',
            choices: shapes
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'Enter shape color (color keyword or hexadecimal number):'
        }
    ]).then(answers => {
        // Write SVG file with user input
        writeSVGFile(answers.text, answers.textColor, answers.shape, answers.shapeColor);
    });
}

// Initialize the application
promptUser();
