/**
 * 整理字符串
 */
function makeGood(s: string): string {
  let str: string = ''

  for (let i = 0; i < s.length; i++) {
    const c = s[i]
    if (Math.abs(c.charCodeAt(0) - str.charCodeAt(str.length - 1)) !== 32) {
      str += c
      continue
    }

    str = str.slice(0, -1)
  }

  return str
};