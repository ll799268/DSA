
/**
 * 字符串中的额外字符
 */
function minExtraChar(s: string, dictionary: string[]): number {
  const d: Set<string> = new Set(dictionary)
  const n: number = s.length
  const dp: number[] = new Array(n + 1).fill(0)

  for (let i = 1; i <= n; i++) {
    dp[i] = dp[i - 1] + 1
    for (let j = 0; j < i; j++) {
      if (d.has(s.slice(j, i))) {
        dp[i] = Math.min(dp[i], dp[j])
      }
    }
  }

  return dp[n]
};

console.log(
  minExtraChar('leetscode',
    ["leet", "code", "leetcode"]
  )
);