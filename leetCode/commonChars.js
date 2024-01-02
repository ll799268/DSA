/**
 * 查找公共字符
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function (words) {
  const ans = []
  for (let k of words[0]) {
    if (words.every(item => item.includes(k))) {
      words = words.map(item => item.replace(k, ''))
      ans.push(k)
    }
  }

  return ans
};

console.log(commonChars(["cool", "lock", "cook"]));