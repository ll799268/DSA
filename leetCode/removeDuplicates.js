/** 删除有序数组中的重复项
 * 双指针
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  for (let i = 1, j = 0; ; i++) {
    if (nums[i] !== nums[j]) nums[++j] = nums[i]
    if (i >= nums.length) return j
  }
}

console.log(removeDuplicates([1, 1, 2]))