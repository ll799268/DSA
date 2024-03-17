/** 
 * 搜索插入位置
 */
function searchInsert(nums: number[], target: number): number {
  if (nums.indexOf(target) > -1) return nums.indexOf(target)

  for (let i = 0; i < nums.length; i++) {
    if (target < nums[i]) {
      return i
    }
  }
  return nums.length
}

function searchInsert1(nums: number[], target: number): number {
  let [left, right] = [0, nums.length]

  while (left <= right) {
    let middle = Math.floor((left + right) / 2)
    if (nums[middle] > target) {
      right = middle - 1
    } else if (nums[middle] < target) {
      left = middle + 1
    } else {
      return middle
    }
  }
  return left
}

console.log(searchInsert([1, 3, 5, 6], 7))