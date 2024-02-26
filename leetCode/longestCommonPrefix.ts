/** 
 * 最长公共前缀
 */
function longestCommonPrefix(strs: string[]): string {
  const firstCode: string = strs[0]

  let commonPrefix: string = ''

  for (let i = 0; i < firstCode.length; i++) {
    for (let j = 1; j < strs.length; j++) {
      if (firstCode[i] !== strs[j][i]) {
        return commonPrefix
      }
    }
    commonPrefix += firstCode[i]
  }
  return commonPrefix
}

function longestCommonPrefix1(strs: string[]): string {
  let code: string = strs[0]
  for (let i = 0; i < strs.length; i++) {
    while(strs[i].indexOf(code) !== 0) {
      code = code.slice(0, code.length - 1)
    } 
  }
  return code
}