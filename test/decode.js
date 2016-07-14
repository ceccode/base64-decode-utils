const expect = require("chai").expect;
const assert = require('chai').assert;

const decode = require("../lib/decode.js");

describe("decodeToString", () => {
  it("should decode base64 stream", () => {

       const encoded = "SGVsbG8gV29ybGQh"; //Hello World!
       const result = decode.decodeToString(encoded);

       assert.typeOf(result, "string");
       assert.equal(result, "Hello World!");

   });
});

describe("decodeToHex", () => {
  it("should decode base64 stream to hex", () => {

       const encoded = "SGVsbG8gV29ybGQh"; //Hello World!
       const result = decode.decodeToHex(encoded);

       assert.typeOf(result, "string");
       assert.equal(result, "48656c6c6f20576f726c6421");

   });
});

describe("decodeToUtf8FromHex", () => {
  it("should decode base64 hex stream to utf8", () => {

       const encoded = "48656c6c6f20576f726c6421"; //Hello World! (in hex)
       const result = decode.decodeToUtf8FromHex(encoded);

       assert.typeOf(result, "string");
       assert.equal(result, "Hello World!");

   });
});

describe("decodeToIntFromByte", () => {
  it("should decode base64 byte stream to int", () => {


       const encoded = "AAA+Hg=="; //00003E1E (in byte) //15902 (in int)
       const result = decode.decodeToIntFromByte(encoded);

       assert.typeOf(result, "number");
       assert.equal(result, "15902");

   });
});

describe("decodeToStringFromByte", () => {
  it("should decode base64 byte stream to string", () => {

    const encoded = "SGVsbG8gV29ybGQh"; //00003E1E (in byte) //15902 (in int)
    const result = decode.decode(encoded, 'string');

    assert.typeOf(result, "string");
    assert.equal(result, "Hello World!");

  });
});
