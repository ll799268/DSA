/**
 * 截断句子
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function (s, k) {
  const arr = s.split(' ')
  arr.length = k
  return arr.join(' ')
};

console.log(truncateSentence('Hello how are you Contestant', 4));