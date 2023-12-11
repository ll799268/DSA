/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  let min = 0,
    max = nums.length - 1

  while (min <= max) {
    const mid = Math.floor(min + (max - min) / 2)

    if (nums[mid] < target) {
      min = mid + 1
    } else if (nums[mid] > target) {
      max = mid - 1
    } else {
      return mid
    }
  }

  return - 1
};