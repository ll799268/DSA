/**
 * 简化路径
 */
function simplifyPath(path: string): string {
  const arr: string[] = path.split('/')
  const stack: string[] = []

  for (let i of arr) {
    if (i === '..') {
      if (stack.length) stack.pop()
    } else if (i.length && i !== '.') {
      stack.push(i)
    }
  }

  return '/' + stack.join('/')
};
