/**
 * 颜色分类
 * Do not return anything, modify nums in-place instead.
 */
function sortColors(nums: number[]): void {
  const map: Map<number, number> = new Map([
    [0, 0],
    [1, 0],
    [2, 0]
  ])

  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], map.get(nums[i]) + 1)
  }

  let i: number = 0
  for (let [k, v] of map.entries()) {
    while (v--) {
      nums[i++] = k
    }
  }
};
