/**
 * 数组串联
 * @param {number[]} nums
 * @return {number[]}
 */
function getConcatenation(nums: number[]): number[] {
  return [...nums, ...nums]
};

function getConcatenation1(nums: number[]): number[] {
  const n: number = nums.length

  for (let i = 0; i < n; i++) {
    nums.push(nums[i])
  }
  return nums
};