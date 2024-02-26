/**
 * 跳跃游戏II
 */
function jump(nums: number[]): number {
  let k: number = 0
  let result: number = 0

  for (let i = 0; i < nums.length; i++) {
    if (i > k) return result
    k = Math.max(k, i + nums[i])
    result++
  }

  return result
};