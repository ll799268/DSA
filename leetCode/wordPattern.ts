/**
 * 单词规律
 */
function wordPattern(pattern: string, s: string): boolean {
  const arr: string[] = s.split(' ')
  if (pattern.length !== arr.length) return false
  
  for (let i = 0; i < pattern.length; i++) {
    const pCode: string = pattern[i]
    const sCode: string = arr[i]

    if (pattern.indexOf(pCode) !== arr.indexOf(sCode)) return false
  }

  return true
};
