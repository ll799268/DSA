/** 
 * 有效的括号
 */
function isValid(s: string): boolean {
  const stack: string[] = []

  const map: Map<string, string> = new Map([
    ['(', ')'],
    ['{', '}'],
    ['[', ']'],
  ])

  for (let c of s) {
    if (map.has(c)) {
      stack.push(c)
      continue
    }

    if (map.get(stack.pop()) !== c) return false
  }

  return !stack.length
}
