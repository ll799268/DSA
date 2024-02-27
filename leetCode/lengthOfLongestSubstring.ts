/** 
 * 无重复字符的最长子串
 */
function lengthOfLongestSubstring(s: string): number {
  let minIndex: number = 0
  let ans: number = 0
  for (let i = 0; i < s.length; i++) {
    if (s.indexOf(s[i], minIndex) < i) {
      minIndex = s.indexOf(s[i], minIndex) + 1
      continue
    }
    ans = Math.max(ans, i - minIndex + 1)
  }
  return ans
}
