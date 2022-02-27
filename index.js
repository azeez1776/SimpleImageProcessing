const caman = require('caman').Caman;

//The fileUrl is the input file, the outputUrl is where the file is going to be kept, and the value is the value for the gamma, it extends from 0 to infinity but the recommended values is from 0 to 5.
const gamma = (fileUrl,outputUrl, value ) => {
    return caman(fileUrl, function(){
        this.gamma(value);
        this.render(function(){
            this.save(outputUrl);
        })
    })
};

//The fileUrl is the input file, the outputUrl is where the file is going to be kept, and the value parameter is the value for the brightness, it extends from -100 to +100, value less than 0 wil darken and value greater than zero will brighten the image.
const brightness = (fileUrl, outputUrl, value) => {
    return caman(fileUrl, function(){
        this.brightness(value);
            this.render(function(){
                this.save(outputUrl)
            })
    })
};

//The fileUrl is the input file, the outputUrl is where the file is going to be kept, and the value parameter is the value for the contrast, it extends from -100 to +100, value less than 0 wil decrease contrast and value greater than zero will increase contrast of the image, the recommended values are from 5 to 10.
const contrast = (fileUrl, outputUrl, value) => {
    caman(fileUrl, function(){
        this.contrast(value);
        this.render(function(){
            this.save(outputUrl)
        })
    })
};

//Converts the image to greyscale
const greyscale = (fileUrl, outputUrl) => {
    caman(fileUrl, function(){
        this.greyscale();
        this.render(function(){
            this.save(outputUrl)
        })
    })
};

//Similar to saturation, but adjusts the saturation levels in a slightly smarter, more subtle way. Vibrance will boost colors that are less saturated more and boost already saturated colors less, while saturation boosts all colors by the same level. Range is -100 to 100.
const vibrance = (fileUrl, outputUrl, value) => {
    caman(fileUrl, function () {
        this.vibrance(value);
        this.render(function () {
            this.save(outputUrl)
        })
    })
}

//Applies an adjustable sepia effect to the image. Range is from 0 to 100. The larger the value, the stronger the sepia effect.
const sepia = (fileUrl, outputUrl, value) => {
    caman(fileUrl, function(){
        this.sepia(value);
        this.render(function(){
            this.save(outputUrl)
        })
    })
}

//Adjusts the color saturation of the image. If you want to completely desaturate the image, using the greyscale filter is highly recommended because it will yield better results. Range is -100 to 100.
const saturation = (fileUrl, outputUrl, value) => {
    caman(fileUrl, function(){
        this.saturation(value);
        this.render(function(){
            this.save(outputUrl)
        })
    })
};

//Adjust the hue of an image, value can range from 0 to 100
const hue = (fileUrl, outputUrl, value) => {
    caman(fileUrl, function(){
        this.hue(value);
        this.render(function () {
            this.save(outputUrl)
    })


    })
};

//Inverts all colors in the image by subtracting each color channel value from 255.
const invert = (fileUrl, outputUrl) => {
    caman(fileUrl, function () {
        this.invert();
        this.render(function () {
            this.save(outputUrl);
        })

    })
};

//Applies an adjustable amount of noise to the image.
const noise = (fileUrl, outputUrl, value) => {
    caman(fileUrl, function () {
        this.noise(value);
        this.render(function () {
            this.save(outputUrl)
        })
    })
} ;

//Fills the canvas with a single solid color. Useful when used with layers. Can take either separate R, G, and B values as arguments, or a single hex color value.
const fillColor = (fileUrl, outputUrl, value) => {
    caman(fileUrl, function () {
        this.fillColor(value);
        this.render(function () {
            this.save(outputUrl)
        })
    })
};

module.exports = {
    gamma,
    brightness,
    greyscale,
    contrast,
    sepia,
    vibrance,
    saturation,
    hue,
    invert,
    noise,
    fillColor
};