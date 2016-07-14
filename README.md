# Base64 decode utils

A small library providing utility methods to decode base64 strings using Node Buffer API.

[![Build Status](https://travis-ci.org/ceccode/base64-decode-utils.svg?branch=master)](https://travis-ci.org/ceccode/base64-decode-utils)
[![Known Vulnerabilities](https://snyk.io/test/github/ceccode/base64-decode-utils/badge.svg)](https://snyk.io/test/github/ceccode/base64-decode-utils)
[![https://david-dm.org/ceccode/base64-decode-utils.svg](https://david-dm.org/ceccode/base64-decode-utils.svg)](https://david-dm.org/ceccode/base64-decode-utils.svg)


## Installation

```
npm install base64-decode-utils
```

## Usage

```
const base64DecodeUtils = require('base64-decode-utils');


const encoded = "SGVsbG8gV29ybGQh";
base64DecodeUtils.decodeToString(encoded); //Hello World!

```

## API

```
  decodeToString(stream)
  decodeToHex(stream)
  decodeToUtf8FromHex(stream)
  decodeToIntFromByte(stream)
  decode(stream, 'string') //default decode byte stream to int

```

## Test

```
npm test
```

## Coverage

```
npm run-script test-travis
```


## License

[MIT license](LICENSE)
