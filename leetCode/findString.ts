/**
 * 稀疏数组搜索
 */
function findString(words: string[], s: string): number {

  for (let i = 0, j = words.length; i < words.length, j > 0; i++, j--) {
    if (words[i] === s) return i;
    if (words[j] === s) return j;
  }

  return -1
};
function findString1(words: string[], s: string): number {
  return words.indexOf(s);
};

console.log(findString1(["at", "", "", "", "ball", "", "", "car", "", "", "dad", "", ""], 'ball'));

