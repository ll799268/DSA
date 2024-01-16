/** 
 * 移除元素
 */
function removeElement(nums: number[], val: number): number {
  let slow: number = 0
  for (let fast = 0; fast < nums.length; fast++) {
    if (nums[fast] !== val) {
      nums[slow++] = nums[fast]
    }
  }
  return slow
}

function removeElement1(nums: number[], val: number): number {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      nums.splice(i, 1)
      i--
    }
  }
  return nums.length
};

console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));