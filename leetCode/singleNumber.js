/**
 * 只出现一次的数字
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let ans = 0;
  for (const num of nums) {
    ans ^= num;
  }
  return ans;

  // for (let i = 0; i < nums.length; i++) {
  //   if (map.has(nums[i])) {
  //     map.delete(nums[i])
  //   } else {
  //     map.set(nums[i], 1)
  //   }
  // }

  // for (const [k] of map.values()) {
  //   return k
  // }
};