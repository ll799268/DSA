/**
 * 旋转数组
 * Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
  while (k--) {
    nums.unshift(nums.pop())
  }
};

function rotate1(nums: number[], k: number): void {
  const n: number = nums.length
  const newArr: number[] = new Array(n)

  for (let i = 0; i < n; i++) {
    newArr[(i + k) % n] = nums[i]
  }

  for (let i = 0; i < n; ++i) {
    nums[i] = newArr[i]
  }
};
