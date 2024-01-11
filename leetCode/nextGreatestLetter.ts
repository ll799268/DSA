/**
 * 寻找比目标字母大的最小字母
 */
function nextGreatestLetter(letters: string[], target: string): string {
  for (const l of letters) {
    if (l > target) return l
  }
  return letters[0]
};
function nextGreatestLetter1(letters: string[], target: string): string {
  if (letters[letters.length - 1] <= target) return letters[0]
  let left: number = 0,
    right: number = letters.length - 1;

  while (left < right) {
    const mid: number = Math.floor(left + (right - left) / 2)
    if (letters[mid] > target) {
      right = mid
    } else {
      left = mid + 1
    }
  }

  return letters[left]
};