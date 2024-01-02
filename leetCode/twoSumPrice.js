/**
 * 查找总价格为目标值的两个商品
 * @param {number[]} price
 * @param {number} target
 * @return {number[]}
 */
var twoSumPrice = function (price, target) {
  const map = {}

  for (let k of price) {
    if (k in map) return [k, map[k]]
    map[target - k] = k
  }
};

var twoSumPrice = function (price, target) {
  let left = 0,
    right = price.length - 1

  while (left < right) {
    if (price[left] + price[right] === target) return [price[left], price[right]]

    if (price[left] + price[right] < target){
      left++
    } else {
      right--
    }
  }
}

console.log(twoSum([3, 9, 12, 15], 18))