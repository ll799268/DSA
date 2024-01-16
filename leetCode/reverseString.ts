/**
 * 反转字符串
 */
function reverseString(s: string[]): void {
  s = s.reverse()
};

function reverseString1(s: string[]): void {
  for (let left = 0, right = s.length - 1; left < right; left++, right--) {
    [s[left], s[right]] = [s[right], s[left]]
  }
};