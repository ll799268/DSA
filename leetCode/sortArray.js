/**
 * 排序数组
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
  return nums.sort((a, b) => a - b);
};

var sortArray = function (nums) {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = 0; j < nums.length - i - 1; j++) {
      if (nums[j + 1] < nums[j]) {
        [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]]
      }
    }
  }

  return nums
};

var sortArray = function (nums) {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] < nums[i]) {
        [nums[i], nums[j]] = [nums[j], nums[i]]
      }
    }
  }

  return nums
};

console.log(sortArray([5, 2, 3, 1]));