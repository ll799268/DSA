/**
 * 按既定顺序创建目标数组
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function (nums, index) {
  let result = []
  for (let i = 0; i < nums.length; i++) {
    const cur = nums[i]
    const idx = index[i]
    result.splice(idx, 0, cur)
  }

  return result
};

console.log(createTargetArray([0, 1, 2, 3, 4], [0, 1, 2, 2, 1]));