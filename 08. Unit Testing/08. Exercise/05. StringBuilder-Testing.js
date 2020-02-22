let StringBuilder = require('./05. StringBuilder');
let assert = require('chai').assert;
let expect = require('chai').expect;

describe('Test class StringBuilder', () => {
    let actualResult;
    let expectedResult;
    beforeEach(() => {
        actualResult = null;
        expectedResult = null;
    })
    describe('test constructor()', () => {
        it('without parameter', () => {
            actualResult = new StringBuilder();
            expectedResult = [];
            assert.deepEqual(actualResult._stringArray, expectedResult);
        })
        it('with parameter', () => {
            actualResult = new StringBuilder('some');
            expectedResult = ['s', 'o', 'm', 'e'];
            assert.deepEqual(actualResult._stringArray, expectedResult);
        })
        it('with parameter Boolean', () => {
            actualResult = () => new StringBuilder(true);
            expectedResult = 'Argument must be string';
            assert.throw(actualResult, expectedResult);
        })
        it('with parameter number', () => {
            actualResult = () => new StringBuilder(10);
            expectedResult = 'Argument must be string';
            assert.throw(actualResult, expectedResult);
        })
    })

    describe('Test append() method', () => {
        it('valid input with initialized string', () => {
            let sb = new StringBuilder('so');
            sb.append('me');
            actualResult = sb._stringArray;
            expectedResult = ['s', 'o', 'm', 'e']
            assert.deepEqual(actualResult, expectedResult);
        })
        it('valid input with non-initialized string', () => {
            let sb = new StringBuilder();
            sb.append('me');
            actualResult = sb._stringArray;
            expectedResult = ['m', 'e']
            assert.deepEqual(actualResult, expectedResult);
        })
        it('invalid input with number', () => {
            let sb = new StringBuilder();
            actualResult = () => sb.append(3);
            expectedResult = 'Argument must be string';
            assert.throw(actualResult, expectedResult);
        })
    })
    describe('Test prepend() method', () => {
        it('valid input with initialized string', () => {
            let sb = new StringBuilder('some');
            sb.prepend('me');
            actualResult = sb._stringArray;
            expectedResult = ['m', 'e', 's', 'o', 'm', 'e']
            assert.deepEqual(actualResult, expectedResult);
        })
    })
    describe('Test insertAt() method', () => {
        it('valid input with initialized string', () => {
            let sb = new StringBuilder('some');
            sb.insertAt('1', 1);
            actualResult = sb._stringArray;
            expectedResult = ['s', '1', 'o', 'm', 'e']
            assert.deepEqual(actualResult, expectedResult);
        })
    })
    describe('Test remove() method', () => {
        it('valid input with initialized string', () => {
            let sb = new StringBuilder('some');
            sb.remove(0, 2);
            actualResult = sb._stringArray;
            expectedResult = ['m', 'e']
            assert.deepEqual(actualResult, expectedResult);
        })
    })
    describe('Test toString() method', () => {
        it('with empty array', () => {
            let sb = new StringBuilder();
            actualResult = sb.toString();
            expectedResult = "";
            assert.deepEqual(actualResult, expectedResult);
        })
        it('with initialized array', () => {
            let sb = new StringBuilder('123');
            sb.append('4');
            sb.remove(0, 2);
            actualResult = sb.toString();
            expectedResult = "34";
            assert.equal(actualResult, expectedResult);
        })
    })
    describe('Type of StringBuilder', function () {
       
        it('should have the correct function properties', function () {
            assert.isFunction(StringBuilder.prototype.append);
            assert.isFunction(StringBuilder.prototype.prepend);
            assert.isFunction(StringBuilder.prototype.insertAt);
            assert.isFunction(StringBuilder.prototype.remove);
            assert.isFunction(StringBuilder.prototype.toString);
        });
        it('full test', function () {
            let str = new StringBuilder('hello');
            str.append(', there');
            str.prepend('User, ');
            str.insertAt('woop', 5);
            str.remove(6, 3);
            expect(str.toString()).to.equal('User,w hello, there');
        });
    });
})