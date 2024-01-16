/** 
 * 删除有字符串中的所以相邻重复项
 */
function removeDuplicates(s: string): string {
  const stack: string[] = []
  let i: number = 0
  while (i < s.length) {
    const cur: string = s[i]
    if (cur === stack[stack.length - 1]) {
      stack.pop()
    } else {
      stack.push(cur)
    }
    i++
  }

  return stack.join('')
}

console.log(removeDuplicates('abbaca'))