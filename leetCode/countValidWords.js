/**
 * 句子中的有效单词数
 * @param {string} sentence
 * @return {number}
 */
var countValidWords = function (sentence) {
  let result = 0

  const arr = sentence.split(' ').filter(item => !!item)

  for (let i = 0; i < arr.length; i++) {
    const curry = arr[i]
    if (
      /^([a-z]*|[a-z]+-[a-z]+)[!.,]?$/.test(curry)
    ) {
      result++
    }
  }

  return result

};