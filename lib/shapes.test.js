// shape.test.js

const { generateShape } = require('./shapes');

describe('generateShape function', () => {
    test('should generate correct circle SVG', () => {
        const circleSVG = generateShape('circle', 'red');
        expect(circleSVG).toContain('<circle');
        expect(circleSVG).toContain('fill="red"');
    });

    test('should generate correct triangle SVG', () => {
        const triangleSVG = generateShape('triangle', 'blue');
        expect(triangleSVG).toContain('<polygon');
        expect(triangleSVG).toContain('fill="blue"');
    });

    test('should generate correct square SVG', () => {
        const squareSVG = generateShape('square', 'green');
        expect(squareSVG).toContain('<rect');
        expect(squareSVG).toContain('fill="green"');
    });
});
