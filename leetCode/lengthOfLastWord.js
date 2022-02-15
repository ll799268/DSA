/** 最后一个单词的长度
 * 给你一个字符串 s，由若干单词组成，单词前后用一些空格字符隔开。返回字符串中最后一个单词的长度
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  const trimS = s.trim()
  let num = 0

  for (let i = trimS.length - 1; i >= 0; i--) {
    if (trimS[i] === ' ') break
    num++
  }
  return num
}

var lengthOfLastWord = function (s) {
  const trimS = s.trim().split(' ')
  return trimS[trimS.length - 1].length
}

console.log(lengthOfLastWord('hello world'));