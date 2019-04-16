stringsAnswers = {
  /**
   * Reduces a string by removing letters that repeat more than amount times.
   * 
   * Example: reduceString('aaaabbb', 1) should reduce to 'ab'
   * Example: reduceString('aaaabbb', 2) should reduce to 'aabb'
   * 
   * @param {String} str - String that is to be reduced
   * @param {Number} amount - The maximum number of adjacent repeated letters in the result string.
   * @returns {String} A string with no more than amount number of repeated letters.
   */
  reduceString: function reduceString(str, amount) {
    let strArr = str.split('');
    let newStr = [];
    let check = '', count = 0;
    strArr.forEach(elem => {
      if (elem != check) {
        check = elem;
        count = 1;
        newStr.push(elem);
      } else if (count < amount) {
        count++;
        newStr.push(elem);
      }
    });
    return newStr.join('')
  },

  /**
   * Reverses a string of text
   * 
   * Example: reverseString('abc') should be 'cba'
   * 
   * @param {String} str - a string of text to be reversed
   * @returns {String} The original string of text str reversed.
   */
  reverseString: function reverseString(str) {
    let result = '';
    for (let i = str.length - 1; i >= 0; i--) {
      result += str[i];
    }
    return result;

    // Simple One line answer
    // return str.split('').reverse().join('');
  },
};
