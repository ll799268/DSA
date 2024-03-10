/**
 * 括号生成
 * @param {number} n
 * @return {string[]}
 */
function generateParenthesis(n: number): string[] {
  const result: string[] = []

  const dfs = (l: number, r: number, str: string) => {
    if (n * 2 === str.length) {
      result.push(str)
      return
    }

    if (l) {
      dfs(l - 1, r, str + '(')
    }

    if (r > l) {
      dfs(l, r - 1, str + ')')
    }
  }

  dfs(n, n, '')

  return result
};

function generateParenthesis1(n: number): string[] {
  const result = []

  const dfs = (open: number, close: number, path: string) => {
    if (open > n || close > open) return

    if (path.length === 2 * n) {
      result.push(path)
      return
    }

    dfs(open + 1, close, path + '(')
    dfs(open, close + 1, path + ')')
  }

  dfs(0, 0, '')

  return result
}

/**
 * 生成完全二叉树-深度优先
 */
// depth first search
const dfs = (n: number, path = '', res = []) => {
  if (path.length == 2 * n) {
    res.push(path)
    return
  }

  dfs(n, path + '(', res)
  dfs(n, path + ')', res)

  return res
}