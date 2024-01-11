/**
 * 构造有效字符串的最小插入数
 */
function addMinimum(word: string): number {
  const n: number = word.length
  let cnt: number = 1
  for (let i = 1; i < n; i++) {
    if (word[i] <= word[i - 1]) cnt++
  }
  return cnt * 3 - n
};

function addMinimum1(word: string): number {
  const n: number = word.length
  let dp: number[] = new Array(n + 1).fill(0)

  for (let i = 1; i <= n; i++) {
    dp[i] = dp[i - 1] + 2
    if (i > 1 && word[i - 1] > word[i - 2]) {
      dp[i] = dp[i - 1] - 1
    }
  }

  return dp[n]
};


console.log(addMinimum('aaaabb'));
