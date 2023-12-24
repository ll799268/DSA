/**
 * 正整数和负整数的最大计数
 * @param {number[]} nums
 * @return {number}
 */
var maximumCount = function (nums) {
  let positive = 0
  let negative = 0
  for (let i = 0; i < nums.length; i++) {
    const curry = nums[i]
    if (curry > 0) {
      positive++
    } else if (curry < 0) {
      negative++
    }
  }

  return Math.max(positive, negative)
};

var maximumCount = function (nums) {
  const binarySearch = (nums, target) => {
    let left = 0, right = nums.length - 1
    while (left <= right) {
      let mid = (left + right) >> 1
      if (nums[mid] < target) {
        left = mid + 1
      } else if (nums[mid] > target) {
        right = mid - 1
      } else {
        right = mid - 1
      }
    }
    return left
  }
  return Math.max(binarySearch(nums, 0), nums.length - binarySearch(nums, 1))
}