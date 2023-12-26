/**
 * Excel表列序号
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function (columnTitle) {
  let num = 0
  let count = 1

  for (let i = columnTitle.length - 1; i >= 0; i--) {
    num += (columnTitle[i].charCodeAt(0) - 64) * count
    count *= 26
  }

  return num
};