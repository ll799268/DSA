/**
 * 第N个泰波那契数
 * @param {number} n
 * @return {number}
 */
// var tribonacci = function (n) {

//   const result = [0, 1, 1]

//   for (let i = 3; i < n + 1; i++) {
//     result[i] = result[i - 1] + result[i - 2] + result[i - 3]
//   }

//   return result[n]
// }

var tribonacci = function (n) {

  if (n === 0) return 0
  if (n === 1) return 1

  let n1 = 0,
    n2 = 1,
    n3 = 1,
    i = n - 2

  while (i--) {
    const sum = n1 + n2 + n3
    n1 = n2
    n2 = n3
    n3 = sum
  }

  return n3
}

console.log(tribonacci(4));