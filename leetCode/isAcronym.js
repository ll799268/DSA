/**
 * 判别首字母缩略词
 * @param {string[]} words
 * @param {string} s
 * @return {boolean}
 */
var isAcronym = function (words, s) {
  return s === words.reduce((p, c) => p += c[0], '')
};

var isAcronym = function (words, s) {
  if (words.length !== s.length) return false

  let n = 0
  while (n < s.length) {
    if (words[n][0] !== s[n]) return false
    n++
  }
  return true
};

console.log(isAcronym(["alice", "bob", "charlie"], 'abc'));