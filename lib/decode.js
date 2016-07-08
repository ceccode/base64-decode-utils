"use strict";

function decodeToString(str) {
  return new Buffer(str, 'base64').toString('binary');
}

function decodeToHex(str) {
  return new Buffer(str, 'base64').toString('hex');
}

function decodeToUtf8FromHex (str) {
    return new Buffer(str, 'hex').toString('utf8');
}

function decodeToIntFromByte(str) {

  const buf = new Buffer(str, 'base64');

  let result = 0;
  for (var i = 0 ; i < buf.length ; i++) {
    result = result << 8;
    result += buf[i];
  }

  return result;


}

module.exports = {
  decodeToString: decodeToString,
  decodeToHex: decodeToHex,
  decodeToUtf8FromHex: decodeToUtf8FromHex,
  decodeToIntFromByte: decodeToIntFromByte
};
