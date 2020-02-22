let SkiResort = require('./solution');
let assert = require('chai').assert;

describe('SkiResort', function () {
    let actualResult;
    let expectedResult;
    let resort;
    //let stringifyCompare = (a, b) => assert.equal(JSON.stringify(a), JSON.stringify(b));
    beforeEach(() => {
        actualResult = null;
        expectedResult = null;
        resort = new SkiResort('Test');
    })

    describe('Instantiation with one parameter', () => {
        it('Test string input', () => {
            actualResult = resort.name;
            expectedResult = 'Test';

            assert.deepEqual(actualResult, expectedResult);
            assert.deepEqual(resort.voters, 0);
            assert.isArray(resort.hotels);
            assert.deepEqual(resort.hotels.length, 0);
        })
    });
    describe('Test bestHotel() method', () => {
        it('empty voters', () => {
            actualResult = resort.bestHotel;
            expectedResult = 'No votes yet';
            assert.deepEqual(actualResult, expectedResult);
        })
        it('non empty voters', () => {
            resort.build('h1', 5);
            resort.leave('h1', 2, 5);
            let best = resort.hotels.reduce((a, b) => a.points > b.points ? a : b);
            actualResult = `Best hotel is ${best.name} with grade ${best.points}. Available beds: ${best.beds}`;
            expectedResult = `Best hotel is h1 with grade 10. Available beds: 7`;
            assert.equal(actualResult, expectedResult);
        })
        it('valid method', ()=>{
            resort.build('h1', 5);
            resort.leave('h1', 2, 5);
            let best = resort.hotels.reduce((a, b) => a.points > b.points ? a : b);
            actualResult = `Best hotel is ${best.name} with grade ${best.points}. Available beds: ${best.beds}`;
            expectedResult = `Best hotel is h1 with grade 10. Available beds: 7`;
            assert.equal(actualResult, expectedResult);
        })
    })
    describe('Test build() method', () => {
        it('invalid name', () => {
            actualResult = () => resort.build('', 2);
            expectedResult = 'Invalid input';
            assert.throw(actualResult, expectedResult);
        })
        it('invalid beds', () => {
            actualResult = () => resort.build('h2', -2);
            expectedResult = 'Invalid input';
            assert.throw(actualResult, expectedResult);
        })
        it('valid build()', () => {
            actualResult = resort.build('h3', 2);
            expectedResult = `Successfully built new hotel - h3`;
            assert.equal(actualResult, expectedResult);
            assert.equal(resort.hotels.length, 1);
            let hotel = resort.hotels.find(hotel => hotel.name === 'h3');
            assert.equal(hotel.name, 'h3');
            assert.equal(hotel.beds, 2);
            assert.equal(hotel.points, 0);
        })
    })
    describe('Test book() method', () => {
        it('invalid name', () => {
            actualResult = () => resort.build('', 2);
            expectedResult = 'Invalid input';
            assert.throw(actualResult, expectedResult);
        })
        it('invalid beds', () => {
            actualResult = () => resort.build('h2', -2);
            expectedResult = 'Invalid input';
            assert.throw(actualResult, expectedResult);
        })
        it('invalid hotel name in resort', () => {
            resort.build('h1', 3);
            actualResult = () => resort.book('h2', 2);
            expectedResult = "There is no such hotel";
            assert.throw(actualResult, expectedResult);
        })
        it('no free space', () => {
            resort.build('h1', 3);
            actualResult = () => resort.book('h1', 4);
            expectedResult = "There is no free space";
            assert.throw(actualResult, expectedResult);
        })
        it('valid book', () => {
            resort.build('h1', 3);
            actualResult = resort.book('h1', 2);
            expectedResult = "Successfully booked";
            assert.equal(actualResult, expectedResult);
        })
        it('valid reduce beds', () => {
            resort.build('h1', 2);
            resort.book('h1', 2);
            let hotel = resort.hotels.find(hotel => hotel.name === 'h1');
            actualResult = hotel.beds;
            expectedResult = 0;
            assert.equal(actualResult, expectedResult);
        })
    })
    describe('Test leave() method', () => {
        it('invalid name', () => {
            actualResult = () => resort.leave('', 2);
            expectedResult = 'Invalid input';
            assert.throw(actualResult, expectedResult);
        })
        it('invalid beds', () => {
            actualResult = () => resort.leave('h2', -2);
            expectedResult = 'Invalid input';
            assert.throw(actualResult, expectedResult);
        })
        it('invalid hotel name in resort', () => {
            resort.build('h1', 3);
            actualResult = () => resort.leave('h2', 2);
            expectedResult = "There is no such hotel";
            assert.throw(actualResult, expectedResult);
        })
        it('valid arguments test', () => {
            resort.build('h1', 5);
            resort.leave('h1', 2, 5);
            let hotel = resort.hotels.find(hotel => hotel.name === 'h1');

            actualResult = hotel.points;
            expectedResult = 10;
            assert.equal(actualResult, expectedResult);

            actualResult = hotel.beds;
            expectedResult = 7;
            assert.equal(actualResult, expectedResult);

            actualResult = resort.voters;
            expectedResult = 2;
            assert.equal(actualResult, expectedResult);
        })
        it('valid return msg', () => {
            resort.build('h1', 5);
            actualResult = resort.leave('h1', 2, 5);
            expectedResult = `2 people left h1 hotel`;
            assert.equal(actualResult, expectedResult);
        })
    })
    describe('test averageGrade() method', () => {
        it('empty voters', () => {
            actualResult = resort.averageGrade();
            expectedResult = 'No votes yet';
            assert.deepEqual(actualResult, expectedResult);
        })
        it('valid averageGrade', () => {
            resort.build('h1', 5);
            resort.build('h2', 5);
            resort.leave('h1', 5, 2);
            resort.leave('h2', 5, 2);

            actualResult = resort.averageGrade();
            expectedResult =  `Average grade: 2.00`;
            assert.equal(actualResult, expectedResult);
        })
    })
});