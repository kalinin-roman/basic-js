const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) { throw new Error("'arr' parameter must be an instance of the Array!"); }
  const firstArr = arr.slice();
  const result = [];
  for (let i = 0; i < firstArr.length; i++) {
    switch (firstArr[i]) {
      case '--discard-next':
        if (firstArr[i + 1]) {
          firstArr[i + 1] = null;
        }
        break;
      case '--discard-prev':
        if (firstArr[i - 1]) {
          result.pop();
          firstArr[i - 1] = null;
        }
        break;
      case '--double-next':
        if (firstArr[i + 1]) {
          result.push(firstArr[i + 1]);
        }
        break;
      case '--double-prev':
        if (firstArr[i - 1]) {
          result.push(firstArr[i - 1]);
        }
        break;
      default:
        if (firstArr[i]) {
          result.push(firstArr[i]);
        }
    }
  }
  return result;
}

module.exports = {
  transform
};
