
exports.isValid = isValid;

/**
 * Checks if the experiment is valid.
 *
 * @param experiment
 * @returns {boolean}
 */
function isValid(experiment) {
  var valid = false;
  if (experiment && isValidName(experiment.name)) {
    valid = true;
  }
  return valid;
}

/**
 * Validates the experiment name.  An experiment must begin with an alpha character and only contain alpha-numeric
 * characters thereafter.
 *
 * @param expName
 * @returns {boolean}
 */
function isValidName(expName) {
  var valid = false;
  /* The regex checks for a beginning alpha character and all subsequent characters must be alpha-numberic. */
  if (expName && expName.match(/^[a-zA-Z][a-zA-Z0-9]*$/)) {
    valid = true;
  }

  if (!valid) {
    console.warn("Invalid experiment. The experiment name must start with an alpha character and only contain alpha-numeric characters thereafter. Experiment Name: '%s'", expName);
  }
  return valid;
}

