/**
 * 数组能形成多少数对
 * @param {number[]} nums
 * @return {number[]}
 */
var numberOfPairs = function (nums) {
  let count = 0

  const map = new Map()
  for (let i = 0; i < nums.length; i++) {
    const curry = nums[i]
    if (map.get(curry)) {
      count++
      map.delete(curry)
      continue
    }
    map.set(curry, 1)
  }

  return [count, nums.length - count * 2]
};

console.log(numberOfPairs([1, 3, 2, 1, 3, 2, 2]));