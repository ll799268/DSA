/**
 * 判定是否互为字符重排
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */

var CheckPermutation = function (s1, s2) {
  if (s1.length !== s2.length) return false

  s1 = s1.split('').sort().join('')
  s2 = s2.split('').sort().join('')

  return s1 === s2
};

var CheckPermutation = function (s1, s2) {
  if (s1.length !== s2.length) return false

  const map1 = {}
  const map2 = {}

  for (let i = 0; i < s1.length; i++) {
    const c1 = s1[i]
    const c2 = s2[i]
    c1 in map1 ? map1[c1]++ : map1[c1] = 1
    c2 in map2 ? map2[c2]++ : map2[c2] = 1
  }

  for (let key in map1) {
    if (map1[key] !== map2[key]) return false
  }
  return true
};



console.log(CheckPermutation('abc', 'cba'));