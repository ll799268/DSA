/**
 * 字符串压缩
 * @param S 
 * @returns 
 */
function compressString(S: string): string {
  let s: string = ''
  let count: number = 1

  for (let i = 0; i < S.length; i++) {
    if (S[i] === S[i + 1]) {
      count++
      continue
    }
    s += S[i] + count
    count = 1
  }
  return S.length <= s.length ? S : s
};

function compressString1(S: string): string {
  let i = 0,
    j = 0,
    len = S.length

  let s = ''

  while (i < len) {
    while (j < len && S.charAt(i) === S.charAt(j)) {
      j++
    }
    s += S.charAt(i) + (j - i)
    i = j
  }

  return S.length <= s.length ? S : s
}

console.log(compressString1('aabcccccaa'));
