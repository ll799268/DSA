/**
 * 只出现一次的数字
 */
function singleNumber(nums: number[]): number {
  let ans: number = 0
  for (const num of nums) {
    ans ^= num;
  }
  return ans;
};

function singleNumber1(nums: number[]): number {
  const map: Map<number, number> = new Map()

  for (let i = 0; i < nums.length; i++) {
    map.has(nums[i]) ?
      map.delete(nums[i]) :
      map.set(nums[i], 1)
  }

  for (const [k] of map.entries()) {
    return k
  }
};
