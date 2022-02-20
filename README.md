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

greyscale(fileLocationURL, outputFileToBeSavedTo);
gamma(fileLocationURL, outputFileToBeSavedTo, value);
sepia(fileLocationURL, outputFileToBeSavedTo, value);
brightness(fileLocationURL, outputFileToBeSavedTo, value);
contrast(fileLocationURL, outputFileToBeSavedTo, value);
vibrance(fileLocationURL, outputFileToBeSavedTo, value);
saturation(fileLocationURL, outputFileToBeSavedTo, value);
hue(fileLocationURL, outputFileToBeSavedTo, value);
invert(fileLocationURL, outputFileToBeSavedTo);
noise(fileLocationURL, outputFileToBeSavedTo, value);
fillColor(fileLocationURL, outputFileToBeSavedTo, value);
```
Where the **fileLocation** is the path of the image to be processed, the **outputFileToBeSaveTo** is the directory path for the image to be saved after it's processing, and the **value** is the intensity of the functions doing the image processing.
