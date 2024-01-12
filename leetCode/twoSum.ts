/**
 * 两数之和
 */
function twoSum(nums: number[], target: number): number[] {
  const map: Map<number, number> = new Map();
  let res: number[] = []
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      return [map.get(nums[i])!, i]
    }
    map.set(target - nums[i], i)
  }

  return res
};

function twoSum1(nums: number[], target: number): number[] {
  let res: number[] = []
  for (var i = 0; i < nums.length; i++) {
    for (var j = 0; j < nums.length; j++) {
      if (i !== j && nums[i] + nums[j] === target) {
        res = [i, j]
        return res
      }
    }
  }

  return res
};