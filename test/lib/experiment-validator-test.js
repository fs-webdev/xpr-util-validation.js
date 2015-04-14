var expect = require("chai").expect
  , experimentValidator = require("../../lib/experiment-validator")
  , validExpNames = [
    {name: 'ValidExperimentName'},
    {name: 'Valid1Experiment2Name'}
  ]
  , invalidExpNames = [
    {name: 'Invalid Experiment Name'},
    {name: '9InvalidExperimentName'},
    {name: 'Invalid-Experiment-Name'},
    {name: 'Invalid.Experiment.Name'},
    {name: 'Invalid_Experiment_Name'},
    {name: ''}
  ];


describe('Given an experiment with a valid name', function() {
  describe('with a valid name', function() {
    it('should return true', function () {
      var i = 0
        , len = validExpNames.length;
      for (; i < len; i++) {
        expect(experimentValidator.isValid(validExpNames[i])).to.be.true;
      }
    })
  });
  describe('with an invalid name', function() {
    it('should return false', function () {
      var i = 0
        , len = invalidExpNames.length;
      for (; i < len; i++) {
        expect(experimentValidator.isValid(invalidExpNames[i])).to.be.false;
      }
    })
  });
});