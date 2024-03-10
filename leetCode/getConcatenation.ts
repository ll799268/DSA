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
  const result: number[] = []

  for (let i = 0; i < nums.length; i++) {
    result[i + n] = result[i] = nums[i]
  }

  return result
};