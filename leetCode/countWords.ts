/**
 * 统计出现过一次的公共字符串
 */
function countWords(words1: string[], words2: string[]): number {
  const map1: Map<string, number> = new Map()
  const map2: Map<string, number> = new Map()
  let count: number = 0

  for (let i = 0; i < words1.length; i++) {
    const word = words1[i]
    map1.has(word) ? map1.set(word, map1.get(word)! + 1) : map1.set(word, 1)
  }

  for (let i = 0; i < words2.length; i++) {
    const word = words2[i]
    map2.has(word) ? map2.set(word, map2.get(word)! + 1) : map2.set(word, 1)
  }

  for (let [k, v] of map1.entries()) {
    if (v === 1 && map2.get(k) === 1) {
      count++
    }
  }

  return count
};
