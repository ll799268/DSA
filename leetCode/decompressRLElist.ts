/**
 * 解压缩编码列表
 * @param nums 
 * @returns 
 */
function decompressRLElist(nums: number[]): number[] {
  let result: Array<number> = []

  for (let i = 1; i < nums.length; i += 2) {
    let count: number = nums[i - 1]
    const cur: number = nums[i]

    while (count--) {
      result.push(cur)
    }
  }

  return result
};

console.log(decompressRLElist([1, 2, 3, 4]));
