/**
 * 合并区间
 */
function mergeAreas(intervals: number[][]): number[][] {
  intervals.sort((a, b) => a[0] - b[0])
  const ans: number[][] = [intervals[0]]

  for (let i = 1; i < intervals.length; ++i) {
    if (ans[ans.length - 1][1] < intervals[i][0]) {
      ans.push(intervals[i])
    } else {
      ans[ans.length - 1][1] = Math.max(ans[ans.length - 1][1], intervals[i][1])
    }
  }
  return ans
};
