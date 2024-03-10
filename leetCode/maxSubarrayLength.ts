/**
 * 最多k个重复元素的最长子数组
 */
function maxSubarrayLength(nums: number[], k: number): number {
  const map: Map<number, number> = new Map()

  let l: number = 0
  let res: number = 0

  for (let r = 0; r < nums.length; r++) {
    map.set(nums[r], (map.get(nums[r]) || 0) + 1)

    while (map.get(nums[r]) > k) {
      map.set(nums[l], map.get(nums[l]) - 1)
      l++
    }

    res = Math.max(r - l + 1, res)
  }

  return res
};