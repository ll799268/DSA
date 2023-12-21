/** 
 * 打家劫舍Ⅱ
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  if (nums.length === 1) return nums[0];
  if (nums.length === 2) return Math.max(...nums);

  // 获得不偷第一家的数组 
  let arr1 = nums.slice(1)
  // 获得不偷最后一家的数组 
  let arr2 = nums.slice(0, nums.length - 1)

  // 创建dp数组
  let opt1 = new Array(arr1.length).fill(0)
  let opt2 = new Array(arr2.length).fill(0)

  opt1[0] = arr1[0]
  opt2[0] = arr2[0]
  // 循环遍历获得两种情况分别的最大值
  for (let i = 1; i < arr1.length; i++) {
    opt1[i] = Math.max(opt1[i - 1], opt1[i - 2] ? (opt1[i - 2] + arr1[i]) : arr1[i])
  }
  for (let i = 1; i < arr2.length; i++) {
    opt2[i] = Math.max(opt2[i - 1], opt2[i - 2] ? (opt2[i - 2] + arr2[i]) : arr2[i])
  }
  // 返回两种情况的最大值
  return Math.max(opt1[opt1.length - 1], opt2[opt2.length - 1])

};

console.log(rob([1, 2, 3, 1]))  