/**
 * 判断句子是否为全字母句
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function (sentence) {
  return new Set(sentence.split('')).size === 26
};

console.log(checkIfPangram('thequickbrownfoxjumpsoverthelazydog'));