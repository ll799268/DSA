/**
 * 汇总区间
 */
function summaryRanges(nums: number[]): string[] {
  const f = (i: number, j: number): string => {
    return i === j ? `${nums[i]}` : `${nums[i]}->${nums[j]}`
  }

  const n: number = nums.length
  const result: string[] = []

  for (let i = 0, j = 0; i < n; i = j + 1) {
    j = i
    while (j + 1 < n && nums[j + 1] === nums[j] + 1) {
      ++j
    }
    result.push(f(i, j))
  }

  return result
};
