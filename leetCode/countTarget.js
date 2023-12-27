/**
 * 统计目标成绩的出现次数
 * @param {number[]} scores
 * @param {number} target
 * @return {number}
 */
var countTarget = function (scores, target) {
  let count = 0
  for (let i = 0, j = scores.length - 1; i <= j; i++, j--) {
    if (scores[i] === target && i === j) return ++count
    if (scores[i] === target) count++
    if (scores[j] === target) count++
  }
  return count
};

var countTarget = function (scores, target) {
  let count = 0

  for (let i = 0; i < scores.length; i++) {
    if (scores[i] === target) count++
  }

  return count
};

console.log(countTarget([1, 2, 3, 4, 5], 3));
