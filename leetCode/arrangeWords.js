/**
 * 重新排列句子中的单词
 * @param {string} text
 * @return {string}
 */
var arrangeWords = function (text) {
  let result = text.split(' ')
    .sort((a, b) => a.length - b.length)
    .map(word => word[0].toLowerCase() + word.slice(1))
    .join(' ')
  return result[0].toUpperCase() + result.slice(1)
};