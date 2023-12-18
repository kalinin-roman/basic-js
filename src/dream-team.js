const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam( members ) {
  const result = [];
  // const result = [];
  if (!Array.isArray(members)) {
    return false;
  } else {
    members.forEach((a) => {
      if (typeof a === 'string') {
        // console.log(a)
        result.push(a.trim().toUpperCase()[0])
      }
      // console.log('result= ', result)
    })
    result.sort()
    return result.join('')
  }
}

module.exports = {
  createDreamTeam
};
