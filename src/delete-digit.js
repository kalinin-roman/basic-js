const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const arr = n.toString();
  let test = [];
  let result = arr.split('').slice(1);
  result = +result.join('');
  for (let i = 1; i < arr.length; i++) {
    test = arr.split('');
    delete test[i];
    test = +test.join('');
    if (result < test) { result = test }
  }
  return result
}

module.exports = {
  deleteDigit
};
