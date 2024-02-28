/**
 * 有效的字母异位词
 */

function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false

  const map: Map<string, number> = new Map()

  for (let i = 0; i < s.length; i++) {
    const sCode: string = s[i]
    const tCode: string = t[i]
    map.set(sCode, (map.get(sCode) || 0) + 1)
    map.set(tCode, (map.get(tCode) || 0) - 1)
  }

  for (const [k, v] of map) {
    if (v !== 0) return false
  }

  return true
};

function isAnagram1(s: string, t: string): boolean {
  return s.split('').sort().join('') === t.split('').sort().join('')
}
