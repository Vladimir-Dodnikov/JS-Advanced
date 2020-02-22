let isOddOrEven = require('./02. EvenOrOdd');
let assert = require('chai').assert;

describe('Test function isOddOrEven()', () => {
    it("check inputType with Boolean", () => {
        let result = isOddOrEven(false);
        assert.equal(result, undefined, "The result is not undefined.");
    });
    it("check inputType with Number", () => {
        let result = isOddOrEven(15);
        assert.equal(result, undefined, "The result is not undefined.");
    });
    it("check if string.length is even", () => {
        let result = isOddOrEven("dodo");
        assert.equal(result, "even", "The string.length is not Even.");
    });
    it("check if string.length is odd", () => {
        let result = isOddOrEven("dod");
        assert.equal(result, "odd", "The string.length is not Odd.");
    });
});