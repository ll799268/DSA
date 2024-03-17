/**
 * 只出现一次的数字II
 */
function singleNumber(nums: number[]): number {
  const map: Map<number, number> = new Map()
  for (const k of nums) {
    map.set(k, (map.get(k) ?? 0) + 1)
  }

  for (const [k, v] of map) {
    if (v === 1) return k
  }
};