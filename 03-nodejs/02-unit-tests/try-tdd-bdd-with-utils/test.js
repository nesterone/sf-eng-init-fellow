var utils = require('./utils'),
  expect =  require('expect.js'),
  sinon = require('sinon');

describe('Utils', function() {

  describe('sort', function(){

    it("should have a default comparator for numbers", function () {
      expect(utils.sort([1, 5, 8, 4])).to.eql([1, 4, 5, 8]);
    });


  });

});
