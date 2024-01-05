/**
 * 按奇偶排序数组
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function (nums) {
  return nums.sort((a, b) => a % 2 - b % 2)
};

var sortArrayByParity = function (nums) {
  let left = 0,
    right = nums.length - 1

  const res = []

  for (const num of nums) {
    if (num % 2 === 0) {
      res[left++] = num
    } else {
      res[right--] = num
    }
  }

  return res
};
var sortArrayByParity = function (nums) {
  let left = 0,
    right = nums.length - 1

  while (left < right) {
    while (left < right && nums[left] % 2 === 0) {
      left++
    }
    while (left < right && nums[right] % 2 === 1) {
      right--
    }
    if (left < right) {
      [nums[left], nums[right]] = [nums[right], nums[left]]
      left++
      right--
    }
  }

  return nums
};

console.log(sortArrayByParity([0, 1, 2]));