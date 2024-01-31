
/**
 * 找出不同元素数目差数组
 */
function distinctDifferenceArray(nums: number[]): number[] {
  const result: number[] = []

  for (let i = 0; i < nums.length; i++) {
    const pre: Set<number> = new Set(nums.slice(0, i + 1))
    const cur: Set<number> = new Set(nums.slice(i + 1))

    result.push(pre.size - cur.size)
  }

  return result
};