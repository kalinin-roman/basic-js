const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const result = [];
  const sortArray = [];
  let counter = 0;
  arr.map((a) => {
    if (a !== -1) {
      sortArray.push(a);
    }
  });
  sortArray.sort((a, b) => {
    return a - b;
  });
  console.log(sortArray);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === -1) {
      result.push(-1);
    } else {
      result.push(sortArray[counter]);
      counter++;
    }
  }
  return result;
}

module.exports = {
  sortByHeight,
};
