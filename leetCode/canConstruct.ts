
/**
 * 赎金信
 * @param ransomNote 
 * @param magazine 
 * @returns 
 */
function canConstruct(ransomNote: string, magazine: string): boolean {
  let n: number = ransomNote.length

  while (n--) {
    const cur: string = ransomNote[n]
    if (!magazine.includes(cur)) return false
    magazine = magazine.replace(cur, '')
    ransomNote = ransomNote.replace(cur, '')
  }

  return !ransomNote.length
};

function canConstruct1(ransomNote: string, magazine: string): boolean {
  const cnt: number[] = new Array(26).fill(0)

  for (let m of magazine) {
    cnt[m.charCodeAt(0) - 'a'.charCodeAt(0)]++
  }

  for (let r of ransomNote) {
    if (--cnt[r.charCodeAt(0) - 'a'.charCodeAt(0)] < 0) return false
  }

  return true
};

console.log(canConstruct('aa', 'aab'));
