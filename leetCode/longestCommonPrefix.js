/** 最长公共前缀
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  const firstCode = strs[0]

  let commonPrefixs = ''

  for (let i = 0; i < firstCode.length; i++) {
    for (let j = 1; j < strs.length; j++) {
      if (firstCode[i] !== strs[j][i]) {
        return commonPrefixs
      }
    }
    commonPrefixs += firstCode[i]
  }
  return commonPrefixs
}

var longestCommonPrefix = function (strs) {
  let code = strs[0]
  for (let i = 0; i < strs.length; i++) {
    while(strs[i].indexOf(code) != 0) {
      code = code.substring(0, code.length - 1)
    } 
  }
  return code
}

console.log(longestCommonPrefix(['flower', 'flow', 'flight']))