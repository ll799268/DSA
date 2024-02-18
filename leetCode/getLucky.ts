/**
 * 字符串转化后的各位数字之和
 */
function getLucky(s: string, k: number): number {
  let str: string = ''
  let result: number = 0

  for (let i = 0; i < s.length; i++) {
    str += String(s.charCodeAt(i) - 96)
  }

  while (k-- > 0) {
    result = 0
    for (let i = 0; i < str.length; i++) {
      result += +str[i]
    }
    str = String(result)
  }

  return result
};