/**
 * 数组的相对排序
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function (arr1, arr2) {
  return arr1.sort((a, b) => {
    const aIndex = arr2.indexOf(a)
    const bIndex = arr2.indexOf(b)

    if (aIndex === -1 && bIndex === -1) {
      return a - b
    } else if (aIndex === -1) {
      return 1
    } else if (bIndex === -1) {
      return -1
    } else {
      return aIndex - bIndex
    }
  })
};