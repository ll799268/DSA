
/**
 * 十进制整数的反码
 */
function bitwiseComplement(n: number): number {
  let to2: string[] = [...n.toString(2)]
  to2 = to2.map(c => c === '0' ? '1' : '0')
  return parseInt(to2.join(''), 2)
};
