/**
 * 找到两个数组中的公共元素
 */
function findIntersectionValues(nums1: number[], nums2: number[]): number[] {
  let result: number[] = [0, 0]

  for (let i = 0; i < nums1.length; i++) {
    if (nums2.includes(nums1[i])) {
      result[0] = ++result[0]
    }
  }

  for (let i = 0; i < nums2.length; i++) {
    if (nums1.includes(nums2[i])) {
      result[1] = ++result[1]
    }
  }

  return result
};