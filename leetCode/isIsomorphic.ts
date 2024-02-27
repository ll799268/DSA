/**
 * 同构字符串
 */
function isIsomorphic(s: string, t: string): boolean {
  const map1: Map<string, number> = new Map()
  const map2: Map<string, number> = new Map()

  let r1: string = ''
  let r2: string = ''

  for (let i = 0; i < s.length; i++) {
    const sCode: string = s[i]
    map1.set(sCode, (map1.get(sCode) ?? 0) + i)
  }

  for (let i = 0; i < t.length; i++) {
    const sCode: string = t[i]
    map2.set(sCode, (map2.get(sCode) ?? 0) + i)
  }

  for (let [k, v] of map1.entries()) {
    r1 += v + ','
  }

  for (let [k, v] of map2.entries()) {
    r2 += v + ','
  }

  return r1 === r2
};