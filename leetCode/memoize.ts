type Fn = (...params: number[]) => number

/**
 * 记忆函数
 */
function memoize(fn: Fn): Fn {
  const cache: Map<string, Fn | any> = new Map()

  return function (...args) {
    const key = JSON.stringify(args)

    if (cache.has(key)) {
      return cache.get(key)
    }

    const output = fn(...args)
    cache.set(key, output)

    return output
  }
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */