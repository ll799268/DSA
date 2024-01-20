/**
 * 按分隔符拆分字符串
 */
function splitWordsBySeparator(words: string[], separator: string): string[] {
  const result: string[] = []

  for (let w of words) {
    const arr = w.split(separator).map(i => i.replace(separator, ''))
    result.push(...arr)
  }

  return result
};

console.log(splitWordsBySeparator(["one.two.three", "four.five", "six"], '.'));
