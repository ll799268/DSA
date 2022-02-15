/** 删除有序数组中的重复项
 * 给你一个升序排列的数组nums ，请你原地删除重复出现的元素，使每个元素只出现一次，返回删除后数组的新长度。元素的相对顺序应该保持一致 
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