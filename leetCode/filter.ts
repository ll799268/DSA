
type Fn = (n: number, i: number) => any

/**
 * 过滤数组中的元素
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
function filter(arr: number[], fn: Fn): number[] {
  let result: number[] = []
  for (let i = 0; i < arr.length; i++) {
    fn(arr[i], i) && result.push(arr[i])
  }
  return result
};