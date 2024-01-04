/**
 * 分割数组中的数位
 * @param {number[]} nums
 * @return {number[]}
 */
var separateDigits = function (nums) {
  let result = []

  for (n of nums) {
    if (n < 10) {
      result.push(n)
      continue
    }
    result.push(...String(n).split(''))
  }

  return result
};

console.log(separateDigits([7, 1, 3, 9]));