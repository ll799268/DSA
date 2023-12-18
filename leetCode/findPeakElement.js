/**
 * 寻找峰值
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
  for (let i = 1; i < nums.length; i++) {
    const p = nums[i - 1]
    const c = nums[i]
    const n = nums[i + 1]

    if ((c > p && c > n) || (n === undefined && c > p)) {
      return i
    }
  }

  return 0
};

var findPeakElement = function (nums) {
  return nums.findIndex(item => item === Math.max(...nums))
}

var findPeakElement = function (nums) {
  let ans = 0
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[ans]) {
      ans = i
    }
  }

  return ans
}

console.log(findPeakElement([1, 2, 3]));