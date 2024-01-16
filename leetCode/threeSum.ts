/**
 * 三数之和
 */
function threeSum(nums: number[]): number[][] {
  nums.sort((a, b) => a - b)

  const leg: number = nums.length
  let left: number = 0,
    right: number = leg - 1,
    result: number[][] = []

  for (let i = 0; i < leg; i++) {
    const cur: number = nums[i]

    if (cur > 0) return result
    if (i > 0 && cur === nums[i - 1]) continue

    left = i + 1
    right = leg - 1
    while (left < right) {
      const sum: number = cur + nums[left] + nums[right]
      if (sum === 0) {
        result.push([cur, nums[left], nums[right]])
        left++
        right--

        while (nums[left] === nums[left - 1]) {
          left++
        }

        while (nums[right] === nums[right + 1]) {
          right--
        }
      } else if (sum < 0) {
        left++
      } else {
        right--
      }
    }
  }

  return result
}
