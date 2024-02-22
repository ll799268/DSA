/**
 * 盛最多水的容器
 */
function maxArea(height: number[]): number {
  let i: number = 0
  let j: number = height.length - 1
  let result: number = 0
  while (i < j) {
    result = height[i] < height[j] ?
      Math.max(result, (j - i) * height[i++]) :
      Math.max(result, (j - i) * height[j--])
  }
  return result
};