/**
 * 寻找峰值
 */
function findPeakElement(nums: number[]): number {
  for (let i = 1; i < nums.length; i++) {
    const p = nums[i - 1]
    const c = nums[i]
    const n = nums[i + 1]

    if ((c > p && c > n) || (n === undefined && c > p)) {
      return i
    }
  }

  return 0
};

function findPeakElement1(nums: number[]): number {
  return nums.findIndex(item => item === Math.max(...nums))
}

function findPeakElement2(nums: number[]): number {
  let ans: number = 0
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[ans]) {
      ans = i
    }
  }

  return ans
}

console.log(findPeakElement([1, 2, 3]));