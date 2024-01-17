/**
 * 最大字符串配对数目
 */
function maximumNumberOfStringPairs(words: string[]): number {
  const set: Set<string> = new Set()
  let result: number = 0

  for (let w of words) {
    const str: string = w.split('').reverse().join('')
    if (set.has(str)) {
      result++
    } else {
      set.add(w)
    }
  }

  return result
};