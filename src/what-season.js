const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  const a = date;
  const b = a.toString().split(' ')[1];
  if (b === 'Dec') return 'winter';
  if (b === 'Jan') return 'winter';
  if (b === 'Feb') return 'winter';
  if (b === 'Mar') return 'spring';
  if (b === 'Apr') return 'spring';
  if (b === 'May') return 'spring';
  if (b === 'Jun') return 'summer';
  if (b === 'Jul') return 'summer';
  if (b === 'Aug') return 'summer';
  if (b === 'Sep') return 'autumn';
  if (b === 'Oct') return 'autumn';
  if (b === 'Nov') return 'autumn';
}

module.exports = {
  getSeason
};
