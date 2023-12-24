/**
 * 找到和为给定整数的三个连续整数
 * @param {number} num
 * @return {number[]}
 */
var sumOfThree = function (num) {
  if (num % 3 !== 0) return []
  return [num / 3 - 1, num / 3, num / 3 + 1]
};

console.log(sumOfThree(33));