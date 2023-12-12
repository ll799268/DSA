/**
 * 包装数组
 * @param {number[]} nums
 * @return {void}
 */
var ArrayWrapper = function (nums) {
  this.nums = nums
};

/**
 * 数组累加
 * @return {number}
 */
ArrayWrapper.prototype.valueOf = function () {
  let result = 0
  for (let i = 0; i < this.nums.length; i++) {
    result += this.nums[i]
  }
  return result
}

/**
 * 转换为字符串数组
 * @return {string}
 */
ArrayWrapper.prototype.toString = function () {
  return JSON.stringify(this.nums)
}