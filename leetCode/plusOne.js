/** 加一
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  return ((BigInt(digits.join('')) + 1n) + '').split('')
}

var plusOne = function (digits) {
  let i = digits.length - 1
  
  while (digits[i] === 9) {
    digits[i] = 0
    i--
  }

  if (i < 0) {
    digits.unshift(1)
  } else {
    digits[i] += 1
  }

  return digits
}

console.log(plusOne([9]))