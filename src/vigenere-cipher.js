const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(name) {
    this.direct = name;
  }
  encrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }
    let result = message.toUpperCase().split('');
    let keyCounter = 0;
    for (let i = 0; i < result.length; i++) {
      if (result[i].codePointAt() >= 65 && result[i].codePointAt() <= 90) {
        let letterFromMessage = result[i].codePointAt() - 65;
        let letterFormKey = key[keyCounter].toUpperCase().codePointAt() - 65;
        let difference = letterFromMessage + letterFormKey;
        if (difference < 26) {
          result[i] = String.fromCodePoint(difference + 65);
        } else {
          result[i] = String.fromCodePoint(difference + 65 - 26);
        }
        keyCounter++;
        if (keyCounter === key.length) {
          keyCounter = 0;
        }
      }
    }
    if (this.direct === false) {
      return result.reverse().join('');
    } else {
      return result.join('');
    }
  }
  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) {
      throw new Error('Incorrect arguments!');
    }
    let result = encryptedMessage.toUpperCase().split('');
    let keyCounter = 0;
    for (let i = 0; i < result.length; i++) {
      if (result[i].codePointAt() >= 65 && result[i].codePointAt() <= 90) {
        let letterFromMessage = result[i].codePointAt() - 65;
        let letterFormKey = key[keyCounter].toUpperCase().codePointAt() - 65;
        let difference = letterFromMessage - letterFormKey;
        if (difference < 0) {
          result[i] = String.fromCodePoint(difference + 65 + 26);
        } else {
          result[i] = String.fromCodePoint(difference + 65);
        }
        keyCounter++;
        if (keyCounter === key.length) {
          keyCounter = 0;
        }
      }
    }
    if (this.direct === false) {
      return result.reverse().join('');
    } else {
      return result.join('');
    }
  }
}

module.exports = {
  VigenereCipheringMachine
};
