/**
 * 动态口令
 * @param {string} password
 * @param {number} target
 * @return {string}
 */
var dynamicPassword = function (password, target) {
  return password.slice(target) + password.slice(0, target)
};