const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let result = str;
  let addition = [];
  let strAndaddition = [];
  if (options.addition || options.addition === false || options.addition === null) {
    if (options.additionRepeatTimes) {
      for (let i = 0; i < options.additionRepeatTimes; i++) {
        if (options.addition === null) {
          options.addition = 'null'
        }
        addition.push(options.addition);
        console.log(addition)
      }
      result = result + addition.join(options.additionSeparator || '|')
    } else {
      result = result + options.addition;
    }
  }
  if (options.repeatTimes) {
    for (let i = 0; i < options.repeatTimes; i++) {
      strAndaddition.push(result);
      console.log(strAndaddition)
    }
    result = strAndaddition.join(options.separator || '+')
  }
  return result
}

module.exports = {
  repeater
};
