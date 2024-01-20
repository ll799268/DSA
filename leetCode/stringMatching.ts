/**
 * 数组中的字符串匹配
 */
function stringMatching(words: string[]): string[] {
  const ret: string[] = []

  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words.length; j++) {
      if (i !== j && words[j].includes(words[i])) {
        ret.push(words[i])
        break
      }
    }
  }
  return ret
};