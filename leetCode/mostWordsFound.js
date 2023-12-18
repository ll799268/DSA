/**
 * 句子中的最多单词数
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function (sentences) {
  let result = 0

  for (let i = 0; i < sentences.length; i++) {
    const curry = sentences[i]
    const arr = curry.split(' ')

    result = Math.max(result, arr.length)
  }

  return result
};