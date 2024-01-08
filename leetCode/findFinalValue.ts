/**
 * 将找到的值乘以 2
 */
function findFinalValue(nums: number[], original: number): number {
  return nums.includes(original) ? findFinalValue(nums, original * 2) : original
};

function findFinalValue1(nums: number[], original: number): number {
  nums.sort((a, b) => a - b)

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === original) original *= 2
  }

  return original
};