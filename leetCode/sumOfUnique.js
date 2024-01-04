/**
 * 唯一元素的和
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function (nums) {
  const map = {}
  for (let i = 0; i < nums.length; i++) {
    map[nums[i]] = map[nums[i]] ? map[nums[i]] + 1 : 1
  }

  let result = 0
  for (const k in map) {
    if (map[k] === 1) {
      result += +k
    }
  }

  return result
};

var sumOfUnique = function (nums) {
  const map = new Map()
  let result = 0
  for (let i = 0; i < nums.length; i++) {
    const cur = nums[i]
    if (map.get(cur) === '') continue
    if (map.get(cur) === 1) {
      result -= cur
      map.set(cur, '')
    } else {
      result += cur
      map.set(cur, 1)
    }
  }

  return result
}

console.log(sumOfUnique([1, 1, 1, 1, 1]));