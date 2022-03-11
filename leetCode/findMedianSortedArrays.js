/** 寻找两个正序数组的中位数
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  const nums3 = [...nums1, ...nums2].sort((a, b) => a - b),
    leg = nums3.length

  return leg % 2 === 0 ?
    (nums3[leg / 2 - 1] + nums3[leg / 2]) / 2 :
    nums3[Math.floor(leg / 2)]
}

console.log(findMedianSortedArrays([1, 2], [4]))