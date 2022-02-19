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
        expect(isFunction(gamma('../assets/input/aloha.jpg', '../assets/output/gamma.jpg',6))).toBeTruthy()
    });

    test("testing for brightness function", ()=>{
        expect(isFunction(brightness())).toBe(true)
    })
})
