/**
 * 数组序号转换
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function (arr) {
  const sortArr = [...new Set(arr)].sort((a, b) => a - b)

  const map = new Map()
  for (let i = 0; i < sortArr.length; i++) {
    map.set(sortArr[i], i)
  }

  return arr.map(item => map.get(item) + 1)
};

console.log(arrayRankTransform([37, 12, 28, 9, 100, 56, 80, 5, 12]));