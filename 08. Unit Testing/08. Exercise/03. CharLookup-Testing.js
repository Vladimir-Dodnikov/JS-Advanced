let lookupChar = require('./03. CharLookup');
let assert = require('chai').assert;

describe('test lookupChar()', () => {
    it('check first argument inputType', () => {
        let result = lookupChar(15, 2);
        assert.equal(result, undefined, 'First argument is not a string type');
    })

    it('check second argument inputType', () => {
        let result = lookupChar('Pesho', 'Pesho');
        assert.equal(result, undefined, 'Second parameter is not a number type');
    })
    
    it('check second argument inputType', () => {
        let result = lookupChar('Pesho', 2.95);
        assert.equal(result, undefined, 'Second parameter is not a number type');
    })

    it('check index is < 0', () => {
        let result = lookupChar('Pesho', -20);
        assert.equal(result, 'Incorrect index', 'Index must be positive.')
    })

    it('check index is > string.length', () => {
        let result = lookupChar('Pesho', 20);
        assert.equal(result, 'Incorrect index', 'Index is outside of boundary.')
    })

    it('check index is = string.length', () => {
        let result = lookupChar('Pesho', 5);
        assert.equal(result, 'Incorrect index', 'Index is outside of boundary.')
    })

    it('check return correct char', () => {
        let result = lookupChar('Pesho', 1);
        assert.equal(result, 'e', 'CharIndex is incorrect.')
    })
})