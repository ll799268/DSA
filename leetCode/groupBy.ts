declare global {
  interface Array<T> {
    groupBy(fn: (item: T) => string): Record<string, T[]>
  }
}

/**
 * 分组
 */
Array.prototype.groupBy = function <T>(fn: (item: T) => string): Record<string, T[]> {
  const map: Record<string, T[]> = {}

  for (let i of this) {
    const r = fn(i)
    r in map ? map[r].push(i) : map[r] = [i]
  }

  return map
}

/**
* [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
*/
