var should = require('chai').should();

let {AgeFromDateString, AgeFromDate} = require('../built/age-calculator');

describe('validate AgeFromDate', function() {

    it('returns correct age', function() {
        let age = new AgeFromDate(new Date(1987, 0, 8)).age;
        age.should.be.a('number');
    });
});

describe('validate AgeFromDateString', function() {

    it('returns correct age', function() {
        let age = new AgeFromDateString('1987-01-08').age;
        age.should.be.a('number');
    });
});

