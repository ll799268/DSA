/** 
 * 回文字符串
 */

function isPalindrome(s: string): boolean {
  const code: string = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()

  for (let i = 0, j = code.length - 1; i < j; i++, j--) {
    if (code[i] !== code[j]) return false
  }

  return true
};

function isPalindrome1(s: string): boolean {
  const code: string = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()

  for (let i = 0; i < Math.floor(code.length / 2); i++) {
    if (code[i] !== code[code.length - 1 - i]) return false
  }

  return true
};
