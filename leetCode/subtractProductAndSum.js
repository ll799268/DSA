/**
 * 整数的各位积和之差
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function (n) {
  const arr = String(n).split('')

  let sum = 0
  let multiply = 1

  for (let i = 0; i < arr.length; i++) {
    const curry = arr[i]

    sum += +curry
    multiply *= +curry
  }

  return multiply - sum
};

console.log(subtractProductAndSum(234));