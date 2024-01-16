/**
 * 找出字符串中第一个匹配项的下标
 */
function strStr(haystack: string, needle: string): number {

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

  if (needle.length === 0) return 0

  let next: number[] = getNext(needle)
  let j: number = -1
  for (let i = 0, length = haystack.length; i < length; i++) {
    while (j >= 0 && haystack[i] !== needle[j + 1]) j = next[j]
    if (haystack[i] === needle[j + 1]) {
      if (j === needle.length - 2) {
        return i - j - 1
      }
      j++
    }
  }
  return -1
};

function strStr1(haystack: string, needle: string): number {
  return haystack.indexOf(needle)
};