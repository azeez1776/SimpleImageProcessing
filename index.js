const caman = require('caman').Caman;

//The fileUrl is the input file, the outputUrl is where the file is going to be kept, and the value is the value for the gamma, it extends from 0 to infinity but the recommended values is from 0 to 5.
const gamma = (fileUrl,outputUrl, value ) => {
    caman(fileUrl, function(){
        this.gamma(value);
        this.render(function(){
            this.save(outputUrl);
        })
    })
};

//The fileUrl is the input file, the outputUrl is where the file is going to be kept, and the value parameter is the value for the brightness, it extends from -100 to +100, value less than 0 wil darken and value greater than zero will brighten the image.
const brightness = (fileUrl, outputUrl, value) => {
    caman(fileUrl, function(){
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

const greyscale = (fileUrl, outputUrl) => {
    caman(fileUrl, function(){
        this.greyscale();
        this.render(function(){
            this.save(outputUrl)
        })
    })
};


const vibrance = (fileUrl, outputUrl, value) => {
    caman(fileUrl, function () {
        this.vibrance(value);
        this.render(function () {
            this.save(outputUrl)
        })
    })
}

const sepia = (fileUrl, outputUrl, value) => {
    caman(fileUrl, function(){
        this.sepia(value);
        this.render(function(){
            this.save(outputUrl)
        })
    })
}

module.exports = {
    gamma,
    brightness,
    greyscale,
    contrast,
    sepia,
    vibrance
};