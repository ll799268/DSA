/**
 * 括号生成
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const result = []

  const dfs = (l, r, str) => {
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

var generateParenthesis2 = function (n) {
  const result = []

  const dfs = (open, close, path) => {
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
 * @param {number} n 深度
 * @param {string} path 
 * @param {array} res 
 * @returns 
 */
// depth first search
const dfs = (n, path = '', res = []) => {
  if (path.length == 2 * n) {
    res.push(path)
    return
  }

  dfs(n, path + '(', res)
  dfs(n, path + ')', res)

  return res
}