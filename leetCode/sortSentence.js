/**
 * 将句子排序
 * @param {string} s
 * @return {string}
 */
var sortSentence = function (s) {
  const arr = s.split(' ')

  arr.sort((a, b) => {
    const sortA = a[a.length - 1]
    const sortB = b[b.length - 1]
    return sortA - sortB
  })

  return arr.join(' ').replace(/\d/g, '')
};

console.log(sortSentence('is2 sentence4 This1 a3'));