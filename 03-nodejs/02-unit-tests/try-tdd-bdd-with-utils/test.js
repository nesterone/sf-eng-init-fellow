var utils = require('./utils'),
    expect = require('expect.js'),
    sinon = require('sinon');

describe('Utils', function () {

    describe('sort', function () {

        it("should have a default comparator for numbers", function () {
            expect(utils.sort([1, 5, 8, 4])).to.eql([1, 4, 5, 8]);
        });
        it("should have a default comparator for numbers", function () {
            expect(utils.sort([5, null, 8, 4])).to.eql([null, 4, 5, 8]);
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
        it("should cut of any count of spaces from the beginning of the string", function () {
            expect(utils.trim('     given string')).to.equal('given string');
        });
        it("should return initial string", function () {
            expect(utils.trim('given string')).to.equal('given string');
        });
        it("should cut of any count of spaces from the end of the string", function () {
            expect(utils.trim('given string    ')).to.equal('given string');
        });
    });

    describe('reverse', function () {

        it("should reverse a specified list of numbers", function () {
            expect(utils.reverse([1, 2, 3, 4, 5])).to.eql([5, 4, 3, 2, 1]);
        });
        it("should reverse a specified list of string", function () {
            expect(utils.reverse(['one', 'two', 'three', 'four', 'five'])).to.eql(['five', 'four', 'three', 'two', 'one']);
        });
    });

    describe('map', function () {

        it("should multiply each element on 2", function () {
            expect(utils.map([1, 2, 3, 4, 5])).to.eql([2, 4, 6, 8, 10]);
            expect(utils.map([1, 1, 1, 1, 1])).to.eql([2, 2, 2, 2, 2]);
        });

    });

    describe('groupBy', function () {

        it("should group the sequence of odd and even elements", function () {
            expect(utils.groupBy([1, 2, 3, 4, 5, 6])).to.eql({"even": [2, 4, 6], "odd": [1, 3, 5]});
        });

    });

    describe('once', function () {
        it("should executed once", function () {
            var callback = sinon.spy();
            var func = utils.once(callback);
            func();
            func();
            expect(callback.calledOnce).to.eql(true);
            expect(callback.calledTwice).to.eql(false);
        });

    });

    describe('debounce', function () {
        before(function () {
            console.log('before');
            clock = sinon.useFakeTimers();
        });

        after(function () {
            console.log('after');
            clock.restore();
        });

        it("should executed function after the determined time", function () {
            var callback = sinon.spy();

            var func = utils.debounce(callback, 300);

            clock.tick(100);
            expect(callback.calledOnce).to.eql(false);
            clock.tick(200);
            expect(callback.calledOnce).to.eql(true);

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
            expect(utils.isArray([])).to.eql(true);
            expect(utils.isArray({})).to.eql(false);
            expect(utils.isArray(null)).to.eql(false);


        });

    });

    describe('isObject', function () {

        it("should determine is the object an Object?", function () {
            expect(utils.isObject({})).to.eql(true);
            expect(utils.isObject([])).to.eql(false);

        });

    });

    describe('isString', function () {

        it("should determine is the object an string?", function () {
            expect(utils.isString('hello')).to.eql(true);
            expect(utils.isString(11)).to.eql(false);
            expect(utils.isString(['hello'])).to.eql(false);


        });

    });
});