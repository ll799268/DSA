/**
 * 整数转罗马数字
 * @param num 
 * @returns 
 */
function intToRoman(num: number): string {
  let map: { [key: string]: number } = {
    'M': 1000,
    'CM': 900,
    'D': 500,
    'CD': 400,
    'C': 100,
    'XC': 90,
    'L': 50,
    'XL': 40,
    'X': 10,
    'IX': 9,
    'V': 5,
    'IV': 4,
    'I': 1
  }

  let result: string = ''

  for (const key in map) {
    while (num >= map[key]) {
      num -= map[key]
      result += key
    }
  }

  return result
};

console.log(intToRoman(4));
