/**
 * 电话号码的排列组合
 */
function letterCombinations(digits: string): string[] {
  if (digits === '') return []

  const map: Map<string, string[]> = new Map([
    ['2', ['a', 'b', 'c']],
    ['3', ['d', 'e', 'f']],
    ['4', ['g', 'h', 'i']],
    ['5', ['j', 'k', 'l']],
    ['6', ['m', 'n', 'o']],
    ['7', ['p', 'q', 'r', 's']],
    ['8', ['t', 'u', 'v']],
    ['9', ['w', 'x', 'y', 'z']]
  ])

  let result: string[] = []

  const leg: number = digits.length

  const dfs = (start: number, path: string) => {
    if (path.length === leg) {
      result.push(path)
      return
    }

    const arr: any = map.get(digits[start])

    for (let i = 0; i < arr.length; i++) {
      dfs(start + 1, path + arr[i])
    }
  }

  dfs(0, '')

  return result
};