/** 
 * 合并两个有序数组
 */

function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  nums1.splice(m, n, ...nums2)
  nums1.sort((a, b) => a - b)
}

function merge1(nums1: number[], m: number, nums2: number[], n: number): void {
  for (let i = 0; i < n; i++) {
    nums1[m + i] = nums2[i]
  }

  nums1.sort((a, b) => a - b)
}