/**
 * 字符串中的单词反转
 * @param {string} message
 * @return {string}
 */
var reverseMessage = function (message) {
  let arr = message.split(' ');
  arr = arr.filter(item => item)

  return arr.reverse().join(' ')
};

var reverseMessage = function (message) {
  let arr = message.split(' ');
  arr = arr.filter(item => item)

  for (let left = 0, right = arr.length - 1; left < right; left++, right--) {
    [arr[left], arr[right]] = [arr[right], arr[left]]
  }

  return arr.join(' ')
};