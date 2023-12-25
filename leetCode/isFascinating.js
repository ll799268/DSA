/**
 * 判断一个数是否迷人
 * @param {number} n
 * @return {boolean}
 */
var isFascinating = function (n) {
  let str = `${ n }${ 2 * n }${ 3 * n}`

  let i = 10
  while (--i) {
    str = str.replace(i, '')
  }

  return !str.length
};

console.log(isFascinating(192));