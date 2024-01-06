/**
 * 丢失的数字
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  let n = nums.length
  let sum = nums.reduce((c, p) => c + p)

  while (n) {
    sum -= n--
  }

  return Math.abs(sum)
};

var missingNumber = function (nums) {
  nums.sort((a, b) => a - b)

  for (let i = 0; i <= nums.length; i++) {
    if (nums[i] !== i) return i
  }
};

console.log(missingNumber([0, 1]));