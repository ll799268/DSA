/**
 * 检查句子中的数字是否递增
 * @param {string} s
 * @return {boolean}
 */
var areNumbersAscending = function (s) {
  let arr = s.split(' ')

  let cur = 0
  for (let i = 0; i < arr.length; i++) {
    const curry = arr[i]
    if (/\d/.test(curry)) {
      if (+curry <= +cur) {
        return false
      }
      cur = curry
    }
  }

  return true
};

console.log(areNumbersAscending('1 box has 3 blue 4 red 6 green and 12 yellow marbles'));