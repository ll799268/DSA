/** 
 * 加一
 */
function plusOne(digits: number[]): number[] {
  let i: number = digits.length - 1

  while (digits[i] === 9) {
    digits[i] = 0
    i--
  }

  i < 0 ?
    digits.unshift(1) :
    digits[i]++

  return digits
};

