/**
 * 四数相加II
 */
function fourSumCount(nums1: number[], nums2: number[], nums3: number[], nums4: number[]): number {
  const map: Map<number, number> = new Map()
  let result: number = 0

  for (let n1 of nums1) {
    for (let n2 of nums2) {
      const sum: number = n1 + n2
      map.set(sum, map.get(sum) ? map.get(sum)! + 1 : 1)
    }
  }

  for (let n3 of nums3) {
    for (let n4 of nums4) {
      const sum: number = 0 - n3 - n4
      if (map.get(sum)) result += map.get(sum)!
    }
  }

  return result
};

console.log(fourSumCount([-1, -1], [-1, 1], [-1, 1], [1, -1]));
