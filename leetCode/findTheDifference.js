/**
 * 找不同
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
  let as = 0
  let at = 0

  for (let i = 0; i < s.length; i++) {
    as += s[i].charCodeAt()
  }
  for (let i = 0; i < t.length; i++) {
    at += t[i].charCodeAt()
  }

  return String.fromCharCode(at - as)
};

var findTheDifference = function (s, t) {
  let ret = 0

  for (let i = 0; i < s.length; i++) {
    ret ^= s[i].charCodeAt()
  }
  for (let i = 0; i < t.length; i++) {
    ret ^= t[i].charCodeAt()
  }

  return String.fromCharCode(ret)
};