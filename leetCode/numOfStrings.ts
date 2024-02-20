/**
 * 作为子字符串出现在单词中的字符串数目
 */
function numOfStrings(patterns: string[], word: string): number {
  let result: number = 0

  for (let p of patterns) {
    if (word.includes(p)) result++
  }

  return result
};

function numOfStrings1(patterns: string[], word: string): number {
  return patterns.filter(p => word.includes(p)).length
};