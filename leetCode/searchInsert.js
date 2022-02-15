/** 搜索插入位置
 * 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  if (nums.indexOf(target) > -1) return nums.indexOf(target)

  for (let i = 0; i < nums.length; i++) {
    if (target < nums[i]) {
      return i
    }
  }
  return nums.length
}


var searchInsert = function (nums, target) {
  let [left, right] = [0, nums.length]

  while (left <= right) {
    let middle = Math.floor((left + right) / 2)
    if (nums[middle] > target) {
      right = middle - 1
    } else if (nums[middle] < target) {
      left = middle + 1
    } else {
      return middle
    }
  }
  return left
}

console.log(searchInsert([1, 3, 5, 6], 7))