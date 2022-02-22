const { isFunction } = require('lodash');
const { gamma,
    brightness,
    greyscale,
    contrast,
    sepia,
    vibrance,
    saturation,
    hue,
    invert,
    noise,
    fillColor} = require('../index');

describe("testing the simp functions", () => {

    test("testing for gamma function", ()=>{
        expect(gamma('../assets/input/aloha.jpg', '../assets/output/gamma.jpg',6)).toBeDefined()
    });

    test("testing for brightness function", ()=>{
        expect(brightness('../assets/input/aloha.jpg', '../assets/output/gamma.jpg',6)).toBeDefined()
    });

    test("testing for greyscale function", () => {
        expect(greyscale('../assets/input/aloha.jpg', '../assets/output/gamma.jpg')).toBeDefined()
    });

    test("testing for contrast function", () => {
        expect(contrast('../assets/input/aloha.jpg', '../assets/output/gamma.jpg',6)).toBeDefined()
    });

    test("testing for sepia function", ()=> {
        expect(sepia('../assets/input/aloha.jpg', '../assets/output/gamma.jpg',6)).toBeDefined()
    });

    test("testing for vibrance function", () => {
        expect(vibrance('../assets/input/aloha.jpg', '../assets/output/gamma.jpg',6)).toBeDefined()
    });

    test()

})
