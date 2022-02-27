# ImageProcessing

The simpro library is a simple image processing library built on top of CamanJS, it simplifies the syntax and avoids using the this syntax 😁.

## Installation

Using npm:

```shell
$npm i simpro
```

## In Node.js

```js
const {
  greyscale,
  gamma,
  sepia,
  brightness,
  contrast,
  vibrance,
  saturation,
  hue,
  invert,
  noise,
  fillColor,
} = require("simpro");

//Converts the image to greyscale
greyscale(fileLocationURL, outputFileToBeSavedTo);

//The fileUrl is the input file, the outputUrl is where the file is going to be kept, and the value is the value for the gamma, it extends from 0 to infinity but the recommended values is from 0 to 5.
gamma(fileLocationURL, outputFileToBeSavedTo, value);

//Applies an adjustable sepia effect to the image. Range is from 0 to 100. The larger the value, the stronger the sepia effect.
sepia(fileLocationURL, outputFileToBeSavedTo, value);

//The fileUrl is the input file, the outputUrl is where the file is going to be kept, and the value parameter is the value for the brightness, it extends from -100 to +100, value less than 0 wil darken and value greater than zero will brighten the image.
brightness(fileLocationURL, outputFileToBeSavedTo, value);

//The fileUrl is the input file, the outputUrl is where the file is going to be kept, and the value parameter is the value for the contrast, it extends from -100 to +100, value less than 0 wil decrease contrast and value greater than zero will increase contrast of the image, the recommended values are from 5 to 10.
contrast(fileLocationURL, outputFileToBeSavedTo, value);

//Similar to saturation, but adjusts the saturation levels in a slightly smarter, more subtle way. Vibrance will boost colors that are less saturated more and boost already saturated colors less, while saturation boosts all colors by the same level. Range is -100 to 100.
vibrance(fileLocationURL, outputFileToBeSavedTo, value);

//Adjusts the color saturation of the image. If you want to completely desaturate the image, using the greyscale filter is highly recommended because it will yield better results. Range is -100 to 100.
saturation(fileLocationURL, outputFileToBeSavedTo, value);

//Adjust the hue of an image, value can range from 0 to 100
hue(fileLocationURL, outputFileToBeSavedTo, value);

//Inverts all colors in the image by subtracting each color channel value from 255.
invert(fileLocationURL, outputFileToBeSavedTo);

//Applies an adjustable amount of noise to the image.
noise(fileLocationURL, outputFileToBeSavedTo, value);

//Fills the canvas with a single solid color. Useful when used with layers. Can take either separate R, G, and B values as arguments, or a single hex color value.
fillColor(fileLocationURL, outputFileToBeSavedTo, value);
```
Where the **fileLocationURL** is the path of the image to be processed, the **outputFileToBeSaveTo** is the directory path for the image to be saved after it's processing, and the **value** is the intensity of the functions doing the image processing. For more information you can check [simpro introduction in hashnode.](https://samatarabdi.hashnode.dev/simpro#heading-installation)
