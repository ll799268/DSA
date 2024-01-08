/**
 * 扁平化数组
 */
type MultiDimensionalArray = (number | MultiDimensionalArray)[];

var flat = function (arr: MultiDimensionalArray, n: number): MultiDimensionalArray {
  if (n === 0) return arr
  const result: MultiDimensionalArray = []

  for (let i = 0; i < arr.length; i++) {
    const child: number | MultiDimensionalArray = arr[i]
    result.push(...(Array.isArray(child) ? flat(child, n - 1) : [child]));
  }
  return result
};