/**
 * 统计出现过一次的公共字符串
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {number}
 */
var countWords = function (words1, words2) {
  const map1 = {}
  const map2 = {}

  for (const word of words1) {
    map1[word] ? map1[word]++ : map1[word] = 1
  }

  for (const word of words2) {
    map2[word] ? map2[word]++ : map2[word] = 1
  }

  let result = 0
  for (const k in map1) {
    if (map1[k] === 1 && map2[k] === 1) {
      result++
    }
  }

  return result
};