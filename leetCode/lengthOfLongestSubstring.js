/** 无重复字符的最长子串
 * hashMap
 * @param {string} s
 * @return {number}
 */
// var lengthOfLongestSubstring = function (s) {
//   const stack = []
//   let result = 0

//   for (let i = 0; i < s.length; i++) {
//     const curry = s[i]
//     if (stack.includes(curry)) {
//       result = Math.max(result, stack.length)
//       stack.slice(stack.indexOf(curry + 1))
//       continue
//     }
//     stack.push(curry)
//     console.log(stack);
//   }
//   return stack.length
// }

var lengthOfLongestSubstring = function (s) {
  let minIndex = 0
  let ans = 0
  for (let i = 0; i < s.length; i++) {
    if (s.indexOf(s[i], minIndex) < i) minIndex = s.indexOf(s[i], minIndex) + 1
    else ans = Math.max(ans, i - minIndex + 1)
  }
  return ans
}

console.log(lengthOfLongestSubstring('pwwkew'))