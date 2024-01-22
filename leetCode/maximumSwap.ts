/**
 * 最大交换
 */
function maximumSwap(num: number): number {
  const nums: number[] = String(num).split('').map(i => Number(i))

  for (let i = 0; i < nums.length - 1; i++) {
    let max = i
    for (let j = nums.length - 1; j > i; j--) {
      // 找到区间内最大的数 
      if (nums[max] < nums[j]) {
        max = j
      }
    }
    // 如果最大的数不是i所在的交换直接返回
    if (max != i) {
      [nums[i], nums[max]] = [nums[max], nums[i]]
      return parseInt(nums.join(''))
    }
  }
  return parseInt(nums.join(''))

};

console.log(maximumSwap(98368));