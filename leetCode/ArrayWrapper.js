/**
 * @param {number[]} nums
 * @return {void}
 */
var ArrayWrapper = function (nums) {
  this.nums = nums
};

/**
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
 * @return {string}
 */
ArrayWrapper.prototype.toString = function () {
  return JSON.stringify(this.nums)
}