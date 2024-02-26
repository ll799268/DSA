/** 
 * 最后一个单词的长度
 */
function lengthOfLastWord(s: string): number {
  const trimS: string = s.trim()
  let num: number = 0

  for (let i = trimS.length - 1; i >= 0; i--) {
    if (trimS[i] === ' ') break
    num++
  }
  return num
}

function lengthOfLastWord1(s: string): number {
  const trimS: string[] = s.trim().split(' ')
  return trimS[trimS.length - 1].length
}