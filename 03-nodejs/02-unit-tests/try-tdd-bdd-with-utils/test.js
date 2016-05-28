var utils = require('./utils'),
    expect = require('expect.js'),
    sinon = require('sinon');

describe('Utils', function () {

    describe('sort', function () {

        it("should have a default comparator for numbers", function () {
            expect(utils.sort([1, 5, 8, 4])).to.eql([1, 4, 5, 8]);
        });

    });

    describe('capitalize', function () {

        it("should make first letter of given string upper case", function () {
            expect(utils.capitalize('given')).to.equal('Given');
        });

    });

    describe('camelize', function () {

        it("should create CamelCase string from the given string sequence", function () {
            expect(utils.camelize('given string sequence')).to.equal('GivenStringSequence');
        });
        it("should create CamelCase string from the given array", function () {
            expect(utils.camelize(['given', 'string', 'sequence'])).to.equal('GivenStringSequence');
        });
    });

    describe('trim', function () {

        it("should cut of any count of spaces from the beginning and from the end of the string", function () {
            expect(utils.trim('     given string   ')).to.equal('given string');
        });

    });

    describe('reverse', function () {

        it("should reverse a specified list", function () {
            expect(utils.reverse([1, 2, 3, 4, 5])).to.eql([5, 4, 3, 2, 1]);
        });

    });


});
