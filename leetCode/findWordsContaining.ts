
/**
 * 查找包含给定字符的单词
 */
function findWordsContaining(words: string[], x: string): number[] {
  const result: number[] = []

  for (let i = 0; i < words.length; i++) {
    if (words[i].includes(x)) {
      result.push(i)
    }
  }

  return result
};