/**
 * 分发饼干
 */
function findContentChildren(g: number[], s: number[]): number {
  g.sort((a, b) => a - b)
  s.sort((a, b) => a - b)

  const childLeg: number = g.length,
    cookieLeg: number = s.length

  let curChild: number = childLeg - 1,
    curCookie: number = cookieLeg - 1,
    result: number = 0

  while (curChild >= 0 && curCookie >= 0) {
    if (g[curChild] <= s[curCookie]) {
      result++
      curChild--
      curCookie--
    } else {
      curChild--
    }
  }

  return result
};