/**
 * 最大连续1的个数
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  const str = nums.join('')
  const arr = str.split('0')

  return arr.sort()[arr.length - 1].length
};

var findMaxConsecutiveOnes = function (nums) {
  let maxCount = 0
  let count = 0

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      count++
    } else {
      count = 0
    }
    maxCount = Math.max(maxCount, count)
  }

  return maxCount
};



console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1]));