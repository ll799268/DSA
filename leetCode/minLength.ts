
/**
 * 删除子串后的字符串最小长度
 */
function minLength(s: string): number {
  while (s.includes('AB') || s.includes('CD')) {
    s = s.replace('AB', '')
    s = s.replace('CD', '')
  }

  return s.length
};

console.log(minLength('ABFCACDB'));
