/** 
 * 给你两个字符串 haystack 和 needle 
 * 请你在 haystack 字符串中找出 needle 字符串出现的第一个位置（下标从 0 开始）
 * 如果不存在，则返回 -1
 * 
 * KMP算法是一种字符串匹配算法，可以在O(n+m)的时间复杂度内实现两个字符串的匹配
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  return haystack.indexOf(needle)
}

console.log(strStr('mississippi', 'issip'))