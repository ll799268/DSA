/**
 * 四数之和
 */
function fourSum(nums: number[], target: number): number[][] {
  nums.sort((a, b) => a - b)
  const n: number = nums.length

  let first: number = 0,
    second: number = 0,
    third: number = 0,
    fourth: number = 0

  const result: number[][] = []

  for (; first < n; first++) {
    const n1: number = nums[first]
    if (first > 0 && n1 === nums[first - 1]) continue

    for (second = first + 1; second < n; second++) {
      const n2: number = nums[second]
      if (second - first > 1 && n2 === nums[second - 1]) continue

      third = second + 1
      fourth = n - 1

      while (third < fourth) {
        const sum: number = n1 + n2 + nums[third] + nums[fourth]

        if (sum === target) {
          result.push([n1, n2, nums[third], nums[fourth]])
          third++
          fourth--

          while (nums[third] === nums[third - 1]) third++
          while (nums[fourth] === nums[fourth + 1]) fourth--
        } else if (sum < target) {
          third++
        } else {
          fourth--
        }
      }
    }
  }

  return result
};