/** 
 * 删除有序数组中的重复项II
 */
function removeDuplicates(nums: number[]): number {
  if (nums.length < 2) return nums.length

  let fast: number = 2
  let slow: number = 2

  for (let i = 0; i < nums.length; i++) {
    if (nums[slow - 2] !== nums[fast]) {
      nums[slow] = nums[fast]
      slow++
    } else {
      fast++
    }
  }

  return slow
};