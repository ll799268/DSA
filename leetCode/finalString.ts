/**
 * 故障键盘
 */
function finalString(s: string): string {
  let code: string[] = []
  for (let i = 0; i < s.length; i++) {
    const cur: string = s[i]
    if (cur === 'i') {
      code = code.reverse()
      continue
    }
    code.push(cur)
  }

  return code.join('')
};