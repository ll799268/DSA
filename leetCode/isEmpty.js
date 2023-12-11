/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function (obj) {
  // for (const _ in obj) return false;
  // return true;
  return !Object.keys(obj).length
};