/**
 * 数组规约运算
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
function reduce(nums: number[], fn: (accum: number, curr: number) => number, init: number): number {
  let result: number = init
  for (const n of nums) {
    result = fn(result, n)
  }
  return result
};