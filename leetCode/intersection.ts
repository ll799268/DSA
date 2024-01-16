/**
 * 两个数组的交集
 */
function intersection(nums1: number[], nums2: number[]): number[] {
  const result: Set<number> = new Set()
  const set: Set<number> = new Set(nums1)

  for (let n of nums2) {
    if (set.has(n)) result.add(n)
  }

  return [...result]
};

function intersection1(nums1: number[], nums2: number[]): number[] {
  nums1 = [...new Set(nums1)]
  nums2 = [...new Set(nums2)]

  let result: number[] = []
  const map: Map<number, number> = new Map()

  for (let n of nums1) {
    if (!map.get(n)) map.set(n, 1)
  }

  for (let n of nums2) {
    if (map.get(n)) result.push(n)
  }

  return result
};