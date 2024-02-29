/**
 * 存在重复元素II
 */
function containsNearbyDuplicate(nums: number[], k: number): boolean {
  const map: Map<number, number> = new Map()

  for (let i = 0; i < nums.length; i++) {
    const cur: number = nums[i]
    if (map.has(cur) && i - map.get(cur) <= k) return true

    map.set(cur, i)
  }
  return false
}
