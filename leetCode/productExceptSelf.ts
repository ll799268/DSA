/**
 * 除自身以外数组的乘积
 */
function productExceptSelf(nums: number[]): number[] {
  const length: number = nums.length
  const result: number[] = new Array(length)
  result[0] = 1

  for (let i = 1; i < length; i++) {
    result[i] = nums[i - 1] * result[i - 1]
  }

  let R: number = 1
  for (let i = length - 1; i >= 0; i--) {
    result[i] = result[i] * R
    R *= nums[i]
  }

  return result
};

console.log(productExceptSelf([1, 2, 3, 4]));
