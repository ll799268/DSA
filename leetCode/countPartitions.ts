// 示例 1：
// 输入：nums = [10,10,3,7,6]
// 输出：4
// 解释：
// 共有 4 个满足题意的分区方案：
// [10]、[10, 3, 7, 6] 元素和的差值为 10 - 26 = -16 ，是偶数。
// [10, 10]、[3, 7, 6] 元素和的差值为 20 - 16 = 4，是偶数。
// [10, 10, 3]、[7, 6] 元素和的差值为 23 - 13 = 10，是偶数。
// [10, 10, 3, 7]、[6] 元素和的差值为 30 - 6 = 24，是偶数。

// 示例 2：
// 输入：nums = [1,2,2]
// 输出：0
// 解释：
// 不存在元素和的差值为偶数的分区方案。

// 示例 3：
// 输入：nums = [2,4,6,8]
// 输出：3
// 解释：
// 所有分区方案都满足元素和的差值为偶数。

function countPartitions(nums: number[]): number {
  // let res = 0;
  // for (let i = 0; i < nums.length - 1; i++) {
  //   const before = nums.slice(0, i + 1);
  //   const after = nums.slice(i + 1);
  //   const sumBefore = before.reduce((a, b) => a + b, 0);
  //   const sumAfter = after.reduce((a, b) => a + b, 0);
  //   if ((sumBefore - sumAfter) % 2 === 0) {
  //     res++;
  //   }
  // }

  // return res;

  const totalSum = nums.reduce((a, b) => a + b, 0);
  if (totalSum % 2 === 0) {
    return nums.length - 1;
  }
  return 0;
}

console.log(countPartitions([10, 10, 3, 7, 6]));
