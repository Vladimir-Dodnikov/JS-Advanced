let PizzUni = require('./02. PizzUni_Class');
let assert = require('chai').assert;
let expect = require('chai').expect;

describe('Test PizzUni class', () => {
    let actual;
    let expected;
    let myClass;
    beforeEach(() => {
        actual = '';
        expected = '';
        myClass = new PizzUni();
    })
    describe('test constructor', () => {
        it('registeredUsers prop', () => {
            actual = myClass.registeredUsers;
            expected = [];
            assert.deepEqual(actual, expected);
        })
        it('availableProducts prop', () => {
            actual = myClass.availableProducts;
            expected = {
                pizzas: ['Italian Style', 'Barbeque Classic', 'Classic Margherita'],
                drinks: ['Coca-Cola', 'Fanta', 'Water']
            }
            assert.deepEqual(actual, expected);
        })
        it('orders prop', () => {
            actual = myClass.orders;
            expected = [];
            assert.deepEqual(actual, expected);
        })
    })
    describe('test registerUser() method', () => {
        it('alreadyUsed email', () => {
            myClass.registerUser('email');
            actual = () => myClass.registerUser('email');
            expected = `This email address (email) is already being used!`;
            assert.throw(actual, expected);
        })
        it('valid registered user', () => {
            myClass.registerUser('email');

            actual = myClass.registeredUsers[0];
            expected = {
                email: 'email',
                orderHistory: []
            }
            assert.deepEqual(actual, expected);
        })
        it('valid register length', () => {
            myClass.registerUser('email');

            actual = myClass.registeredUsers.length;
            expected = 1;
            assert.equal(actual, expected);
        })
        it('valid return', () => {
            actual = myClass.registerUser('email');
            expected = {
                email: 'email',
                orderHistory: []
            }
            assert.deepEqual(actual, expected);
        })
    })
    describe('test makeAnOrder() method', () => {
        it('invalid user-email', () => {
            actual = () => myClass.makeAnOrder('email', '', '');
            expected = `You must be registered to make orders!`;
            assert.throw(actual, expected);
        })
        it('invalid pizza type', () => {
            myClass.registerUser('email');
            actual = () => myClass.makeAnOrder('email', 'spagetti', 'coke');
            expected = 'You must order at least 1 Pizza to finish the order.';
            assert.throw(actual, expected);
        })
        it('invalid drink type', () => {
            myClass.registerUser('email');
            myClass.makeAnOrder('email', 'Italian Style', '');
            actual = myClass.orders[0].orderedDrink;
            expected = undefined;
            assert.deepEqual(actual, expected);
        })
        it('valid orderHistory', ()=>{
            myClass.registerUser('email');
            myClass.makeAnOrder('email', 'Italian Style', 'Coca-Cola');
            actual = myClass.registeredUsers[0].orderHistory;
            expected = [{
                orderedPizza: 'Italian Style',
                orderedDrink: 'Coca-Cola',
            }];
            assert.deepEqual(actual,expected);
        })
        it('valid order', ()=>{
            myClass.registerUser('email');
            myClass.makeAnOrder('email', 'Italian Style', 'Coca-Cola');
            actual = myClass.orders;
            expected = [{
                orderedPizza: 'Italian Style',
                orderedDrink: 'Coca-Cola',
                email: 'email',
                status: 'pending'
            }];
            assert.deepEqual(actual,expected);
        })
        it('return valid order number', ()=>{
            myClass.registerUser('email');
            actual = myClass.makeAnOrder('email', 'Italian Style', 'Coca-Cola');
            expected = 0;
            assert.deepEqual(actual,expected);
        })
    })
    describe('test detailsAboutMyOrder() method', () => {
        it('return status', () => {
            myClass.registerUser('1');
            myClass.makeAnOrder('1', 'Italian Style', 'Coca-Cola');
            
            actual = myClass.detailsAboutMyOrder(0);
            expected = `Status of your order: pending`;
            assert.equal(actual,expected);
        })
        it('invalid data',()=>{
            actual = myClass.detailsAboutMyOrder(0);
            assert.deepEqual(actual,undefined);
        })
    })
    describe('test completeOrder() method', () => {
        it('valid data', () => {
            myClass.registerUser('1');
            myClass.makeAnOrder('1', 'Italian Style', 'Coca-Cola');
            myClass.completeOrder();
            
            actual = myClass.orders[0].status;
            expected = 'completed';
            assert.deepEqual(actual,expected);
        })
        it('valid data2', () => {
            myClass.registerUser('1');
            myClass.makeAnOrder('1', 'Italian Style', 'Coca-Cola');
            actual = myClass.completeOrder();
            expected = {
                email: '1',
                orderedDrink: 'Coca-Cola',
                orderedPizza: 'Italian Style',
                status: 'completed'
            };
            assert.deepEqual(actual,expected);
        })  
    })
})