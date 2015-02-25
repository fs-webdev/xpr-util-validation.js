var assert = require("chai").assert
  , experimentValidator = require("../../lib/experiment-validator");


describe('Given an experiment with a valid name', function() {
  describe('with a valid name', function() {
    it('should return true', function () {
      assert.isTrue(experimentValidator.isValid({name: 'ValidExperimentName'}));
    })
  });
  describe('with an invalid name', function() {
    it('should return false', function () {
      assert.isFalse(experimentValidator.isValid({name: 'Invalid Experiment Name'}));
    })
  });
});