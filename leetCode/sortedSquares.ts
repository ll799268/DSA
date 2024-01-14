
/**
 * 有序数组的平方
 */
function sortedSquares(nums: number[]): number[] {
  return nums.map(c => c ** 2).sort((a, b) => a - b)
};

function sortedSquares1(nums: number[]): number[] {
  const result: number[] = []

  let i: number = 0,
    j: number = nums.length - 1

  while (i <= j) {
    if (Math.abs(nums[i]) > nums[j]) {
      result.unshift(nums[i] ** 2)
      i++
    } else {
      result.unshift(nums[j] ** 2)
      j--
    }
  }

  return result
};