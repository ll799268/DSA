/**
 * 有效的字母异位词
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  const map = new Map()

  for (let i = 0; i < s.length; i++) {
    const char = s[i]
    if (map.has(char)) {
      map.set(char, map.get(char) + 1)
      continue
    }
    map.set(char, 1)
  }

  for (let i = 0; i < t.length; i++) {
    const char = t[i]
    if (map.has(char)) {
      map.set(char, map.get(char) - 1)
      continue
    }
    map.set(char, 1)
  }

  for (const [k, v] of map) {
    if (v >= 1) return false
  }

  return true
};

var isAnagram = function (s, t) {
  return s.split('').sort().join('') === t.split('').sort().join('')
}

console.log(isAnagram('rat', 'car'));