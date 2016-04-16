var utils = require('./utils'),
	expect =  require('expect.js'),
	sinon = require('sinon');

describe('Utils', function() {

	describe('#sort()', function() {
		it('should sort given array of numbers with ascending ordering', function() {
			expect(utils.sort([2, 1, 3, 0])).to.eql([0, 1, 2, 3]);
		});

		it('should sort given array of numbers with ascending ordering', function() {
			expect(utils.sort([2, 1, 3, 0], function(a, b){return a > b})).to.eql([0, 1, 2, 3]);
		});

		it('should sort given array of numbers with descending ordering', function() {
			expect(utils.sort([2, 1, 3, 0], function(a, b){return a < b})).to.eql([3, 2, 1, 0]);
		});

		it('should show error when user enter null value', function() {
			expect(utils.sort(null, function(a,b) {return a > b})).to.be.false;
		});

		it('should show error when value undefined', function() {
			expect(utils.sort(undefined)).to.be.undefined;
		});

		it('should show error when user enter empty input', function() {
			expect(utils.sort([])).to.be.empty;
		});

	});

	describe('#capitalize()', function() {
		it('should make first letter of given string upper case', function() {
			expect(utils.capitalize('just do it!')).to.equal('Just do it!');
		});

		it('should make first letter of given string upper case', function() {
			expect(utils.capitalize('JUST DO IT')).to.equal('Just do it');
		});

		it('should make first letter of given string upper case', function() {
			expect(utils.capitalize('jUST DO IT')).to.equal('Just do it');
		});

		it('should show error when user enter string value', function() {
			expect(utils.capitalize(1,2,3)).to.be.false;
		});

		it ('should show null when value null ', function() {
			expect(utils.capitalize(null)).to.be.null;
		});

		it ('should show undefined when user enter wrong value', function() {
			expect(utils.capitalize(undefined)).to.be.undefined;
		});

		it ('should show error when user enter object as value', function() {
			expect(utils.capitalize({1: [2,3]})).to.be.false;
		})

	});

	describe('#camelize()', function() {
		it('should make all first letter to upper case', function() {
			expect(utils.camelize('Equipment Class name')).to.equal('EquipmentClassName');
		});

		it('should make all first letter to upper case', function() {
			expect(utils.camelize('Equipment class Name')).to.equal('EquipmentClassName');
		});

		it('should make all first letter to upper case', function() {
			expect(utils.camelize('equipment class name')).to.equal('EquipmentClassName');
		});

		it('should make all first letter to upper case', function() {
			expect(utils.camelize('Equipment Class Name')).to.equal('EquipmentClassName');
		});

		it('should make all first letter to upper case', function() {
			expect(utils.camelize(['Equipment', 'Class', 'Name'])).to.equal('EquipmentClassName');
		});

		it('should make error when user enter object value', function() {
			expect(utils.camelize({'1': [ 1.1, 1.2 ], '2': [ 2.1, 2.3 ]})).to.be.false;
		});

		it('should show error when user enter string value', function() {
			expect(utils.camelize(1,2,3)).to.be.false;
		});

		it('should show null when value null ', function() {
			expect(utils.camelize(null)).to.be.null;
		});
		it('should show undefined when user enter wrong value', function() {
			expect(utils.camelize(undefined)).to.be.undefined;
		});

	});


	describe('#trim()', function() {
		it('should make one word', function() {
			expect(utils.trim(' just  do  it ')).to.equal('justdoit');
		});

		it('should make one word', function() {
			expect(utils.trim(' just  do  it          ')).to.equal('justdoit');
		});

		it('should make one word', function() {
			expect(utils.trim('         just  do  it          ')).to.equal('justdoit');
		});

		it('should delete space', function() {
			expect(utils.trim('1  3 4  5')).to.equal('1345');
		});

		it('should show null when value null ', function() {
			expect(utils.trim(null)).to.be.null;
		});

		it('should show undefined when user enter wrong value', function() {
			expect(utils.trim(undefined)).to.be.undefined;
		});

		it('should show error when user enter array value', function() {
			expect(utils.trim([1,  3,  4])).to.be.false;
		});

		it('should show error when user enter object value', function() {
			expect(utils.trim({1:[2], 2:[3]})).to.be.false;
		});

	});
	describe('#reverse()', function() {
		it ('should show word reverse', function() {
			expect(utils.reverse(['just', 'do', 'it']).join()).to.equal(['it', 'do', 'just'].join());
		});

		it ('should show numbers reverse', function() {
			expect(utils.reverse([2,3,4,5])).to.eql([5,4,3,2]);
		});

		it ('should show reverse array', function() {
			expect(utils.reverse([2,'hi',4,'bro'])).to.eql(['bro',4,'hi',2]);
		});

		it ('should show null when value null', function() {
			expect(utils.reverse(null)).to.be.null;
		});

		it ('should show undefined when user enter wrong value', function() {
			expect(utils.reverse(undefined)).to.be.undefined;
		});

		it ('should show error when user enter object value', function() {
			expect(utils.reverse({2: [3], 4: [3,5]})).to.be.false;
		});
	});

	describe('#map()', function () {
		it ('should change each list element by -1', function () {
			var newArr = [10, 20, 30, 40, 50];

			expect(utils.map(newArr, function (int) {
				return --int;
			})).to.eql([9, 19, 29, 39, 49]);
		});

		it ('should show when user enter empty value', function () {
			var newArr = [];

			expect(utils.map(newArr, function (int) {
				return --int;
			})).to.be.empty;
		});

		it ('should change each list element by +1', function() {
			var newArr = [10,20,30,40,50];

			expect(utils.map(newArr, function (int){
				return ++int;
			})).to.eql([11,21,31,41,51]);
		});

		it ('should change error when user enter array with string value', function() {
			var newArr = ['hi', 'bro'];

			expect(utils.map(newArr, function (int) {
				return ++int;
			})).to.eql(false);
		});

		it ('should show null when value null', function() {
			var newArr = [null];

			expect(utils.map(newArr, function (int) {
				return ++int;
			})).to.be.null;
		});

		it ('should change each list element by applying handler', function () {
			var firstObj = {
				firstName: 'Vitaliy',
				lastName: 'Bog',
				address: 'india, deli, ololoeva str, 4b',
				age: 35
			};

			var secondObj = {
				firstName: 'VITALIY',
				lastName: 'BOG',
				address: 'INDIA, DELI, OLOLOEVA STR, 4B',
				age: 35
			};

			expect(utils.map(firstObj, function (string) {
				string += '';
				return string.toUpperCase();
			})).to.eql(secondObj);
		});

	});

	describe('#groupBy()',  function () {
		it('Should accept array with single element and return according object', function () {
			var testArray = [1.1,1.2,2.1,2.3];

			expect(utils.groupBy(testArray, function (num) {
				return Math.floor(num);
			})).to.eql({'1': [ 1.1, 1.2 ], '2': [ 2.1, 2.3 ]});
		});

		it('should show error when user enter array value', function() {
			var testArray = ['hi', 'bro'];

			expect(utils.groupBy(testArray, function (num) {
				return Math.floor(num);
			})).to.eql(false);
		});

		it('should show null when value null', function() {
			expect(utils.groupBy(null)).to.be.null;
		});

		it('should show undefined when user enter wrong value', function() {
			expect(utils.groupBy(undefined)).to.be.undefined;
		});

	});

	describe('#once()', function () {
		it('function that can only be called one time', function () {
			//var count = 0;
			//var newFunction = utils.once(function(){count++});
			//newFunction();
			//newFunction();
			//expect(count).to.equal(1);
			var spy = sinon.spy();

			var newFunction = utils.once(spy);
			newFunction();
			newFunction();
			expect(spy.calledOnce).to.equal(true);

		});

		it('should show null when value null', function () {
			expect(utils.once(null)).to.be.null;
		});

		it('should show undefined when user enter wrong value', function () {
			expect(utils.once(undefined)).to.be.undefined;
		});

	});

	describe('#debounce()', function () {
		it('new debounced version of the passed function', function () {
			var count = 1000;
			var text = 'Hello';
			var newFunction = utils.debounce(function() {return text.toUpperCase()}, count);
			newFunction();
			newFunction();
			newFunction();
			newFunction();
			console.log(newFunction);
			expect(text.toUpperCase()).to.equal('HELLO');
		});

		it('new debounced version of the passed function', function () {
			var time = 1000;
			var testText = 'doing something';

			var date;
			var currentDate;

			var test = function () {
				date = new Date();
				utils.debounce(function () {
					return testText.toUpperCase();
				}, time);
				currentDate = new Date();

				return ((currentDate - date) <= time);
			};
			expect(test()).to.equal(true);
		});
	});

	describe("debounce with Fake Timer", function() {
		before(function() {
			this.clock = sinon.useFakeTimers();
		});

		after(function() {
			this.clock.restore();
		});

		it("Should call function after n-milliseconds", function() {
			var log = '';

			function fakeTimer(arg) {
				log += arg;
			}

			fakeTimer = utils.debounce(fakeTimer, 1000);

			fakeTimer(1);
			fakeTimer(2);

			setTimeout(function() {fakeTimer(3)}, 100);
			setTimeout(function() {fakeTimer(4)}, 1100);
			setTimeout(function() {fakeTimer(5)}, 1500);

			this.clock.tick(3000);
			expect(log).to.equal("5");
		});
	});


	describe('#same()', function () {
		it ('This is the same object', function () {
			var first = {2: [2,3]};
			var second = {2: [2,3]};
			expect(utils.same(second,first)).to.equal(true);
		});
		it('different types', function () {
			var first = [2,4];
			var second = {3: 5};
			expect(utils.same(first,second)).to.equal(false);
		});
		it('different arrays', function () {
			var first = [2,4,6];
			var second = [2,5,7];
			expect(utils.same(first,second)).to.equal(false);
		});
		it('different objects', function () {
			var first = {2: 4};
			var second = {2: 5};
			expect(utils.same(first,second)).to.equal(false);
		});

		it('should show null when value null', function () {
			expect(utils.same(null)).to.be.null;
		});

		it('should show undefined when user enter wrong value', function () {
			expect(utils.same(undefined)).to.be.undefined;
		});
	});

	describe('#isArray()', function() {
		it('This is test for correct value array', function () {
			expect(utils.isArray([2,3])).to.be.true;
		});

		it('This is test check value array if we enter object, result this test false', function () {
			expect(utils.isArray({2:[3]})).to.be.false;
		});

		it('This is test check value array if we enter string, result this test false', function () {
			expect(utils.isArray(1,2,3)).to.be.false;
		});

		it('This is test check value array if we enter null, result this test null', function () {
			expect(utils.isArray(null)).to.be.null;
		});

		it('This is test check value array if we enter undefined, result this test undefined', function () {
			expect(utils.isArray(undefined)).to.be.undefined;
		});
	});

	describe('#isObject()', function() {
		it('This is test for correct value object', function () {
			expect(utils.isObject({2:[3]})).to.be.true;
		});

		it('This is test check value object if we enter array, result this test false', function () {
			expect(utils.isObject([2,3])).to.be.false;
		});

		it('This is test check value object if we enter string, result this test false', function () {
			expect(utils.isObject(1,2,3)).to.be.false;
		});

		it('This is test check value object if we enter null, result this test null', function () {
			expect(utils.isObject(null)).to.be.null;
		});

		it('This is test check value object if we enter undefined, result this test undefined', function () {
			expect(utils.isObject(undefined)).to.be.undefined;
		});
	});

	describe('#isString()', function() {
		it('This is test for correct value string', function () {
			expect(utils.isString(1,23)).to.be.true;
		});

		it('This is test check value string if we enter array, result this test false', function () {
			expect(utils.isString([2,3])).to.be.false;
		});

		it('This is test check value string if we enter object, result this test false', function () {
			expect(utils.isString({1:[2,3]})).to.be.false;
		});

		it('This is test check value string if we enter null, result this test null', function () {
			expect(utils.isString(null)).to.be.null;
		});

		it('This is test check value string if we enter undefined, result this test undefined', function () {
			expect(utils.isString(undefined)).to.be.undefined;
		});
	});

});