
/**
 * 找到所有数组中消失的数字
 */
function findDisappearedNumbers(nums: number[]): number[] {
  const set: Set<number> = new Set(nums)
  const result: number[] = []

  for (let i = 1; i <= nums.length; i++) {
    if (!set.has(i)) result.push(i)
  }

  return result
};
