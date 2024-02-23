/**
 * 多数元素
 */
function majorityElement(nums: number[]): number {
  const map: Map<number, number> = new Map()

  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      map.set(nums[i], map.get(nums[i]) + 1)
    } else {
      map.set(nums[i], 1)
    }
  }

  for (let [key, value] of map) {
    if (value > nums.length / 2) {
      return key
    }
  }
};

function majorityElement2(nums: number[]): number {
  nums = nums.sort((a, b) => a - b)
  return nums[Math.floor(nums.length / 2)]
}