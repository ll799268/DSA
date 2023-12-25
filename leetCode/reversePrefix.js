/**
 * 反转单词前缀
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function (word, ch) {
  const idx = word.indexOf(ch)
  const wordCode = word.slice(0, idx + 1)
  return word.replace(wordCode, wordCode.split('').reverse().join(''))
};

var reversePrefix = function (word, ch) {
  const n = word.indexOf(ch)

  if (n >= 0) {
    let left = 0,
      right = n

    const arr = word.split('')
    while (left < right) {
      [arr[left], arr[right]] = [arr[right], arr[left]]
      left++
      right--
    }
    return arr.join('')
  }
  return word
}


console.log(reversePrefix('xyxzxe', 'z'));