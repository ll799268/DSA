/**
 * 第一个出现两次的字母
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function (s) {
  const map = {}

  for (let i = 0; i < s.length; i++) {
    const curry = s[i]
    if (curry in map) {
      return curry
    }
    map[curry] = ''
  }

};

console.log(repeatedCharacter('abccbaacz'));