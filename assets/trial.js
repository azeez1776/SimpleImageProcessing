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

gamma('./assets/input/aloha.jpg', './assets/output/gamma.jpg',6);
sepia('./assets/input/aloha.jpg', './assets/output/sepia.jpg', 5);
brightness('./assets/input/aloha.jpg', './assets/output/brightness.jpg', 5);
greyscale('./assets/input/aloha.jpg', './assets/output/greyscale.jpg');
contrast('./assets/input/aloha.jpg', './assets/output/contrast.jpg', 6);
vibrance('./assets/input/aloha.jpg', './assets/output/vibrance.jpg', 15);
saturation('./assets/input/aloha.jpg', './assets/output/saturation.jpg', 15);
hue('./assets/input/aloha.jpg', './assets/output/hue.jpg', 45);
invert('./assets/input/aloha.jpg', './assets/output/invert.jpg');
noise('./assets/input/aloha.jpg', './assets/output/noise.jpg',15);
fillColor('./assets/input/aloha.jpg', './assets/output/fillColor.jpg','#ececec');
