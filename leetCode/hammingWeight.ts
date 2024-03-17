/**
 * 位1的个数
 */
function hammingWeight(n: number): number {
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
// x & 1 === 0

// 消除最右边的1
// x & (x - 1)

// 得到最右边的1
// x & -x