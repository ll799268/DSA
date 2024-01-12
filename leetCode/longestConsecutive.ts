/**
 * 最长连续序列
 */
function longestConsecutive(nums: number[]): number {
  const set: Set<number> = new Set([...nums])
  let count: number = 0

  for (let n of nums) {
    let currCount: number = 1
    let currNum: number = n
    while (set.has(currNum + 1)) {
      currCount++
      currNum++
    }

    count = Math.max(count, currCount)
  }

  return count
};