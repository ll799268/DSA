/** 
 * 删除有序数组中的重复项
 */
function removeDuplicates (nums: number[]): number {
  for (let i = 1, j = 0; ; i++) {
    if (nums[i] !== nums[j]) nums[++j] = nums[i]
    if (i >= nums.length) return j
  }
}

console.log(removeDuplicates([1, 1, 2]))