/** 两数之和
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
};

var twoSum = function (nums, target) {
  var map = new Map;
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) return [i, map.get(nums[i])]
    map.set(target - nums[i], i)
  }
};

console.log(twoSum([3, 3], 6));