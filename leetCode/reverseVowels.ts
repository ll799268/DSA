/**
 * 反转字符串中的元音字母
 */
function reverseVowels(s: string): string {
  const isVowel = (c: string): boolean => ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'].includes(c)

  let i: number = 0,
    j: number = s.length - 1

  const arr: string[] = s.split('')

  while (i < j) {
    if (isVowel(arr[i]) && isVowel(arr[j])) {
      [arr[i], arr[j]] = [arr[j], arr[i]]
      i++
      j--
    } else if (!isVowel(arr[i])) {
      i++
    } else if (!isVowel[arr[j]]) {
      j--
    } else {
      i++
      j--
    }
  }

  return arr.join('')
};