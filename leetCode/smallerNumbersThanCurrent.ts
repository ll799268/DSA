/**
 * 有多少小于当前数字的数字
 */
function smallerNumbersThanCurrent(nums: number[]): number[] {
  let result: number[] = []

  for (let i = 0; i < nums.length; i++) {
    const cur: number = nums[i]
    const count: number = nums.filter(num => num < cur).length
    result.push(count)
  }

  return result
};

function smallerNumbersThanCurrent1(nums: number[]): number[] {
  let result: number[] = []

  for (let i = 0; i < nums.length; i++) {
    const cur: number = nums[i]
    let count: number = 0
    for (let j = 0; j < nums.length; j++) {
      if (nums[j] < cur) {
        count++
      }
    }
    result.push(count)
  }

  return result
};
