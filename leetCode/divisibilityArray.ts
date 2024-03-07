/**
 * 找出字符串的可整除数组
 */
function divisibilityArray(word: string, m: number): number[] {
  const res: number[] = []

  let count: number = 0
  for (let i = 0; i < word.length; i++) {
    count = (count * 10 + (word.charCodeAt(i) - '0'.charCodeAt(0))) % m
    res[i] = count === 0 ? 1 : 0
  }

  return res
};
