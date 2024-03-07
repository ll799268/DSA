/**
 * 组合
 */
function combine(n: number, k: number): number[][] {
  // 简单的回溯 返回1到n中，所有k个数的集合。且1 <= k <= n
  // 构建1~n的数组
  const arr: number[] = []
  for (let i = 1; i <= n; i++) {
    arr.push(i) //[1, 2, 3, 4]
  }

  const res: number[][] = []
  const currCombine: number[] = []
  const backTracking = (start: number): void => {
    // 递归终止条件
    if (currCombine.length === k) {
      res.push([...currCombine])
      return
    }
    // 回溯过程
    for (let i = start; i < arr.length; i++) {
      currCombine.push(arr[i])
      backTracking(i + 1)
      currCombine.pop() //回溯
    }
  }

  backTracking(0)
  return res
}
