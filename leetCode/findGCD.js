/**
 * 找出数组的最大公约数
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function (nums) {
  let max = Math.max(...nums)
  let min = Math.min(...nums)

  while (max) {
    [max, min] = [min % max, max]
  }

  return min
};

console.log(findGCD([7, 5, 6, 8, 3]));