/** 两数之和
 * 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  for (var i = 0; i < nums.length; i++) {
    var firstNum = nums[i]
    for (var j = 0; j < nums.length; j++) {
      var lastNum = nums[j]
      if (i !== j && firstNum + lastNum === target) {
        return [i, j]
      }
    }
  }
}

// map 集合
var twoSum = function (nums, target) {
  var map = new Map;
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) return [i, map.get(nums[i])]
    map.set(target - nums[i], i)
  }
}

console.log(twoSum([3, 3], 6))