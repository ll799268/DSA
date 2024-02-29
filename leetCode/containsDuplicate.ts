/**
 * 存在重复元素
 */
function containsDuplicate(nums: number[]): boolean {
  const map: Map<number, number> = new Map()
  for (let i = 0; i < nums.length; i++) {
    const cur: number = nums[i]
    if (map.has(cur)) return true
    map.set(cur, 1)
  }
  return false
};