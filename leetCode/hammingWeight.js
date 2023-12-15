/**
 * 位1的个数
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
  let result = 0

  while (n) {
    result++
    // 消除右边的1
    n = n & (n - 1)
  }

  return result
};

// 常见的位运算
// 判断奇偶
x & 1 === 0

// 消除最右边的1
x & (x - 1)

// 得到最右边的1
x & -x