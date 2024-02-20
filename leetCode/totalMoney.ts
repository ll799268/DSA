/**
 * 计算力扣银行的钱
 */
function totalMoney(n: number): number {
  let start: number = 1

  let reduce: number = 1
  let result: number = 1

  let i: number = 0
  while (++i < n) {
    reduce = i % 7 === 0 ? ++start : reduce + 1
    result += reduce
  }

  return result
};
