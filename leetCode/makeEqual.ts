/**
 * 重新分配字符使所有字符串都相等
 */
function makeEqual(words: string[]): boolean {
  const map: Map<string, number> = new Map()
  for (let i = 0; i < words.length; i++) {
    const cur = words[i]
    for (let j = 0; j < cur.length; j++) {
      if (map.has(cur[j])) {
        map.set(cur[j], map.get(cur[j]) as number + 1)
      } else {
        map.set(cur[j], 1)
      }
    }
  }

  for (let [k, v] of map.entries()) {
    if (v % words.length) return false
  }
  return true
};

console.log(makeEqual(["abc", "aabc", "bc"]));
