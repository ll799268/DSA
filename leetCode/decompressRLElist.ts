/**
 * 解压缩编码列表
 * @param nums 
 * @returns 
 */
function decompressRLElist(nums: number[]): number[] {
  let result: Array<number> = []

  for (let i = 1; i < nums.length; i += 2) {
    let count = nums[i - 1]
    const cur = nums[i]

    while (count--) {
      result.push(cur)
    }
  }

  return result
};
