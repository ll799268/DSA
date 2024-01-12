/**
 * 移动零
 * Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
  let count: number = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      nums.splice(i, 1)
      i--
      count++
    }
  }

  // while (count--) {
  //   nums.push(0)
  // }

  nums.push(...new Array(count).fill(0))
};

function moveZeroes1(nums: number[]): void {
  let slowIndex = 0
  for (let fastIndex = 0; fastIndex < nums.length; fastIndex++) {
    if (nums[fastIndex] !== 0) {
      [nums[slowIndex], nums[fastIndex]] = [nums[fastIndex], nums[slowIndex]]
      slowIndex++
    }
  }
};
