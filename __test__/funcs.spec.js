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
        expect(gamma('../assets/input/aloha.png', '../assets/output/gamma.png',6)).toBeDefined()
    });

    test("testing for brightness function", ()=>{
        expect(brightness('../assets/input/aloha.png', '../assets/output/brightness.png',6)).toBeDefined()
    });

    test("testing for greyscale function", () => {
        expect(greyscale('../assets/input/aloha.png', '../assets/output/greyscale.png')).toBeDefined()
    });

    test("testing for contrast function", () => {
        expect(contrast('../assets/input/aloha.png', '../assets/output/contrast.png',6)).toBeDefined()
    });

    test("testing for sepia function", ()=> {
        expect(sepia('../assets/input/aloha.png', '../assets/output/sepia.png',6)).toBeDefined()
    });

    test("testing for vibrance function", () => {
        expect(vibrance('../assets/input/aloha.png', '../assets/output/vibrance.png',6)).toBeDefined()
    });

    test("testing for saturation function", () => {
        expect(saturation('../assets/input/aloha.png', '../assets/output/saturation.png',6)).toBeDefined()
    });

    test("testing for hue function", () => {
        expect(hue('../assets/input/aloha.png', '../assets/output/hue.png',6)).toBeDefined()
    });

    test("testing the invert function", () => {
        expect(invert('../assets/input/aloha.png', '../assets/output/invert.png')).toBeDefined()
    });

    test("testing the noise function", () => {
        expect(noise('../assets/input/aloha.png', '../assets/output/noise.png',6)).toBeDefined()
    });

    test("testing for the fillColor function", () => {
        expect(fillColor('../assets/input/aloha.png', '../assets/output/fillColor.png',6)).toBeDefined()
    });



})
