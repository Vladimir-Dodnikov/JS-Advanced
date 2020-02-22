let Warehouse = require('./07. WareHouse');
let assert = require('chai').assert;
let expect = require('chai').expect;

describe("Test class Warehouse", function () {
    let warehouse;
    let actualResult;
    let expectedResult;
    beforeEach(function () {
        warehouse = new Warehouse(1);
        actualResult = null;
        expectedResult = null;
    });

    it('Test for empty warehouse', function () {
        actualResult = warehouse.revision();
        expectedResult = 'The warehouse is empty';
        assert.equal(actualResult, expectedResult)
        //expect(warehouse.revision()).to.be.equal('The warehouse is empty')
    })

    describe('Test constructor()', function () {
        it('Test capacity property with different argument', function () {
            actualResult = () => new Warehouse(-2);
            expectedResult = 'Invalid given warehouse space';
            assert.throw(actualResult, expectedResult);

            actualResult = () => new Warehouse(0);
            assert.throw(actualResult, expectedResult);

            actualResult = () => new Warehouse('string');
            assert.throw(actualResult, expectedResult);
        })
        it('Test AddProduct()', function () {
            warehouse = new Warehouse(1);
            actualResult = () => warehouse.addProduct('Drink', 'Coke', 2);
            expectedResult = 'There is not enough space or the warehouse is already full';
            assert.throw(actualResult, expectedResult);
            //expect(() => warehouse.addProduct('Food', "asd", 5)).to.throw();
        })
        it('Test orderProducts() method by quantity in descending order', function () {
            warehouse = new Warehouse(6);
            warehouse.addProduct('Food', 'pizza', 1);
            warehouse.addProduct('Food', 'steak', 2);
            warehouse.addProduct('Food', 'ice-cream', 3);
            warehouse.orderProducts('Food');
            let sortedFoods = JSON.stringify(warehouse.availableProducts.Food); //!!! {"":_}
            
            assert.equal(sortedFoods, '{"ice-cream":3,"steak":2,"pizza":1}')
        })
        it('Test revision() method', function () {
            actualResult = warehouse.revision();
            expectedResult = 'The warehouse is empty';
            assert.equal(actualResult, expectedResult);
            //expect(warehouse.revision()).to.be.equal('The warehouse is empty');
        })
        it("Test scrapeAProduct() method", function () {
            warehouse.addProduct('Food', 'steak', 1);
            actualResult = () => warehouse.scrapeAProduct('beer', 1);
            expectedResult = 'beer do not exists';
            assert.throw(actualResult, expectedResult);
            //expect(() => warehouse.scrapeAProduct("wrong", 1)).to.throw('wrong do not exists');
        })
    })
});