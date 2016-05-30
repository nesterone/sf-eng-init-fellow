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

    describe('map', function () {

        it("should multiply each element on 2", function () {
            expect(utils.map([1, 2, 3, 4, 5])).to.eql([2, 4, 6, 8, 10]);
        });

    });

    describe('groupBy', function () {

        it("should group the sequence elements by the some rule ", function () {
            expect(utils.groupBy([1, 2, 3, 4, 5, 6])).to.eql({"even": [2, 4, 6], "odd": [1, 3, 5]});
        });

    });

    describe('once', function () {

        it("should executed once", function () {
            expect(utils.once()).to.eql("executing first time");
            expect(utils.once()).to.eql("already executed");
        });

    });

    describe('same', function () {

        it("should compare two sequences and determine they equality", function () {
            var listOne = [1, 2, 3, 4];
            var listTwo = [1, 2, 3, 4];
            expect(utils.same(listOne, listTwo)).to.eql(true);
        });

    });

    describe('isArray', function () {

        it("should determine is the object an Array?", function () {
            var obj = [];
            expect(utils.isArray(obj)).to.eql(true);
        });

    });

    describe('isObject', function () {

        it("should determine is the object an Object?", function () {
            var obj = {};
            expect(utils.isObject(obj)).to.eql(true);
        });

    });

    describe('isString', function () {

        it("should determine is the object an string?", function () {
            expect(utils.isString('hello')).to.eql("string");
        });

    });
});
