/**
 * 仅仅反转字母
 */
function reverseOnlyLetters(s: string): string {
  const arr: string[] = s.split('')
  let i: number = 0,
    j: number = arr.length - 1

  while (i < j) {
    if (!/[a-zA-Z]/.test(arr[i])) {
      i++
      continue
    }
    if (!/[a-zA-Z]/.test(arr[j])) {
      j--
      continue
    }
    [arr[i], arr[j]] = [arr[j], arr[i]]
    i++
    j--
  }

  return arr.join('')
};