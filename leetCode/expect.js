/**
 * 相等还是不相等
 * @param {string} val
 * @return {Object}
 */
var expect = function (val) {
  this.toBe = propVal => {
    if (val === propVal) return true
    throw new Error('Not Equal')
  }
  this.notToBe = propVal => {
    if (val !== propVal) return true
    throw new Error('Equal')
  }

  return this
};

/**
* expect(5).toBe(5); // true
* expect(5).notToBe(5); // throws "Equal"
*/