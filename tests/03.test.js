const fakeBinary = require('../03.js');
  
describe("fakeBinary", function () {
  it("should return a string with 1s and 0s acording the numbers inside the given string", function () {
    expect(fakeBinary("934")).toEqual("100");
  });
  it("should return a string with 1s and 0s acording the numbers inside the given string", function () {
    expect(fakeBinary("178452")).toEqual("011010");
  });
});