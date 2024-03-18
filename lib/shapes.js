// shape.js
function generateShape(shape, shapeColor) {
    let shapeContent = '';

    switch (shape) {
        case 'circle':
            shapeContent = generateCircle(shapeColor);
            break;
        case 'triangle':
            shapeContent = generateTriangle(shapeColor);
            break;
        case 'square':
            shapeContent = generateSquare(shapeColor);
            break;
        default:
            console.error('Invalid shape.');
    }

    return shapeContent;
}

function generateCircle(color) {
    return `<circle cx="100" cy="100" r="50" fill="${color}" />`;
}

function generateTriangle(color) {
    return `<polygon points="100,20 40,180 190,60" fill="${color}" />`;

}

function generateSquare(color,) {
    return `<rect x="50" y="50" width="100" height="100" fill="${color}" />`;

}

module.exports = {
    generateShape
};
