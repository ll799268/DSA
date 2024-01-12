/**
 * 字母异位分组
 */
function groupAnagrams(strs: string[]): string[][] {
  const map: Map<string, string[]> = new Map()

  for (let i = 0; i < strs.length; i++) {
    const code: string = strs[i]
    const sortCode: string = strs[i].split('').sort().join('')
    map.has(sortCode) ? map.get(sortCode)!.push(code) : map.set(sortCode, [])
  }

  return [...map.values()]
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));