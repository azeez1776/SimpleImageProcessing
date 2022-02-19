# ImageProcessing
The simpro library is a simple image processing library built on top of CamanJS, it simplifies the syntax and avoids using the this syntax 😁.

## Installation

Using npm:
```shell
$npm i simpro
```

## In Node.js
```js
const {greyscale, gamma} = require('simpro');

greyscale(fileLocationURL, outputFileToBeSavedTo);
gamma(fileLocationURL, outputFileToBeSavedTo, value);

```
There are many other functions, but all us the same format as the two above functions.
