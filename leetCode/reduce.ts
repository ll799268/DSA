/**
 * 数组规约运算
 */
function reduce(nums: number[], fn: (accum: number, curr: number) => number, init: number): number {
  let result: number = init
  for (const n of nums) {
    result = fn(result, n)
  }
  return result
};