let mathEnforcer = require('./04. MathEnforcer');
let assert = require('chai').assert;

describe('mathEnforcer() testing', () => {
    let actualResult;
    let expectedResult;
    beforeEach(() => {
        actualResult = null;
        expectedResult = null;
    })
    describe('addFive()', () => {
        it('invalid argument with array', () => {
            actualResult = mathEnforcer.addFive([1, 2]);
            expectedResult = undefined;
            assert.equal(actualResult, expectedResult, 'Invalid argument.');
        })
        it('valid argument', () => {
            actualResult = mathEnforcer.addFive(9);
            expectedResult = 14;
            assert.equal(actualResult, expectedResult, 'Valid argument.');
        })
        it('sum with negative number', () => {
            actualResult = mathEnforcer.addFive(-10);
            expectedResult = -5;
            assert.equal(actualResult, expectedResult, 'Result should be negative.')
        })
        it('sum with floating point number', () => {
            actualResult = mathEnforcer.addFive(2.55);
            expectedResult = 7.55;
            assert.equal(actualResult, expectedResult, 'Result should be floating point number.')
        })
    })
    describe('subtractTen()', () => {
        it('invalid argument', () => {
            actualResult = mathEnforcer.subtractTen({});
            expectedResult = undefined;
            assert.equal(actualResult, expectedResult, 'Invalid argument.');
        })
        it('valid argument', () => {
            actualResult = mathEnforcer.subtractTen(20);
            expectedResult = 10;
            assert.equal(actualResult, expectedResult, 'Valid argument.');
        })
        it('valid argument with negative', () => {
            actualResult = mathEnforcer.subtractTen(-5);
            expectedResult = -15;
            assert.equal(actualResult, expectedResult, 'Valid argument with negative.');
        })
        it('valid argument with floating point number', () => {
            actualResult = mathEnforcer.subtractTen(10.91);
            expectedResult = 0.91;
            assert.closeTo(actualResult, expectedResult, 0.01, 'Valid argument with floating point number.');
        })
    })
    describe('sum()', () => {
        it('invalid first argument', () => {
            actualResult = mathEnforcer.sum({}, 5);
            expectedResult = undefined;
            assert.equal(actualResult, expectedResult, 'Invalid first argument.');
        })
        it('invalid second argument', () => {
            actualResult = mathEnforcer.sum(5, {});
            expectedResult = undefined;
            assert.equal(actualResult, expectedResult, 'Invalid second argument.');
        })
        it('valid sum() with positive', () => {
            actualResult = mathEnforcer.sum(5, 5);
            expectedResult = 10;
            assert.equal(actualResult, expectedResult, 'Correct function.');
        })
        it('valid sum() with floating point number', () => {
            actualResult = mathEnforcer.sum(5.51, 5.5);
            expectedResult = 11.01;
            assert.equal(actualResult, expectedResult, 'Correct function.');
        })
        it('valid sum() with negative', () => {
            actualResult = mathEnforcer.sum(-5, 5);
            expectedResult = 0;
            assert.equal(actualResult, expectedResult, 'Correct function.');
        })
    })
    describe('mathEnforcer() object check', () => {
        it('valid object', () => {
            assert.isObject(mathEnforcer);
        })
    })
})