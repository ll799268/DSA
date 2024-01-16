/**
 * 反转字符串中的单词III
 */
function reverseWords(s: string): string {
  const arr = s.split(' ')
  
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].split('').reverse().join('')
  }

  return arr.join(' ')
};

function reverseWords1(s: string): string {
  const arr = s.split(' ')
  
  for (let left = 0, right = arr.length - 1; left <= right; left++, right--) {
    const curryLeft = arr[left]
    const curryRight = arr[right]
    arr.splice(left, 1, curryLeft.split('').reverse().join(''))
    arr.splice(right, 1, curryRight.split('').reverse().join(''))
  }

  return arr.join(' ')
};

console.log(reverseWords(`I love u`));