/**
 * 前K个高频元素
 */
function topKFrequent(nums: number[], k: number): number[] {
  const map: Map<number, number> = new Map()

  for (const n of nums) {
    map.set(n, (map.get(n) ?? 0) + 1)
  }

  return [...map.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, k)
    .map(i => i[0])
};