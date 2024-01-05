/**
 * 棒球比赛
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function (operations) {
  let res = []
  for (let o of operations) {
    if (o === 'C') {
      res.pop()
    } else if (o === 'D') {
      const record = res[res.length - 1] * 2
      res.push(record)
    } else if (o === '+') {
      const record = res[res.length - 1] + res[res.length - 2]
      res.push(record)
    } else {
      res.push(+o)
    }
  }
  return res.reduce((i, j) => i + j, 0);
};

console.log(calPoints(["5", "2", "C", "D", "+"]));