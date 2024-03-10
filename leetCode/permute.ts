/**
 * 全排列
 */
function permute(nums: number[]): number[][] {
  let res: number[][] = []

  const dfs = (path: number[]): void => {
    if (path.length === nums.length) {
      res.push(path)
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      const c: number = nums[i]
      if (path.includes(c)) continue
      dfs([...path, c])
    }
  }

  dfs([])

  return res
};
