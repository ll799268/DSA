/**
 * 字符串中的单词数
 */
function countSegments(s: string): number {
  return s.split(' ').filter(c => c).length
};
