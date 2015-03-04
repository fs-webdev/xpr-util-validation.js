
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
 * Validates the experiment name.  An experiment must have a name and the name cannot contain whitespace
 * characters (space, tab, carriage return, new line, vertical tab, and form feed).
 *
 * @param expName
 * @returns {boolean}
 */
function isValidName(expName) {
  var valid = false;
  /* The regex checks for space, tab, carriage return, new line, vertical tab, and form feed characters. */
  if (expName && !expName.match(/\s/g)) {
    valid = true;
  }

  if (!valid) {
    console.warn("Invalid experiment. The experiment name is either missing or contains whitespace characters. Experiment Name: '%s'", expName);
  }
  return valid;
}

