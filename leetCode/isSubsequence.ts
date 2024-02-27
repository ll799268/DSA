/**
 * 判断子序列
 */
function isSubsequence(s: string, t: string): boolean {
  let i: number = 0
  let j: number = 0

  while (i < s.length && j < t.length) {
    if (s[i] === t[j]) {
      i++
    }
    j++
  }

  return i === s.length
};