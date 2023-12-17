const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(`${value}`);
    return this;
  },
  removeLink(position) {
    if (position < this.chain.length && position > 0) {
      this.chain.splice(position - 1, 1);
    } else {
      this.chain = [];
    }
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    const a = `( ${this.chain.join(' )~~( ')} )`;
    this.chain = [];
    return a;
  }
};

module.exports = {
  chainMaker
};
