/**
 * 快乐数
 */
function isHappy(n: number): boolean {
  const calcSum = (n: number): number => {
    return String(n).split('').reduce((p, c) => p + Number(c) ** 2, 0)
  }

  const set: Set<number> = new Set()
  while (n !== 1 || !set.has(n)) {
    set.add(n)
    n = calcSum(n)
  }

  return n === 1
};