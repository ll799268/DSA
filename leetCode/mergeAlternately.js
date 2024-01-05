/**
 * 交替合并字符串
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
  let max = Math.max(word1.length, word2.length)
  let result = ''
  let i = -1
  while (i++ < max) {
    if (word1[i]) result += word1[i]
    if (word2[i]) result += word2[i]
  }

  return result
};