/**
 * 字符串中的单词反转
 */
function reverseMessage(message: string): string {
  let arr: string[] = message.split(' ')
  arr = arr.filter(item => item)

  return arr.reverse().join(' ')
};

function reverseMessage1(message: string): string {
  let arr: string[] = message.split(' ')
  arr = arr.filter(item => item)

  for (let left = 0, right = arr.length - 1; left < right; left++, right--) {
    [arr[left], arr[right]] = [arr[right], arr[left]]
  }

  return arr.join(' ')
};

function reverseMessage2(s: string): string {
  const delExtraSpace = (arr: string[]): void => {
    let left: number = 0,
      right: number = 0,
      length: number = arr.length

    while (right < length && arr[right] === ' ') right++
    while (right < length) {
      if (arr[right] === ' ' && arr[right - 1] === ' ') {
        right++
        continue
      }
      arr[left++] = arr[right++]
    }
    if (arr[left - 1] === ' ') {
      arr.length = left - 1
    } else {
      arr.length = left
    }
  }

  // 翻转字符串，如：'hello' => 'olleh'
  const reverseWords = (strArr: string[], start: number, end: number): void => {
    while (start < end) {
      [strArr[start], strArr[end]] = [strArr[end], strArr[start]]
      start++
      end--
    }
  }

  const strArr: string[] = s.split('')
  delExtraSpace(strArr)

  // 翻转整个字符串
  const length: number = strArr.length
  reverseWords(strArr, 0, length - 1)

  let start: number = 0,
    end: number = 0
  while (start < length) {
    end = start
    while (strArr[end] !== ' ' && end < length) {
      end++
    }
    // 翻转单个单词
    reverseWords(strArr, start, end - 1)
    start = end + 1
  }
  return strArr.join('')
};