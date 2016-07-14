"use strict";

function decodeToString(stream) {
  return new Buffer(stream, 'base64').toString('binary');
}

function decodeToHex(stream) {
  return new Buffer(stream, 'base64').toString('hex');
}

function decodeToUtf8FromHex(stream) {
  return new Buffer(stream, 'hex').toString('utf8');
}

function decodeToIntFromByte(stream) {

  const buf = new Buffer(stream, 'base64');

  let result = 0;
  for (var i = 0; i < buf.length; i++) {
    result = result << 8;
    result += buf[i];
  }

  return result;

}


function decodeFromByte (stream, type) {

  if (typeof type === 'string') {
    return decodeToString(stream);
  }
  return decodeToIntFromByte(stream);

}

module.exports = {
  decodeToString: decodeToString,
  decodeToHex: decodeToHex,
  decodeToUtf8FromHex: decodeToUtf8FromHex,
  decodeToIntFromByte: decodeToIntFromByte,
  decode: decodeFromByte
};
