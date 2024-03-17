/**
 * 只出现一次的数字III
 */
function singleNumber(nums: number[]): number[] {
  const map: Map<number, number> = new Map()
  let result: number[] = []
  for (const k of nums) {
    map.set(k, (map.get(k) ?? 0) + 1)
  }

  for (const [k, v] of map) {
    if (v === 1) result.push(k)
  }

  return result
};