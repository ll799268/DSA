/**
 * 字符串中的第一个唯一字符
 */
function firstUniqChar(s: string): number {
  const map: Map<string, number> = new Map()

  for (let code of s) {
    map.set(code, (map.get(code) ?? 0) + 1)
  }

  for (let [k, v] of map.entries()) {
    if (v === 1) return s.indexOf(k)
  }

  return -1
};