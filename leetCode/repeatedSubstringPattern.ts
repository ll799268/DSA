/**
 * 重复的子字符串
 */
function repeatedSubstringPattern(s: string): boolean {
  const getNext = (str: string): number[] => {
    let next: number[] = []
    let j: number = -1
    next[0] = j
    for (let i = 1, length = str.length; i < length; i++) {
      while (j >= 0 && str[i] !== str[j + 1]) j = next[j]
      if (str[i] === str[j + 1]) j++
      next[i] = j
    }
    return next
  }

  const next: number[] = getNext(s)
  const sLength: number = s.length
  const nextLength: number = next.length
  const suffixLength: number = next[nextLength - 1] + 1

  if (suffixLength > 0 && sLength % (sLength - suffixLength) === 0) return true
  return false
}

function repeatedSubstringPattern1(s: string): boolean {
  let num: number = s.length / 2

  while (num >= 1) {
    const str: string = s.slice(0, num)
    const code: string = s
    if (!code.replaceAll(str, '').length) return true
    num--
  }

  return false
};
