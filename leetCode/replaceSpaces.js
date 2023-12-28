/**
 * URL化
 * @param {string} S
 * @param {number} length
 * @return {string}
 */
var replaceSpaces = function (S, length) {
  return S.slice(0, length).replace(/\s/g, '%20')
};

var replaceSpaces = function (S, length) {
  return encodeURI(S.slice(0, length))
};

console.log(replaceSpaces('Mr John Smith    '));